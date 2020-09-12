let deck = [];
const tipos= ['C','D','H','S'];
const especiales= ['A','J','Q','K'];

const newg = document.querySelector('#new');
const bstop = document.querySelector('#bstop');
const pedir = document.querySelector('#pedir');

const divCJugador = document.querySelector('#jugador');
const divCP = document.querySelector('#computadora');

let puntosJugador = 0, puntosComputadora = 0;
const smalls = document.querySelectorAll('small');

//crea baraja
const crearDeck = () => {
for(let i=2; i<=10; i++){
    for (let tipo of tipos){
    deck.push(i + tipo);
}
}
for(let tipo of tipos){
    for (let esp of especiales){
    deck.push(esp + tipo);
}
}
deck = _.shuffle( deck );

return deck;

}
crearDeck();

//tomar carta
const pedirCarta = () =>{
 
    if(deck.length===0){
        throw 'No hay cartas en deck';
    }

    const carta= deck.pop();
    return carta;
}
const valorCarta = (carta) => {
const valor = carta.substring(0, carta.length - 1);
return (isNaN(valor)) ?
(valor ==='A')? 11 : 10
: valor * 1;
}


const turnoComputadora = ( puntosJugador)=>{

    do{

        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta( carta );
        smalls [1].innerText= puntosComputadora; 
        
        const imgcarta = document.createElement('img');
        imgcarta.src = `assets/cartas/${carta}.png` ;
        imgcarta.classList.add('carta');
        
        divCP.append(imgcarta);
        if (puntosMinimos>21){break;}
    }while((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));

}

//eventos

pedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
puntosJugador = puntosJugador + valorCarta( carta );
smalls [0].innerText= puntosJugador ; 

const imgcarta = document.createElement('img');
imgcarta.src = `assets/cartas/${carta}.png` ;
imgcarta.classList.add('carta');

divCJugador.append(imgcarta);

if ( puntosJugador>21){
    console.warn('Perdiste u.u');
    pedir.disabled = true;
    bstop.disabled = true;
    turnoComputadora(puntosJugador);
}else if (puntosJugador === 21 ){
    console.warn('21 uwu');
    pedir.disabled = true;
    bstop.disabled = true;
    turnoComputadora(puntosJugador);
}


});

bstop.addEventListener('click',()=>{
    pedir.disabled = true;
    bstop.disabled = true;
turnoComputadora(puntosJugador);
})