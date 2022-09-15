//hasId
/*Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si 
dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).*/
const person = {
    id: 1,
    name: "Adrián", 
    surname: "Muñoz",
}
 
function hasId (person) {
    return person.hasOwnProperty('id');
}

console.log('*** hasId ***')
console.log(hasId(person))

/*head
Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.*/

const teachers = ["Pepe", "Lissette", "Jaime", "Victor", "Dani"];

function head(teachers) {
    const [primero] = teachers;

    return primero
}

console.log('*** head ***')
console.log(head(teachers))

/*tail
Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.*/

const persons = ["Pepe", "Lissette", "Jaime", "Victor", "Dani"];

const tail = (arr) => {
    const [first, ...rest] = arr

    return rest;
}

console.log('*** tail ***')
console.log(tail(persons))

/*swapFirstToLast
Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer 
elemento ha sido colocado en la última posición.*/

const swapFirstToLast = (arr) => {
    const [first, ...rest] = arr
    const [last, ...rest2] = rest.reverse(); 
    

    return [last, ...rest2.reverse(), first]
}

console.log('*** swapFirstToLast ***')
console.log(swapFirstToLast(persons))

/*excludeId
Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.*/

const excludeId = obj => {
    const {id, ...rest} = obj
    return rest;
}


console.log('*** excludeId ***')
console.log((excludeId(person)))


/*wordsStartingWithA
Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con 
aquellas palabras que empiecen por a.*/

const words = ["arrancar", "aparcar", "casa", "perro", "arandano"];

const wordsStartingWithA = palabras => palabras.filter(palabra => palabra.charAt(0) === 'a')   


console.log('*** wordsStartingWithA ***')
console.log(wordsStartingWithA(words))

/*concat
Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por | .*/

const palabra1 = 'Hola';
const palabra2 = 'Adios';


function concat(...args) {
    const palabra = Array.prototype.join.call(args, " | ");

    return palabra;
}


console.log('*** concat ***')
console.log(concat(palabra1, palabra2))

/*multArray
Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array
donde cada elemento ha sido multiplicado por x.*/

const numbers = [10, 4 , 9, 3]
const number = 2;

function multArray(arr, num) {
    const copy = []
    arr.map((element) => {
        copy.push(element * num)
    })
    
    return copy;
}

console.log('*** multArray ***')
console.log(multArray(numbers, number))

/*calcMult
Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.*/

function calcMult(...arg) {

    const numbers = arg;

    const result = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);

    return result
}

console.log('*** calcMult ***')
console.log(calcMult(3, 4, 8))

console.log('*** Ejercicios extra ***')

/*swapFirstSecond
Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.*/

const arrayNum = [8,5,6,3,1]

function swapFirstSecond(arr) {
    const [first, second, ...rest] = arr;

    return [second, first, ...rest]
}

console.log('*** swapFirstSecond ***')
console.log(swapFirstSecond(arrayNum))

/*firstEqual
Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano
indicando si todos los strings comienzan por dicho carácter o no.*/

function firstEqual(letra, ...arg) {
    const palabras = arg;

    const palabra = palabras.every(word => word.charAt(0) === letra)

    return palabra;
}

console.log('*** firstEqual ***')
console.log(firstEqual('a', 'ascuas', 'aspi', 'antonio'))

/*longest
Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.*/

const array1 = [1,2,3,4,5]
const array2 = [1,2,3,4,5,6]
const array3 = [1,2,3,4,5,6,7]

function longest(...arr) {
    const orden = arr.sort().reverse();

    const [primero, ...rest] = orden;

    return primero;
}


console.log('No funciona')
console.log('*** longest ***')
console.log(longest(array1,array2,array3))

/*searchInStringV1
Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces
aparece dicho carácter en el string.*/

function searchInStringV1(word, letra) {
    const transf = Array.from(word)
    const result = transf.map(function (element) {
        let num = 0;
        if(element === letra) {
            num++;
        }

        return num;
    }) 

    return result.reduce((previousValue, currentValue) => previousValue + currentValue)
}

console.log('*** searchInStringV1 ***')
console.log(searchInStringV1('palabra caladraba cantaba', 'a'))

/*searchInStringV2
Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.*/

function searchInStringV2(word, letra) {
    const transf = Array.from(word)
    const result = transf.filter(function (element) {
        let num = 0;
        if(element === letra) {
            num++;
        }

        return num;
    }) 

    return result.length
}

console.log('*** searchInStringV2 ***')
console.log(searchInStringV2('palabras encadenadas', 'a'))

/*sortCharacters
Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.*/

function sortCharacters(word) {
    const palabra = Array.from(word);

    const ordenado = palabra.sort()
    return ordenado.toString();
}

console.log('*** sortCharacters ***');
console.log(sortCharacters('hgfedcba'));

/*shout
Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las
palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.*/

function shout(...args) {
    
    const words = args.map(element => element.toUpperCase());

    const final = words.map(element => '! ' + element + ' ¡')
    return  final.join(' ').toString() ;
}

console.log('*** shout ***');
console.log(shout('palabra', 'tu'));

/*Lista de la compra
Dada la siguiente lista de la compra:

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];
A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

B. Ordena la lista de más a menos unidades.

C. Obtén el subtotal gastado en droguería.

D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
*/

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

function listaIva(arr) {
    const lista = arr.map(element => (element.price * 0.21).toFixed(2))

    return lista
}

function unidades(arr) {
    const orden = arr.map(element => element.units)
    orden.sort().reverse()

    return orden;
}
    
const gastado = producto => producto.reduce((sumPrecios, producto) => sumPrecios + producto.price, 0);

function precioTotal(arr) {
    const nombre = arr.map(element => element.product + ' - ' + (element.price + (element.price * 0.21)).toFixed(2))

    return nombre;
}

console.log('*** Lista de la compra ***');
console.log('*** Opción A ***');
console.log(listaIva(shoppingCart));

console.log('*** Opción B ***');
console.log(unidades(shoppingCart));

console.log('*** Opción C ***');
console.log(gastado(shoppingCart));

console.log('*** Opción D ***');
console.log(precioTotal(shoppingCart));