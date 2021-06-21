
const validar = () =>{

    let peso =document.getElementById('peso').value;
    let estatura = (document.getElementById('estatura').value);
    let resultado = peso/ (estatura * estatura);
    let imc = resultado.toFixed(2);
    /*document.write(`<h2>
    Tu indice de masa corporal es ${imc}</h2>`)*/
    alert(`El indice de masa corporal es ${imc}`) ;

}

