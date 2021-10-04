import auth from './auth';
import meetings from './meetings';
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    //namespaced: true,
    modules: {
      auth,
      meetings,
    }
  });
};

export default createStore