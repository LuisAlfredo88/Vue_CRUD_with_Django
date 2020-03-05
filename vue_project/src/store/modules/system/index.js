import * as common from './module';

const state = {
   ...common.state,
};

const getters = {
   ...common.getters,
};

const actions = {
   ...common.actions,
};

const mutations = {
   ...common.mutations,
};

export default {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
};