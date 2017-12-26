import React from 'react';

import classes from './CheckoutSummary.css';
import Burger from '../Burger/Burger';
import Button from '../../components/common/Button';

const CheckoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div className={classes.Burger}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <p>Total price: ${props.totalPrice.toFixed(2)}</p>
            <Button type="Success" handler={props.continueHandler}>CONTINUE</Button>
            <Button type="Danger" handler={props.cancelHandler}>CANCEL</Button>
        </div>
    );
}

export default CheckoutSummary;