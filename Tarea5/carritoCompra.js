const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: false
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];
   
    function mostrarCarrito() {
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        for(var i = 0; i < carrito.length; i++) {
            resultado.innerHTML +=  'Producto: ' + carrito[i].id + '<br>'
            resultado.innerHTML +=  'Nombre: ' + carrito[i].name + '<br>'
            resultado.innerHTML +=  'Precio: ' + carrito[i].price + '<br>'
            resultado.innerHTML +=  'Cantidad: ' + carrito[i].count + '<br>'
            resultado.innerHTML +=  '<hr>'
        }
        resultado.style.display = 'block'
    }

    function listarProductos() {
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        for(var i = 0; i < carrito.length; i++) {
            resultado.innerHTML +=  'Nombre: ' + carrito[i].name + '<br>'
            resultado.innerHTML +=  '<hr>'
        }
        resultado.style.display = 'block'
    }

    function precio() {
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        var total = 0;
        for(carro of carrito) {
            total += Math.round(carro.price * carro.count);
        }

        if(total > 100) {
            var descuento = total * 0.05;
            total = total - descuento;
        }
        mostrarCarrito();
        resultado.innerHTML += 'Precio total: ' + total + ' €'
        resultado.innerHTML +=  '<h3>Pedido con gastos de envío</h3>'
        resultado.innerHTML +=  '<hr>'
    }

    function prime() {
        var productosPrime = []
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        for(var i = 0; i < carrito.length; i++) {
            if(carrito[i].premium == true) {
                productosPrime.push(carrito[i]);
                resultado.innerHTML +=  'Producto: ' + productosPrime[i].id + '<br>'
                resultado.innerHTML +=  'Nombre: ' + productosPrime[i].name + '<br>'
                resultado.innerHTML +=  'Precio: ' + productosPrime[i].price + '<br>'
                resultado.innerHTML +=  'Cantidad: ' + productosPrime[i].count + '<br>'
                resultado.innerHTML +=  '<hr>'
                var total = 0;
                for(primes of productosPrime) {
                    total += Math.round(primes.price * primes.count);
                }

                if(total > 100) {
                    var descuento = total * 0.05;
                    total = total - descuento;
                }
                
            }     
        }

        if(productosPrime == '') {
            resultado.innerHTML += 'No hay ningún producto prime en el carrito'
            resultado.innerHTML +=  '<hr>'
        }else  {
            resultado.innerHTML += 'Precio total: ' + total + ' €'
            resultado.innerHTML +=  '<h3>Pedido sin gastos de envío</h3>'
            resultado.innerHTML +=  '<hr>'
        }
    }

    function borrar() {
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        const id = 54657;
        for(var i = 0; i < carrito.length; i++) {
            if(carrito[i].id == id) {
                var posicion = i;
                carrito.splice(posicion, 1)
            }
        }

        mostrarCarrito();
    }


    var botonMostrar = document.getElementById('contenido');

    botonMostrar.addEventListener('click', function() {
        mostrarCarrito();
    })
    
    var botonListar = document.getElementById('productos');

    botonListar.addEventListener('click', function() {
        listarProductos();
    })

    var botonTotal = document.getElementById('precio');

    botonTotal.addEventListener('click', function() {
        precio();
    })

    var botonFiltrar = document.getElementById('filtrar');

    botonFiltrar.addEventListener('click', function() {
        prime();
    })

    var botonBorrar = document.getElementById('borrar');

    botonBorrar.addEventListener('click', function() {
        borrar();
    })
   
   