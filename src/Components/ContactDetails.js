import React from 'react'
import { Link } from 'react-router-dom';

export default function ContactDetails(props) {
    const {name, email} = props.history.location.state.contact;
    return (
        <div className="contacts-con"> 
            <i className="fa fa-user-circle"></i>
            <div className="contactlist-field">
                {name}
            </div>
            <div className="contactlist-field">
                {email}
            </div>
            <Link to="/"><button>Back to contacts</button></Link>
        </div>
    )
}
