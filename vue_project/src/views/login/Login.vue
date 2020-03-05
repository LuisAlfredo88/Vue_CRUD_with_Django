    <template>
    <v-app id="inspire">
        <v-content>
    
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-form v-on:submit.prevent="logUser" autocomplete="off">
                            <v-card class="elevation-12">
                                <v-toolbar color="primary" dark flat>
                                    <v-toolbar-title>{{ $t('login') }}</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>

                                <v-card-text>
                                        <input type="hidden" name="user" />

                                        <v-text-field
                                            v-model="user"
                                            :label="$t('user')"
                                            name="login"
                                            type="text"
                                            required
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="password"
                                            id="password"
                                            :label="$t('password')"
                                            name="password"
                                            type="password"
                                            required
                                        ></v-text-field>

                                        <label class="login-error" v-if="login_failed">
                                            {{ $t('login_failed')}}
                                        </label>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn type="submit" color="primary">{{ $t('access_login')}}</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-form>
                    </v-flex>
                </v-layout>
        </v-container>
        
    </v-content>

  </v-app>
</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex'
    import helpers from '@/helpers'
    
    const AUTH_MODULE = 'auth';

    export default {
        data () {
            return {
                user: '',
                password: '',
                hidden_text: '',
                login_failed: false
            }
        },

        methods: {
            ...mapActions({
                login: AUTH_MODULE + '/login'
            }),

            ...mapMutations({
                changeDomain: AUTH_MODULE + '/setCurrentDomain'
            }),

            async logUser () {
                if(this.hidden_text) return;

                const response = await this.login({
                    username: this.user,
                    password: this.password
                }).catch((e)=>{ console.log(e); });

                if(response) 
                    this.$router.push('/admin');
                else
                    this.login_failed = true;
            }
        }
    }
</script>

<style>
    label.login-error{
        color: red;
        font-size: 1opx;
    }

</style>