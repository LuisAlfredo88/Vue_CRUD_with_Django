import * as common from '@/store/modules/common/module'
import * as auth from './module';

const state = {
   ...auth.state,
};

const getters = {
   ...auth.getters,
};

const actions = {
   ...auth.actions,
};

const mutations = {
   ...auth.mutations,
   ...common.mutations
};

export default {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
};