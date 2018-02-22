function showRegister(){
document.getElementById('id01').style.display='block';
}
function hideRegister(){
    document.getElementById('id01').style.display='none'; 
}

var modal = document.getElementById('id01');
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display='none';
    }
}