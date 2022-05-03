let currentImageIndex = 0;
if (localStorage.getItem("Flower")) {
    currentImageIndex = parseInt(localStorage.getItem("Flower"));
}

let flowers_array = [{ "name": "Kesäkukat", "src": "images/paivankakkara_apila.jpg" }, {
    "name": "Niittykukat",
    "src": "images/niittykukat.jpg"
}, { "name": "Kuivakukkaseppele", "src": "images/kuivakukat.jpg" }];
var intervalId = -1;

function previous() {
    if (currentImageIndex == 0) {
        return;
    }
    currentImageIndex--;
    localStorage.setItem("Flower", currentImageIndex);

    $("#image").fadeOut("slow", function () {
        setTimeout(function () {
            var image = document.getElementById("image");
            image.setAttribute("src", flowers_array[currentImageIndex].src);
            document.getElementById("imagename").innerText = flowers_array[currentImageIndex].name;
            $("#image").fadeIn("slow");
        }, 100);
    });

}
function play() {
    changeImage();
    intervalId = setInterval(changeImage, 3000);
    let buttonStyle = document.getElementById("playbuttonstyle");
    buttonStyle.className = "bi bi-stop";
    document.getElementById('playbutton').removeEventListener("click", play);
    document.getElementById('playbutton').addEventListener("click", stop);

}
function stop() {
    clearInterval(intervalId);
    let buttonStyle = document.getElementById("playbuttonstyle");
    buttonStyle.className = "bi bi-play";
    document.getElementById('playbutton').removeEventListener("click", stop);
    document.getElementById('playbutton').addEventListener("click", play);
}

function changeImage() {
    if (currentImageIndex < flowers_array.length - 1) {
        next();
    }
    else {
        currentImageIndex = -1;
        localStorage.setItem("Flower", currentImageIndex);
        next();
    }
}
function next() {
    if (currentImageIndex == flowers_array.length - 1) {
        return;
    }

    currentImageIndex++;
    localStorage.setItem("Flower", currentImageIndex);

    $("#image").fadeOut("slow", function () {
        setTimeout(function () {
            var image = document.getElementById("image");
            image.setAttribute("src", flowers_array[currentImageIndex].src);
            document.getElementById("imagename").innerText = flowers_array[currentImageIndex].name;
            $("#image").fadeIn("slow");
        }, 100);
    });

    // localStorage.setItem("Flower", currentImageIndex);
}
window.onload = function () {
    document.getElementById('previous').addEventListener("click", previous);
    document.getElementById('playbutton').addEventListener("click", play);
    document.getElementById('next').addEventListener("click", next);

    var image = document.getElementById("image");
    image.setAttribute("src", flowers_array[currentImageIndex].src);
    document.getElementById("imagename").innerText = flowers_array[currentImageIndex].name;

}