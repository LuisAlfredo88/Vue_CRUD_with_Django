<template>
    <v-navigation-drawer
        id="app-drawer"
        v-model="inputValue"
        app
        dark
        floating
        persistent
        mobile-break-point="991"
        width="260"
        src="@/assets/sidebar-bg.jpg" 
    >

        <template v-slot:img="attrs">
            <v-img
                v-bind="attrs"
                gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
            />
        </template>

        <v-list-item two-line>
            <v-list-item-avatar color="white">
                <v-img
                src="@/assets/system/logo.png"
                height="34"
                contain
                />
            </v-list-item-avatar>
        
            <v-list-item-title class="title">
                CRUD
            </v-list-item-title>
        </v-list-item>

        <v-divider class="mx-3 mb-3" />

        <v-list nav>
            <menu-tree :nodes="user_menu_options"  />
        </v-list>

    </v-navigation-drawer>    
</template>
      
<script>
    import helpers from '@/helpers'
    import {mapState} from  'vuex'
    import MenuTree from  './MenuTree'

    const SYSTEM_MODULE_NAME = 'system';
    
    export default {
        components: {
            MenuTree
        },

        data: () => ({
            logo: require('@/assets/logo.png'),
            responsive: false
        }),
        
        computed: {
            inputValue: helpers.stateGetSet('system', 'show_drawer'),
            ...mapState('auth', ['user_menu_options'])
        },
        
        mounted () {
            this.onResponsiveInverted()
            window.addEventListener('resize', this.onResponsiveInverted)
        },
        
        beforeDestroy () {
            window.removeEventListener('resize', this.onResponsiveInverted)
        },

        methods: {
            onResponsiveInverted () {
                if (window.innerWidth < 991)
                    this.responsive = true;
                else
                    this.responsive = false;                    
            }
        }
    }
</script>
      
<style lang="scss">
    #app-drawer {
        .v-list__tile {
            border-radius: 4px;
            &--buy {
                margin-top: auto;
                margin-bottom: 17px;
            }
        }

        .v-list-item__title{
            font-size: 15px;
            font-family: Roboto,sans-serif;
            line-height: 1.5;
            color: rgb(250, 250, 250);
        }

        .v-image__image--contain {
            top: 9px;
            height: 60%;
        }

        .search-input {
            margin-bottom: 30px !important;
            padding-left: 15px;
            padding-right: 15px;
        }          
    }
</style>
      