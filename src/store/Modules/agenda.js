import api from '../../api/api';

const state = {
    events: [],
    brazilEvents: [],
    loading: false
}

const getters = {
    allBrazilEvents: state => state.brazilEvents,
    allEvents: state => state.events,
    isLoading: state => state.loading
}

const mutations = {
    setBrazilEvents: (state, events) => state.brazilEvents = events,
    setEvents: (state, events) => state.events = events,
    setLoadingEvents: (state, loading) => state.loading = loading
}

const actions = {
    async fetchEvents({commit}, date) {
        commit('setLoadingEvents', true);
        const response = await api.fetchAgenda(date);
        const {brazilOlympicAgenda, olympicAgenda} = response.data.data;

        const events = {
            future: [],
            now: [],
            past: []
        };

        olympicAgenda.map((eventsBySport) => {
            events.future = [...events.future, ...eventsBySport.future];
            events.now = [...events.now, ...eventsBySport.now];
            events.past = [...events.past, ...eventsBySport.past];
        });

        events.now = events.now.filter((a) => a).sort(customSort);
        events.future = events.future.filter((a) => a).sort(customSort);
        events.past = events.past.filter((a) => a).sort(customSort);

        commit('setBrazilEvents', brazilOlympicAgenda);
        commit('setEvents', events);
        commit('setLoadingEvents', false);
    },
}

const customSort = (a, b) => {
    const startDateA = 'match' in a ? a.match.startDate : a.startDate;
    const startHourA = 'match' in a ? a.match.startHour : a.startHour;
    const startDateB = 'match' in b ? b.match.startDate : b.startDate;
    const startHourB = 'match' in b ? b.match.startHour : b.startHour;

    const dateA = new Date(`${startDateA} ${startHourA}`);
    const dateB = new Date(`${startDateB} ${startHourB}`);

    // return dateA - dateB;
    if (dateA < dateB) return -1;
    else if (dateA > dateB) return 1;
    else return 0;
};

export default {
    state,
    getters,
    actions,
    mutations
}