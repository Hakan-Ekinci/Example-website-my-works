var bild1 = document.getElementById("bild1");
var bild2 = document.getElementById("bild2");
var bild3 = document.getElementById("bild3");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

var slide = 1;

function next() {
    slide++; // slide = slide + 1


    if (slide == 2) // von slide 1 zu 2 wechseln
    {
        bild1.style.opacity = "0";
        bild2.style.opacity = "100%";

        text1.style.opacity = "0";
        text2.style.opacity = "100%";
    } else if (slide == 3) // von slide 2 zu 3 wechseln
    {
        bild2.style.opacity = "0";
        bild3.style.opacity = "100%";

        text2.style.opacity = "0";
        text3.style.opacity = "100%";
    } else // von vorne anfangen, slide 3 zu 1 wechseln
    {
        bild3.style.opacity = "0";
        bild1.style.opacity = "100%";

        text3.style.opacity = "0";
        text1.style.opacity = "100%";

        slide = 1;
    }
}

function prev() {
    slide--; // slide = slide - 1;

    if (slide == 0) // zurückspulen zum 3. Slide
    {
        bild1.style.opacity = "0";
        bild3.style.opacity = "100%";

        text1.style.opacity = "0";
        text3.style.opacity = "100%";

        slide = 3;
    } else if (slide == 1) // von slide 2 zu 1 wechseln
    {
        bild2.style.opacity = "0";
        bild1.style.opacity = "100%";

        text2.style.opacity = "0";
        text1.style.opacity = "100%";
    } else if (slide == 2) // von slide 3 zu 2 wechseln
    {
        bild3.style.opacity = "0";
        bild2.style.opacity = "100%";

        text3.style.opacity = "0";
        text2.style.opacity = "100%";
    }

}