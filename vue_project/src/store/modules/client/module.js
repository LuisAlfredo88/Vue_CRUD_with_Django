import INITIAL_STATE from './initial_state'
import API from './api'

export const state = {
    form: Object.clone(INITIAL_STATE.form),

    records_config: {
        grid_headers: INITIAL_STATE.grid_headers,
        records: [],
        total_rows: 0,
        pagination: {
            sortBy: ['date'],
            sortDesc: [true],
            page: 1,
            itemsPerPage: 10,
            mustSort: false,
            multiSort: true,
        },
        filter: {
            search_text: ''
        }
    }

};

export const getters = {

};

export const mutations = {
    clearForm (state) {
        state.form = Object.clone(INITIAL_STATE.form);
    },
};

export const actions = {
    async getAll ({commit, state}, pagination_data) {
        var pagination = Object.clone(pagination_data || state.pagination);
        pagination.filter = state.records_config.filter;

        //Cleaning records_set
        commit('cleanRecords');
        commit('setPagination', pagination);

        const response = await API.getAll(pagination).catch((e)=>{ return Promise.reject(e) });
        commit('setRecords', response);

        return Promise.resolve(response);
    },

    async get ({commit}, id) {
        //Getting department record
        const response = await API.get(id).catch((e)=>{ return Promise.reject(e) });

        if(response){
            commit('loadEntity', response);
            return Promise.resolve(response);
        }
    },

    async save ({ state }) {
        var record = Object.clone(state.form);
        record.photo_url = 'photo'; //TODO get image from component
        //Saving record
        const response = await API.save(record).catch((e)=>{ return Promise.reject(e) });
        if(response) return Promise.resolve(response);
    },

    async delete ({ dispatch }, record_id) {
        //Deleting record
        const response = await API.delete(record_id).catch((e)=>{ return Promise.reject(e) });
        if(response) {
            dispatch('getAll');
            return Promise.resolve(response);
        }
    },

};
