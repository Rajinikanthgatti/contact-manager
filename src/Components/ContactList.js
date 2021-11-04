import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';


const ContactList = (props) => {
    console.log(props);
    const inputVal = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderContacts = props.contacts.map((contact) => {
        return(
            <ContactCard key={contact.id} contact={contact} clickHandler = {deleteContactHandler}/>
        )
    })
    const getSearchTerm = () => {
        props.searchKeyword(inputVal.current.value)
    }
    return (
        <div className="contactlist-con">
            <h2 className="title">Contact List</h2>
            <div className="search-container">
                <input ref={inputVal} type="text" placeholder="Search..." value={props.term} onChange={getSearchTerm}/>
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
            </div>
            {renderContacts}
            <Link to="/add"><button>Add to contacts</button></Link>
        </div>
    )
}
export default ContactList;