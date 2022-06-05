<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/fontawesome/css/fontawesome.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="public/css/main_page.css">
    <script src="public/js/main_page.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <header>
        <!-- Logo -->
        <div id = "menu-logo">
            <img src="public/images/smartphone.png" alt="logo">
            <h3><span>dk</span><span>phone</span></h3>
        </div>
        <!-- Menu -->
        <div id="menu-header">
            <ul id="menu-list">
                <li id="one"><a href="#">Trang chủ <i class="bi bi-alarm"></i></a> </li>
                <li id="two"><a href="#">Giới thiệu</a> </li>
                <li id="three" onmouseover="dropList()"><a href="#">Sản phẩm</a><i class="fa-solid fa-triangle"></i></li>
                <li id="four"><a href="">Tin tức</a></li>
                <hr/>
            </ul>
            <ul id="dropdown-list" onmouseover="increase()" onmouseleave="dropListOut()" class="dropdown-list">
                <li id ="first-child"> <a href="#">Iphone</a> </li>
                <li> <a href="#">Samsung</a> </li>
                <li> <a href="#">Oppo</a> </li>
                <li> <a href="#">Ipad</a> </li>
                <li id="last-child"> <a href="#">Huewei</a> </li>
            </ul>
        </div>
        <!-- Login, Logout -->
        <div id="menu-icon">
            <ul>
                <li> <img src="public/images/user.png" alt="sign-in"> </li>
                <li> <img src="public/images/heart.png" alt="sign-in"> </li>
                <li> <img src="public/images/shopping-cart.png" alt="sign-in"> </li>
            </ul>
        </div>

        <div id = "small-icon">
            <img id = "sm-icon" src="public/images/menu.png" alt="" onclick= "addClass('responsive')">
        </div>
        
        
        
    </header>
    <!-- Responsive -->
    <div id = "responsive">
        <div id="sm-dropdown">
            <div> <a href="#">Trang chủ</a> </div>
            <hr/>
            <div> <a href="#">Giới thiệu</a> </div>
            <hr/>
            <div> <a href="#">Sản phẩm</a> </div>
            <hr/>
            <div> <a href="#">Tin tức</a> </div>
        </div>
    </div>