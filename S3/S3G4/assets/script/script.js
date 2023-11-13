// 1. che mses? scrivere in h1. quanti gg ha il mese? -> # corretto di celle x gg
const now = new Date();

/* 2.per salvare appt ci vuole ARRAY:
ogni app è una stringa
ogni giorno può contenere infiniti appt e ogni mese ha #gg variabile
creeremo ARRAY DI ARRAY : 
mese : array padre; 
giorni : array figli
*/

// in appointments pushamo tanti sottoarray quanti sono i gg del mese corrente
const appointments = [];

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const scriviMese = function () {
  const title = document.querySelector("h1");
  const indiceMese = now.getMonth(); //getMonth restituisce NUMERO, ora gliassegnamo un nome di monthNames
  const nomeMese = monthNames[indiceMese];
  title.innerText = nomeMese;
};
scriviMese();

//gg di feb cambiano in base all'anno (bisestile o no)
const giorniTotali = function () {
  const anno = now.getFullYear(); //2023
  const mese = now.getMonth(); // [10] -> nov

  //per trovare #gg del mese corrente
  //chiediamo la data del mese successivo (+1) impostando giorno 0 (inesistente = gg precedente = ultimo gg del mese corrente)

  let ultimoGiorno = new Date(anno, mese + 1, 0);
  const numeroGiorni = ultimoGiorno.getDate();
  return numeroGiorni;
};

giorniTotali();

const deselezionaCelle = function () {
  const celle = document.querySelectorAll(".day");
  celle.forEach((element) => {
    element.classList.remove("selected");
  });
};


// al click su gg, #newMeetingDay mostrerà data selezionata

const giornoAppuntamento = function(indiceGiorno) {
    const giorno = document.getElementById('newMeetingDay');
    giorno.classList.add('hasDay');
    giorno.innerText = indiceGiorno +1; //gli arriva indice
}

//creazione di griglia dei div contenenti gg del emse in corso
const creaGriglia = function(numeroGiorni) {
    const calendarDiv = document.getElementById('calendar');

    for (let i = 0; i< numeroGiorni; i++) {
        const cellaGiorno = document.createElement('div'); // ad ogni gg associo un div
        cellaGiorno.classList.add('day'); // stilizzo div come in css

        cellaGiorno.addEventListener('click', function(e) { //rendo clickabili i div dei gg
            deselezionaCelle();
            cellaGiorno.classList.add('selected');
            giornoAppuntamento(i); // scrivo gg clickato nella sezione giorno del form
            if(appointments[i].length > 0) {
                mostraAppuntamenti(i);
            } else {
                const divAppuntamenti = document.getElementById('appointments');
                divAppuntamenti.style.display = 'none';
            }
        });

        //scrivere n gionro nel div

        const valoreCella = document.createElement('h3');
        valoreCella.innerText = i + 1;
        //appendere elementi creati
        cellaGiorno.appendChild(valoreCella);
        calendarDiv.appendChild(cellaGiorno);

        //calendario creato. inserisco ora nell'array appt l'array dei gg del mese

        appointments.push([]);
    }
}
creaGriglia(giorniTotali());


const mostraAppuntamenti = function(indiceGiorno) {
    const appuntamentiGiorno = appointment[indiceGiorno];
    const lista = document.querySelectorAll('#appointments ul');
    lista.innerHTML = '';

    appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement('li');
    lista.appendChild(newLi);
});
const divAppuntamenti = document.getElementById('appointments');
divAppuntamenti.style.display = 'block';
};

