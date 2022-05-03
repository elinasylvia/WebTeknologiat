var counter = 0;
window.onload = function () {
    $("#spinner").hide();
}

$("#button").click(function () {
    $("#spinner").show();
    counter++;
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        dataType: "json",
        success: function (response) {
            // show data in DIV

            createCollapseItem("element" + counter, counter, response.value);
            $("#spinner").hide();

        },
        error: function (jqxhr, textStatus, error) {
            console.log("Error: " + textStatus);
        },
    });
});
function createCollapseItem(id, counter, text) {
    let element = document.createElement("div");
    element.classList.add("card");
    let heading = document.createElement("div");
    heading.classList.add("card-header");
    element.appendChild(heading);
    let button = document.createElement("a");
    button.classList.add("collapsed");
    button.classList.add("btn");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("href", "#" + id);
    button.innerText = "Joke " + counter;
    heading.appendChild(button);
    let textContainer = document.createElement("div");
    textContainer.id = id;
    textContainer.classList.add("collapse");
    textContainer.setAttribute("aria-expanded", "false");
    textContainer.setAttribute("data-bs-parent", "#accordion")
    let textElement = document.createElement("div");
    textElement.classList.add("card-body");
    textElement.innerText = text;
    textContainer.appendChild(textElement);
    element.appendChild(textContainer);
    document.getElementById("accordion").appendChild(element);

}
