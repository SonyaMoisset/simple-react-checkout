import React from 'react'

import { OrderSummary } from '../components'
import { PaymentForm } from './' 

const Checkout = ({ duration, discount, tax, price, onSubmit }) =>  (
    <div className="checkout">
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