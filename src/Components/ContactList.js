import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';


const ContactList = (props) => {
    console.log('Prop' + JSON.stringify( props));
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderContacts = props.contacts.map((contact) => {
        return(
            <ContactCard key={contact.id} contact={contact} clickHandler = {deleteContactHandler}/>
        )
    })
    return (
        <div className="contactlist-con">
            <h2 className="title">Contact List</h2>
            <Link to="/add"><button>Add to contacts</button></Link>
            {renderContacts}
        </div>
    )
}
export default ContactList;