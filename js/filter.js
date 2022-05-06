const btn1 = document.getElementById("ex1");
const btn2 = document.getElementById("ex2");
const btn3 = document.getElementById("ex3");
const btn4 = document.getElementById("ex4");
const btn5 = document.getElementById("ex5");
const btn6 = document.getElementById("ex6");
const btn7 = document.getElementById("ex7");

const cont1 = document.getElementById("c-ex1");
const cont2 = document.getElementById("c-ex2");
const cont3 = document.getElementById("c-ex3");
const cont4 = document.getElementById("c-ex4");
const cont5 = document.getElementById("c-ex5");
const cont6 = document.getElementById("c-ex6");
const cont7 = document.getElementById("c-ex7");


btn1.onclick = function () {
    cont1.style.display = "block";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";


    document.getElementById('cajaTexto1').value = "";
}

btn2.onclick = function () {
    cont1.style.display = "none";
    cont2.style.display = "block";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";

}

btn3.onclick = function () {
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "block";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
}

btn4.onclick = function () {
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "block";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
}

btn5.onclick = function () {
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "block";
    cont6.style.display = "none";
    cont7.style.display = "none";


    document.getElementById('cajaTexto5').value = "";
}


btn6.onclick = function () {
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "block";
    cont7.style.display = "none";


    document.getElementById('cajaTexto6').value = "";
}


btn7.onclick = function () {
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "block";
}