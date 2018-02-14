function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUl');
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        // debugger
        a = li[i].getElementsByTagName('a')[0];
        // debugger
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";//清除display样式，display将使用默认值（块元素会变成block，内联元素会变成inline）
        } else {
            li[i].style.display = 'none';
        }
    }
}