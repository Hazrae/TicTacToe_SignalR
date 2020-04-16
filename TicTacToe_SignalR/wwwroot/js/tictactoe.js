"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl('/tictactoeHub').build();
var cptTour;



document.querySelectorAll("td").forEach(td => td.addEventListener("click", function (event) {
    var idElem= this.getAttribute('id');
    connection.invoke("SendMessage", idElem, cptTour).catch(function (err) {
        console.error(err.toString());
    });
    event.preventDefault();
}));


connection.start().then(function () {
    console.log("Connecté!");   
}).catch(function (err) {
    console.error(err.toString());
});

connection.on("ReceiveMessage", function (id, cpt) {
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
/*
document.querySelectorAll("td").forEach(td => td.addEventListener("click", function () {

    var td = document.getElementById(this.id);

    if (td.firstChild == null) {
        if (cptTour % 2 == 0)
            td.appendChild(document.createTextNode("X"));
        else
            td.appendChild(document.createTextNode("0"));
        cptTour++;
    }
    else
        alert("Case déjà jouée");

}));
*/
