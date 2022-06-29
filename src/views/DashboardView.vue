<template>
    <main class="profile">
        <div class="col-lg-4">
            <img class="logo-img" src="../assets/logo.jpeg" alt="">
            <ul class="menu">
                <li class="menu-item"><router-link to="/dashboard/">Dashboard</router-link></li>
                <li class="menu-item"><router-link to="/dashboard/explore">Explore</router-link></li>
                <li class="menu-item"><router-link to="/dashboard/collaboration">My Collaborations</router-link></li>
                <li class="menu-item"><router-link to="/dashboard/profile">Profile</router-link></li>
            </ul>
        </div>
        <div class="col-lg-8">
            <div class="row">
                <div class="left">
                    <p class="header">Dashboard</p>
                </div>
                <div class="right">
                    <p class="header">Inbox (5)</p>
                </div>
            </div>
        </div>
    </main>
</template>
<style>
body{
    margin: 0px;
}
nav{
    display: none;
}
.col-lg-4{
    width: 20%;
    background: #474747;
    height: 100vh;
    float: left;
}
.col-sm-4{
    width: 40%;
    float: left;
    text-align: left;
}
.col-sm-8{
    width: 60%;
    float: left;
    text-align: left;
}
input[type="text"]{
    padding: 10px;
    color: #474747;
    width: 250px;
    border: 1px solid lightblue;
}
input.half-input{
    width: 125px;
    border: 1px solid lightblue
}
textarea{
    height: 80px;
    width: 265px;
    color: #474747;
    border: 1px solid lightblue
}
select{
    padding: 10px;
    color: #474747;
    width: 270px;
    border: 1px solid lightblue
}
.col-lg-8{
    width: 80%;
    height: 100vh;
    float: left;
}
.row{
    padding-left: 80px;
    padding-right: 80px;
}
.logo-img{
    width: 300px;
    padding-top: 50px;
}
ul.menu{
    list-style: none;
    text-align: left !important;
}
li a{
    text-decoration: none;
    color: white;
    text-align: left;
}
li{
    padding: 10px;
}
.left{
    width: 50%;
    text-align: left;
    float: left;
}
.right{
    width: 50%;
    text-align: right;
    float: left;
}
.header{
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
}
ul.inside-menu{
    list-style: none;
    display: flex;
    margin-left: -50px;
}
li.m-item{
    border-bottom: 1px solid #474747;
}
.align-left{
    text-align: left;
}
button{
    background: lightblue;
    color: #fff;
    font-size: 16px;
    border: none;
    padding: 10px;
    text-align: left;
}
li.m-item a {
    color: black;
}
</style>