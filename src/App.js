import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Addtocontact from './components/addtocontact';
import Contactlist from './components/contact';


function App() {
  const [contacts, seContacts] = useState(localStorage.getItem('contacts')?JSON.parse(localStorage.getItem('contacts')):[]);
  const handleraddcontact =(contact)=>{

    seContacts([...contacts, contact]);
  };

  const deletehandeler=(id)=>{
    const hetlicontacts = contacts.filter((contact)=>{
      return contact.id!==id;
       });
       seContacts(hetlicontacts)


  }
 
  useEffect(()=>{
    console.log('hi')
   localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]
  );
  
  return (
    <div className="App">
      <Header />
      <Addtocontact addcontacthandeler ={handleraddcontact} />
      <Contactlist contacts={contacts} getidmilcontact={deletehandeler} />   
    </div>
  );
}

export default App;
