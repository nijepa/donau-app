//const URL = process.env.VUE_APP_BACKEND_URL;
import getData from '~/firebase/firestoreRead'

const state = {
  meeting: {},
  meetings: [],
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getMeetings: (state) => state.meetings,
  getMeeting: (state) => state.meeting,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  SET_MEETINGS: (state, meetings) => (state.meetings = meetings),

  SET_MEETING: (state, meeting) => (state.meeting = meeting),

  CLEAR_MEETING(state) {state.meeting = {}},

  ADD_MEETING(state, data) {
    state.meetings = [data, ...state.meetings];
  },

  UPDATE_MEETING(state, data) {
    state.meetings = [
      ...state.meetings.map((item) =>
        item._id !== data._id
          ? item
          : {
              ...item,
              ...data,
            }
      ),
    ];
  },

  DELETE_MEETING(state, id) {
    state.meetings = [
      ...state.meetings.filter((item) => item._id !== id),
    ];
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async fetchMeetings({ commit }, opts) {
    const response = await getData.getFirestoreCol(opts)
    //const response = await axios.get(URL + 'attendances');
    commit('SET_MEETINGS', response);
  },

  async fetchhMeeting({ commit }, data) {
    /*const response = await axios.get(
      URL + 'attendances/' + data._id,
      data
    );*/
    commit('SET_MEETING', response.data);
  },

  async addMeeting({ commit }, data) {
    await axios
      .post(URL + 'attendances', attendanceData)
      .then((response) => {
        commit('addAttendance', response.data.attendance);
      })
      .catch((error) => {
        if (error.response) {
          commit('setErrors', error.response.data.error);
        } else {
          commit('setErrors', error);
        }
      });
  },

  async updateMeeting({ commit }, attendanceData) {
    await axios
      .put(URL + 'attendances/' + attendanceData._id, attendanceData)
      .then((response) => {
        commit('updateAttendance', response.data);
      })
      .catch((error) => {
        if (error.response) {
          commit('setErrors', error.response.data.error);
        } else {
          commit('setErrors', error);
        }
      });
  },

  async deleteMeeting({ commit }, attendanceData) {
    await axios
      .delete(URL + 'attendances/' + attendanceData._id, attendanceData)
      .then((response) => {
        commit('deleteAttendance', response.data._id);
      })
      .catch((error) => {
        if (error.response) {
          commit('setErrors', error.response.data.error);
        } else {
          commit('setErrors', error);
        }
      });
  },

  async clearMeating({ commit }) {
    commit('clearAttendance');
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};