import React from 'react';

import classes from './OrderSummary.css';

const OrderSummary = (props) => {
    return (
        <div className={classes.OrderSummary}>
            <h3>Your order</h3>
            <p>You selected these ingredients:</p>
            <ul>
            {
                Object.keys(props.order).map(key => {
                    return (
                        props.order[key] > 0 ?
                            <li key={key}>
                                {props.order[key]}x {props.labels.find(item => item.type === key).label}
                            </li>
                            : null
                    )
                })
            }
            </ul>
            <p>Total order price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            <p>Do you want to checkout?</p>
        </div>
    );
}

export default OrderSummary;
