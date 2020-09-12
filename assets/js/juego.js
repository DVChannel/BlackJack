let deck = [ ];
const tipos= ['C','D','H','S'];
const especiales= ['A','J','Q','K'];
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
//console.log( deck );
deck = _.shuffle( deck );
console.log( deck );
return deck;

}
crearDeck( );
//tomar carta
const pedirCarta = () =>{
 
    if(deck.length===0){
        throw 'No hay cartas en deck';
    }

    const carta= deck.pop();
    console.log(deck);
    console.log(carta);
    return carta;
}

// pedirCarta();