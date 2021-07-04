const nav = document.getElementById("navigation");
const aElemete = nav.getElementsByTagName("a");

let istAuf = false;

function menuKlick() {
    if (istAuf)
        nav.style.height = "54px";
    else
        nav.style.height = "320px";

    istAuf = !istAuf;
}