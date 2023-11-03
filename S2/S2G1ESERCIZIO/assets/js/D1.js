/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
String: elemento singolo o sequenza di elementi interpretati come parole. Deve essere inclusa tra apici o virgolette.
Number: elemento funmerico. Per essere letta come cifra, deve essere scritta SENZA virgolette, altriment verrà intepretata come testo, e dunque non sarà possibile eseguire operazioni matematiche, ma solo concatenazione di stringhe
Boolean: 0 o 1 interpretati come True o False
Null: variabile assente
Undefined: variabile non definita
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//let myName = 'Thomas';
//console.log(myName);

//document.getElementById('myName').innerHTML += myName; //la variabile viene inserita A SEGUITO (+=) dell'elemento ID a cui si riferisce


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//let number1 = 12;
//let number2 = 20;
//console.log(number1+number2);

//let nuovaSomma = number1 + number2;
//console.log(nuovaSomma);

//document.getElementById('somma').innerHTML = number1+=number2;


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//let x = 12;
//console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//myName = Brand;
//console.log(myName);

//const persona = myName;
//persona = 'Brand';



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//document.getElementById('sottrazione').innerHTML = 4-x;
console.log(4-x);

let y = 4;
console.log(y-x);

let sottrazione = x -12;
console.log(sottrazione);

let nuovaSottrazione = y -x;
console.log(nuovaSottrazione);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 ='john';
let name2 ='John';
let verifica = name1 === name2;
console.log(verifica);
//
console.log('i due nomi sono uguali?', name1 === name2);
console.log('i due nomi sono uguali?' + (name1 ===name2));
//
//document.getElementById('name1').innerHTML = name1;
//document.getElementById('name2').innerHTML = name2;
name1 !== name2;
console.log(name1 !== name2);

let altraVerifica = name1.toLowerCase() === name2.toLowerCase();
console.log('nomi uguali con lowercase', altraVerifica);

