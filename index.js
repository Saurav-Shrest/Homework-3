// Constant & Variables
var input = document.getElementById('item-name');
var btn = document.getElementById('add-item');
var list = document.getElementById('todo-list');
// var del = document.getElementsByTagN('i');   
var text = '';
var str = '';

// console.log(del);


// Functions

function createItem() {
    var newIcon = document.createElement('i');
    newIcon.id = 'icon' + (list.childElementCount + 1);
    newIcon.className = "fa-solid fa-xmark";

    var newItem = document.createElement('li');
    newItem.id = 'item' + (list.childElementCount + 1);
    newItem.textContent = text;
    newItem.appendChild(newIcon);

    return newItem;
}

function addItem() {
    if(text == '') {
        alert("input");
    } else {
        var newListItem = createItem(text);
        list.appendChild(newListItem);
        input.value = '';
        text = '';
        input.focus();
    }
// console.log(del[0]);
    
}

function inputName(event) {
    text = event.target.value;
}

function enterKey(event) {
    if(event.keyCode == 13) {
        if(text == '') {
            alert("input");
        } else {
            addItem();
        }
    }
}

function deleteItem() {
    // del
}


// // Event Listener


input.addEventListener('input', inputName);
input.onkeydown = enterKey;
btn.addEventListener('click', addItem);

list.addEventListener('click', function(e) {
    // console.log(e.target.id)
    var str = e.target.id;
    var s = str.substr(4);
    var store = 'item' + s;
    var tem = document.getElementById(str);
    var itDel = document.getElementById(store);

    itDel.remove();
    // tem.remove();
})

// This is a comment testing the work of git