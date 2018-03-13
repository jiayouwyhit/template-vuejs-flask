<template>
    <div class="container">
        <div class="top-bar-left text-center logo">
            <span>FlyingBaby</span>
        </div>
        <div class="card-box card-tabs">
            <label><b>SIGN IN</b></label>
            <p id="errorMessage">{{errorMessage}}</p>
            <input type="text" placeholder="Enter Username" name="uname" v-model="username" v-on:keyup.enter="onEnter"  required>
            <input type="password" placeholder="Enter Password" name="psw" v-model="password" v-on:keyup.enter="onEnter" required>
            <button type="submit" v-on:click="login">Login</button>
        </div>
    </div>
</template>

<script>
// import NetService from '../../services/net-service';
// import DataService from '../../services/data-service';

export default {
    name: 'loginView',
    data() {
        return {
            username: null,
            password: null,
            errorMessage: null,
        };
    },
    mounted() {
    },
    methods: {
        login() {
        },

        /* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */
        onEnter(event) {
            console.log('onEnter: ', event);
            this.login();
        },
    },
};
</script>

<style scoped>
    .container {
        text-align: center;
    }
    .card-box {
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 8px 42px 0 rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        background-clip: padding-box;
        margin-bottom: 20px;
        width: 40%;
        text-align: center;
        display: inline-block;
    }
	.topbar .top-bar-left {
        float: left;
        position: relative;
        width: 180px;
        z-index: 1;
        background-color: #ffffff;
    }
    .logo {
        color: #ff606f !important;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: .05em;
        line-height: 60px;
    }
    button:hover {
        opacity: 0.8;
    }
    button {
        background-color: #fe6271;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
</style>
