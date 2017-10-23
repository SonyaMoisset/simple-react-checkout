import React from 'react'
import BasicInput from './BasicInput'

export const ExpiryDate = (props) => {
    return (
        <div className="ExpiryDate">
            <div>
                <label>Expire on</label>
                <div className="Expiry">
                    <select>
                        <option value="">January</option>
                        <option value="">February</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                        <option value="">October</option>
                        <option value="">November</option>
                        <option value="">December</option>
                    </select>
                    <select name="" id="">
                        <option value="">2017</option>
                        <option value="">2018</option>
                        <option value="">2019</option>
                        <option value="">2020</option>
                        <option value="">2021</option>
                    </select>
                </div>
            </div>
            <div className="CVCField">
                <label>CVC</label>
                <input placeholder="000" type="number" />
            </div>
        </div>
    )
}

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
