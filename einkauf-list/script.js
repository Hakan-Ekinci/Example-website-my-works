var input = document.getElementById("inp");
var liste = document.getElementById("liste");
var hell = true;
var listenElemente = [];

function add() {
    var div = document.createElement("div");

    var iconKreuz = document.createElement("i");
    iconKreuz.classList.add("fas", "fa-times");
    iconKreuz.onclick = function() {
        iconKreuz.parentNode.remove();
    }

    var span = document.createElement("span");
    span.innerHTML = input.value;

    var iconCheck = document.createElement("i");
    iconCheck.classList.add("fas", "fa-check");
    iconCheck.onclick = function() {
        var parent = iconCheck.parentNode;
        parent.style.backgroundColor = "#bbbbbb";
        parent.style.color = "#777777";

        parent.childNodes[1].style.textDecoration = "line-through";
    }

    div.appendChild(iconKreuz);
    div.appendChild(span);
    div.appendChild(iconCheck);

    if (hell) {
        div.style.backgroundColor = "#7a65ff";
        hell = false;
    } else {
        div.style.backgroundColor = "#4c3daa";
        hell = true;
    }
    liste.appendChild(div);
    input.value = "";

    listenElemente[listenElemente.length] = div;
}