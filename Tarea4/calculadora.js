function sumar(num1, num2) {
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    var resultado = "";
    var mostrar = document.getElementById('resultado');

    if(!num1 || !num2) {
        mostrar.innerHTML = "Error";
    }else {
        resultado = parseInt(num1) + parseInt(num2);
        mostrar.innerHTML = 'El resultado de sumar ' + num1  + " + " + num2 + ' es ' + resultado;
    }
   
}

function restar(num1, num2) {
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    var resultado = "";
    var mostrar = document.getElementById('resultado');

    if(!num1 || !num2) {
        mostrar.innerHTML = "Error";
    }else {
        resultado = parseInt(num1) - parseInt(num2);
        mostrar.innerHTML = 'El resultado de restar ' + num1  + " - " + num2 + ' es ' + resultado;
    }
}

function multiplicacion(num1, num2) {
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    var resultado = "";
    var mostrar = document.getElementById('resultado');

    if(!num1 || !num2) {
        mostrar.innerHTML = "Error";
    }else {
        var resultado = parseInt(num1) * parseInt(num2);
        mostrar.innerHTML = 'El resultado de multiplicar ' + num1  + " * " + num2 + ' es ' + resultado;
    }
}

function division(num1, num2) {
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    var resultado = "";
    var mostrar = document.getElementById('resultado');

    if(!num1 || !num2) {
        mostrar.innerHTML = "Error";
    }else {
        var resultado = parseInt(num1) / parseInt(num2);
        mostrar.innerHTML = 'El resultado de dividir ' + num1  + " / " + num2 + ' es ' + resultado;
    }
   
}

var suma = document.getElementById('sumar');
var resta = document.getElementById('restar');
var multiplicar = document.getElementById('multiplicar');
var dividir = document.getElementById('dividir');

suma.addEventListener("click", function() {
    sumar();
})

resta.addEventListener("click", function() {
    restar();
})

multiplicar.addEventListener("click", function() {
    multiplicacion();
})

dividir.addEventListener("click", function() {
    division();
})