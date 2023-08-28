var esconderImagen = document.getElementById("esconder");

function encriptarTexto (){
    
    esconderImagen.style.display = "none"; //Para ocultar la imagen inicial

    var textoIngresado = document.getElementById("mensajeIngresado").value.toLowerCase(); // toLowerCase() para convertir en minuscula
    console.log(textoIngresado);

    //i= Para que tome letras mayusculas y minusculas
    //g= Para que tome en cuenta toda la linea o la oracion
    //m= Para que tome en cuenta multiples lineas

    var textoEncriptado = textoIngresado.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

   document.getElementById("texto-resultado").innerHTML = textoEncriptado;

   const elemento = document.getElementById('copiar');
    elemento.style.display = 'block';
}

function desencriptarTexto (){
    
    esconderImagen.style.display = "none"; //Para ocultar la imagen inicial

    var textoIngresado = document.getElementById("mensajeIngresado").value.toLowerCase(); // toLowerCase() para convertir en minuscula
    console.log(textoIngresado);

    //i= Para que tome letras mayusculas y minusculas
    //g= Para que tome en cuenta toda la linea o la oracion
    //m= Para que tome en cuenta multiples lineas

    var textoEncriptado = textoIngresado.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

   document.getElementById("texto-resultado").innerHTML = textoEncriptado;
}

function copiarTexto(){

    let texto = document.getElementById('texto-resultado').textContent;
    navigator.clipboard.writeText(texto);
    alert('Texto copiado');

}

