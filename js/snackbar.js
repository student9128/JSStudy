function myFunction(){
    var x = document.getElementById('snackbar');
    x.className='show';
    setTimeout(function(){
        x.className=x.className.replace('show','');
        console.log('x.classname==:\t'+x.className)
    },3000);
    console.log('x.classname:\t'+x.className)//这里classname是show，因为替换操作要在3秒后执行，这行代码已经执行了
}