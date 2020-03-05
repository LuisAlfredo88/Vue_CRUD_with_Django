<template>
    <div class="observer"></div>
</template>

<script>
    export default {
        name: 'observer',
        
        data () {
            return {
                observer: null
            }
        },

        mounted () {
            this.observer = new IntersectionObserver(([entry]) => {
                if(entry && entry.isIntersecting) {
                    this.$emit('intercept');
                }
            });

            this.observer.observe(this.$el);
        }
    }
</script>

<style scoped>
    .observer {
        height: 1px;
    }
</style>
