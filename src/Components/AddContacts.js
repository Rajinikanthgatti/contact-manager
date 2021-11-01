import React, { Component } from 'react'

export default class AddContacts extends Component {

    state = {
        name: "",
        email: ""
    }

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert('All fields are required')
            return;
        }
        console.log(this.state);
        this.props.addContactHandler(this.state);
        this.setState({name : "", email: ""})
        console.log(this.props.history.push("/"))
    }

    render() {
        return (
            <div className="add-contacts-con">
                <h2 className="title">Add Contact</h2>
                <form onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="contact-name" className="name-label">Name</label>
                        <input id="contact-name" name="name" type="text" placeholder="Name" value={this.state.name} onChange={(e) => {this.setState({name : e.target.value})}}></input>
                    </div>
                    <div className="field">
                        <label htmlFor="contact-email" className="email-label">Email</label>
                        <input id="contact-email" name="email" type="text" placeholder="Email" value={this.state.email} onChange = {(e) => {this.setState({email: e.target.value})}}></input>
                    </div>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
