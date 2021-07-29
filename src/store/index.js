import Vuex from 'vuex';
import Vue from 'vue';
import agenda from "@/store/Modules/agenda";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        agenda
    }
});