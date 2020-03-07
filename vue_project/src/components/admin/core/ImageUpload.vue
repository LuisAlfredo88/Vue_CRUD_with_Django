<template>
    <div>
        <v-card class="d-inline-block" v-if="type == 'photo'">
            <v-container>
              <v-row justify="space-between">
                  
                  <v-col cols="auto" class="file-container">
                      <v-img
                        height="200"
                        width="200"
                        :src="url"
                      ></v-img>
                      <input type="file" v-on:change="onUpload" />
                </v-col>
    
              </v-row>
            </v-container>
        </v-card>

        <div v-else class="input-upload">
            <v-btn
                :loading="loading"
                :disabled="loading"
                color="red"
                class="ma-2 white--text"
            >
                {{ $t('upload_file' + (multiple ? 's' : '')) }}
                <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>

            <input type="file" :multiple="multiple" v-on:change="onUpload" v-on:load="loading = true" />
        </div>

    </div>
</template>

<script>
    const image = require('@/assets/system/upload-placeholder.png');

    export default {
        props:{
            type: String,
            multiple: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },   
            image_url: {
                type: String,
                default: ''
            },                  
        },

        computed: {
            url () {
                return this.image_url || image;
            }
        },

        name: 'ImageUpload',
        inheritAttrs: false,
        methods: {
            onUpload (file) {
                this.$emit('change', file.target);
            }
        }
    }
</script>

<style lang="scss">
    .file-container {
        input{
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0px;
            left: 0px;
            opacity: 0;
            cursor: pointer !important;
        }

        &:hover .v-image{
            border: 1px solid #c7c4c4;
        }
    }

    .input-upload {
        position: relative;
        overflow: hidden;
        
        i{
            font-size: 30px;
        }
        input{
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0px;
            left: 0px;
            opacity: 0;
            cursor: pointer !important;
        }        
    }
    
</style>
