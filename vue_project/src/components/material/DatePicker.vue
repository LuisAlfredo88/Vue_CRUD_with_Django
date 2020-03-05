<template>
    <div class="date-picker-wrapper">
        <v-menu
            ref="startMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="start"
            transition="scale-transition"
            required
            min-width="290px"
            offset-y
        >
        <template v-slot:activator="{ on }">
            <v-text-field
                :label="label"
                readonly
                required
                v-on="on"
                placeholder="YYYY-MM-DD"
                clearable
                :value="value | format_date"
                v-bind="$attrs"                
            ></v-text-field>
        </template>
        <v-date-picker
            v-bind="$attrs"
            no-title
            scrollable
            @change="onChange"
            >
            <v-spacer></v-spacer>
            <v-btn
                text
                color="primary"
                @click="$refs.startMenu.save(start)"
            >
                OK
            </v-btn>
        </v-date-picker>
        </v-menu>        
    </div>
</template>

<script>

    import {mapState, mapActions, mapGetters} from 'vuex'
    import helpers from '@/helpers'

    const PAYMENT_MODULE = 'payment';
    const CLIENT_PRODUCTS_MODULE = 'client_products'; 
    const CLIENT_MODULE = 'client';   
    const ACCOUNT_MODULE = 'accounts';   

    export default {
        name: 'DatePicker',
        components: {
            
        },

        props: {
            value: String,
            label: String
        },

        created () {
            this.current_date = this.date;
        },

        methods: {
            onChange (date) {
                this.$emit('input', date);
            }
        },

        data () {
            return {
                start: '',
                current_date: ''
            }
        }
    }
</script>

<style>
    .date-picker-wrapper{
        width: 100%;
    }
</style>