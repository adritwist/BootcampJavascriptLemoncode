var randomPick = (n, min, max) => {
    var resultados = [];
    var mostrar = document.getElementById('resultado');

    while(resultados.length < n) {
            var numAleatorio = Math.floor(Math.random() * (max - min))
    
            if(resultados.indexOf(numAleatorio) === -1) {
                resultados.push(numAleatorio);
            }
        }
        
        for(var i = 0; i < resultados.length; i++) {
            if(resultados.length -1) {
                mostrar.innerHTML += resultados[i] + '  '
            }

            console.log(resultados[i]);
        }
        
        
    }

randomPick(6, 1, 49)