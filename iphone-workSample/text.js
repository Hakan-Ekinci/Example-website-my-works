var zahl = 1;
var guthaben = 2.000;
var gesamtKosten = 0;


function hinzufuegen(produktname, preis) {
    var warenkorb = document.getElementById("warenkorb");
    var kostenDiv = document.getElementById("gesamtKosten");
    gesamtKosten += preis;


    var vorher = warenkorb.innerHTML;
    var text = "<div>" + zahl + ". " + produktname + "</div>";
    var nachher = vorher + text;

    warenkorb.innerHTML = nachher;
    kostenDiv.innerHTML = "Gesamtkosten: " + gesamtKosten + "€";
    zahl++;
}

function kaufen() {
    if (guthaben >= gesamtKosten) {

        // KAUFEN
        var meldung = document.getElementById("meldung");
        meldung.innerHTML = "Sie haben gekauft!";
        meldung.style.backgroundColor = "green";

        guthaben -= gesamtKosten;
        document.getElementById("guthaben").innerHTML = "Guthaben: <b>" + guthaben + " €</b>";

        gesamtKosten = 0;
        document.getElementById("gesamtKosten").innerHTML = "Gesamt: 0";

        zahl = 1;
        document.getElementById("warenkorb").innerHTML = "";
    } else {

        //NICHT GENUG GELD

        var meldung = document.getElementById("meldung");
        meldung.innerHTML = "Sie haben nicht genügend Geld!";
        meldung.style.backgroundColor = "red";
    }
}