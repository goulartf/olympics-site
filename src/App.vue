<template>
  <v-app>
    <v-main>
      <v-app-bar app class="text-center">
        <h1 class="text-center" style="width: 100%">Tóquio 2020</h1>
      </v-app-bar>
      <v-container :fluid="true">
        <v-row>
          <v-col sm="4" md="4">
            <Agenda :height="setDynamicHeight"/>
          </v-col>
          <v-col sm="4" md="4">
            <h1>Quadro Medalhas</h1>
            <h1></h1>
            <div class="overflow-y-auto" :style="{height: setDynamicHeight+'px'}">
              <div v-if="isLoading">
                <v-skeleton-loader
                    v-for="index in [1,2,3,4,5,7,8,9,10]"
                    :key="index"
                    class="my-5"
                    type="table-heading: heading, text"
                ></v-skeleton-loader>
              </div>
              <v-simple-table v-else>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-center">
                      #
                    </th>
                    <th class="text-left">
                      País
                    </th>
                    <th class="text-center">
                      Ouro
                    </th>
                    <th class="text-center">
                      Prata
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
                  <tr>
                    <td>{{ getMedalTable.first.ranking }}</td>
                    <td class="text-left">
                      <img :src="getMedalTable.first.country.flag.svg.url" width="20" height="20"/>
                      {{ getMedalTable.first.country.name }}
                    </td>
                    <td>{{ getMedalTable.first.gold }}</td>
                    <td>{{ getMedalTable.first.silver }}</td>
                    <td>{{ getMedalTable.first.bronze }}</td>
                    <td>{{ getMedalTable.first.total }}</td>
                  </tr>
                  <tr
                      v-for="(rank,index) in getMedalTable.data"
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
            </div>
          </v-col>
          <v-col sm="4" md="4">
            <h1>Últimas Notícias</h1>
            <h1></h1>
            <div class="overflow-y-auto" :style="{height: setDynamicHeight+'px'}">
              <div v-if="isLoading">
                <v-skeleton-loader
                    v-for="index in [1,2,3,4,5,7,8,9,10]"
                    :key="index"
                    class="my-5"
                    type="card"
                ></v-skeleton-loader>
              </div>
              <a v-else v-for="item in items" :key="item.id" :href="item.content.url" target="_blank">
                <v-card>
                  <v-img
                      v-if="item.content.image.sizes"
                      height="250"
                      :src="item.content.image.sizes.L.url"
                  ></v-img>
                  <v-card-title class="mb-5">{{ item.content.title }}</v-card-title>
                </v-card>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Agenda from "@/components/Agenda";
import api from "@/api/api";

export default {
  name: 'App',
  components: {Agenda},
  data() {
    return {items: [], medalTable: {first: {}, data: []}, loading: true, height: 300}
  },
  async mounted() {
    this.loading = true;
    const responseNews = await api.fetchNews();
    const responseMedal = await api.fetchMedalTable();
    this.items = responseNews.data.items;
    this.medalTable.data = responseMedal.data.data.medalTable;

    this.loading = false;
  },
  computed: {
    getMedalTable() {
      const medalTable = this.medalTable;
      medalTable.first = medalTable.data.find(rank => rank.country.code === 'BRA');
      medalTable.data = medalTable.data.filter(rank => rank.country.code !== 'BRA');

      return medalTable;
    },
    isLoading() {
      return this.loading;
    },
    setDynamicHeight() {
      let offset = 138;

      if (window.innerWidth <= 768) {
        offset = 200;
      }

      return (window.innerHeight - offset);
    }
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
}
</style>
