<template>
    <v-row class="tool-box--component">
            <div class="flex-grow-1"></div>
            <v-col class="mr-auto">    
                <div class="tool-box">
                    <v-row>
                        <v-col>
                            <v-btn-toggle>
                
                            <v-btn text v-for="(button, index) in button_list" v-on:click="button.onClick" v-bind:key="index" :type="button.type ? button.type : 'button'">
                                <v-icon :color="button.color">{{ button.icon}}</v-icon>
                            </v-btn>
                
                            </v-btn-toggle>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>                
</template>

<script>    
    var default_buttons = {
        NEW: (current_module) => {
            return {
                name: 'new',
                icon: 'mdi-plus',
                color: 'teal',
                onClick: () => {
                    var current_route = current_module.$route.path;
                    current_module.$router.push(current_route + '/editorcrate');
                }
            }
        },

        SAVE: (current_module) => {
            return {
                name: 'save',
                icon: 'mdi-content-save',
                color: 'blue'
            }
        },

        DELETE: (current_module) => {
            return {
                name: 'save',
                icon: 'mdi-delete',
                color: 'red'
            }
        },

        CANCEL: (current_module) => {
            return {
                name: 'save',
                icon: 'mdi-close',
                color: 'red',
                onClick: () => {
                    current_module.$router.go(-1);
                }
            }
        }

    };


    export default {
        name: 'ToolBox',
        inheritAttrs: false,
    
        props: {
            buttons: {
                type: Array,
                required: true
            }
        },

        computed: {
            button_list () {
                return this.buttons.map((e)=>{         
                    if(e.name && default_buttons[e.name.toUpperCase()]){
                        var button = default_buttons[e.name.toUpperCase()](this);
                        if(e.onClick)
                            button.onClick = e.onClick;
                        else{
                            if(!button.onClick)
                                button.onClick = ()=>{};
                        }

                        return button;
                    }
                    
                    if(!e['onClick']) e.onClick = ()=>{};                    
                    return e;
                });
            }
        }

    }

</script>

<style>
    .tool-box--component .tool-box{
        float: right;
        margin-right: 5px;
        position: relative;
    }

    .tool-box .v-btn-toggle{
        box-shadow: none !important;
        background: none !important;
    }

    .tool-box .v-btn-toggle button{
        margin-left: 7px;
        background: #FFFFFF;
        box-shadow: 0px 1px 2px #cecece !important;
    }

    .tool-box .v-btn-toggle button span i {
        font-size: 35px !important;
    }
</style>