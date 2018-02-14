function clearAll() {
    document.getElementById("result").innerHTML = String(0);
}

function deleteOne() {
    let resultElement = document.getElementById("result");
    let result = resultElement.innerText;
    if (result.length > 1) {
        resultElement.innerHTML = result.substring(0, result.length - 1);
    }
}

function percentNum() {

}

function add() {
    let params = document.getElementById("result").innerText;
    var x = 0;
    let split = params.split('+');
    for (let i = 0; i < split.length; i++) {
        x += parseInt(split[i]);
    }
    document.getElementById("result").innerHTML = String(x);
}

function appendData(params) {
    console.log("+" == params);
    console.log("－" == params);
    console.log("×" == params);
    console.log("÷" == params);
    let innerText = document.getElementById("result").innerText;
    if ("0" !== innerText) {
        innerText += params;
        document.getElementById("result").innerHTML = innerText;
    } else if ("+" !== params && "-" !== params && "×" !== params && "÷" !== params && "％" !== params) {
        document.getElementById("result").innerHTML = String(params);
    } else {
        let s = "0" + String(params);
        document.getElementById("result").innerHTML = s;
    }
}

