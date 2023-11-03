/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
else if*/

let numero1 = 4;
let numero2 = 7;

if (numero1 > numero2){
document.getElementById('maggiore').innerHTML = 'il n è + grande' + numero1;
} else if (numero2 > numero1) {
document.getElementById('maggiore').innerHTML = 'il n è + grande' + numero2;
} else {
document.getElementById('maggiore').innerHTML = 'n sono uguali'; }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 15;

if (numero !== 5) { // vale anche ==5 ?
  console.log('not equal');
  document.getElementById('numero').innerHTML = 'not equal';
} else {
  document.getElementById('numero').innerHTML = 'equal';
}
console.log('equal');


// ternary
//const equal = (numero !== 5) ? console.log('not equal') : '';


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// numero da verificare

let resto = (numero2 % 5);

if (resto !== 0) {
  document.getElementById('resto').innerHTML = 'divisibile per 5';
}
console.log('divisibile per 5');



let resto2 =15

if (resto % 5 === 0){
  console.log('divisibile per 5');
  document.getElementById('resto').innerHTML = "è divisibile per 5";
} else {
  document.getElementById('resto').innerHTML = "NON è divisibile per 5";
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero4 = 8;
let numero5 = 18;
let sottrazione = numero5 - numero4;


if (numero4 = 8) {
  document.getElementById('numero4').innerHTML = 'numero è 8';
};
if(numero5 !== 8) {
  document.getElementById('numero5').innerHTML = 'numero non è 8'
};
if(sottrazione= 8) {
  document.getElementById('sottrazione').innerHTML = 'sottrazione dei numeri equivale a 8';
} else {
  document.getElementById('sottrazione').innerHTML = 'sottrazione NON equivale a 8';
}
console.log('sottrazione');

/*
if numero4 === S8 || numero5 === 8 || numero4 + numero5 === 8 || numero4 - numero5 === 8 || numero5 - numero4 === 8){
  document.getElementById('sottrazione').innerHTML = 'verificato';
} else {
  document.getElementById('sottrazione').innerHTML = ' NON verificato';
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.

scomporre alla fine
  /* SCRIVI QUI LA TUA RISPOSTA */
  let totalShoppingCart = 13;
  let fee = 10;
  // let totale = totalShoppingCart;
   

if (totalShoppingCart > 50) {
  document.getElementById('totalShoppingCart').innerHTML = 'spedizione gratis';
} else {
  document.getElementById('totalShoppingCart').innerHTML = '+ 10€ sbleurli di spedizione'
};

  console.log('totalShoppingCart + fee');

/*if (totalShoppingCart < 50) {
  totale += fee;
 }

 document.getElementById('totale').innerHTML = 'Costo totale' + totale';

 ^^ stampa FUORI DA CONDIZIONE altrimenti viene stampata solo se si verifica la condizione

 tecnica ecommers più utilizzata
*/






/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
carrello -sconto = +50 gratis
  /* SCRIVI QUI LA TUA RISPOSTA */
  let totaleShoppingCart = 51;

  let totaleBlackFriday = totaleShoppingCart * 0.8; //20% di 51
   

  if (totaleShoppingCart < 50) {
    totale += fee;
   };


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.

  */

/* SCRIVI QUI LA TUA RISPOSTA */

let x1 = 6;
let x2 = 14;
let x3 = 10;

if (x1 >= x2) {
  if (x3 >= x1) {
    document.getElementById('primo').innerHTML = x3;
    document.getElementById('secondo').innerHTML = x1;
    document.getElementById('terzo').innerHTML = x2;

  } else {
    if (x3 >= x2) {
    document.getElementById('primo').innerHTML = x1;
    document.getElementById('secondo').innerHTML = x3;
    document.getElementById('terzo').innerHTML = x2;
    } else {
      document.getElementById('primo').innerHTML = x1;
      document.getElementById('secondo').innerHTML = x2;
      document.getElementById('terzo').innerHTML = x3;
    }
  }
}


// soluzione array
let array0rd = [];
arrayord[0] = x1;
arrayord[1] = x2;
arrayord[2] = x3;

array0rd.sort();

document.getElementById('terzo').innerHTML = array0rd[2];
document.getElementById('primo').innerHTML = array0rd[1];
document.getElementById('terzo').innerHTML = array0rd[0];


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
operatore type-of
  */
/* SCRIVI QUI LA TUA RISPOSTA */

let test = 'ciao';

if (typeof test === 'number') {
  document.getElementById('typeOf').innerHTML = test + 'numero';
} else {
  document.getElementById('typeOf').innerHTML = test + 'NON numero';
} else {
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
operatore modulo
  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
array dentro oggetti si leggono e manipolano come array normali
me.skills.sort()
  */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */



