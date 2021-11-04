import React from 'react'
import { Link } from 'react-router-dom'
import DeleteContactConfirm from './DeleteContactConfirm';

export default function ContactCard(props) {
    const {id, name, email} = props.contact
    const clickHandler = (id) => {
        props.deleteContactHandler(id);
    }

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
                <Link to={{pathname:`/delete/${id}`}}><i className="fa fa-trash-o"></i></Link>
                <Link to={{pathname: "/edit", state: {contact: props.contact}}}>
                <i className='fa fa-edit'></i>
                </Link>
            </div>
        </div>
    )
}
