var inputBeschreibung = document.getElementById("beschreibungInput");
var inputBetrag = document.getElementById("betragInput");
var liste = document.getElementById("liste");




function add() {
    if (inputCheck() == false) {
        return;
    }

    transactionAdd();
    clear();
}

function inputCheck() {
    if (inputBeschreibung.value == "") {
        inputBeschreibung.style.boxShadow = "var(--minusShadow)";
        return false;
    } else if (inputBetrag.value == "") {
        inputBetrag.style.border = "1px solid var(--minus)";
        inputBetrag.style.borderRight = "none";
        return false;
    } else if (/^[-+]?[0-9]+$/.test(inputBetrag.value) == false) //wenn es etwas anderes als Zahlen gibt
    {
        inputBetrag.style.border = "1px solid var(--minus)";
        inputBetrag.style.borderRight = "none";
        return false;
    }

    return true;
}

function transactionAdd() {
    var divContainer = document.createElement("div");
    var spanFirst = document.createElement("span");
    var divBeschreibung = document.createElement("div");
    var spanLast = document.createElement("span");

    spanFirst.innerHTML = "+";
    spanLast.innerHTML = mitPunkt(inputBetrag.value) + " €";
    divBeschreibung.innerHTML = inputBeschreibung.value;

    var betragZahl = parseInt(inputBetrag.value);

    if (betragZahl < 0) {
        spanFirst.innerHTML = "-";
        spanFirst.style.backgroundColor = "var(--minus)";
        spanLast.style.backgroundColor = "var(--minus)";
    }

    divContainer.appendChild(spanFirst);
    divContainer.appendChild(divBeschreibung);
    divContainer.appendChild(spanLast);

    liste.appendChild(divContainer);
}

function clear() {
    inputBeschreibung.value = "";
    inputBetrag.value = "";

    inputBetrag.style.boxShadow = "none";
    inputBeschreibung.style.boxShadow = "none";
}


function mitPunkt(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function changeBeschreibung() {
    if (inputBeschreibung.value == "") {
        inputBeschreibung.style.boxShadow = "var(--minusShadow)";
    } else {
        inputBeschreibung.style.boxShadow = "var(--plusShadow)";
    }
}

function changeBetrag() {
    if (inputBetrag.value == "") {
        inputBetrag.style.boxShadow = "var(--minusShadow)";
    } else if (/^[-+]?[0-9]+$/.test(inputBetrag.value) == false) {
        inputBetrag.style.boxShadow = "var(--minusShadow)";
    } else {
        inputBetrag.style.boxShadow = "var(--plusShadow)";
    }
}