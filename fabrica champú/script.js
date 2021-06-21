

const alarma = () =>{

    let temperatura = document.getElementById('Temperatura').value;
    let humedad = document.getElementById('Humedad').value;
    let trabajadores = document.getElementById('Trabajadores').value;
    let liquido = document.getElementById('Liquido').value;

    let boton = document.getElementById('enviar')
    boton.addEventListener('click',()=>{

        if(trabajadores >= 100){
            alert('Son muchos trabajadores');
        }else if(temperatura > 90 || temperatura < 30){
            alert('Problemas de temperatura');
        }else if(humedad > 50){
            alert('Problemas de humeda');
        }else if(liquido > 90){
            alert('Problemas con liquido');
        }else{
            alert('Todo ok');
        }
    })
}

alarma();
