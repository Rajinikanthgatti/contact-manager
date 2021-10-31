import React, { Component } from 'react'

export default class AddContacts extends Component {
    render() {
        return (
            <div className="add-contacts-con">
                <h2 className="title">Add Contact</h2>
                <form>
                    <div className="field">
                        <label htmlFor="contact-name" className="name-label">Name</label>
                        <input id="contact-name" name="name" type="text" placeholder="Name"></input>
                    </div>
                    <div className="field">
                        <label htmlFor="contact-email" className="email-label">Email</label>
                        <input id="contact-email" name="email" type="text" placeholder="Email"></input>
                    </div>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
