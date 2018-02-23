var acc = document.getElementsByClassName("accordion");
var i;
for(i=0;i<acc.length;i++){
    acc[i].onclick=function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        console.log("maxHeight:\t"+panel.style.maxHeight)
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+"px";
            console.log("scrollHeight:\t"+panel.style.maxHeight);
        }
    }
}