var aktuell = 0;
var forms = document.getElementsByClassName("form");
var container = document.getElementById("container");
var alleInputs = container.getElementsByTagName("input");

function nav(n) {
    if (schrittCheck(n))
        return;

    forms[aktuell].style.display = "none";
    aktuell += n;
    forms[aktuell].style.display = "flex";
    document.getElementById("schritt").innerHTML = "Schritt: " + aktuell;

    buttonUpdate(n);
}


function schrittCheck(x) {
    if (aktuell == forms.length - 1 && x == 1) {
        senden();
        return true;
    }

    if (aktuell == 0 && x == -1) {
        return true;
    }

    return false;

}

function buttonUpdate(n) {
    if (aktuell == 0) {
        document.getElementById("zurueck").style.opacity = "0";
    } else {
        document.getElementById("zurueck").style.opacity = "1";
    }

    if (aktuell == forms.length - 1) {
        document.getElementById("weiter").innerHTML = "Senden";
    } else {
        document.getElementById("weiter").innerHTML = "Weiter";
    }
}

function senden() {

    for (var i = 0; i < alleInputs.length; i++) {
        if (alleInputs[i].value == "") {
            alert("Bitte alle Felder ausfüllen!");
            return;
        }
    }

    forms[aktuell].style.display = "none";
    document.getElementById("schritt").style.display = "none";
    document.getElementById("zurueck").style.display = "none";
    document.getElementById("weiter").style.display = "none";

    document.getElementById("gesendet").style.display = "block";
}