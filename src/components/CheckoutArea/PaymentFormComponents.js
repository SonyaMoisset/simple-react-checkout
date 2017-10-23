import React from 'react'
import BasicInput from './BasicInput'
import ExpiryDate from './ExpiryDate'

export const CheckoutButton = (props) => {
    return (
        <div className="CheckoutButton">
            <button>Book securely</button>
        </div>
    )
}

export const PaymentForm = (props) => {
    return (
        <div className="PaymentForm">
            <form onSubmit={props.onSubmit}>
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
}
