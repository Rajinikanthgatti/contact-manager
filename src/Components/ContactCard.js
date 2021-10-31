import React from 'react'

export default function ContactCard({contact}) {
    return (
        <div className="contacts-con" key={contact.name}> 
            <div className="contactlist-field">
                {contact.name}
            </div>
            <div className="contactlist-field">
                {contact.email}
            </div>
            <div className="action-items">
                <i className="fa fa-trash-o"></i>
                <i className='fa fa-edit'></i>
            </div>
        </div>
    )
}
