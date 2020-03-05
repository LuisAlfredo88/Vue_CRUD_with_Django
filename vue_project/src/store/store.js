import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import system from './modules/system'
import client from './modules/client'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		
    },
    
	modules: {
		auth,
		system,
        client
    },
    
	mutations: {
		initialiseStore(state) {
			//This implementation is just 
		},
		
		changeStateValue(state, property_data) {
			state[property_data.module][property_data.property_name] = property_data.value;
		}
    },
    
	getters: {

    },
    
	actions: {
		chageFormElementValue (context, element) {
			context.commit(element.method, element.value);
		},

		showMessage ({commit}, message_object) {
			commit('system/setMessage', message_object)
		},

		showDialog ({commit}, message_object) {
			commit('system/setDialogMessage', message_object)
		},

		showConfirm ({commit}, message_object) {
			commit('system/setConfirm', message_object)
		},
	}
})
