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

// load items
window.addEventListener('DOMContentLoaded', setupRecords);

// ****** FUNCTIONS **********

function addItem(e) {
    e.preventDefault();
  
   const input = inputItem.value;
   console.log("inputItem.value=input: " + input);
   const id = new Date().getTime().toString();
   //console.log(id);
    

   if (input !== '' && editFlag === false) {        // da se zkratit na if (input && !editFlag), protoze pokud se zada prazdny retezec, tak bude input false
        //pokud kontroluji false, tak pridam !pred podminku
        //console.log('novy zaznam');

        // vytvoreni zaznamu
        createListOfRecords(id,input);
 
        // display alert
        displayAlert('item added', 'success');

        // show container
        listContainer.classList.add('show-container');
    

        // add to local storage
        let newItem = createListOfRecords();
        addToLocalStorage(id, newItem);                                                 
        setBackToDefault();
        }
   else if (input !== '' && editFlag === true) {    // zkracene if (input && editFlag)
        //console.log('upravovany zaznam');

        editElement.innerHTML = input;                                              

        displayAlert('item updated','success');

        // edit local storage
        editLocalStorage(editId, input);                                            
        setBackToDefault();
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
    //console.log('saved');
    

};

function setBackToDefault() {
    //console.log('default');
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
     localStorage.removeItem("itemsList");

}
// smazani radku pomoci ikonky kose
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id                                               //   ID

    list.removeChild(element);
    removeFromLocalStorage(id);

    //pokud po smazani nezbyva zadna polozka, tak i 
    if (list.children.length === 0) {
        listContainer.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    //local storage remove items                                                // doplnit
};

// editace jmena polozky pomoci ikonky edit
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;

    // vybere radek, ktery se ma editovat
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // nastavi hodnotu do textboxu
    inputItem.value = editElement.innerHTML;

    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = "edit";
};





// ****** LOCAL STORAGE **********

// nejdriv musi stahnout vse z local storage, protoze dalsi zaznam by to prepsal, takze stahne vse a prida novy na konec

function getLocalStorageData() {
                                    // kontroluje, jestli existuje a kdyz ne, tak nevrati null, ale prazdny retezec
    let records = localStorage.getItem("itemsList")?JSON.parse(localStorage.getItem('itemsList')):[]; 
    console.log(records);

    return records;
}

function addToLocalStorage(id, value) {
    
    const input = inputItem.value;
    const record = {id:id, value:input};
    let records = getLocalStorageData();
    console.log(record);
    
    records.push(record);
    localStorage.setItem('itemsList', JSON.stringify(records));
}

function removeFromLocalStorage(id) {
    let records = getLocalStorageData();
console.log(records);
    records = records.filter( function(record) {
        // projde vsechny zaznamy a vrati ty, kde se id neshoduje
        if (record.id !== id) {
            return record
        }
    });
    console.log(records);
    
    localStorage.setItem('itemsList', JSON.stringify(records));
}

function editLocalStorage(id, value) {
    let records = getLocalStorageData();

    records = records.map( function(record){
        if (record.id === id) {
            record.value = value
        }
        return record;
    })
    localStorage.setItem('itemsList', JSON.stringify(records));
}

// local storage API
// set item /  get item  /  remove item  !! save as string

/*localStorage.setItem("item1", JSON.stringify(["tricko", "zlute"]));

const items = JSON.parse(localStorage.getItem("item1"));
console.log(items);
localStorage.removeItem("item1"); */




// ****** SETUP ITEMS **********

function setupRecords() {
    let records = getLocalStorageData();
    console.log(records);
    

    if (records.length > 0) {
        records.forEach( function(record) {
            createListOfRecords(record.id, record.value)
        })
        listContainer.classList.add('.show-container');
    }
    console.log(records);
    
}

function createListOfRecords(id, input) {

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
        
        return newItem;


}
