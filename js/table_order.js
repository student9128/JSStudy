function orderList() {
    var myTable, i, switching, rows, shouldSwitching, x, y;
    myTable = document.getElementById('myTable');
    switching = true;
    while (switching) {
        switching = false;
        rows = myTable.getElementsByTagName('TR');
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitching = false;
            x = rows[i].getElementsByTagName('td')[0];
            y = rows[i + 1].getElementsByTagName('td')[0];
          console.log("x:\t"+x)
            console.log("s111111" + x.innerHTML.toLowerCase());
            console.log('ssssss' + y.innerHTML.toLowerCase());
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitching = true;
                break
            }
        }
        if (shouldSwitching) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true;
        }
    }
}