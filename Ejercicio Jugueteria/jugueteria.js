function validarPaquetes() {
    
    let pesoMuneca = 75;
    let pesoPayaso = 112;
    
    let munecas = document.getElementById("munecas").value;
    let payasos = document.getElementById("payasos").value;
    
    let totalMuneca = pesoMuneca * munecas
    let totalPayaso = pesoPayaso * payasos
    
    let suma = totalMuneca + totalPayaso
    var contador = 0;
    
    
    if(totalMuneca > 1000 || totalPayaso > 1000 || suma > 1000){
     
    
    alert("El peso total de muñecas es: " + totalMuneca +
    " y el peso total de payasos es: " + totalPayaso + "peso de ambos:" + suma)
    
    while(suma > 0){
    
    contador++
    
    suma -= 1000
    }
    
    alert("Requieres " + contador + " paquetes" )
    
    }else{
    alert("Solo es un paquete y el peso es " + suma)
    }
    
    
    }
    
    
    
    
    