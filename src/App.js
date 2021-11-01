import './App.css';
import {uuid} from 'uuidv4';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
      <Router>
      <Header/>
        <Switch>
            <Route exact path="/" render = {(props) => (<ContactList {...props} contacts={contacts} getContactId = {removeContactHandler}/>)}/>
            <Route exact path="/add" render = {(props) => (<AddContacts {...props} addContactHandler={addContactHandler} />)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
