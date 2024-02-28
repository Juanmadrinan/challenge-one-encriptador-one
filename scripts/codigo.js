// Codigo activador o desactvador del texto encriptado
document.getElementById('FormularioEncriptador').addEventListener("submit", function(e){
    e.preventDefault();
    // Codigo de Encriptación 
    document.getElementById('Encriptar').addEventListener("click", function(event){ 
        event.preventDefault();
        let texto = document.getElementById('texto');
        texto = encriptar(texto.value);
        visibilidad(texto);  
    });
    // Codigo de Desencriptación
    document.getElementById('Desencriptar').addEventListener("click", function(event){ 
        event.preventDefault();
        let texto = document.getElementById('texto');
        texto = desencriptar(texto.value);
        visibilidad(texto);
    });
})


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(texto){
    let array = [];
    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            array[i] = "ai";
        } else if(texto[i]  == "e") {
            array[i] = "enter";
        } else if(texto[i] == "i") {
            array[i] = "imes";
        } else if(texto[i] == "o") {
            array[i] = "ober";
        } else if(texto[i] == "u") {
            array[i] = "ufat";
        } else {
            array.push(texto[i]);
        }
    }

    let conversion = array.join('');
    console.log("-> " + conversion);
    return conversion;
}

// Aprendi a hacerlo de una forma mas rapida :)
function desencriptar(texto) {
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    console.log("-> " + texto);

    return texto;
}

function visibilidad(texto) {
    let verificacion = texto;
    if(verificacion.length > 0 || verificacion == " ") {
        document.getElementById('Visibilidad').style.visibility = "hidden";
        document.getElementById('VisibilidadTexto').style.visibility = "visible";
        document.getElementById('Copy').style.visibility = "visible";
        document.getElementById('TextoEncriptado').innerHTML = texto;

    } else if(verificacion.length == 0){
        document.getElementById('Visibilidad').style.visibility = "initial";
        document.getElementById('VisibilidadTexto').style.visibility = "hidden";
        document.getElementById('Copy').style.visibility = "hidden";

    }
}

async function copiar() {
    var copiarTexto = document.getElementById('TextoEncriptado');

    try {
        await navigator.clipboard.writeText(copiarTexto.textContent);
        console.log('Texto copiado: ' + copiarTexto.value);
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}