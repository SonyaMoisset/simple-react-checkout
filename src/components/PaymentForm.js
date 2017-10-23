import React from 'react'

import { BasicInput, CheckoutButton, ExpiryDate } from './'

const PaymentForm = ({ onSubmit }) => (
    <div className="PaymentForm">
        <form onSubmit={ onSubmit }>
            <div className="Title">Payment information</div>

            <BasicInput
                name="name"
                label="Name on credit card"
                type="text"
                placeholder="Sonya Moisset" />
            
            <BasicInput
                name="card"
                label="Credit card number"
                type="number"
                placeholder="0000 0000 0000 0000" />
            
            <ExpiryDate />

            <CheckoutButton />
        </form>
    </div>
)

export default PaymentForm