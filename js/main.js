const btn1 = document.getElementById("coffee");
const btn2 = document.getElementById("flan");
const btn3 = document.getElementById("frozen");
const btn4 = document.getElementById("cookie");
const btn5 = document.getElementById("icecream");
const btn6 = document.getElementById("egg");
const btn7 = document.getElementById("cakepop");
const btn8 = document.getElementById("popsicle");
const btn9 = document.getElementById("cake");
const btn10 = document.getElementById("toast");
const modo = document.getElementById("luna");
const txt = document.getElementById("calorias");

const header = document.querySelector("header");
const section = document.querySelector("section");
const body = document.querySelector("body");

//Imagenes:
const img1 = document.getElementById("coffee2");
const img2 = document.getElementById("flan2");
const img3 = document.getElementById("frozen2");
const img4 = document.getElementById("cookie2");
const img5 = document.getElementById("icecream2");
const img6 = document.getElementById("egg2");
const img7 = document.getElementById("cakepop2");
const img8 = document.getElementById("popsicle2");
const img9 = document.getElementById("cake2");
const img10 = document.getElementById("toast2");

modo.addEventListener("click", function () {
    modo1();
});

btn1.addEventListener("click", function () {
    calorie1();
});

btn2.addEventListener("click", function () {
    calorie2();
});

btn3.addEventListener("click", function () {
    calorie3();
});

btn4.addEventListener("click", function () {
    calorie4();
});

btn5.addEventListener("click", function () {
    calorie5();
});

btn6.addEventListener("click", function () {
    calorie6();
});

btn7.addEventListener("click", function () {
    calorie7();
});

btn8.addEventListener("click", function () {
    calorie8();
});

btn9.addEventListener("click", function () {
    calorie9();
});

btn10.addEventListener("click", function () {
    calorie10();
});

function calorie1(){
    valor = parseInt(txt.innerHTML)
    img1.classList.toggle("gris");

    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn1.classList.toggle("colordark");
    } else {
        btn1.classList.toggle("color");
    }
    //const valor2 = 300;
    if (btn1.classList.contains("color") || btn1.classList.contains("colordark")){
        txt.innerHTML = valor + 55; 
    }else{
        txt.innerHTML = valor - 55;
    }
}

function calorie2(){
    valor = parseInt(txt.innerHTML)
    img2.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn2.classList.toggle("colordark");
    } else {
        btn2.classList.toggle("color");
    }

    if (btn2.classList.contains("color") || btn2.classList.contains("colordark")){
        txt.innerHTML = valor + 241
    }else{
        txt.innerHTML = valor- 241
    }
}

function calorie3(){
    valor = parseInt(txt.innerHTML)
    img3.classList.toggle("gris");

    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn3.classList.toggle("colordark");
    } else {
        btn3.classList.toggle("color");
    }
    
    if (btn3.classList.contains("color") || btn3.classList.contains("colordark")){
        txt.innerHTML = valor + 285
    }else{
        txt.innerHTML = valor- 285
    }
}

function calorie4(){
    valor = parseInt(txt.innerHTML)
    img4.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn4.classList.toggle("colordark");
    } else {
        btn4.classList.toggle("color");
    }

    if (btn4.classList.contains("color") || btn4.classList.contains("colordark")){
        txt.innerHTML = valor + 253
    }else{
        txt.innerHTML = valor - 253
    }
}

function calorie5(){
    valor = parseInt(txt.innerHTML)
    img5.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn5.classList.toggle("colordark");
    } else {
        btn5.classList.toggle("color");
    }

    if (btn5.classList.contains("color") || btn5.classList.contains("colordark")){
        txt.innerHTML = valor + 207 
    }else{
        txt.innerHTML = valor - 207
    }
}

function calorie6(){
    valor = parseInt(txt.innerHTML)
    img6.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn6.classList.toggle("colordark");
    } else {
        btn6.classList.toggle("color");
    }

    if (btn6.classList.contains("color") || btn4.classList.contains("colordark")){
        txt.innerHTML = valor + 155
    }else{
        txt.innerHTML = valor - 155
    }
}

function calorie7(){
    valor = parseInt(txt.innerHTML)
    img7.classList.toggle("gris");

    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn7.classList.toggle("colordark");
    } else {
        btn7.classList.toggle("color");
    }
    
    if (btn7.classList.contains("color") || btn7.classList.contains("colordark")){
        txt.innerHTML = valor + 133
    }else{
        txt.innerHTML = valor - 133
    }
}

function calorie8(){
    valor = parseInt(txt.innerHTML)
    img8.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn8.classList.toggle("colordark");
    } else {
        btn8.classList.toggle("color");
    }

    if (btn8.classList.contains("color") || btn8.classList.contains("colordark")){
        txt.innerHTML = valor + 88
    }else{
        txt.innerHTML = valor - 88
    }
}

function calorie9(){
    valor = parseInt(txt.innerHTML)
    img9.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn9.classList.toggle("colordark");
    } else {
        btn9.classList.toggle("color");
    }

    if (btn9.classList.contains("color") || btn9.classList.contains("colordark")){
        txt.innerHTML = valor + 297
    }else{
        txt.innerHTML = valor - 297
    }
}

function calorie10(){
    valor = parseInt(txt.innerHTML)
    img10.classList.toggle("gris");
    
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
        btn10.classList.toggle("colordark");
    } else {
        btn10.classList.toggle("color");
    }

    if (btn10.classList.contains("color") || btn10.classList.contains("colordark")){
        txt.innerHTML = valor + 70 
    }else{
        txt.innerHTML = valor - 70
    }
}

function modo1(){
    if (body.style.backgroundColor==="rgb(36, 47, 64)") {
    modo.src="resources/luna.png"

    header.style.backgroundColor = " #B6CEE4"
    body.style.backgroundColor = "#D7ECF7"
    section.style.color = "black"

    if (btn1.classList.contains("colordark")){
        btn1.classList.remove("colordark")
        btn1.classList.add("color")
    }
    if (btn2.classList.contains("colordark")){
        btn2.classList.remove("colordark")
        btn2.classList.add("color")
    }
    if (btn3.classList.contains("colordark")){
        btn3.classList.remove("colordark")
        btn3.classList.add("color")
    }
    if (btn4.classList.contains("colordark")){
        btn4.classList.remove("colordark")
        btn4.classList.add("color")
    }
    if (btn5.classList.contains("colordark")){
        btn5.classList.remove("colordark")
        btn5.classList.add("color")
    }
    if (btn6.classList.contains("colordark")){
        btn6.classList.remove("colordark")
        btn6.classList.add("color")
    }
    if (btn7.classList.contains("colordark")){
        btn7.classList.remove("colordark")
        btn7.classList.add("color")
    }
    if (btn8.classList.contains("colordark")){
        btn8.classList.remove("colordark")
        btn8.classList.add("color")
    }
    if (btn9.classList.contains("colordark")){
        btn9.classList.remove("colordark")
        btn9.classList.add("color")
    }
    if (btn10.classList.contains("colordark")){
        btn10.classList.remove("colordark")
        btn10.classList.add("color")
    }
    } else {
    modo.src="resources/sol.png"

    header.style.backgroundColor = "#2D627F"
    body.style.backgroundColor = "#242f40"
    section.style.color = "white"

    if (btn1.classList.contains("color")){
        btn1.classList.remove("color")
        btn1.classList.add("colordark")
    }
    if (btn2.classList.contains("color")){
        btn2.classList.remove("color")
        btn2.classList.add("colordark")
    }
    if (btn3.classList.contains("color")){
        btn3.classList.remove("color")
        btn3.classList.add("colordark")
    }
    if (btn4.classList.contains("color")){
        btn4.classList.remove("color")
        btn4.classList.add("colordark")
    }
    if (btn5.classList.contains("color")){
        btn5.classList.remove("color")
        btn5.classList.add("colordark")
    }
    if (btn6.classList.contains("color")){
        btn6.classList.remove("color")
        btn6.classList.add("colordark")
    }
    if (btn7.classList.contains("color")){
        btn7.classList.remove("color")
        btn7.classList.add("colordark")
    }
    if (btn8.classList.contains("color")){
        btn8.classList.remove("color")
        btn8.classList.add("colordark")
    }
    if (btn9.classList.contains("color")){
        btn9.classList.remove("color")
        btn9.classList.add("colordark")
    }
    if (btn10.classList.contains("color")){
        btn10.classList.remove("color")
        btn10.classList.add("colordark")
    }
  }    
}