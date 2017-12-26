import React, { Component } from 'react';
import axios from '../../axios-orders';

import classes from './OrderForm.css';

class OrderForm extends Component {

    state = {
        name: 'Roel Verbunt',
        address: {
            street: 'Test street 1',
            zipcode: '1516KK',
            country: 'Netherlands'
        },
        phone: '06-12345678',
        email: 'roel@test.com'
    }

    componentWillMount() {
        this.setState(this.props.location.state);
    }
    sendOrder = (event) => {
        event.preventDefault();
        console.log('send order', this.state);

        const order = {
            price: this.state.price,
            ingredients: this.state.ingredients,
            deliveryMethod: 'fastest',
            customer: {
                name: this.state.name,
                address: this.state.address,
                email: this.state.email
            }
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({price: 3, ingredients: {salad: 0,cheese: 0,bacon: 0, meat: 0 } });
                this.props.history.push('/');
            });
    }

    render() {
        return (
            <div className={classes.OrderForm}>
                <form onSubmit={this.sendOrder}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
                    </div>
                    <button type="submit">Send order</button> 
                </form>
            </div>
        );
    }
}

export default OrderForm;