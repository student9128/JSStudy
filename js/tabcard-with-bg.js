function openCity(cityName,elem,color){
    var tabcontent = document.getElementsByClassName('tabcontent');
    for(let i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display='none';
    }
    var tablinks = document.getElementsByClassName('tablinks');
    for(let i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor="";
    }
    document.getElementById(cityName).style.display='block';
    elem.style.backgroundColor = color;
}
document.getElementById('defaultOpen').click();