import React, { Component, Fragment } from 'react';

import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import withErrorHandler from '../../hoc/withErrorHandler';

const PRICES = {
    salad: 0.4,
    cheese: 0.7,
    bacon: 0.5,
    meat: 1.2
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        price: 3
    }

    purchasable = () => {
        const ingredients = {...this.state.ingredients};
        return Object.values(ingredients)
            .some(value => value > 0);
    } 

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        const price = Math.round((this.state.price + PRICES[type]) * 100, 2) / 100;
        ingredients[type]++;
        this.setState({ingredients, price});
    }

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        if (ingredients[type] > 0) {
            const price = Math.round((this.state.price - PRICES[type]) * 100, 2) / 100;
            ingredients[type]--;
            this.setState({ingredients, price});
        }
    }
    
    sendOrder = (callback) => {
        const order = {
            price: this.state.price,
            ingredients: this.state.ingredients,
            deliveryMethod: 'fastest',
            customer: {
                name: 'Roel Verbunt',
                address: {
                    street: 'Test street 2',
                    zipcode: '3622',
                    city: 'Testtown',
                    country: 'Netherlands'
                },
                email: 'roel@romaniflo.nl'
            }
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({price: 3, ingredients: {salad: 0,cheese: 0,bacon: 0, meat: 0 } });
                callback();
            });
    }


    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} totalPrice={this.state.price}/>
                <BuildControls 
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.price}
                    ingredients={this.state.ingredients}
                    orderDisabled={!this.purchasable()}
                    sendOrder={this.sendOrder.bind(this)}
                    addIngredientHandler={this.addIngredientHandler.bind(this)}
                    removeIngredientHandler={this.removeIngredientHandler.bind(this)}
                />
            </Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
