const empleado = {
    bruto: 10500,
    hijos: 2,
    pagas: 14,
};

var comprobar = true;
switch(comprobar) {
    case empleado.bruto < 12000:
        document.write('<p>Sueldo anual: ' + empleado.bruto + ' €</p>');
        document.write('<p>Sueldo mensual: ' + empleado.bruto / empleado.pagas + ' €</p>');
        break;

    case empleado.bruto < 24000:
        if(empleado.hijos > 0) {
            var retencion = empleado.bruto * (0.08 - 0.02);
            var sueldoFinal = empleado.bruto -retencion;
            var sueldoMensual = sueldoFinal / empleado.pagas;
            document.write('<p>Sueldo anual: ' + sueldoFinal + ' €</p>');
            document.write('<p>Sueldo mensual: ' + Math.round(sueldoMensual) + ' €</p>');
        }else {
            var retencion = empleado.bruto * 0.08;
            var sueldoFinal = empleado.bruto -retencion;
            var sueldoMensual = sueldoFinal / empleado.pagas;
            document.write('<p>Sueldo anual: ' + sueldoFinal + ' €</p>');
            document.write('<p>Sueldo mensual: ' + Math.round(sueldoMensual) + ' €</p>');
        }
        break;

    case empleado.bruto < 34000:
        if(empleado.hijos > 0) {
            var retencion = empleado.bruto * (0.16 - 0.02);
            var sueldoFinal = empleado.bruto -retencion;
            var sueldoMensual = sueldoFinal / empleado.pagas;
            document.write('<p>Sueldo anual: ' + sueldoFinal + ' €</p>');
            document.write('<p>Sueldo mensual: ' + Math.round(sueldoMensual) + ' €</p>');
        }else {
            var retencion = empleado.bruto * 0.16;
            var sueldoFinal = empleado.bruto -retencion;
            var sueldoMensual = sueldoFinal / empleado.pagas;
            document.write('<p>Sueldo anual: ' + sueldoFinal + ' €</p>');
            document.write('<p>Sueldo mensual: ' + Math.round(sueldoMensual) + ' €</p>');
        }
    
        break;
        
    case empleado.bruto > 34000:
        if(empleado.hijos > 0) {
            var retencion = empleado.bruto * (0.30 - 0.02);
            var sueldoFinal = empleado.bruto -retencion;
            var sueldoMensual = sueldoFinal / empleado.pagas;
            document.write('<p>Sueldo anual: ' + sueldoFinal + ' €</p>');
            document.write('<p>Sueldo mensual: ' + Math.round(sueldoMensual) + ' €</p>');
        }else {
            var retencion = empleado.bruto * 0.30;
            var sueldoFinal = empleado.bruto -retencion;
            var sueldoMensual = sueldoFinal / empleado.pagas;
            document.write('<p>Sueldo anual: ' + sueldoFinal + ' €</p>');
            document.write('<p>Sueldo mensual: ' + Math.round(sueldoMensual) + ' €</p>');
        }
        break;
}