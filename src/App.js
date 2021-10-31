import './App.css';
import AddContacts from './Components/AddContacts';
import ContactList from './Components/ContactList';
import Header from './Components/Header';

function App() {
  const contacts = [
    {
      id: 1,
      name: 'Rajinikanth',
      email: 'abc@gmail.com'
    },
    {
      id: 2,
      name: 'user - 1',
      email: 'user1@gmail.com'
    },
    {
      id: 3,
      name: 'user - 2',
      email: 'user2@gmail.com'
    }
  ];
  return (
    <div className="App">
      <Header/>
      <AddContacts/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
