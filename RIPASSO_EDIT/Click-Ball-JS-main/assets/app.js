const punti = 0;
const gatto = document.getElementById("gatto"); 


//funzione punti 
   function getsPoints() {
    punti ++;
    document.getElementById('number').innerText = punti;
   }



function drop() {
    let id = null;
    let pos = 0;
    gatto.classList.add('gattoDefault');
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 650) {
        clearInterval(id);
        drop();
        faded();
      } else {
        pos++; 
         gatto.style.top = pos + "px"; 
         
      }
    }
};




 function faded() {
    gatto.classList.add('gattoFaded');
    drop();
 }



  drop();