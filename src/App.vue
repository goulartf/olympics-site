<template>
  <v-app>
    <v-main>
      <v-container :fluid="true">
        <v-row>
          <v-col md="3">
            <h1>Brasil Agenda</h1>
            <h1>Hoje ({{ `${date.getDate()}-${(date.getMonth() + 1)}` }}) <a href="#" @click="handleClick">Proximo</a> </h1>
            <v-timeline
                align-top
                dense
            >
              <v-timeline-item
                  color="blue"
                  small
                  v-for="(event, index) in agenda.future"
                  :key="index"
              >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>{{ event.startHour }}</strong>
                  </v-col>
                  <v-col>
                    <strong>{{ `${event.sport.name} - ${event.category.name}` }}</strong>
                    <div class="text-caption">
                      <p v-for="(participant, index) in event.participants" :key="index">
                        {{ participant.popularName }}
                      </p>
                    </div>
                    <div class="text-caption">
                      <a href="https://futebolplayhd.com/assistir-sportv-ao-vivo-hd-24-horas-online-gratis/"
                         target="_blank">Assistir</a>
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                  color="green"
                  small
                  v-for="(event, index) in agenda.now"
                  :key="index"
              >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>{{ event.startHour }}</strong>
                  </v-col>
                  <v-col>
                    <strong>{{ `${event.sport.name} - ${event.category.name}` }}</strong>
                    <div class="text-caption">
                      <p v-for="(participant, index) in event.participants" :key="index">
                        {{ participant.popularName }}
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                  color="gray"
                  small
                  v-for="(event, index) in agenda.past"
                  :key="index"
              >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>{{ event.startHour }}</strong>
                  </v-col>
                  <v-col>
                    <strong>{{ `${event.sport.name} - ${event.category.name}` }}</strong>
                    <div class="text-caption">
                      <p v-for="(participant, index) in event.participants" :key="index">
                        {{ participant.popularName }}
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>

            </v-timeline>
          </v-col>
          <v-col md="4">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-center">
                    #
                  </th>
                  <th class="text-left">
                    Country
                  </th>
                  <th class="text-center">
                    Gold
                  </th>
                  <th class="text-center">
                    Silver
                  </th>
                  <th class="text-center">
                    Bronze
                  </th>
                  <th class="text-center">
                    Total
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(rank,index) in medalTable"
                    :key="index"
                >
                  <td>{{ rank.ranking }}</td>
                  <td class="text-left">
                    <img :src="rank.country.flag.svg.url" width="20" height="20"/>
                    {{ rank.country.name }}
                  </td>
                  <td>{{ rank.gold }}</td>
                  <td>{{ rank.silver }}</td>
                  <td>{{ rank.bronze }}</td>
                  <td>{{ rank.total }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col md="4">
            <a v-for="item in items" :key="item.id" :href="item.content.url" target="_blank">
              <v-card>
                <v-img
                    v-if="item.content.image.sizes"
                    height="250"
                    :src="item.content.image.sizes.L.url"
                ></v-img>
                <v-card-title class="mb-5">{{ item.content.title }}</v-card-title>
              </v-card>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {},
  data() {
    return {items: [], medalTable: {}, agenda: {}, date: new Date()}
  },
  async mounted() {
    const response = await axios.get('https://falkor-cda.bastian.globo.com/tenants/ge/instances/bc4d10b9-ed92-49c4-accb-ca14e4a1dd3e/posts/page/1')
    const responseAgenda = await axios.get(`https://goulartf.com/api/test.php?date=${this.date.getDate()}-${this.date.getMonth() + 1}`)
    const responseMedal = await axios.get('https://goulartf.com/api/testmedalTable.php')
    this.items = response.data.items;
    this.medalTable = responseMedal.data.data.medalTable;
    this.agenda = responseAgenda.data.data.brazilOlympicAgenda;

    this.agenda.past.reverse();
    this.agenda.now.reverse();
  },
  methods: {
    async handleClick() {
      this.date.setDate(this.date.getDate() + 1);
      const responseAgenda = await axios.get(`https://goulartf.com/api/test.php?date=${this.date.getDate()}-${this.date.getMonth() + 1}`)

      this.agenda = responseAgenda.data.data.brazilOlympicAgenda;

      this.agenda.past.reverse();
      this.agenda.now.reverse();
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
