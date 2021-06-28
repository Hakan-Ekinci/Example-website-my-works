var guenstig = document.getElementById("guenstig");
var fair = document.getElementById("fair");
var teuer = document.getElementById("teuer");

var inputMarke = document.getElementById("marke");
var inputPreis = document.getElementById("preis");

var titelContainer = document.getElementById("titel");
var listeContainer = document.getElementById("liste");
var titelKinder = titelContainer.getElementsByTagName("span");
var listeKinder = listeContainer.getElementsByTagName("div");

var zahl = [];

var prozent = 100 / titelKinder.length;

for (var i = 0; i < titelKinder.length; i++) {
    titelKinder[i].style.width = prozent + "%";
    listeKinder[i].style.width = prozent + "%";

    zahl[i] = 1;
}

function add() {
    var text = inputMarke.value;
    var preis = parseInt(inputPreis.value);

    sortieren(preis, text);
}

function sortieren(preis, text) {
    var span = document.createElement("span");

    if (preis < 5000) {
        //günstig
        span.innerHTML = zahl[0] + ". " + text;
        guenstig.appendChild(span);
        zahl[0]++;
    } else if (preis < 15000) {
        //fair
        span.innerHTML = zahl[1] + ". " + text;
        fair.appendChild(span);
        zahl[1]++;
    } else {
        //teuer
        span.innerHTML = zahl[2] + ". " + text;
        teuer.appendChild(span);
        zahl[2]++;
    }
}