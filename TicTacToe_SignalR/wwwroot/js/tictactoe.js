"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl('/TicTacToeHub').build();
var cptTour = 0;

document.querySelectorAll("td").forEach(td => td.addEventListener("click", function (event) {   
    if (td.firstChild == null) {
    connection.invoke("SendAction", this.id, cptTour).catch(function (err) {
        console.error(err.toString())
    });
    }
    else
        alert("Case déjà jouée");
    event.preventDefault();
}));

connection.start().then(function () {
    console.log("Connecté!");
    GetSymbol();
}).catch(function (err) {
    console.error(err.toString());
});

connection.on("PlaceToken", function (id, cpt) {
    var td = document.getElementById(id);
    cptTour = cpt;
        
    if (cptTour % 2 == 0) {
        let node = document.createElement("div");
        node.style.fontSize = "30px";
        node.style.fontWeight = "Bold";
        node.style.color = "white";
        node.innerHTML = "X";
        td.appendChild(node);
    }
    else {
        let node = document.createElement("div");
        node.style.fontSize = "30px";
        node.style.fontWeight = "Bold";
        node.style.color = "white";
        node.innerHTML = "0";
        td.appendChild(node);
    }
        
    cptTour++;
    GetSymbol();
})

function GetSymbol() {
    var node = document.getElementById("cptTour");
    if (cptTour % 2 == 0)    
        node.innerHTML = "Vous jouez avec le X";       
    else     
        node.innerHTML = "Vous jouez avec le 0";  
}