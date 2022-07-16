const product = { count: 3, price: 14.55, type: "alimentacion" };

if(product.price < 0) {
    product.price = 0;
}

if(product.type === "alimentacion") {
    var iva = product.price * 0.10;
    var precioTotal = product.price + iva;

    document.write('El precio del producto de alimentación es ' + Math.round(precioTotal))
}else if(product.type === "libro"){
    var iva = product.price * 0.04;
    var precioTotal = product.price + iva;

    document.write('El precio del producto de alimentación es ' + Math.round(precioTotal))
}else {
    var iva = product.price * 0.21;
    var precioTotal = product.price + iva;

    document.write('El precio del producto es ' + Math.round(precioTotal))
}