<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        
            <div class="flex-grow-1"></div>
        
            <v-toolbar-items>
                <v-btn text>Link 1</v-btn>
                <v-btn text>Link 2</v-btn>
                <v-btn text>Link 3</v-btn>
            </v-toolbar-items>
        
            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-btn icon>
                <v-icon>mdi-export-variant</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>mdi-delete-circle</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>fas fa-tachometer-alt</v-icon>
                </v-btn>
            </template>
        </v-toolbar>
    </div>
</template>

<script>
    export default {        
        data () {
            return {
                title: 'Landing Page'
            }
        },        
    }

</script>