<template>
    <div>
        <div id="loginView">
            <login-view></login-view>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import loginView from './components/login/loginView';
    // import DataService from './services/data-service';
    // import PipeService from './services/pipe-service';

    export default {
        name: 'App',
        components: {
            loginView,
        },
        data() {
            return {
                mainViewMode: ['DashBoard', 'KidsList', 'Upload', 'KidDetails', 'VideoLabeling'],
                defaultViewMode: 0, // default is 0
                curViewMode: 0, // default is 0
                isLogin: true, // make sure it is true first.
            };
        },
        mounted() {
            this.$nextTick(function foo() {
                this.initialize();
            });
        },
        methods: {
            initialize() {
                console.log('hello world');
            },
        },
    };
</script>

<style scoped>

</style>

