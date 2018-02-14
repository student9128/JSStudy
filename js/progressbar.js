function goProgress(){
    var container = document.getElementById('container');
    var progress = document.getElementById('progress');
    var width =1;
    var id= setInterval(frame,100);
    function frame(){
        if(width>=100){
            clearInterval(id);
        }else{
            width++;
            progress.style.width=width+'%';
            progress.innerHTML=width*1+'%'
         
        }
    }
}