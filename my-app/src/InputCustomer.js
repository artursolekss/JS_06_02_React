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
        headers.append("Content-type","application/json");
        fetch("http://localhost:80/my-app-backend/createCustomer.php", {
            method: "POST",
            headers:headers,
            body:JSON.stringify(self.state)
        }).then(function (response) {
          
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
                <input fieldname="firstname" value={this.state.firstName}
                    onChange={this.onNameChange}></input>
                <input fieldname="lastname" value={this.state.lastName}
                    onChange={this.onLastNamechange}></input>
                <input fieldname="email" value={this.state.email}
                    onChange={this.onEmailChange}></input>
                <input fieldname="phone" value={this.state.phone}
                    onChange={this.onPhoneChange}></input>
                <button>Save</button>
            </form>
        );
    }
}

export default InputCustomer;