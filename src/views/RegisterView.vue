<template>
  <main class="register">
    <section class="forms-box">
        <div class="img">
        </div>
        <form class="register-form" @submit.prevent="register">
            <img class="logo-img" src="../assets/logo.jpeg" alt="">
            <h2>New Account! <router-link to="/register">Sign-Up</router-link></h2>
            <label for="business">Please enter business name</label>
            <br><input type="text" id="business" placeholder="(company)">
            <br><label for="country">Country of operation</label>
            <br><select name="country" id="country">
                <option value="-">--Select--</option>
                <option value="pakistan">Pakistan</option>
                <option value="hongkong">Hong Kong</option>
            </select>
            <br><label for="name">Please enter your full name</label>
            <br><input type="text" placeholder="Full Name" name="name" id="name">
            <br><label for="email">Please enter your email</label>
            <br><input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Email"
                v-model="register_form.email">
            <br><label for="password">Please create a password</label>
            <br><input 
                type="password" 
                name="pass" 
                id="pass"
                placeholder="Password"
                v-model="register_form.password">
            <br><input type="submit" value="register" class="btn-register">
        <div class="half">
        <p>Don't have a GB Synergy account? <router-link to="/login">Log In</router-link></p>
    </div>
        </form>
    </section>
  </main>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex'

export default{
    setup () {
		const register_form = ref({});
		const store = useStore();
		const register = () => {
			store.dispatch('register', register_form.value);
		}
		return {
			register_form,
			register
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
    height: 110vh;
    width: 60%;
    float: left;
    padding: 0px;
    margin: 0px;
    margin-left: -10px;
    margin-top: -10px;
}
.forms-box .form-part{
    background: white;
    height: 100vh;
    width: 40%;
    float: left;
    border-bottom-left-radius: 60px;
    border-top-left-radius: 60px;
    margin-left: -60px;
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