<template>
    <div>
        <app-header></app-header>
        <app-content></app-content>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/header.vue';
    import Content from './components/content.vue';
    import Footer from './components/footer.vue';

    export default {


        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            appHeader: Header,
            appContent: Content,
            appFooter: Footer
        }
    }
</script>

<style>

</style>
