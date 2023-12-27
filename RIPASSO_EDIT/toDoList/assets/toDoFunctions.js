//import { toDoList } from "./list.js";

const toDoList = [
    {'08:20': 'scuola'},
    {'10:30': 'sfamare i gatti'},
    {'12.00': 'cucinare'},
    {'14.00': 'scuola'},
    {'18:00': 'fisio'},
    {'10.30': 'nanna'}
]

function showToDo() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    toDoList.forEach((el) => {
        let newLi = document.createElement('li');
        newLi.innerHTML = Object.keys(el) + '-' + Object.values(el);
        list.appendChild(newLi);
    })
}

function addNewTodo() {
    const addNewTodo = document.getElementById('newToDoInput').value;
    const newToDoTime = document.getElementById('toDoTime').value;
    if(newToDo === '') {
        alert ('inserisi testo')
    } if (newToDoTime === '') {
        alert ('devi inserire data')
    }
}





showToDo();
addNewTodo();
//export {showToDo}