import { useState } from 'react';
import { useEffect } from 'react';
import CustomersDB from '../CustomersDB';
import InputCustomer from '../InputCustomer';

function HomePage() {
    
    return (
        <div>
            <InputCustomer></InputCustomer>
            <CustomersDB></CustomersDB>
        </div>
    );
}

export default HomePage;
