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
                    <p class="header">Profile</p>
                </div>
                <div class="right">
                    <p class="header">Inbox (5)</p>
                </div>
            </div>
            <div class="row">
                <ul class="inside-menu">
                    <li class="m-item">Profile And Preferences</li>
                    <li class="m-item"><router-link to="/dashboard/settings">General Settings</router-link></li>
                </ul>
            </div>
            <div class="row">
                <p class="header align-left">
                    Company Profile
                </p>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Company Name</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <input type="text" placeholder="Company Name">
                </div>
                <div class="col-sm-4" style="height: 100px;">
                    <p>Company Inro</p>
                </div>
                <div class="col-sm-8" style="height: 100px;">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Website URL</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <input type="text" placeholder="www.examplecompany.com">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Country of Operation</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <select name="country" id="">
                        <option value="hongkong">Hong Kong</option>
                        <option value="pakistan">Pakistan</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 100px;">
                    <p>Business Category</p>
                </div>
                <div class="col-sm-8" style="height: 100px;">
                    <input type="radio" name="retail" id=""><label>Retail</label><br>
                    <input type="radio" name="Events & Classes" id=""><label>Events & Classes</label><br>
                    <input type="radio" name="Services" id=""><label>Services</label><br>
                    <input type="radio" name="Other" id=""><label>Other</label><br>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Industy</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <select name="industry" id="">
                        <option value="fitness">Fitness</option>
                        <option value="it">IT</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Customer Size</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <select name="industry" id="">
                        <option value="1000+">1000+</option>
                        <option value="1m">1M+</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Business and Customers Demographic</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <select name="industry" id="">
                        <option value="hongkongsar">Hong Kong SAR</option>
                        <option value="MainlandChina">Mainland China</option>
                        <option value="Macau">Macau, SAR</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="japan">Japan</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Collaboration Vision</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Year of establishment</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <select name="industry" id="">
                        <option value="0-1">0 - 1</option>
                        <option value="1-3">1 - 3</option>
                        <option value="3-5">3 - 5</option>
                        <option value="5-10">5 - 10</option>
                        <option value="10+">10 and above</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Type of products</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <select name="industry" id="">
                        <option value="food">Food</option>
                        <option value="sport-fitness">Sports & fitness</option>
                        <option value="electronics">Electronics</option>
                        <option value="drinks">Drinks</option>
                        <option value="Jewellery">Jewellery</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Type of Events</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <select name="industry" id="">
                        <option value="food">Food</option>
                        <option value="sport-fitness">Sports & fitness</option>
                        <option value="electronics">Electronics</option>
                        <option value="drinks">Drinks</option>
                        <option value="Jewellery">Jewellery</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Type of Services</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <select name="industry" id="">
                        <option value="food">Food</option>
                        <option value="sport-fitness">Sports & fitness</option>
                        <option value="electronics">Electronics</option>
                        <option value="drinks">Drinks</option>
                        <option value="Jewellery">Jewellery</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Facebook</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <input type="text">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Instagram</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <input type="text">
                </div>
            </div>
            <div class="row" style="text-align: left;">
                <p class="header">Partnership Preference</p>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Commission / referral range (no decimals)</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <input type="text" class="half-input"> % to <input type="text" class="half-input">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 150px;">
                    <p>Type of Partnership</p>
                </div>
                <div class="col-sm-8" style="height: 150px;">
                    <input type="radio" name="joint" id=""><label>Joint Content Marketing</label><br>
                    <input type="radio" name="Events & Classes" id=""><label>Joint social media marketing</label><br>
                    <input type="radio" name="Services" id=""><label>Joint seminars</label><br>
                    <input type="radio" name="Other" id=""><label>Product and services bundles</label><br>
                    <input type="radio" name="Other" id=""><label>Product and product bundles</label><br>
                    <input type="radio" name="Other" id=""><label>Product and event bundles</label><br>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 150px;">
                    <p>Preferred Business Partners</p>
                </div>
                <div class="col-sm-8" style="height: 150px;">
                    <input type="radio" name="retail" id=""><label>Retail</label><br>
                    <input type="radio" name="Events & Classes" id=""><label>Events & Classes</label><br>
                    <input type="radio" name="Services" id=""><label>Services</label><br>
                    <input type="radio" name="Other" id=""><label>Other</label><br>
                    <input type="text">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" style="height: 50px;">
                    <p>Preferred Business Partners</p>
                </div>
                <div class="col-sm-8" style="height: 50px;">
                    <input type="radio" name="retail" id=""><label>Within country of operations</label><br>
                    <input type="radio" name="Events & Classes" id=""><label>Outside country of operaitons</label><br>
                </div>
            </div>
            <div class="row" style="text-align: left;">
                <button>Update Settings</button>
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
</style>