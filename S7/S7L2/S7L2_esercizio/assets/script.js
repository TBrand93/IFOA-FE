const save = function() {
    let name = document.getElementById('nome').value
    localStorage.setItem('utente', name)
    check()
}

const deleteData = function() {
    localStorage.removeItem('utente')
    check()
}

const check = function() {
    if (localStorage.getItem('utente')) {
        txt = 'Ciao ' + localStorage.getItem('utente')
    } else {
        txt = 'Empty'
    }
    document.getElementById('stampa').innerText = txt
}

window.onload = check




