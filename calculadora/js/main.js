
console.log('Estamos en el archivo de la calculadora');
var numuno , numdos, sumar, restar, multi,divi;

function validar_datos(operacion) {
    numuno = document.getElementById('numuno').value;
    numdos = document.getElementById('numdos').value;

    numuno = Number(numuno);
    numdos = Number(numdos);

    switch (operacion.id) {
        case 'sumar':
        case 'restar':
        case 'multi':
            break;
        case 'divi':
            if (numdos == 0){
                alert('No se puede dividir entre cero');
                return false;
            }
            break;
        default:
            break;
    }
}

document.getElementById("sumar").addEventListener("click", sumarFuncion);
function sumarFuncion() {
    validar_datos(this) 
    resul = numuno + numdos;
    document.getElementById('resultado').innerHTML = `${resul}`;
}
document.getElementById("restar").addEventListener("click", restarfuncion);
function restarfuncion() {
    validar_datos(this) 
    resul = numuno - numdos;
    document.getElementById('resultado').innerHTML = `${resul}`;
}
document.getElementById("multi").addEventListener("click", multiFuncion);
function multiFuncion() {
    validar_datos(this) 
    resul = numuno * numdos;
    document.getElementById('resultado').innerHTML = `${resul}`;
}
document.getElementById("divi").addEventListener("click", diviFuncion);
function diviFuncion() {
    validar_datos(this) 
    resul = numuno / numdos;
    document.getElementById('resultado').innerHTML = `${resul}`;
}
document.getElementById("clear").addEventListener("click", clearFuncion);
function clearFuncion() {
    document.getElementById('numuno').value = ``;
    document.getElementById('numdos').value = ``;
    document.getElementById('resultado').innerHTML = `0`;
}
