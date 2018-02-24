function myFunction(){
    document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName('dropdown-content');
    }
    var i;
    for(i=0;i<dropdowns.length;i++){
        var penDropdown = dropdowns[i];
        if(penDropdown.classList.contains('show')){
            penDropdown.classList.remove('show');
        }
    }
}