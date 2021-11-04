import React, { Component } from 'react'

export default class EditContact extends Component {
    constructor(props){
        super(props)
        const {id, email, name} = props.location.state.contact
        this.state = {
            id,
            email, 
            name
        }
    }

    state = {
        name: "",
        email: ""
    }

    update = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert('All fields are required')
            return;
        }
        console.log(this.props)
        console.log(this.state)
        this.props.updateContactHandler(this.state);
        this.setState({name : "", email: ""})
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="add-contacts-con">
                <h2 className="title">Edit Contact</h2>
                <form onSubmit={this.update}>
                    <div className="field">
                        <label htmlFor="contact-name" className="name-label">Name</label>
                        <input id="contact-name" name="name" type="text" placeholder="Name" value={this.state.name} onChange={(e) => {this.setState({name : e.target.value})}}></input>
                    </div>
                    <div className="field">
                        <label htmlFor="contact-email" className="email-label">Email</label>
                        <input id="contact-email" name="email" type="text" placeholder="Email" value={this.state.email} onChange = {(e) => {this.setState({email: e.target.value})}}></input>
                    </div>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
