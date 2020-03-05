<template>    
    <div>
        <v-app light>                
            <Header />
            <v-content>
                <slot />                
            </v-content>            
            <Footer />
        </v-app>
    </div>
</template>

<script>
    import Header from '@/components/landing/Header.vue'
    import Footer from '@/components/landing/Footer.vue'

    export default {
        name: 'landing',
        
        components: {
            Footer,
            Header
        },

        data () {
            return {
                title: 'hello'
            }
        },        
    }

</script>