function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    let slides = document.getElementsByClassName('mySlides');
    let indicator = document.getElementsByClassName('demo');
    let captionText = document.getElementById('caption');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i=0;i<slides.length;i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = 'block';
    indicator[slideIndex - 1].className += " active";
    captionText.innerHTML = indicator[slideIndex - 1].alt;

}