var precio = "";
function tipoHabitacion() {
    var habitacion = document.getElementById('habitacion').value;

    if(habitacion == 'Standard') {
        precio = 100;
    }else if(habitacion == 'Junior Suite') {
        precio = 120;
    }else{
        precio = 150;
    }

    return precio;
}

function spa() {
    var spa = document.getElementById('conSpa');

    if(spa.checked == true) {
        precio = 20;
    }else {
        precio = 0;
    }

    return precio;
}

function parking() {
    var nocheParking = document.getElementById('nochesParking').value;
    precio = 10;

    return precio * nocheParking;
}

var enviar = document.getElementById('submit');
enviar.addEventListener('click', function() {
    var precioHabitacion = tipoHabitacion();
    var precioSpa = spa();
    var precioParking = parking();
    var resultado = document.getElementById('resultado');
    var habitacion = document.getElementById('habitacionTipo').value;
    var noches = document.getElementById('numeroNoches').value;
    var precio = precioHabitacion + precioSpa + precioParking;
    var precioIva = precio * 0.25;
    var precioFinal = "";

    if(habitacion == 'Individual') {
        precioFinal = precio - precioIva;
    }else if(habitacion == 'Triple') {
        precioFinal = precio + precioIva;
    }else {
        precioFinal = precio;
    }
    
    resultado.innerHTML = 'El precio total que has seleccionado es: ' + precioFinal * noches + ' €';

})