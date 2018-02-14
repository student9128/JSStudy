function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    document.getElementById("cookiename").innerHTML = document.cookie;
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {

        alert("欢迎" + user + "再次访问");
    } else {
        user = prompt("请输入你的名字：", "");
        if (user != "" && user != null) {
            setCookie("username", user, 1);
        }
    }
}

function showDelayAlert() {
    setTimeout(function () {
        alert("Hello")
    }, 3000);


}

var c = 1;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById('txt').value = c;
    c = c + 1;
    t = setTimeout("timedCount()", 1000);
}

function doTimer() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount()
    }

}

function showClock() {
    var today = new Date();
    let fullYear = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    let weekday = today.getDay();
    let week = checkWeek(weekday);
    checkTime(m);
    checkTime(s);
    document.getElementById('clock').innerHTML = fullYear + "年" + month + "月" + day + "日 "
        + h + ":" + m + ":" + s + "  " + week;
    setTimeout("showClock()", 1000);
}

function checkWeek(x) {
    var w;
    switch (x) {
        case 0:
            w = "星期日";
            break;
        case 1:
            w = "星期一";
            break;
        case 2:
            w = "星期二";
            break;
        case 3:
            w = "星期三";
            break;
        case 4:
            w = "星期四";
            break;
        case 5:
            w = "星期五";
            break;
        case 6:
            w = "星期六";
            break;
    }
    return w;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;

}

function newPerson() {
    john = new person("John", "Doe", 20);
    document.getElementById("model").innerHTML = john.firstname + " " + john.lastname + " is " + john.age + " years old";
}

var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n<1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";


}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function plusSlide(n) {
    showSlides(slideIndex += n)
}
