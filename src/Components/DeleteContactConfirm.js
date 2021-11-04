import React from 'react'
import { Link } from 'react-router-dom';

export default function DeleteContactConfirm(props) {
    console.log(props);
    return (
        <div>
            <h2>Do you want to delete the contact? Once done can't undo.</h2>
            <Link to="/"><button onClick={()=> props.getContactId(props.match.params.id)}>Okay</button></Link>
            <Link to="/"><button>Cancel</button></Link>
        </div>
    )
}
