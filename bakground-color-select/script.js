var liste = document.getElementById("liste");
var spanText = document.getElementById("hintergrundText")

function farbeAendern() {
    var auswahl = liste.value;
    document.body.style.backgroundColor = auswahl;

    var optionen = liste.options;
    var index = liste.selectedIndex;
    var innerText = optionen[index].innerHTML;

    spanText.innerHTML = innerText;
}