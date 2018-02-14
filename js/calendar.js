var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.querySelector('.close');
// alert(btn == null);
// btn.onclick =function () {
//     modal.style.display = "block";
// }
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}