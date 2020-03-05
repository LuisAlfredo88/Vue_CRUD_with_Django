
export const mutations = {
    loadEntity (state, entity) {
        state.form = entity;
    },

    setRecords (state, records) {
        var items_per_page = state.records_config.itemsPerPage;
        var total_rows = Math.floor(records.count / items_per_page);

        state.records_config.records = records.results;
        state.records_config.total_rows = records.count;
    },

    setPagination (state, pagination) {
        state.records_config.pagination = pagination;
    },

    cleanRecords (state) {
        state.records_config.records = [];
    }
    
};
