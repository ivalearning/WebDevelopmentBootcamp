// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const inputItem = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const listContainer = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearList);

// ****** FUNCTIONS **********

function addItem(e) {
    e.preventDefault();
   console.log(inputItem.value);

   const input = inputItem.value;
   const id = new Date().getTime().toString();
   //console.log(id);
   
   if (input !== '' && editFlag === false) {        // da se zkratit na if (input && !editFlag), protoze pokud se zada prazdny retezec, tak bude input false
    //pokud kontroluji false, tak pridam !pred podminku
    //console.log('novy zaznam');

        // vytvoreni article elementu
    const newItem = document.createElement('article');

    // add class
    newItem.classList.add('grocery-item');

    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    // adding attribute to an element
    newItem.setAttributeNode(attr);

    // pridat obsah article elementu

    newItem.innerHTML = `<p class="title">${input}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div> `;
    
    const deleteBtn = newItem.querySelector('.delete-btn');
    const editBtn = newItem.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem)
    
    // append child
    list.appendChild(newItem);

    // display alert
    displayAlert('item added', 'success');

    // show container
    listContainer.classList.add('show-container');
   

    // add to local storage
    addToLocalStorage(id, newItem);                                                 // doplnit
    setBackToDefault(  );

       }
   else if (input !== '' && editFlag === true) {    // zkracene if (input && editFlag)
    //console.log('upravovany zaznam');


    // display alert
    displayAlert('item updated','success');

   }
   else {
    //console.log('empty value');
    displayAlert('empty value', 'danger');    
   }
    

}

function displayAlert(msg, color) {
    alert.textContent = msg;
    alert.classList.add(`alert-${color}`);

    // remove alert
    setTimeout( function() {
        alert.textContent = '';
        alert.classList.remove(`alert-${color}`);
    }, 1000)
}

function addToLocalStorage(id,value) {
    console.log('saved');
    

};

function setBackToDefault() {
    console.log('default');
    inputItem.value = "";
    editFlag = false;
    editId = "";
    submitBtn.textContent = 'Add'
}

function clearList() {
    const items = document.querySelectorAll('.grocery-item');

    if (items.length > 0) {
        items.forEach( function(i) {
            list.removeChild(i);
    });
    }
     listContainer.classList.remove('show-container');
     displayAlert('list cleared', 'danger');
     setBackToDefault();

     //local storage remove items
}
// smazani radku pomoci ikonky kose
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id                                               //   ID


    list.removeChild(element);

    //pokud po smazani nezbyva zadna polozka, tak i 
    if (list.children.length === 0) {
        listContainer.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    //local storage remove items                        // doplnit
};

// editace jmena polozky pomoci ikonky edit
function editItem() {
    const element = e.currentTarget.parentElement.parentElement;

};





// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {

}

function removeFromLocalStorage(id) {

}



// ****** SETUP ITEMS **********
