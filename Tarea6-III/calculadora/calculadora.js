function calcular() {
    var importe = document.getElementById('importe').value
    var entrega = document.getElementById('entrega').value
    return entrega - importe;
}

function cambio() {
    var total = document.getElementById('resultados')
    total.innerHTML = '';
    var devolver = calcular();

    var change = document.getElementById('total')
    change.innerHTML = '<h3>Cambio: <br></h3>' + devolver + ' €';
    
    var money = [200,100,50,20,10,5,1,0.5,0.2,0.1,0.05,0.02,0.01];

    for(var i = 0; i < money.length; i++) {
        if(devolver / money[i] >= 0.90) {
            if(money[i] >= 5) {
                total.innerHTML += Math.floor(devolver / money[i]) + ' billete/s de ' + money[i] + ' €<br>' ;
                devolver = devolver - Math.floor(devolver / money[i]) * money[i];
            }else {
                total.innerHTML += Math.floor(devolver / money[i] + 0.10) + ' moneda/s de ' + money[i] + ' €<br>';
                devolver = devolver - Math.floor(devolver / money[i]) * money[i];
            }
            
        }
        console.log(devolver)
    }
}

var btn = document.getElementById('enviar')

btn.addEventListener('click', function () {
    calcular();
    cambio();
})