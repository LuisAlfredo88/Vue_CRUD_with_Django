const CLIENT_MODULE = 'client';
const SYSTEM_MODULE = 'system';
import {mapActions, mapMutations } from 'vuex'

export default {
    computed: {

    },

    methods: {
        ...mapActions({
            saveEntity: CLIENT_MODULE + '/save',
            get: CLIENT_MODULE + '/get',
            getAll: CLIENT_MODULE + '/getAll',
            delete: CLIENT_MODULE + '/delete',
            uploadFile: SYSTEM_MODULE + '/uploadFile'
        }),

        ...mapMutations ({
            clearForm: CLIENT_MODULE + '/clearForm'
        }),

        async loadProfilePhoto (file) {
            this.loading = true;
            const response = await this.uploadFile(file).catch((e)=>{ this.logError(e) });
            
            if(response){
                this.form.photo_url = response.file;
            }

            this.loading = false;
        },

        validate () {
            if(!this.form.name){
                this.system.showMessage('PASSWORD_NOT_MATCH');
                return;
            }

            return true;
        },

        async save () {
            //Avoid to save when there are errors or is still saving
            if(!this.validate() || this.saving) return false;

            this.saving = true;
            const result = await this.saveEntity().catch((e)=>{ this.logError(e) });

            if(result){
                this.system.showMessage('SAVE_SUCCESS');
                this.goBack();
            }else{
                this.system.showMessage('SAVE_ERROR');
            }

            this.saving = false;
        },

        async getRecords (pagination_data) {
            this.loading = true;
            const result = await this.getAll(pagination_data).catch((e)=>{ this.logError(e) });
            this.loading = false;
            if(!result) this.system.showMessage('ERROR_LOADING_DATA');
        },

        editRecord (row) {
            this.$router.push(CLIENT_MODULE + '/editorcrate/' + row.id);
        },

        async deleteRecord (row) {
            const option = await this.system.confirm('DELETE_CONFIRM');
            if(!option) return;

            const result = await this.delete(row.id).catch((e)=>{ this.logError(e) });

            if(result)
                this.system.showMessage('DELETE_SUCCESS');
            else
                this.system.showMessage('DELETE_ERROR');
        }
    },

    data () {
        return {

        }
    }
}