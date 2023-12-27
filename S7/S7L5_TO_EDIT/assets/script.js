const url = 'https://striveschool-api.herokuapp.com/api/product/';

const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjQzYWMwNTgzNTAwMTg1MjJjYWYiLCJpYXQiOjE3MDIzNzI0MTAsImV4cCI6MTcwMzU4MjAxMH0.f59V1hQKmhZ6ReUPrvnlhut5TiMJ-2bN6NdxTANnSBc";
const headers = {
  Authorization: key,
  Accept: "application/json",
  "Content-Type": "application/json",
};

fetch(url,  {
  headers: headers,
}).then((response) => response.json().then(data => { 
    products = data;
    createCards(data);
}));




function createCards(data) {
    data.forEach(data => {
        let col = document.createElement('div');
        col.classList.add('col');
        let card = document.createElement('div');
        card.classList.add('card');
        let img = document.createElement('img');
        img.classList.add("card-img-top", "object-fit-fill");
        img.src= data.imageUrl;
        
        img.style.height = '20rem';
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = data.name;
        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = data.brand;
        let row = document.getElementById('prodotti');
    
    
        /*buttons */
        let viewBtn = document.createElement('button');
        viewBtn.classList.add('btn', 'btn-info', 'm-1'); 
        viewBtn.innerText = 'Scopri di più';
        //funzione bottone
        viewBtn.addEventListener('click', function () {
        window.location.href = './dettagli.html'
            })

        let editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-warning'); 
        editBtn.innerText = 'Modifica';
        //funzione bottone
        editBtn.addEventListener('click', function () {
        window.location.href = './edit.html'
        }) 



            /*APPEND CHILD */

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(viewBtn);
        cardBody.appendChild(editBtn);
        
       
        
        card.appendChild(img);
        card.appendChild(cardBody);
        row.appendChild(card);

    
        
    });
}







/* FUNZIONI PAGINA BACK OFFICE */


    const nome = document.getElementById('nome').value;
    const brand = document.getElementById('brand').value;
    const prezzo = document.getElementById('prezzo').value;
    const urlImmagine = document.getElementById('urlImmagine').value;
    const descrizione = document.getElementById('descrizione').value;




/*bottoni */

const btnReset = document.getElementById('btnReset');
const btnNew = document.getElementById('btnNew');

/* input */


function reset() {
 nome = '';
 brand = '';
 prezzo = '';
 urlImmagine = '';
 descrizione = '';
}

//funzione salva nuovi prodotti



const productNew = [];

btnNew.addEventListener('click', function (){

    
    


    
    
   
    localStorage.setItem('nuovoProdotto', JSON.stringify(productNew));
    productNew.push(nome, brand, prezzo, urlImmagine, descrizione);

    console.log(localStorage.nuovoProdotto);
    //post();
    
    
});



/*function post (nome, descrizione, brand, urlImmagine, prezzo) {
    fetch(url, {
       method: 'POST',
       headers: {
           Authorization: key,
           Accept: "application/json",
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({
                   'name': nome,
                   'description': descrizione,
                   'brand': brand,
                   'imageUrl': urlImmagine,
                   'price': prezzo
               })

       }) .then((response) => response.json())
        .then(data => {newCards(data)})



}

*/



/* FUNZIONI PAGINA EDIT */




const btnModify = document.getElementById('btnModify');





/*funzione pagina dettagli */


