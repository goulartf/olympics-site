<template>
  <div>
    <v-timeline-item
        :color="color"
        small
        v-for="(event, index) in events"
        :key="index"
    >
      <v-row class="pt-1">
        <v-col cols="3">
          <strong>{{ event.startHour }}</strong>
        </v-col>
        <v-col>
          <strong>{{ `${event.sport.name} - ${event.category.name}` }}</strong>
          <div class="text-caption">
            <p v-for="(participant, index) in event.participants" :key="index" class="mb-0">
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
  </div>
</template>

<script>
export default {
  name: 'AgendaEvent',
  props: {
    events: Array,
    color: String,
    showWatch: Boolean
  }
}
</script>

<style></style>