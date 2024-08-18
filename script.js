/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/*
"gato" => "gaitober"
gaitober" => "gato" 
*/

function encriptar() {
    let entrada = document.querySelector(".encriptar").value;
    let texto = entrada
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    entrada = document.querySelector(".encriptar").value = "";
    document.querySelector(".resultado").value = texto;
    document.querySelector(".resultado").style.background = "none";
    document.querySelector("h2").style.display = "none";
    document.querySelector("p").style.display = "none";
    document.querySelector(".btn-copiar").style.visibility = "visible";
}

function copiarTexto() {
    let texto = document.querySelector(".resultado").value;
    navigator.clipboard.writeText(texto);
    document.querySelector("h2").style.display = "initial";
    document.querySelector("p").style.display = "initial";
    document.querySelector(".btn-copiar").style.visibility = "hidden";
    const resultado = document.querySelector(".resultado");
    resultado.style.background = "var(--color-terciario) url('assets/Muñeco.png') no-repeat";
    resultado.style.backgroundPosition= "32px 243px";
    resultado.style.backgroundSize= "auto";
    resultado.value = "";
}

function desencriptar() {
    let entrada = document.querySelector(".encriptar").value;
    let textoCifrado = entrada
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    entrada = document.querySelector(".encriptar").value = "";
    document.querySelector(".resultado").value = textoCifrado;
    document.querySelector(".resultado").style.background = "none";
    document.querySelector("h2").style.display = "none";
    document.querySelector("p").style.display = "none";
    document.querySelector(".btn-copiar").style.visibility = "visible";
    
}

