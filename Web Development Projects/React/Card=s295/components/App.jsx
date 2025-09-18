import React from "react";
import Card from "./Card";
import contacts from "../contacts";    //? import, jchzbel export v contacts


function createCard(contact) {
  return (<Card 
    key={contact.id}
    id={contact.id}
    name={contact.name}
    img src={contact.imgURL}
    phone={contact.phone}
    email={contact.email} 
  />
  );
}

function App() {

  console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* <Card name="Lilac" 
            phone="76543" 
            email="v@v.cz" 
            img src="data:image/jpeg;..."  /> */}

      {contacts.map(createCard)}


      {/* <Card name={contacts[0].name} 
            phone= {contacts[0].phone} 
            email= {contacts[0].email} 
            img src = {contacts[0].imgURL} />

      <Card name={contacts[1].name} 
            phone= {contacts[1].phone} 
            email= {contacts[1].email} 
            img src = {contacts[1].imgURL} />

      <Card name={contacts[2].name} 
            phone= {contacts[2].phone} 
            email= {contacts[2].email} 
            img src = {contacts[2].imgURL} /> */}
      
    </div>
  );
}

export default App;
