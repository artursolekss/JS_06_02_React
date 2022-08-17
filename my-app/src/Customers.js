import React from 'react';

class Customers extends React.Component {

    constructor() {
        super();
        this.state = {
            customers: []
        }
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

                </tbody>
            </table>
        );
    }

}

export default Customers;