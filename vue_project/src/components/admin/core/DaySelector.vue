<template>
    <v-row>
        <v-col cols="12" sm="6">
            <v-combobox
                v-model="filter.type"
                :items="day_filter_types"
                :label="$t('day_payment_filter')"
                @change="onFilterTypeChange"
                item-text="value"
                item-value="key"
            ></v-combobox>
        </v-col>
        
        <v-col cols="12" sm="6">
            <v-autocomplete
                v-if="filter.type.key == 'day'"
                v-model="filter.days_range"
                :items="month_days"
                :label="$t('choose_days')"
                @change="onChange"
                multiple
            ></v-autocomplete>

            <v-autocomplete
                v-if="filter.type.key == 'week'"
                v-model="filter.week_selection"
                :items="week_range"
                :label="$t('choose_week_range')"
                @change="onChange"
                return-object                    
            ></v-autocomplete>            
        </v-col>                        
    </v-row>
</template>

<script>
    import helpers from '@/helpers'
    import {mapGetters} from  'vuex'
    import moment from 'moment'

    const SYSTEM_MODULE_NAME = 'system';
    
    export default {
        data: () => ({
            day_filter_types: [],
            week_range: [],
            filter: {
                type: {},
                days_range: [],
                week_selection: []
            }
        }),
        
        mounted () {
            this.week_range = this.getWeekRange();
            this.day_filter_types = [
                {key: null, value: this.$t('none')},
                {key: 'day', value: this.$t('day')},
                {key: 'week', value: this.$t('week')},
            ];

            this.filter.type = this.day_filter_types[0];
        },

        computed: { 
            month_days () {
                let day_list = [];
                for(var i = 1; i <= 30; i++) day_list.push(i);
                return day_list;
            },
        },

        methods: {
            getWeekRange () {
                var weeks = [];
                const current_day = moment().date();
                var moment_object = moment();                
                const current_month = moment_object.format('MM');

                moment_object.set("date", 1);
                var next_monday = moment_object.startOf('isoWeek').add(1, 'week');
                var first_monday_day = next_monday.date();
                
                if(first_monday_day > 1){
                    weeks.push([1, first_monday_day - 1]);
                }

                while(current_month == next_monday.format('MM')) {
                    weeks.push([
                        next_monday.date(),
                        next_monday.date() + 6
                    ]);

                    var next_monday = moment_object.startOf('isoWeek').add(1, 'week');                    
                }

                weeks[weeks.length -1][1] = moment_object.set("date", 1).add(-1, 'day').date();
                return weeks.map((e)=>{
                    return {
                        text: this.$t(current_day >= e[0] && current_day <= e[1] ? 'current_week_range' : 'current_week_from_to', {from: e[0], to: e[1] }),
                        range: [e[0], e[1]]
                    }
                });

                return weeks;
            },

            onChange () {
                this.$emit('onChange', this.filter);
            },

            onFilterTypeChange () {
                this.filter.days_range = [];
                this.filter.week_selection = [];
                if(!this.filter.type.key){
                    this.onChange();
                }
            }
        }
    }
</script>
