import React from 'react';

class Customers extends React.Component {

    constructor() {
        super();
        this.state = {
            customers: []
        }
        this.customersInit();
    }

    customersInit = () => {
        let self = this;
        fetch("http://localhost:80/my-app-backend/customers.php", {
            method: "GET"
        }).then(function (response) {
            if (response.ok) {
                response.json().then(customers => {
                    self.setCustomerTable(customers);
                });
            }
        })
    }

    setCustomerTable(customersLoad) {
        const initCustomers = [];
        customersLoad.map((obj) => {
            initCustomers.push(Object.assign({}, obj));
        })
        this.setState({ customers: initCustomers });
    }

    render() {
        return (
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-Mail</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !(this.state.customers === undefined) && this.state.customers.map((customer) => {
                                return (
                                    <tr key={customer.id}>
                                        <td>{customer.firstname}</td>
                                        <td>{customer.lastname}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
        );
    }

}

export default Customers;