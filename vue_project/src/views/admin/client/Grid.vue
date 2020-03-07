<template>
    <v-container fluid>
        <tool-box :buttons="buttons" />
        <router-view> </router-view>
        <v-row justify="center" >
            <v-col>
                <grid-card
                    color="blue"
                    icon="mdi-security"
                    :title="$t('clients')"
                >        
                    <div class="grid-search-container">
                        <v-text-field
                            v-model="records_config.filter.search_text"
                            class = "grid-search"
                            prepend-icon="mdi mdi-filter-outline"
                            :label="$t('filter_by_name')"
                            single-line
                            hide-details
                            clearable
                        ></v-text-field>
                    </div>

                    <material-data-table
                        :headers="default_grid_headers"
                        :data="all_records"
                        @onChange="getRecords"
                        :loading="loading"
                        :pagination="records_config.pagination"
                        :total_rows="records_config.total_rows"
                    >
                        <template v-slot:actions="item">
                            <span class="actions" v-on:click="()=>{ editRecord(item)}">
                                <i class="mdi mdi-pencil action"></i>
                            </span>
                        </template>
                    </material-data-table>

                </grid-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    import FormUtils from '@/mixins/form_utils'
    import FormMixin from './index'

    const AUTH_MODULE = 'client';

    export default {
        mixins: [FormUtils, FormMixin],

        created () {
            //Loading record on edit
            var record_id = this.$route.params['id'] || null;
            if(record_id) this.get(record_id);

            this.buttons = [
                {name: 'NEW', onClick: this.addNewRecord, roles: ['add_department']}
            ];
        },

        computed: {
            ...mapState(AUTH_MODULE, ['records_config']),

            default_grid_headers () {
                return this.records_config.grid_headers.map((e)=>{
                    e.text = this.$t(e.text);
                    return e
                });
            },

            all_records () {
                return this.records_config.records.map((e)=>{
                    e.is_active_description =  this.getIsActiveDescription(e.is_active);
                    return e;
                })
            }
        },

        
    }
</script>