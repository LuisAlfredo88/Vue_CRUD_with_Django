<template>    
    <v-data-table
        :headers="headers"
        :items="data"
        :options.sync="grid"
        :loading="loading"
        :items-per-page-options="grid.rowsPerPageItems"
        :server-items-length="total_rows"
        :multi-sort="true"  
        @click:row="rowClick"
    >
        <template v-slot:expanded-item="{ headers }">
            <td :colspan="headers.length">Peek-a-boo!</td>
        </template>    
        <template v-slot:item.actions="{ item }">
            <span class="actions" v-on:click="()=>{editRow(item)}">
                <i class="mdi mdi-pencil action"></i>
            </span>
        </template>

    </v-data-table>
</template>

<script>
    export default {
        name: 'MaterialDataTable',

        data () {
            return {
                grid: {
                    search: '',
                    page: 1,
                    descending: true,
                    rowsPerPage: 10,
                    rowsPerPageItems: [1, 2, 4, 8, 16]
                }
            }
        },

        methods: {
            rowClick (row) {
                this.$emit('onClick', row);
            },

            editRow (row) {
                this.$emit('onEdit', row);
            },

            deleteRow (row) {
                this.$emit('onDelete', row);
            }
        },

        created () {
            this.grid = this.pagination;
        },

        watch: {
            grid: {
                handler () {
                    this.$emit('onChange', this.grid);
                },
                deep: true
            }
        },

        props: {
            data: {
                type: Array,
                default: () => ([])
            },

            headers: {
                type: Array,
                default: () => ([])
            },

            pagination: {
                type: Object
            },

            search_text: {
                type: Object
            },

            total_rows: {
                type: Number
            },

            loading: {
                type: Boolean,
                default: () => (false)
            }
        }
    }
</script>

<style>
    span.actions{
        padding: 7px;
        background: #dde4ea;
        margin: 2px;
        border: 1px solid #cecece;
    }

    span.actions i{
        font-size: 20px;
        cursor: pointer;
    }

    .grid-search-container{
        position: relative;
        height: 60px;
        max-width: 600px;
    }
</style>