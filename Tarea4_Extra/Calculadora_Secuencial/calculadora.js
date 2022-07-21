var igual = document.getElementById('igual');
var sumar = document.getElementById('sumar');
var restar = document.getElementById('restar');
var multiplicar = document.getElementById('multiplicar');
var dividir = document.getElementById('dividir');
var num1 = "";
var operacion = "";


function suma() {
    operacion = 'sumar';
    return operacion;
}

sumar.addEventListener('click', function() {
    num1 = document.getElementById('numero').value;
    suma();
})

function resta() {
    operacion = 'resta';
    return operacion;
}

restar.addEventListener('click', function() {
    num1 = document.getElementById('numero').value;
    resta();
})


function multiplica() {
    operacion = 'multiplicar';
    return operacion;
}

multiplicar.addEventListener('click', function() {
    num1 = document.getElementById('numero').value;
    multiplica();
})

function divide() {
    operacion = 'dividir';
    return operacion;
}

dividir.addEventListener('click', function() {
    num1 = document.getElementById('numero').value;
    divide();
})

igual.addEventListener('click', function() { 
    var num2 = document.getElementById('numero').value;
    var resultado = 0;
    var mostrar = document.getElementById('result');
    if(operacion == 'sumar') {
        resultado = parseInt(num1) + parseInt(num2);

        mostrar.innerHTML = num1 + ' + ' + num2 + ' = ' + resultado;
    }else if(operacion == 'resta') {
        resultado = parseInt(num1) - parseInt(num2);

        mostrar.innerHTML = num1 + ' - ' + num2 + ' = ' + resultado;
    }else if(operacion == 'multiplicar') {
        resultado = parseInt(num1) * parseInt(num2);

        mostrar.innerHTML = num1 + ' x ' + num2 + ' = ' + resultado;
    }else if(operacion == 'dividir') {
        resultado = parseInt(num1) / parseInt(num2);

        mostrar.innerHTML = num1 + ' / ' + num2 + ' = ' + resultado;

    }
 
    
})



