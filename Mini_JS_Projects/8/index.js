const prompt = require("prompt-sync")()

function printInfo() {
    console.log("Contacts");
    console.log("----------------------------");
    console.log("1. Add a contact");
    console.log("2. Delete a contact");
    console.log("3. View contacts");
    console.log("4. Search contacts");
    console.log("5. Exit");
}

function addContact() {
    const name = prompt("Enter name: ")
    const email = prompt("Enter email: ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact);
    console.log("Added")
    
}

function deleteContact() {
    console.log(" Contact IDs")
    for (let i=0; i< contacts.length; i++) {
        const contact = contacts[i]
        console.log((i+1).toString() + ":", contact.name)
    }
    const number = parseInt(prompt("Enter an ID: "));
    if (isNaN (number) || number > contacts.length) {
        console.log("Invalid")
        return       
    }
    contacts.splice(number - 1, 1);
    console.log("Removed");   
}

function viewContacts(contacts) {
    for (let contact of contacts)   {                 /* misto pouziti indexu, udela totez, jako bych volala po 1 pomoci indexu */
    console.log("----------");
    console.log("Name: ", contact.name);
    console.log("Email: ", contact.email);
    }
}

function searchContacts() {
    const searchString = prompt("Search name: ").toLowerCase();
    results = [];

    for (contact of contacts) {
        if (contact.name.toLowerCase().includes(searchString)) results.push(contact)
    }

    viewContacts(results);  
}

const contacts = [];
let continueToRun = true;

printInfo();


while(continueToRun) {
    const number = prompt("Select one of the options (1-5): ")
    switch(number) {
        case "1":
            addContact()
            break;
        case "2":
            deleteContact()
            break;
        case "3":
            viewContacts(contacts)
            break;
        case "4":
            searchContacts()
            break;
        case "5":
            continueToRun = false;
            break;
        default:
            console.log("Unknown option.")
            break;
    }
}