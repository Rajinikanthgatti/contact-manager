import './App.css';
import {uuid} from 'uuidv4';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddContacts from './Components/AddContacts';
import ContactList from './Components/ContactList';
import Header from './Components/Header';
import ContactDetails from './Components/ContactDetails';
import DeleteContactConfirm from './Components/DeleteContactConfirm';
import api from './api/contacts'
import EditContact from './Components/EditContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //retrieveContacts - json-server api
  const retrieveContacts = async () =>{
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) =>{
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    //console.log(contact)
    setContacts([...contacts, response.data])
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    //console.log(response);
    const {id, email, name} = response.data
    setContacts(contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact;
    }))
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList);
  }

  const SearchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  }
  
  useEffect(() => {
    //const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    /*if(retrievedContacts){
      setContacts(retrievedContacts);
    }*/

    const getContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };
    getContacts();
  }, [])

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
            <Route exact path="/" render = {(props) => (<ContactList {...props} contacts={ searchTerm.length < 1 ? contacts : searchResults} getContactId = {removeContactHandler} term = {searchTerm} searchKeyword = {SearchHandler}/>)}/>
            <Route exact path="/add" render = {(props) => (<AddContacts {...props} addContactHandler={addContactHandler} />)}/>
            <Route exact path="/edit" render = {(props) => (<EditContact {...props} updateContactHandler={updateContactHandler} />)}/>
            <Route exact path="/contact/:id" component={ContactDetails} />
            <Route exact path="/delete/:id" render = {(props) => (<DeleteContactConfirm {...props} getContactId = {removeContactHandler}/>)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
