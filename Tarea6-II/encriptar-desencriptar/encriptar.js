var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' " ;
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";

function encriptacion() {
    var mensaje1 = document.getElementById('mensaje1').value
    var mensaje2 = document.getElementById('mensaje2')
    var resultadoFinal = "";
    var tamaño = mensaje1.length;

    for(var i = 0; i < tamaño; i++) {
        for(var j = 0; j < plainAlphabet.length; j++) {
            if(mensaje1[i] == plainAlphabet[j]) {
                var posicion = j;
                switch(posicion) {
                    case j: 
                        resultadoFinal += encryptedAlphabet[j]
                        break;
                }
            }
        }
    }
    mensaje2.value = "";
    mensaje2.value += resultadoFinal
}

function desencriptacion() {
    var mensaje1 = document.getElementById('mensaje1')
    var mensaje2 = document.getElementById('mensaje2').value
    var resultadoFinal = "";
    var tamaño = mensaje2.length;

    for(var i = 0; i < tamaño; i++) {
        for(var j = 0; j < encryptedAlphabet.length; j++) {
            if(mensaje2[i] == encryptedAlphabet[j]) {
                var posicion = j;
                switch(posicion) {
                    case j: 
                        resultadoFinal += plainAlphabet[j]
                        break;
                }
            }
        }
    }
    mensaje1.value = "";
    mensaje1.value += resultadoFinal
}

var encriptar = document.getElementById('encriptar')

encriptar.addEventListener('click', function() {
    encriptacion();
})

var desencriptar = document.getElementById('desencriptar')

desencriptar.addEventListener('click', function() {
    desencriptacion();
})