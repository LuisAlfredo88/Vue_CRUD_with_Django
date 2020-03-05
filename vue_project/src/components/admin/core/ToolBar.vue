<template>
        <v-app-bar
            id="core-app-bar"
            app
            flat
            prominent
            style="background: #eee; height: auto;"
        >

        <div class="v-toolbar-title">
            <v-toolbar-title
                class="tertiary--text font-weight-light"
            >
                <v-btn
                    v-if="responsive"
                    class="default v-btn--simple"
                    dark
                    icon
                    @click.stop="onClickBtn"
                >
                    <v-icon>mdi-view-list</v-icon>
                </v-btn>
            </v-toolbar-title>
        </div>
                
        <v-spacer />
    
        <v-toolbar-items>
          <v-row
            align="center"
            class="mx-0"
          >
    
            <v-btn
              icon
              to="/"
            >
              <v-icon color="tertiary">
                mdi-view-dashboard
              </v-icon>
            </v-btn>
    
            <div class="text-center">
                <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
                >
                    <template v-slot:activator="{ on }">
                        <v-btn  @click="menu = true" icon>
                            <v-icon color="tertiary">
                                mdi-account
                            </v-icon>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-list>
                        <v-list-item>
                            <v-list-item-avatar class="avatar-user">
                            <i class="mdi mdi-account-circle"></i>
                            </v-list-item-avatar>

                            <v-list-item-content>
                            <v-list-item-title>{{ logged_user.username }}</v-list-item-title>
                            <v-list-item-subtitle>{{$t('last_access', {time: getDate( /*logged_user.last_access*/  '2020-01-01')}) }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list>
                        <v-list-item>
                            <v-list-item-action>
                            </v-list-item-action>
                            <v-list-item-title class="change-pwd-link" v-on:click="showDialog">{{$t('change_password')}}</v-list-item-title>
                        </v-list-item>

                        </v-list>

                        <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="primary" text @click="logout">{{ $t('logout') }}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </div>            
          </v-row>
        </v-toolbar-items>
        <v-dialog v-model="show_dialog" persistent max-width="600px">

            <form ref="form" v-on:submit.prevent="changeUserPassword" autocomplete="off">
                <v-card>
                    <v-card-title>
                        <span class="headline">{{ $t('password_change') }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            
                            <v-row>
                                <v-text-field
                                    :label="$t('prev_password')"
                                    required
                                    type="password"
                                    v-model="prev_password"
                                ></v-text-field>
                            </v-row>

                            <v-row>
                                <v-text-field
                                    :label="$t('password')"
                                    required
                                    type="password"
                                    v-model="password"
                                ></v-text-field>
                            </v-row>

                            <v-row>
                                <v-text-field
                                    :label="$t('confirm_password')"
                                    required
                                    type="password"
                                    v-model="password_confirm"
                                ></v-text-field>
                            </v-row>

                        </v-container>
                    </v-card-text>
                    
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="this.close">{{ $t('close') }}</v-btn>
                        <v-btn color="blue darken-1" text type="submit">{{ $t('save') }}</v-btn>
                    </v-card-actions>
                </v-card>        
                
            </form>

 
        </v-dialog>

      </v-app-bar>
</template>

<script>

import helpers from '@/helpers'
import moment from 'moment'

const AUTH_MODULE = 'auth';

import {
  mapMutations,
  mapState,
  mapActions
} from 'vuex'

export default {
  data: () => ({
    prev_password: '',
    password: '',
    password_confirm: '',

    show_dialog: false,
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: null,
    responsive: false,
    menu: false
  }),

  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted);
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

    computed:{
        ...mapState(AUTH_MODULE, ['logged_user'])
    },

  methods: {
    ...mapMutations('system', ['toggleDrawer']),
    
    ...mapActions({
        logoutUser : AUTH_MODULE + '/logoutUser',
        changePassword: AUTH_MODULE + '/changePassword'
    }),

    onClickBtn () {
      this.toggleDrawer()
    },

    logout () {
        this.menu = false;
        this.logoutUser();
    },

    onClick () {
      //
    },

    close () {
        this.password = '';
        this.password_confirm = '';
        this.prev_password = '';
        this.show_dialog=false;
    },

    changeUserPassword () {
        if(this.password_confirm != this.password){
            helpers.showMessage(this, 'PASSWORD_NOT_MATCH');
            return false;
        }

        this.saving = true;
        this.changePassword({
            last_password: this.prev_password,
            password: this.password
        }).then((r)=>{
            if(r.success){
                helpers.showMessage(this, 'PASSWORD_CHANGE_SUCCESS');
                this.close();
            }
            else{
                helpers.showMessage(this, 'ERROR_CHANGIN_PASSWORD');
            }
            
        }).catch(()=>{
            helpers.showMessage(this, 'SAVE_ERROR');
        });
        
        return false;        
    },

    showDialog () {
        this.show_dialog = true;
    },

    getDate(date) {
        return moment((new Date(date * 1000)).format()).format('DD-MM-YYYY');
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
  #core-toolbar a {
    text-decoration: none;
  }

  .v-toolbar-title button span{
    color: #999!important;
    cursor: pointer;
  }

  .v-toolbar__content{
      height: auto !important;
  }

  .avatar-user i{
      font-size: 30px;
  }

  .change-pwd-link{
      cursor: pointer;
  }
</style>
