<template>
  <main class="login">
    <section class="forms-box">
        <div class="img">
        </div>
        <div class="form-part">
            <form class="login" @submit.prevent="login">
                <img class="logo-img" src="../assets/logo.jpeg" alt="">
                <h2>Welcome Back!</h2>
                <h2><router-link to="/login">Login</router-link> to continue</h2>
                <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Email"
                v-model="login_form.email"><br>
                <input 
                    type="password" 
                    name="pass" 
                    id="pass"
                    v-model="login_form.password"
                    placeholder="Password"><br>
                <button class="btn-login"><router-link to="/dashboard/profile">Login</router-link></button>
            </form>
            <div>
        <p>Don't have a GB Synergy account? <router-link to="/register">Sign Up</router-link></p>
    </div>
        </div>
    </section>
    
  </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'

export default{
    setup () {
		const login_form = ref({});
		const store = useStore();
		const login = () => {
			store.dispatch('login', login_form.value);
		}
		return {
			login_form,
			login
		}
	}
}

</script>
<style>
nav{
    display: none;
}
.forms-box{
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
}
.forms-box .img{
    background-image: url('../assets/back.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 60%;
    float: left;
    padding: 0px;
    margin: 0px;
}
.forms-box .form-part{
    background: white;
    height: 100vh;
    width: 40%;
    float: left;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    margin-left: -50px;
}
.logo-img{
    width: 400px;
    padding-top: 50px;
}
h2 a{
    color: skyblue;
    text-decoration: none;
    padding-bottom: 50px;
}
input#email{
    margin-bottom: 15px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    font-size: 18px;
}
input#pass{
    margin-bottom: 15px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    font-size: 18px;
}
.btn-login{
    padding: 10px 100px;
    font-size: 18px;
    background: skyblue;
    color: white;
    border: none;
    border-radius: 15px;
}
nav{
    display: none;
}
.forms-box{
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
}
.logo-img{
    width: 300px;
}
h2 a{
    color: skyblue;
    text-decoration: none;
    padding-bottom: 50px;
}
input#email{
    margin-bottom: 15px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    font-size: 18px;
}
input#business{
    margin-bottom: 15px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    font-size: 18px;
}
select#country{
    margin-bottom: 15px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    font-size: 18px;
}
input#name{
    margin-bottom: 15px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    font-size: 18px;
}
input#pass{
    margin-bottom: 15px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    font-size: 18px;
}
.btn-register{
    padding: 10px 100px;
    font-size: 18px;
    background: skyblue;
    color: white;
    border: none;
    border-radius: 15px;
}
label{
    width: 100%;
    text-align: left;
}
input{
    margin-top: 10px;
    padding-left: 0px;
}
select{
    margin-top: 5px;
    padding-left: 0px;
}
.half{
    width: 40%;
    float: right;
    text-align: center;
}
</style>