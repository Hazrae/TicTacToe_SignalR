"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl('/TicTacToeHub').build();
var cptTour = 0;


document.querySelectorAll("td").forEach(td => td.addEventListener("click", function (event) {   
    connection.invoke("SendAction", this.id, cptTour).catch(function (err) {
        console.error(err.toString());
    });
    event.preventDefault();
}));


connection.start().then(function () {
    console.log("Connecté!");   
}).catch(function (err) {
    console.error(err.toString());
});

connection.on("PlaceToken", function (id, cpt) {
    var td = document.getElementById(id);
    cptTour = cpt;

    if (td.firstChild == null) {
        if (cptTour % 2 == 0)
            td.appendChild(document.createTextNode("X"));
        else
            td.appendChild(document.createTextNode("0"));
        cptTour++;
    }
    else
        alert("Case déjà jouée");
})