var helloElement = document.getElementById("hello-div");

window.onload = function () {

}

function sayHelloTo(name) {
    console.log("buttonia on klikattu, nimi on: " + name);
    document.getElementById('hello-div').innerHTML = "Hei, " + name + "!";

}

