import React from 'react'

export default function ContactCard(props) {
    const {id, name, email} = props.contact
    return (
        <div className="contacts-con" key={id}> 
            <i className="fa fa-user-circle"></i>
            <div className="contactlist-field">
                {name}
            </div>
            <div className="contactlist-field">
                {email}
            </div>
            <div className="action-items">
                <i className="fa fa-trash-o" onClick = {() => {props.clickHandler(id)}}></i>
                <i className='fa fa-edit'></i>
            </div>
        </div>
    )
}
