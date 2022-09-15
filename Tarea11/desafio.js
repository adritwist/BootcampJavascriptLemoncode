//Clase Hotel y sus métodos

class Hotel {
    constructor(tipoHabitacion, pax, noches, precios) {
        this.tipoHabitacion = tipoHabitacion;
        this.pax = pax;
        this.noches = noches;
        this.precios = precios;
    }

    calculaSubtotal() {
        let precioSinIva = 0;
        let totalPersonaAd = 0;

        if(this.tipoHabitacion === 'standard') {
            precioSinIva = (this.precios * this.noches);
        }

        if(this.tipoHabitacion === 'suite') {
            precioSinIva = (this.precios * this.noches);
        }

        if(this.operador === true) {
            precioSinIva = this.precios * this.noches;
        }

        if(this.pax > 1) {
            totalPersonaAd = (this.pax - 2) + 40
        }

        return precioSinIva + totalPersonaAd;
    }

    precioFinal() {
        let subtotal = this.calculaSubtotal();
        let iva = 0;
        let final = 0;
        iva = subtotal * 0.21;
        final = subtotal + iva;

        return final;
    }
}

//Clase Particular que extiende la clase Hotel

class Particular extends Hotel{
    constructor(habitacion, pax, noches, precios) {
        super(habitacion, pax, noches, precios);
    }
}

//Clase Tour que extiende la clase Hotel con el método precioFinal reescrito

class Tour extends Hotel{
    constructor(habitacion, pax, noches, precios, operador) {
        super(habitacion, pax, noches, precios);
        this.operador = operador;
    }

    precioFinal() {
        let subtotal = this.calculaSubtotal();
        let iva = 0;
        let final = 0;
        iva = subtotal * 0.21;
        final = subtotal + iva;
        if(this.operador === true){
            final =  final - (final * 0.15)
        }

        return final;
    }
}

//Instancias de las clases Particular y Tour

const particular = new Particular('suite', 1, 2, 100);
const particular2 = new Tour('suite', 1, 2, 100, true);

//Salida por consola

console.log('***** Desafio *****')
console.log(' ');
console.log('*** Particular ***')
console.log('El precio de la habitación para el particular es: ' + particular.calculaSubtotal())
console.log('El precio con final de la habitación para el particular es: ' + particular.precioFinal())
console.log(' ');
console.log('*** Tour ***')
console.log('El precio para el tour es: ' + particular2.calculaSubtotal())
console.log('El precio con final de la habitación para el tour es: ' + particular2.precioFinal())