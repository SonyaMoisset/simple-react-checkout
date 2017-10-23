import React from 'react'
import pluralize from 'pluralize'

const OrderSummary = ({ duration, discount, price, tax }) => {
    const time = duration + " " + pluralize('day', duration);
    const initialTotal = duration * price;
    const discountTotal = Math.floor((initialTotal / 100) * discount);
    const subTotal = initialTotal - discountTotal;
    const taxTotal = Math.floor((subTotal / 100) * tax);
    const total = subTotal + taxTotal;

    return (
        <div className="OrderSummary">
            <div className="Title">Order Summary</div>
            <table>
                <tbody>
                    <tr>
                        <td>{price} x {time}</td>
                        <td>{initialTotal} GBP</td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>{discountTotal} GBP</td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td>{subTotal} GBP</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{taxTotal} GBP</td>
                    </tr>
                </tbody>
            </table>
            <div className="Total">
                <div className="TotalLabel">Total</div>
                <div className="Amount">
                    {total} <small>GBP</small>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary