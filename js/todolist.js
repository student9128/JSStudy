var myNodelist = document.getElementsByTagName('li');
var i;
for(i=0;i<myNodelist.length;i++){
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);/*添加删除按钮 */
}
var close = document.getElementsByTagName('close');
var i;
for(i=0;i<close.length;i++){/*点击删除按钮就让条目消失 */
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
}
var listx = document.querySelector('ul');
listx.addEventListener('click',function(ev){
if(ev.target.tagName ==='li'){
    ev.target.classList.toggle('checked');
}
},false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue===''){
        alert('you must write something!');
    }else{
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myUl').value='';
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(txt);
    li.appendChild(span);
    for(i =0;i<close.length;i++){
        close[i].onclick=function() {
            var div = this.parentElement;
            div.style.display='none';
        }
    }
}