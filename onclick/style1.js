var btnRot = document.createElement("button");
var btnBlau = document.createElement("button");
var btnGruen = document.createElement("button");
btnRot.classList.add("btn");
btnBlau.classList.add("btn");
btnGruen.classList.add("btn");
btnRot.classList.add("rot");
btnBlau.classList.add("blau");
btnGruen.classList.add("gruen");
btnRot.innerHTML = "ROT";
btnBlau.innerHTML = 'BLAU';
btnGruen.innerHTML = "GRÜN";

btnRot.onclick = function() {
    addBox("red");
};
btnBlau.onclick = function() {
    addBox("blue");
}
btnGruen.onclick = function() {
    addBox("green");
}

document.body.appendChild(btnRot);
document.body.appendChild(btnBlau);
document.body.appendChild(btnGruen);

function addBox(farbe) {
    var box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = farbe;

    document.getElementById("con").appendChild(box);
}