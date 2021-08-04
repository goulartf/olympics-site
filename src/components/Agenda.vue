<template>
  <div>

    <h2 class="mb-5">
      <v-btn
          class="mr-1"
          elevation="2"
          small
          fab
          @click="handleClick(-1)"
      >
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      Dia {{ `${date.getDate()}-${(date.getMonth() + 1)}` }}
      <v-btn
          class="ml-1"
          elevation="2"
          small
          fab
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
      <div class="overflow-y-auto" :style="{...setDynamicHeight}">
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

              <div v-else>
                <v-expansion-panels>
                  <v-expansion-panel
                      v-for="(events,type,i) in {now: allEvents.now, future: allEvents.future, past: allEvents.past}"
                      :key="i"
                  >
                    <v-expansion-panel-header
                        v-if="events.length > 0"
                        :color="getEventsInformation(type).color"
                        :class="getEventsInformation(type).styleClass">
                      <strong>{{ getEventsInformation(type).title + ` - (${events.length})` }}</strong>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <AgendaEvent color="green"
                                   :type="type"
                                   :height="setDynamicHeight"
                                   :events="events"/>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

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

              <div v-else>
                <v-expansion-panels>
                  <v-expansion-panel
                      v-for="(events,type,i) in {now: allBrazilEvents.now, future: allBrazilEvents.future, past: allBrazilEvents.past}"
                      :key="i"
                  >
                    <v-expansion-panel-header
                        v-if="events.length > 0"
                        :color="getEventsInformation(type).color"
                        :class="getEventsInformation(type).styleClass">
                      <strong>{{ getEventsInformation(type).title + ` - (${events.length})` }}</strong>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <AgendaEvent color="green"
                                   :type="type"
                                   :height="setDynamicHeight"
                                   :events="events"/>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

            </v-card-text>
          </v-card>
        </v-tab-item>
      </div>
    </v-tabs-items>

  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
import AgendaEvent from "@/components/AgendaEvent";

export default {
  name: 'Agenda',
  components: {AgendaEvent},
  props: {
    height: Number
  },
  data() {
    return {date: new Date(), tab: null}
  },
  async mounted() {
    await this.fetchEvents(this.date);
  },
  computed: {
    ...mapGetters(['allEvents', 'allBrazilEvents', 'isLoading']),
    setDynamicHeight() {
      if (window.innerWidth <= 768) {
        return {minHeight: '176px'};
      }

      return {height: (this.height - 98)+'px'};
    }
  },
  methods: {
    ...mapActions(['fetchEvents']),
    async handleClick(cursor) {
      this.date.setDate(this.date.getDate() + cursor);
      await this.fetchEvents(this.date);
    },
    getEventsInformation: (type) => {
      let title = '';
      let color = '';
      let styleClass = '';

      switch (type) {
        case 'now':
          title = 'Agora';
          color = 'green';
          styleClass = 'white--text';
          break;
        case 'past':
          title = 'Eventos já realizados';
          break;
        case 'future':
          title = 'Próximos eventos';
          break;
      }

      return {title, styleClass, color};
    }
  }
}
</script>
<style></style>