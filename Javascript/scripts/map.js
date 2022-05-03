
function showMap() {

    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let url = "https://www.google.com/maps?q=" + address + " " + city + "&output=embed";
    document.getElementById("mapExample").src = url;
}
