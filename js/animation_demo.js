function myMove() {
    var element = document.getElementById("animationDemo");
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}