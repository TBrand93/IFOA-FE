/* app deve 
 ricere attraverso form nome e anno nascita 
 calcolare età
 verificare se la persona è maggioremme o minorenne
 salutarla indicando maggiore o minore età
 
 1. LEGGERE CAMPO NOME E MEMORIZZARLO
 2. LEGGERE CAMPO ANNO E MEMORIZZARLO
 3. CALCOLARE ETA
 4. VERIFICARE MINORE O MAGGIORE ETA (stato)
 5. SCRIVERE IN HTML 
 6. CANCELLARE FORM

 EVENTO SCATENANTE: click

 VARIABILI GLOBALI (perchè ripetuti + volte): =/= (variabili locali servono solo una volta)
 nome, anno nascita, stato
 */

 let nome; // global perchè deve leggere il campo e stampare a video
 let anno; // global perchè deve leggere il campo, calcolare età , verificare stato e stampare a video
 let eta;
 let stato; //global per verificare età e stampare a video (non definita perchè deve essere calcolata in base agli input)

 function eventHandler() { //funzione che decide in che ordine partono le altre funzioni. iniziato da ONCLICK del button
    leggiForm();
    if (anno >= 1900 && anno <= 2023 && nome != '' ) {
        errore.innerHTML = '&nbsp;';
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm();//dopo la lettura di un form, lo si svuota
} else  {
    errore.innerHTML = 'attenzione';; // utilizzare #id.innerhtml per evitare di scivere document.getelementnbyid....
    return; // esce dalla funzione 
}
//le funzioni accadono nell'ordine in cui vengono chiamate nell'eventhandler, non in quella in cui vengono definite

 }

 function leggiForm() { //campo di form si legge così. controllare sempre console.log
    nome = document.getElementById('nome').value; //ricordarsi .value che legge valore letto da campo di INPUT
    anno = document.getElementById('anno').value;
    
 }

 function calcolaEta() {
    eta = 2023 - Number(anno); //inserire Number(...); perchè QUELLO CHE ARRIVA DAL FORM è STRINGA
    
}

 function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
    
 }

 function scrivi() {
    document.getElementById('mioNome').innerHTML = 'Ciao' + ' ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'la tua eta';
 }


 function cancellaForm() {
    document.getElementById('nome').value = ' ';
    document.getElementById('anno').value = ' ';
 }





