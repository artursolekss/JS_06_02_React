import React from 'react';

class InputCustomer extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        }
    }

    onSave = (event) => {
        let self = this;
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        fetch("http://localhost:80/my-app-backend/createCustomer.php", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(self.state)
        }).then(function (response) {
            console.log(response);
        })
        event.preventDefault();
    }

    onNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    onLastNamechange = (event) => {
        this.setState({ lastName: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPhoneChange = (event) => {
        this.setState({ phone: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.onSave}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstname"
                        fieldname="firstname" value={this.state.firstName}
                        onChange={this.onNameChange}></input>
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname"
                        fieldname="lastname" value={this.state.lastName}
                        onChange={this.onLastNamechange}></input>

                    <label htmlFor="email">E-Mail</label>
                    <input id="email"
                        fieldname="email" value={this.state.email}
                        onChange={this.onEmailChange}></input>

                    <label htmlFor="phone">Phone</label>
                    <input id="phone"
                        fieldname="phone" value={this.state.phone}
                        onChange={this.onPhoneChange}></input>
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        );
    }
}

export default InputCustomer;