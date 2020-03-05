<template>
    <v-list>
        <template v-for='(node, index) in nodes'>

            <v-list-group v-if='node.children && node.children.length' v-model='node.active' v-bind:key="'menu_' + index">

                <v-list-item slot='activator' active-class="primary white--text">
                    <v-list-item-action>
                        <v-icon v-if="node.icon">{{ node.icon }}</v-icon>
                        <v-list-item-title v-else > {{ getInitialLetters('menu_options.' + node.text) }} </v-list-item-title>
                    </v-list-item-action>                    
                    <v-list-item-title>{{ $t('menu_options.' + node.text) }}</v-list-item-title>
                </v-list-item>
            
                <node-list class='py-0 pl-3' :nodes='node.children'/>
            
            </v-list-group>

            <v-list-item v-else v-bind:key="'menu2_' + index" 
                active-class="primary white--text"
                :to="node.to"
            >
                <v-list-item-action>
                    <v-icon v-if="node.icon">{{ node.icon }}</v-icon>
                    <v-list-item-title v-else > {{ getInitialLetters('menu_options.' + node.text) }} </v-list-item-title>
                </v-list-item-action>   
                                 
                <v-list-item-title>{{ $t('menu_options.' + node.text) }}</v-list-item-title>
            </v-list-item>

        </template>
    </v-list>
</template>

<script>
    export default {
        name: 'node-list',
        props: ['nodes'],

        methods: {
            getInitialLetters (text) {
                var translated_text = this.$t(text);
                return translated_text.split(' ').map((e)=>{
                    return e.substring(0,1);
                }).join('')
            }
        }
    }
</script>

<style scoped>
    .v-list-group{
        margin-left: -7px;
    }

    .v-list-group.v-list-group--active.primary--text {
         color: #fff !important;
         caret-color: #fff !important;
    }

    a.v-list-item.v-list-item--active{
        background-color: #1ba0b7 !important;
        border-color: #22b3cc !important;
    }
</style>