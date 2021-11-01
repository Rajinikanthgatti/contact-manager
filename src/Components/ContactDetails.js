import React from 'react'

export default function ContactDetails(props) {
    console.log(props);
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
        </div>
    )
}
