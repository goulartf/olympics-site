<template>
  <div>
    <v-timeline
        align-top
        dense
    >
      <v-timeline-item
          color="grey"
          icon-color="grey lighten-2"
          small
          v-for="(event, index) in events"
          :key="index"
      >
        <v-row class="pt-1">
          <v-col cols="12" md="3">
            <strong>{{ 'match' in event ? event.match.startHour : event.startHour }}</strong>
          </v-col>
          <v-col>
            <p class="mb-1">
              <strong>{{ `${event.sport.name} - ${event.category.name}` }}</strong>
              <br/>
              <strong v-if="event.modality">{{ `${event.modality.name}` }}</strong>
              <br/>
              <strong>{{ `${event.stage}` }}</strong>
            </p>
            <div class="text-caption">
              <div v-for="(participant, index) in event.participants" :key="index" class="mb-0">
                <div v-if="participant.flag" class="d-flex justify-center align-center">
                  <img :src="participant.flag.svg.url"
                       width="20"
                       height="20"
                       :alt="participant.name"
                       :title="participant.name"/>
                  <p class="ml-1 mb-0 text-uppercase">
                    {{ participant.code }}
                  </p>
                </div>
                <div v-if="participant.represents" class="d-flex justify-center align-center">
                  <img :src="participant.represents.flag.svg.url"
                       width="20"
                       height="20"
                       :alt="participant.represents.name"
                       :title="participant.represents.name"/>
                  <p class="ml-1 mb-0 text-uppercase">
                    {{ participant.popularName }}
                  </p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3" v-if="isTypeNow">
            <div class="mb-5">
              <a href="https://futebolplayhd.com/assistir-sportv-ao-vivo-hd-24-horas-online-gratis/"
                 target="_blank">
                <strong>Assistir 1</strong>
              </a>
            </div>
            <div class="">
              <a href="https://assistironlinehd.org/tv/"
                 target="_blank">
                <strong>Assistir 2</strong>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>


  </div>
</template>

<script>
export default {
  name: 'AgendaEvent',
  props: {
    events: Array,
    type: String,
    height: Number
  },
  computed: {
    isTypeNow() {
      return this.type === 'now';
    },
  }
}
</script>

<style>
.v-expansion-panel-content__wrap {
  padding-left: 0 !important;
}
</style>