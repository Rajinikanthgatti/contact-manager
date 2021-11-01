import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactCard(props) {
    const {id, name, email} = props.contact
    return (
        <div className="contacts-con" key={id}> 
            <i className="fa fa-user-circle"></i>
            <Link to={{pathname: `/contact/${id}`, state:{contact: props.contact}}}>
                <div className="contactlist-field">
                    {name}
                </div>
                <div className="contactlist-field">
                    {email}
                </div>
            </Link>
            <div className="action-items">
                <i className="fa fa-trash-o" onClick = {() => {props.clickHandler(id)}}></i>
                <i className='fa fa-edit'></i>
            </div>
        </div>
    )
}
