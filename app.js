let NumeroSecreto = 0;
let Intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;

console.log(NumeroSecreto);

function AsignarTextoElemento(elemento,texto) {
    let ElementoHtml = document.querySelector(elemento);
    ElementoHtml.innerHTML = texto;
    return; 
}

function VerificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    
        if(NumeroDeUsuario === NumeroSecreto) {
        AsignarTextoElemento('p',`Acertaste el numero en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if(NumeroDeUsuario > NumeroSecreto) {
            AsignarTextoElemento('p','El numero secreto es menor');
        } else {
            AsignarTextoElemento('p','El numero secreto es mayor');
        }
        Intentos++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja() {
   document.querySelector('#ValorUsuario').value = ''; 
}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    //Si el numero generado esta incluido en la lista hacemos una operacion, de lo contrario otra.
    console.log(NumeroGenerado);
    console.log(ListaNumerosSorteados);

if(ListaNumerosSorteados.length == NumeroMaximo) {
    AsignarTextoElemento('p', "Ya se asignaron todos los numeros posibles");
} else {
    if (ListaNumerosSorteados.includes(NumeroGenerado)){
        return GenerarNumeroSecreto();
     } else {
        ListaNumerosSorteados.push(NumeroGenerado);
        return NumeroGenerado;
     }
    }
}

function CondicionesIniciales() {
    AsignarTextoElemento('h1','Juego del numero secreto');
    AsignarTextoElemento('p',`Indica un numero del 1 al ${NumeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}

function ReiniciarJuego(){
    //Limpiar la caja
    LimpiarCaja();
    //Indicar mensaje de intervalos de numeros
    //Generar el numero aleatorio
     //Inicializar el numero de intentos
    CondicionesIniciales();
    //Deshabilitar boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

CondicionesIniciales();

