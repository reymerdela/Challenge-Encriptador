/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const texto = document.getElementsByTagName("textarea");
const copiar = document.getElementById("copiar");
const campoTexto = document.querySelector('aside');



btnEncriptar.addEventListener("click", () => {
    let textoEncriptado = texto[0].value;
    if(textoEncriptado.length > 0) {
    textoEncriptado = textoEncriptado.replaceAll("e", "enter");
    textoEncriptado = textoEncriptado.replaceAll("i", "imes");
    textoEncriptado = textoEncriptado.replaceAll("a", "ai");
    textoEncriptado = textoEncriptado.replaceAll("o", "ober");
    textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
    console.log(textoEncriptado);
    campoTexto.textContent = textoEncriptado;
    }
});

btnDesencriptar.addEventListener("click", () => {
    let textoDesencriptado = texto[0].value;
    if (textoDesencriptado.length > 0) {
    textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
    console.log(textoDesencriptado);
    campoTexto.innerHTML = textoDesencriptado;
    }
});
