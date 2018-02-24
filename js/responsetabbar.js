function myFunction(){
    var x = document.getElementById("myTopnav");
    debugger
    if(x.className==="topnav"){
        x.className+=" responsive";
        console.log("classname:\t"+x.className)
    }else{
        x.className="topnav";
        console.log("class====:\t"+x.className);
    }
}