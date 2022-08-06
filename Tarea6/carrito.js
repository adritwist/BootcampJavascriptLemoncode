// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

var crearProducto = product => {
  var productos = document.getElementById('productos')
  var input = document.createElement('input')
  var parrafro = document.createElement('p')
  parrafro.innerHTML = product.description + ' - ' + product.price + '€/ud.'
  input.setAttribute('type', 'number')
  input.setAttribute("value", 0);
  input.addEventListener('change', event => product.units = event.target.valueAsNumber)
  productos.appendChild(parrafro)
  parrafro.appendChild(input)
}

var mostrarProductos = producList => {
  for(var product of producList) {
    crearProducto(product)
  }
}

var comprobarStock = products => {
  var input = document.querySelectorAll('p')
  var resultado = false;

  for(var i = 0; i < products.length; i++) {

    if(products[i].stock < products[i].units || products[i].units < 0) {
      resultado += true;

      input[i].style.color = 'red';
    }else {
      resultado += false;

      input[i].style.cssText = '';
    }
  }

  return resultado;
}

function calcular() {
  var inputs = document.getElementsByTagName('input')
  var subtotal = document.getElementById('subTotal')
  var Iva = document.getElementById('iva')
  var Total = document.getElementById('total')
  var resultado = 0;
  var iva = 0;
  var total = 0;
  var valorInputs = 0;


  for(var i = 0; i < inputs.length; i++) {
    valorInputs += inputs[i].value
    if(comprobarStock(products) === 1 || valorInputs == 00) {
      subtotal.innerHTML = ""
      Iva.innerHTML = ""
      Total.innerHTML = ""
    }else {
      resultado += parseInt(inputs[i].value) * products[i].price
      subtotal.innerHTML = 'Subtotal ' + resultado.toFixed(2) + ' €';
      iva += (parseInt(inputs[i].valueAsNumber) * products[i].price) * products[i].tax /100
      Iva.innerHTML = 'IVA ' + iva.toFixed(2) + ' €'
      total = resultado + iva;
      Total.innerHTML = 'TOTAL ' + total.toFixed(2) + ' €';
    }

  }
}

mostrarProductos(products)

var botonCalcular = document.getElementById('calcular');

botonCalcular.addEventListener('click', function() {
  calcular()
})