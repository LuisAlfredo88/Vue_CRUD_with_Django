<template>
    <v-app>
        <v-snackbar
            v-model="show_message"
            :color="message_type"        
            :multi-line="true"
            :timeout="6000"
            :top="true"
            icon="mdi-firework"            
        >
            {{ $t(message) }}
            <v-btn
                dark
                text
                v-on:click="show_message = false"
            >
                <i aria-hidden="true" class="v-icon notranslate mdi  mdi-close-circle theme--dark" ></i>
            </v-btn>
        </v-snackbar>        
        <router-view> </router-view>
    </v-app>
</template>

<script>
    import helpers from '@/helpers'

    export default {
        name: 'admin-layout',

        data () {
            return {
                responsive: false,
                notifications: []
            }
        },

        components: {
        },

        computed: {
            message: helpers.stateGet('system', 'message'),
            message_type: helpers.stateGet('system', 'message_type'),
            message_icon: helpers.stateGet('system', 'message_icon'),
            show_message: helpers.stateGetSet('system', 'show_message'),
            show_dialog: helpers.stateGetSet('system', 'show_dialog'),
            confirm_callback: helpers.stateGetSet('system', 'confirm_callback'),
            show_confirm: helpers.stateGetSet('system', 'show_confirm')
        },

        methods: {
            confirm (option, callback) {
                this.$store.dispatch('chageFormElementValue', {method: 'system/setConfirmState', value: false});
                if(callback) callback(option);
            }     
        }
    }
</script>

