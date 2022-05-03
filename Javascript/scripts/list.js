window.onload = function () {
    showGrid();
}
function showGrid() {
    document.getElementById("container").classList.remove('list-container');
    document.getElementById("container").classList.add('grid-container');
}
function showList() {
    document.getElementById("container").classList.remove('grid-container');
    document.getElementById("container").classList.add('list-container');
}



  // document.getElementById("color-box").classList.remove('green-container');
    // document.getElementById("color-box").classList.add('red-container');