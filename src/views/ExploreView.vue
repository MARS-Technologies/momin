<template>
    <main class="profile">
        <div class="col-lg-4">
            <img class="logo-img" src="../assets/synergy-logo.png" alt="">
            <ul class="menu">
                <li class="menu-item"><router-link to="/dashboard/">PDF</router-link></li>
                <li class="menu-item"><img src="../assets/explore.png" alt=""><router-link style="padding-left: 20px;" to="/dashboard/explore">Explore</router-link></li>
                <li class="menu-item"><img src="../assets/collaboration.png" alt=""><router-link to="/dashboard/collaboration">My Collaborations</router-link></li>
                <li class="menu-item checked"><img src="../assets/profile.png" alt=""><router-link style="padding-left: 20px;" to="/dashboard/profile">Profile</router-link></li>
            </ul>
        </div>
        <div class="col-lg-8">
            <div class="row">
                <div class="left">
                    <p class="header">Explore</p>
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
    background: #324158;
    height: 360vh;
    float: left;
}
li.menu-item a:hover{
    color: #05C4C4;
}
li.checked a{
    color: #05C4C4;
}
.sec {
    width: 248px;
    border: 1px solid #05C4C4;
    padding: 10px;
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
    border: 1.4px solid #05C4C4;
    border-radius: 5px;
}
input.half-input{
    width: 125px;
    order: 1.4px solid #05C4C4;
    border-radius: 5px;
}
textarea{
    height: 80px;
    width: 265px;
    border: 1.4px solid #05C4C4;
    border-radius: 5px;
}
select{
    padding: 10px;
    color: #474747;
    width: 270px;
    border: 1.4px solid #05C4C4;
    border-radius: 5px;
}
li.m-item a {
    color: black;
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
    width: 200px;
    margin-top: 20px;
    margin-left: -100px;
    position: fixed;
}
ul.menu{
    list-style: none;
    margin-top: 120px;
    text-align: left !important;
    position: fixed;
}
li a{
    text-decoration: none;
    color: white;
    text-align: left;
}
li{
    padding: 10px;
    margin-bottom: 10px;
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
li.menu-item img {
    height: 25px;
    padding-right: 10px;
    margin-bottom: -6px;
}
</style>