<template>
<div>
    <section>
        <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
                <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
                <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                    <v-list-item>
                    <v-list-item-action>
                        <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>777-867-5309</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-action>
                        <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Chicago, US</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                    <v-list-item-action>
                        <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-card>
            </v-flex>
            </v-layout>
        </v-container>
    </section>

    <v-footer color="blue darken-2">
        <v-layout row wrap align-center>
            <v-flex xs12>
            <div class="white--text ml-4">
                Made with
                <v-icon class="red--text">mdi-heart</v-icon>
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
            </v-flex>
        </v-layout>
    </v-footer>

</div>    
</template>

<script>
    export default {
        name: 'app_footer'
    }
</script>
