import './App.css';
import {uuid} from 'uuidv4';
import React, {useState, useEffect} from 'react';
import AddContacts from './Components/AddContacts';
import ContactList from './Components/ContactList';
import Header from './Components/Header';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>{
    setContacts([...contacts, {id: uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList);
  }
  
  useEffect(() => {
    const retrievedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(retrievedContacts){
      setContacts( JSON.parse(retrievedContacts));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className="App">
      <Header/>
      <AddContacts addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
