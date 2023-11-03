/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */


function area() {
let l1 = 2;
let l2 = 3;
return (l1 * l2);
}

area();
console.log('es. 1');
console.log(area());


 function area2(l1,l2){
    return l1*l2;
    }
    area2();

    console.log(area2(2,3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */



function crazySum(numero1, numero2) {
if (numero1 === numero2) {
    return (numero1 + numero2)*3;
} else {
    return numero1 + numero2;
}}


crazySum();

console.log('es. 2');
console.log(crazySum(4,2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

  

function crazyDiff(numero3) {
    if (numero3 > 19) {
    return Math.abs(numero3 - 19)*3;
    } else {
    return Math.abs(numero3 - 19);}
}

crazyDiff();
console.log('es. 3');
console.log(crazyDiff(2));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}

boundary();
console.log('es. 4');
console.log(boundary(20));

//ESERCIZIO 5
/* Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.

 SCRIVI QUI LA TUA RISPOSTA        STARTsWITH /*

/**/ 
    
    

    function epify(stringa) {
        if (stringa.startsWith('epicode')) {
            return stringa;
        } else  {
            return 'epicode' + stringa;

        }
    }
   
    epify();
    console.log('es.5');
    console.log(epify('stringa prova')); 

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)

SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")

SCRIVI QUI LA TUA RISPOSTA */

/*const stringa2 = 'EPICODE';

//const mirror = split.reverse;

function reverseString() {
    const split = stringa2.split('');

}

reverseString();
console.log(reverseString()); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.

 SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str = '01234567';
let str2 = str.slice(1,7);

function cutString(str) {
    
    return str2;
}

cutString();
console.log(cutString());

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

//SCRIVI QUI LA TUA RISPOSTA

//let n = 23;

//function giveMeRandom(n) {}
