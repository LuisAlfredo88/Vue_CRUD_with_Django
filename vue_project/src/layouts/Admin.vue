<template>
    <v-app>
        <Menu />
        
        <toolbar />

        <v-content class="grey lighten-3">
            <div id="core-view">
                <transition>
                    <router-view> </router-view>
                </transition>
            </div>
        </v-content>

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

        <v-dialog v-model="show_confirm" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">{{ $t("confirmation") }}</v-card-title>
                <v-card-text> {{ $t(message) }} </v-card-text>
                <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="green darken-1" text @click="confirm(false, confirm_callback)">{{ $t("cancel") }}</v-btn>
                <v-btn color="green darken-1" text @click="confirm(true, confirm_callback)">{{ $t("accept") }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    import helpers from '@/helpers'
    import Menu from '@/components/admin/core/Menu.vue'
    import Toolbar from '@/components/admin/core/ToolBar.vue'
    import firebase_app from '@/firebase'

    export default {
        name: 'admin-layout',

        mounted () {
            this.onResponsiveInverted()
            window.addEventListener('resize', this.onResponsiveInverted)
        },

        created () {
            firebase_app.startMessaging();
        },

        beforeDestroy () {
            window.removeEventListener('resize', this.onResponsiveInverted)
        },

        data () {
            return {
                responsive: false,
                notifications: []
            }
        },

        components: {
            Menu, Toolbar
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
            },

            onResponsiveInverted () {
                if (window.innerWidth < 991) {
                    this.responsive = true
                } else {
                    this.responsive = false
                }
            }          
        }
    }
</script>

<style>
div.v-content__wrap{
    margin-top: -50px !important;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity .5s;
}

.router-anim-enter-active {
  animation: coming .5s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .5s;
}

.main-toolbar{
    position: fixed !important;
    top: 50px;
    z-index: 1;        
    width: 100%;
    box-shadow: 1px 1px 4px #989898;
}

.tabs-content{
    margin-top: 20px;

}

.float-button{
    position: fixed !important;
    bottom: 10px;
    right: 10px;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-20px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

header.fullscreen-toolbar{
    position: fixed !important;
    width: 100%;
    z-index: 990;
}

body.modal-mode{
    height: 10px; /* Make this site really long */
    width: 10px; /* Make this site really wide */
    overflow: hidden; /* Hide scrollbars */
}

body.modal-mode::-webkit-scrollbar {
    display: none;
}
</style>