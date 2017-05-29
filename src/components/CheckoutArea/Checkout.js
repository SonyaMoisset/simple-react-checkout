import React from 'react'
import OrderSummary from './OrderSummary'
import {PaymentForm} from './PaymentFormComponents'

const Checkout = (props) => {
    return (
        <div className="Checkout">
            <OrderSummary
                duration={props.duration}
                discount={props.discount}
                tax={props.tax}
                price={props.price} />
            <PaymentForm
                onSubmit={props.onSubmit} />
        </div>
    )
}

export default Checkout