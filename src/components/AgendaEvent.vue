<template>
  <div>
    <v-expansion-panels
        :value="Number(openPanel)"
        accordion
        v-if="events.length > 0"
        class="mb-5">
      <v-expansion-panel
          :key="new Date().getTime()"
      >
        <v-expansion-panel-header>{{ `${title} - (${events.length})` }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-timeline
              align-top
              dense
          >
            <v-timeline-item
                :color="color"
                small
                v-for="(event, index) in events"
                :key="index"
            >
              <v-row class="pt-1">
                <v-col cols="3">
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
                    <p v-for="(participant, index) in event.participants" :key="index" class="mb-0">
                      <img v-if="participant.flag" :src="participant.flag.svg.url" width="20" height="20"
                           :alt="participant.name"
                           :title="participant.name"/>
                      <img v-if="participant.represents" :src="participant.represents.flag.svg.url" width="20"
                           height="20"
                           :alt="participant.represents.name"
                           :title="participant.represents.name"/>
                      {{ participant.popularName }}
                    </p>
                  </div>
                  <div class="text-caption" v-if="showWatch">
                    <a href="https://futebolplayhd.com/assistir-sportv-ao-vivo-hd-24-horas-online-gratis/"
                       target="_blank">Assistir</a>
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
export default {
  name: 'AgendaEvent',
  props: {
    events: Array,
    color: String,
    showWatch: Boolean,
    title: String,
    openPanel: Boolean
  },
}
</script>

<style></style>