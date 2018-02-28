function showSubMenu() {
    var title = document.getElementsByClassName('title');
    var subMenu = document.getElementsByClassName('slide-submenu');
    for (let i = 1; i < title.length; i++) {
        title[i].onmouseover = function () {
            for (let j = 0; j < subMenu.length; j++) {
                subMenu[i - 1].className += " show";
            }
            title[i].onmouseout = function () {
                console.log("mouse out");
                for (let j = 0; j < subMenu.length; j++) {
                    subMenu[i - 1].className = subMenu[i - 1].className.replace(" show", "");
                }

            }
            subMenu[i - 1].onmouseover = function () {
                subMenu[i - 1].className += " show";
                title[i].style.backgroundColor = "black";
            }
            subMenu[i - 1].onmouseout = function () {
                subMenu[i - 1].className = subMenu[i - 1].className.replace(" show", "");
                title[i].style.backgroundColor = "";
            }

        }

    }
    var navTitle = document.getElementsByClassName('nav-title');
    var listShow = document.getElementsByClassName('par-list-show');
    debugger
    for (let i = 0; i < navTitle.length; i++) {
        navTitle[i].onmouseover = function () {
            for (let j = 0; j < listShow.length; j++) {
                listShow[i].className += " show";
            }
            navTitle[i].onmouseout = function () {
                for (let j = 0; j < listShow.length; j++) {
                    listShow[i].className = listShow[i].className.replace(' show', "");
                }
            }
            listShow[i].onmouseover = function () {
                listShow[i].className += " show";
                navTitle[i].style.backgroundColor = "white";
                navTitle[i].style.color = "black";
            }
            listShow[i].onmouseout = function () {
                listShow[i].className = listShow[i].className.replace(' show', "");
                navTitle[i].style.backgroundColor = "";
                navTitle[i].style.color = "";
            }
        }
    }

}
window.onload = showSubMenu();

function slideBanner() {
    var banner = document.getElementsByClassName('swiper-slide-pic');
    var i = 0;
    var len = banner.length;
    setInterval(function () {
        banner[i].style.display = 'none';
        i = ++i == len ? 0 : i;
        banner[i].style.display = 'inline-block';
    }, 8000);
}
window.onload = slideBanner();