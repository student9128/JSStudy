function orderList() {
    var order, i, switching, b, shouldSwitch;
    order = document.getElementById("order");
    switching = true;
    while (switching) {
        switching = false;
        b = order.getElementsByTagName('li');
        for (i = 0; i < b.length - 1; i++) {/*为什么是b.length-1,因为最后一个就它自己，就不用比较了*/
            // debugger
            shouldSwitch = false;
            console.log(b[i].innerHTML.toLowerCase() + " >===i");
            console.log(b[i + 1].innerHTML.toLowerCase() + " >===i+1");

            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}