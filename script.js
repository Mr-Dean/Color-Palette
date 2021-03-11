const hex = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const button = document.querySelector(".button")




//Generates a random hex code.
const getHex = () => {
    const getRandomHex = () => {
        return Math.floor(Math.random() * hex.length);
    }
    
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomHex()];
    }
    return hexColor;
}


//Creates an array with 16 randomly generated hex codes from "getHex()"
function hexList() {
    let randomHex = []
    for (let i = 0; i < 16; i++) {
        randomHex.push(getHex())
    }
    return randomHex;
}


//Picks a random hex code from hexList Array.
const randomHexArray = () => {
    return Math.floor(Math.random() * hexList().length);
}

button.addEventListener("click", function() {
    document.querySelector(".color1").textContent = hexList()[0];
    document.querySelector(".color2").textContent = hexList()[1];
    document.querySelector(".color3").textContent = hexList()[2];
    document.querySelector(".color4").textContent = hexList()[3];
    document.querySelector(".color5").textContent = hexList()[4];
    document.querySelector(".color6").textContent = hexList()[5];
    document.querySelector(".color7").textContent = hexList()[6];
    document.querySelector(".color8").textContent = hexList()[7];
    document.querySelector(".color9").textContent = hexList()[8];
    document.querySelector(".color10").textContent = hexList()[9];
    document.querySelector(".color11").textContent = hexList()[10];
    document.querySelector(".color12").textContent = hexList()[11];
    document.querySelector(".color13").textContent = hexList()[12];
    document.querySelector(".color14").textContent = hexList()[13];
    document.querySelector(".color15").textContent = hexList()[14];
    document.querySelector(".color16").textContent = hexList()[15];
   




    document.querySelector(".pallete1").style.backgroundColor = hexList()[0];
    document.querySelector(".pallete2").style.backgroundColor = hexList()[1];
    document.querySelector(".pallete3").style.backgroundColor = hexList()[2];
    document.querySelector(".pallete4").style.backgroundColor = hexList()[3];
    document.querySelector(".pallete5").style.backgroundColor = hexList()[4];
    document.querySelector(".pallete6").style.backgroundColor = hexList()[5];
    document.querySelector(".pallete7").style.backgroundColor = hexList()[6];
    document.querySelector(".pallete8").style.backgroundColor = hexList()[7];
    document.querySelector(".pallete9").style.backgroundColor = hexList()[8];
    document.querySelector(".pallete10").style.backgroundColor = hexList()[9];
    document.querySelector(".pallete11").style.backgroundColor = hexList()[10];
    document.querySelector(".pallete12").style.backgroundColor = hexList()[11];
    document.querySelector(".pallete13").style.backgroundColor = hexList()[12];
    document.querySelector(".pallete14").style.backgroundColor = hexList()[13];
    document.querySelector(".pallete15").style.backgroundColor = hexList()[14];
    document.querySelector(".pallete16").style.backgroundColor = hexList()[15];
})



