import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary';

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
        console.log('Checkout', this.props.location)
        this.setState(this.props.location.state);
    }
    toBurgerBuilder = () => {
        this.props.history.goBack();
    }
    toOrderDetails = () => {
        this.props.history.replace('/orderform', this.state);
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    totalPrice={this.state.totalPrice} 
                    cancelHandler={this.backToBurgerBuilder}
                    continueHandler={this.toOrderDetails}/>
            </div>
        );
    }
}

export default Checkout;