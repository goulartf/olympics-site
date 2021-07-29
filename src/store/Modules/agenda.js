import api from '../../api/api';

const state = {
    events: [],
    loading: false
}

const getters = {
    allEvents: state => state.events,
    isLoading: state => state.loading
}

const mutations = {
    setEvents: (state, events) => state.events = events,
    setLoadingEvents: (state, loading) => state.loading = loading
}

const actions = {
    async fetchEvents({commit}, date) {
        commit('setLoadingEvents', true);
        const response = await api.fetchAgenda(date);
        commit('setEvents', response.data.data.brazilOlympicAgenda);
        commit('setLoadingEvents', false);
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}