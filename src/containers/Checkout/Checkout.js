import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import OrderForm from '../../components/Order/OrderForm';

class Checkout extends Component {

    state = {
        ingredients: {
            meat: 1,
            salad: 1,
            bacon: 1,
            cheese: 1
        },
        totalPrice: 5.5
    }

    componentWillMount() {
        this.setState(this.props.location.state);
    }
    toBurgerBuilder = () => {
        this.props.history.goBack();
    }
    toOrderDetails = () => {
        this.props.history.replace('/checkout/orderform', this.state);
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    totalPrice={this.state.totalPrice} 
                    cancelHandler={this.backToBurgerBuilder}
                    continueHandler={this.toOrderDetails}/>
                <Route path={this.props.match.path + '/orderform'} component={OrderForm} />

            </div>
        );
    }
}

export default Checkout;