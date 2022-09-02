const iban1 = "ES6600190020961234567890";
let iban2 = "ES66 0019 0020 9612 3456 7890";
const regex = /^(\w{2}\d{22})$|^(\w{2}\d{2})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/;

function comprobarIban1() {
    let check = regex.test(iban1);

    if(check == true) {
        console.log('IBAN correcto')
    }else {
        console.log('IBAN incorrecto')
    }
}

function comprobarIban2() {
    let check = regex.test(iban2);

    if(check == true) {
        console.log('IBAN correcto')
    }else {
        console.log('IBAN incorrecto')
    }
}

function extraccion() {
    const extraer = regex.exec(iban2)

    console.log('El código de páis y el dígito de control del número IBAN es: ' +  extraer[2])
}

console.log('***** IBAN *****')

comprobarIban1()
comprobarIban2()
extraccion()

//*Matriculas */

const matricula1 = '2021 GMD'
const matricula2 = '2345-GMD'
const matricula3 = '4532BDB'
const Matricula4 = '0320-AAA'
const regexMatricula = /^(\d{4})\s(\w{3})$|^(\d{4})\-(\w{3})$|^(\d{4}[A-Z]{3})$/


function comprobarMatricula1() {
    let check = regexMatricula.test(matricula1);

    if(check == true) {
        console.log('Matricula 1 correcta')
    }else {
        console.log('Matricula 1 incorrecta')
    }
}

function comprobarMatricula2() {
    let check = regexMatricula.test(matricula2);

    if(check == true) {
        console.log('Matricula 2 correcta')
    }else {
        console.log('Matricula 2 incorrecta')
    }
}

function comprobarMatricula3() {
    let check = regexMatricula.test(matricula1);

    if(check == true) {
        console.log('Matricula 3 correcta')
    }else {
        console.log('Matricula 3 incorrecta')
    }
}

function comprobarMatricula4() {
    let check = regexMatricula.test(matricula1);

    if(check == true) {
        console.log('Matricula 4 correcta')
    }else {
        console.log('Matricula 4 incorrecta')
    }
}

function extraccionMatricula() {
    const extraer = regexMatricula.exec(matricula1)

    console.log('La parte numérica de la matrícula es: ' + extraer[1] + ' y las letras son: ' + extraer[2])
}

console.log('***** Matriculas *****')

comprobarMatricula1()
comprobarMatricula2()
comprobarMatricula3()
comprobarMatricula4()
extraccionMatricula()

console.log('***** Opcional *****')
console.log('***** Caso 1 *****')

var imagen = document.querySelector('img').src;
console.log(imagen)

console.log('***** Caso 2 *****')

var imagenes = document.querySelectorAll('img');
imagenes.forEach(element => {
    console.log(element.src)    
});

console.log('***** Validar sintaxis tarjeta crédito *****')

const tarjetas = ['5299 6400 0000 0000','5299-6400-0000-0000','5299640000000000'];
const tarjeta1 = '5299 6400 0000 0000';
const regexTarjeta = /^([50|51|52|53|54|55\d]{4})?[\s|-]([\d]{4})?[\s|-]([\d]{4})?(\s|-)([\d]{4})$|^[50|51|52|53|54|55][\d]{15}$/

tarjetas.forEach(function (element, i) {
    if(regexTarjeta.test(element) == true) {
        console.log('La tarjeta ' + (i + 1) + ' es correcta')
    }else {
        console.log('La tarjeta ' + (i + 1) + ' no es correcta')
    }
})


const extraerNum = regexTarjeta.exec(tarjeta1)
console.log('Los números por grupos de la tarjeta son: ' + extraerNum[1] + ' ' + extraerNum[2] + ' ' + extraerNum[3] + ' ' + extraerNum[5])

console.log('***** Buscar expresiones regulares *****')
console.log('***** Contraseña fuerte *****')

const regexContraseñaFuerte = /(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡\/#$%&])/;
const passCorrecta = 'sasa892a*A';
const passIncorrecta = 'sasa895aA';

let checkPasswd1 = regexContraseñaFuerte.test(passCorrecta);
let checkPasswd2 = regexContraseñaFuerte.test(passIncorrecta);

if(checkPasswd1 == true) {
    console.log('La contraseña es fuerte y correcta')
}else {
    console.log('La contraseña no cumple con los requisitos.')
}

if(checkPasswd2 == true) {
    console.log('La contraseña es fuerte y correcta')
}else {
    console.log('La contraseña no cumple con los requisitos.')
}

console.log('***** Contraseña moderada *****')

const regexContraseñaModerada = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(^.{8,}$)/;

const passModCorrecta = 'sasa8a*Aa';
const passModIncorrecta = 'sasa8a*a';

let checkPasswdMod1 = regexContraseñaModerada.test(passModCorrecta);
let checkPasswdMod2 = regexContraseñaModerada.test(passModIncorrecta);

if(checkPasswdMod1 == true) {
    console.log('La contraseña es correcta')
}else {
    console.log('La contraseña no cumple con los requisitos.')
}

if(checkPasswdMod2 == true) {
    console.log('La contraseña es correcta')
}else {
    console.log('La contraseña no cumple con los requisitos.')
}

console.log('***** Validar URL *****')

const regexURL = /^(https:\/\/)?(www)\.(\w+)\.net$|^\w+\.net/;

const url1 = 'https://www.lemoncode.net';
const url2 = 'www.lemoncode.net';
const url3 = 'lemoncode.net';
const url4 = 'https://ww.lemoncode.net';


let checkURL1 = regexURL.test(url1);
let checkURL2 = regexURL.test(url2);
let checkURL3 = regexURL.test(url3);
let checkURL4 = regexURL.test(url4);

if(checkURL1 == true) {
    console.log('La URL es correcta')
}else {
    console.log('La URL no es correcta.')
}

if(checkURL2 == true) {
    console.log('La URL es correcta')
}else {
    console.log('La URL no es correcta.')
}

if(checkURL3 == true) {
    console.log('La URL es correcta')
}else {
    console.log('La URL no es correcta.')
}

if(checkURL4 == true) {
    console.log('La URL es correcta')
}else {
    console.log('La URL no es correcta.')
}

console.log('***** Validar color Hexadecimal *****')

const regexHexa = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

const color1 = '#1AFFa1';
const color2 = '#1111a';

let checkColor1 = regexHexa.test(color1);
let checkColor2 = regexHexa.test(color2);


if(checkColor1 == true) {
    console.log('El color es correcto')
}else {
    console.log('El color no es correcto.')
}

if(checkColor2 == true) {
    console.log('El color es correcto')
}else {
    console.log('El color no es correcto.')
}