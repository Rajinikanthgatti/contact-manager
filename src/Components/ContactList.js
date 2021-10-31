import React from 'react'
import ContactCard from './ContactCard';


const ContactList = (props) => {
    console.log(props);
    const renderContacts = props.contacts.map((contact) => {
        return(
            <ContactCard key={contact.name} contact={contact}/>
        )
    })
    return (
        <div className="contactlist-con">
            <h2 className="title">Contact List</h2>
            {renderContacts}
        </div>
    )
}
export default ContactList;