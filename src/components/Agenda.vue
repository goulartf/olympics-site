<template>
  <div>

    <h2 class="mb-5">
      <v-btn
          class="mr-3"
          @click="handleClick(-1)"
      >
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      Dia ({{ `${date.getDate()}-${(date.getMonth() + 1)}` }})
      <v-btn
          class="ml-3"
          @click="handleClick(1)"
      >
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </h2>
    <h3>Horário de Brasilia</h3>
    <v-tabs
        v-model="tab"
        align-with-title
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab key="tab-all">
        Todos
      </v-tab>

      <v-tab key="tab-brasil">
        Brasil
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item key="tab-all">
        <v-card flat>
          <v-card-text>
            <div v-if="isLoading">
              <v-skeleton-loader
                  v-for="index in [1,2,3,4,5]"
                  :key="index"
                  class="my-5"
                  type="list-item-avatar, divider"
              ></v-skeleton-loader>
            </div>

            <v-timeline
                v-else
                align-top
                dense
            >
              <AgendaEvent color="green" :events="allEvents.now" :showWatch="true"/>
              <AgendaEvent color="blue" :events="allEvents.future"/>
              <v-divider/>
              <h4>Eventos Passados</h4>
              <v-divider/>
              <AgendaEvent color="gray" :events="allEvents.past"/>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="tab-brasil">
        <v-card flat>
          <v-card-text>
            <div v-if="isLoading">
              <v-skeleton-loader
                  v-for="index in [1,2,3,4,5]"
                  :key="index"
                  class="my-5"
                  type="list-item-avatar, divider"
              ></v-skeleton-loader>
            </div>

            <v-timeline
                v-else
                align-top
                dense
            >
              <AgendaEvent color="green" :events="allBrazilEvents.now" :showWatch="true"/>
              <AgendaEvent color="blue" :events="allBrazilEvents.future"/>
              <v-divider/>
              <h4>Eventos Passados</h4>
              <v-divider/>
              <AgendaEvent color="gray" :events="allBrazilEvents.past"/>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
import AgendaEvent from "@/components/AgendaEvent";

export default {
  name: 'Agenda',
  components: {AgendaEvent},
  data() {
    return {date: new Date(), tab: null}
  },
  async mounted() {
    await this.fetchEvents(this.date);
  },
  computed: mapGetters(['allEvents', 'allBrazilEvents', 'isLoading']),
  methods: {
    ...mapActions(['fetchEvents']),
    async handleClick(cursor) {
      this.date.setDate(this.date.getDate() + cursor);
      await this.fetchEvents(this.date);
    },
  }
}
</script>
<style></style>