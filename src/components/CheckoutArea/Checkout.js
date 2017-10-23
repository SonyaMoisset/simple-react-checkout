import React from 'react'
import OrderSummary from './OrderSummary'
import {PaymentForm} from './PaymentFormComponents'

const Checkout = ({ duration, discount, tax, price, onSubmit }) =>  (
    <div className="Checkout">
        <OrderSummary
            duration={duration}
            discount={discount}
            tax={tax}
            price={price} />
        <PaymentForm
            onSubmit={onSubmit} />
    </div>
)

export default Checkout