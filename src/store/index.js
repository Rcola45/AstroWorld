import { createStore } from 'vuex';
import AstronautService from "@/services/AstronautService";

export default createStore({
  state: {
    astronauts: []
  },
  mutations: {
    SET_ASTRONAUTS(state, astronauts) {
      state.astronauts = astronauts
    }
  },
  actions: {
    // createEvent({ commit }, event) {
    //
    // },
    fetchAstronauts({ commit, state }) {
      if (state.astronauts.length === 0) {
        AstronautService.getAstronauts()
          .then(response => {
            commit('SET_ASTRONAUTS', response.data["people"])
          })
          .catch(error => {
            console.error("API ERROR: " + error);
          })
      }
    },
    // fetchEvent({ commit, state }, id) {
    //
    // }
  },
  modules: {}
})
