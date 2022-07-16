const product = { count: 3, price: 12.55, type: "ropa" };
function getVat(product) {
    if(product.count === 0) {
        return 0;
    }

    switch(product.type) {
        case "alimentacion": 
            var iva = product.price * 0.10;
            var precioTotal = product.price + iva;

            var precio = Math.round(precioTotal)
            break;
        case "libro": 
            var iva = product.price * 0.04;
            var precioTotal = product.price + iva;

            var precio = Math.round(precioTotal)
            break;
        default:
            var iva = product.price * 0.21;
            var precioTotal = product.price + iva;

            var precio = Math.round(precioTotal)
            break;
    }

    return precio;
}

var precio = getVat(product);
document.write('El precio  final del producto  \"' + product.type  + '\" es de ' + precio + ' €');


//Ejercicio 2-2 Avanzado

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

function printProductPrice(product) {
    const subtotal = getVat(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;

    document.write("<p>Subtotal: ", subtotal + "€</p>");
    document.write("<p>IVA: ", vat + "€</p>");
    document.write("<p>Total: ", total + "€</p>");
}

printProductPrice(product);