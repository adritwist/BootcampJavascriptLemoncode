//Clase reservas con sus métodos

class Reservas {
    constructor(tipoHabitacion, pax, noches, operador, desayuno) {
        this.tipoHabitacion = tipoHabitacion;
        this.pax = pax;
        this.noches = noches;
        this.operador = operador;
        this.desayuno = desayuno;
    }

    calculaSubtotal() {
        let precioSinIva = 0;
        let totalPersonaAd = 0;

        if(this.tipoHabitacion === 'standard') {
            precioSinIva = (100 * this.noches);
        }

        if(this.tipoHabitacion === 'suite') {
            precioSinIva = (150 * this.noches);
        }

        if(this.operador === true) {
            precioSinIva = 100 * this.noches;
        }

        if(this.pax > 1 && this.operador === false) {
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
        if(this.operador === true){
            final =  final - (final * 0.15)
        }

        return final;
    }

    desayunoInc() {
        let precio = this.precioFinal();
        let precioDesayuno = 0;
        if(this.desayuno === true) {
            precioDesayuno = this.noches * 15 
        }else {
            return precio;
        }

        return precioDesayuno + precio
    }
}

//Datos del hotel

const reservas = [
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      desayuno: true,
      pax: 2,
      noches: 1
    }
];

const reservasOperador = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1
    }
];

//Instancias de la clase Reservas

const reserva1 = new Reservas(reservas[0].tipoHabitacion, reservas[0].pax, reservas[0].noches, false)
const reserva2 = new Reservas(reservas[1].tipoHabitacion, reservas[1].pax, reservas[1].noches, false)
const reserva3 = new Reservas(reservas[2].tipoHabitacion, reservas[2].pax, reservas[2].noches, false)

//Salidas por consola

console.log('***** Caso 1 *****');
console.log(' ');

console.log('** Reserva 1 **');
console.log('El subtotal de la reserva 1 es: ' + reserva1.calculaSubtotal() + ' €')
console.log('El total es: ' + reserva1.precioFinal()  + ' €')
console.log(' ');
console.log('** Reserva 2 **');

console.log('El subtotal de la reserva 2 es: ' + reserva2.calculaSubtotal() + ' €')
console.log('El total es: ' + reserva2.precioFinal() + ' €')
console.log(' ');

console.log('** Reserva 3 **');

console.log('El subtotal de la reserva 3 es: ' + reserva3.calculaSubtotal() + ' €')
console.log('El total es: ' + reserva3.precioFinal() + ' €')

//Instancias usando los datos de reservasOperador

const reservaOp1 = new Reservas(reservasOperador[0].tipoHabitacion, reservasOperador[0].pax, reservasOperador[0].noches,true)
const reservaOp2 = new Reservas(reservasOperador[1].tipoHabitacion, reservasOperador[1].pax, reservasOperador[1].noches, true)
const reservaOp3 = new Reservas(reservasOperador[2].tipoHabitacion, reservasOperador[2].pax, reservasOperador[2].noches, true)

//Salidas por consola

console.log(' ');
console.log('***** Caso 2 *****');
console.log(' ');

console.log('** Reserva 1 **');

console.log('El subtotal de la reserva 1 es: ' + reservaOp1.calculaSubtotal() + ' €')
console.log('El total es: ' + reservaOp1.precioFinal()  + ' €')
console.log(' ');

console.log('** Reserva 2 **');

console.log('El subtotal de la reserva 2 es: ' + reservaOp2.calculaSubtotal() + ' €')
console.log('El total es: ' + reservaOp2.precioFinal() + ' €')
console.log(' ');

console.log('** Reserva 3 **');

console.log('El subtotal de la reserva 3 es: ' + reservaOp3.calculaSubtotal() + ' €')
console.log('El total es: ' + reservaOp3.precioFinal() + ' €')

//Empieza la tarea adicional

console.log(' ');
console.log('***** Adicional *****');

//Instancias incluyendo el desayuno

const reservaDe1 = new Reservas(reservas[0].tipoHabitacion, reservas[0].pax, reservas[0].noches, false, reservas[0].desayuno)
const reservaDe2 = new Reservas(reservas[1].tipoHabitacion, reservas[1].pax, reservas[1].noches, false, reservas[1].desayuno)
const reservaDe3 = new Reservas(reservas[2].tipoHabitacion, reservas[2].pax, reservas[2].noches, false, reservas[2].desayuno)


// Salida por consola

console.log(' ');
console.log('** Reserva 1 **');
console.log('El subtotal de la reserva 1 es: ' + reservaDe1.calculaSubtotal() + ' €')
console.log('El total es: ' + reservaDe1.desayunoInc()  + ' €')
console.log(' ');

console.log('** Reserva 2 **');
console.log('El subtotal de la reserva 2 es: ' + reservaDe2.calculaSubtotal() + ' €')
console.log('El total es: ' + reservaDe2.desayunoInc() + ' €')
console.log(' ');

console.log('** Reserva 3 **');
console.log('El subtotal de la reserva 3 es: ' + reservaDe3.calculaSubtotal() + ' €')
console.log('El total es: ' + reservaDe3.desayunoInc() + ' €')
console.log(' ');