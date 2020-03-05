<template>
    <v-container fluid>
        <v-form ref="form" autocomplete="off" lazy-validation v-model="form_is_valid">

            <tool-box :buttons="buttons" />

            <v-row justify="center" >
                <v-col
                    cols="12"
                    lg="6"
                >
                    <grid-card
                        color="blue"
                        icon="mdi-account"
                        :title="$t('client_info')"
                    >    
                        <v-text-field
                            :label="$t('identification')"
                            required
                            clearable
                            v-model="form.identification"
                        ></v-text-field>

                        <v-text-field
                            :label="$t('name')"
                            required
                            clearable
                            v-model="form.name"
                        ></v-text-field>

                        <v-textarea
                            :label="$t('address')"
                            required
                            clearable
                            v-model="form.address"
                        ></v-textarea>

                        <v-radio-group row v-model="form.sex">
                            <v-radio :label="$t('masculine')" :value="1" ></v-radio>
                            <v-radio :label="$t('femenine')" :value="2"></v-radio>
                        </v-radio-group>

                    </grid-card> 
                </v-col>
            </v-row>
        </v-form>
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
                {name: 'SAVE', onClick: this.save, roles:['add_department', 'edit_department']},
                {name: 'CANCEL'}
            ];
        },

        computed: {
            ...mapState(AUTH_MODULE, ['form']),
        },        
    }
</script>
