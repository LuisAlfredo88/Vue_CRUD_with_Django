    <template>
    <v-app id="inspire">
        <v-content>
    
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md8>
                        <v-form autocomplete="off" ref="form">
                            <v-card class="elevation-12">
                                <v-toolbar color="primary" dark flat>
                                    <v-toolbar-title>{{ $t('request') }}</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>

                                <v-card-text>

                                    <v-text-field
                                        :label="$t('name')"
                                        v-model="form.name"
                                        :placeholder="$t('name')"
                                        :clearable="!check"
                                        :rules="required"
                                        :readonly="check"
                                    ></v-text-field>

                                    <v-text-field
                                        :label="$t('last_name')"
                                        v-model="form.last_name"
                                        :placeholder="$t('last_name')"
                                        :clearable="!check"
                                        :rules="required"
                                        :readonly="check"
                                    ></v-text-field>                                    

                                    <v-text-field
                                        :label="$t('identification')"
                                        v-model="form.identification"
                                        :placeholder="$t('national_id_number_or_other_id')"
                                        :clearable="!check"
                                        :rules="required"
                                        :readonly="check"
                                    ></v-text-field>    

                                    <v-text-field
                                        :rules="email"
                                        :label="$t('mail')"
                                        v-model="form.email"
                                        :placeholder="$t('email_placeholder')"
                                        :readonly="check"
                                    ></v-text-field>
                                
                                    <v-text-field
                                        :rules="email"
                                        :label="$t('mail_conf')"
                                        v-model="form.mail_conf"
                                        :placeholder="$t('email_placeholder')"
                                        :readonly="check"
                                    ></v-text-field>
                                
                                    <v-text-field
                                        type="tel"
                                        :label="$t('cellphone')"
                                        v-model="form.cellphone"
                                        :placeholder="$t('cellphone')"
                                        :readonly="check"
                                    ></v-text-field>

                                    <v-text-field
                                        type="tel"
                                        :label="$t('phone')"
                                        v-model="form.phone"
                                        :placeholder="$t('phone')"
                                        :readonly="check"
                                    ></v-text-field> 

                                    <v-text-field
                                        type="tel"
                                        :label="$t('office')"
                                        v-model="form.office_phone_number"
                                        :placeholder="$t('office_phone_number')"
                                        :readonly="check"
                                    ></v-text-field> 

                                    <v-textarea
                                        :clearable="!check"
                                        :counter="500"
                                        :label="$t('request')"
                                        v-model="form.request_detail"
                                        :placeholder="$t('request_detail')"
                                        :readonly="check"
                                    ></v-textarea>
                                </v-card-text>

                                <v-card-actions v-if="!check">
                                    <v-spacer></v-spacer>
                                    <v-btn v-on:click="sendRequest" :disabled="is_saving" color="primary">{{ $t((sending ? 'is_sending' : 'send'))}}</v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-progress-linear v-if="sending" color="primary accent-4" indeterminate rounded height="6" ></v-progress-linear>
                        </v-form>
                    </v-flex>
                </v-layout>
        </v-container>
        
    </v-content>

  </v-app>
</template>


    <script>
        import {mapState, mapActions} from 'vuex'
        import helpers from '@/helpers'
        import FormRules from '@/mixins/form_rules'
        
        const PRODUCT_MODULE = 'request';
    
        export default {
            props:{ 
                check: Boolean
            },

            data () {
                return {
                    is_saving: false,
                    sending: false
                }
            },
    
            mixins: [FormRules],
    
            computed: {
                ...mapState(PRODUCT_MODULE, ['form'])
            },
    
            methods: {
                ...mapActions({
                    save: PRODUCT_MODULE + '/save',
                    cleanForm: PRODUCT_MODULE + '/cleanForm',                    
                }),

                sendRequest () {
                    if(this.is_saving) return;
    
                    if(!this.$refs.form.validate()){
                        helpers.showMessage(this, 'FILL_FORM');
                        return;
                    };

                    if(this.form.email && this.form.email != this.form.mail_conf) {
                        helpers.showMessage(this, 'EMAIL_NOT_MATCH');
                        return;
                    }

                    this.is_saving = true;
                    this.sending = true;
                    this.save().then((r)=>{
                        helpers.showMessage(this, 'SAVE_SUCCESS');
                        //this.cleanForm();
                        //this.is_saving = false;
                        this.sending = false;
                    }).catch((e)=>{
                        helpers.showMessage(this, 'SAVE_ERROR');
                        //this.is_saving = false;
                        this.sending = false;
                    });
                }
            }
        }
    </script>

    <style>
        .v-toolbar__title{
            margin-top: 11px;
        }
    </style>