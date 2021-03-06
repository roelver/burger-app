import React, { Component, Fragment } from 'react';

import axios from '../../axios-orders';
import Spinner from '../../components/common/Spinner';
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
        // ingredients: {
        //     salad: 0,
        //     cheese: 0,
        //     bacon: 0,
        //     meat: 0
        // },
        price: 3,
        error: null
    }

    componentDidMount() {
        if (!this.state.ingredients) {
            axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data });
            })
            .catch(error => {this.setState({error: error})});
        }
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
    
    toCheckout = () => {
        this.props.history.push('/checkout', 
        {
            ingredients: this.state.ingredients,
            totalPrice: this.state.price
        });
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
    //    sendOrder={this.sendOrder.bind(this)}
        
        const ui = this.state.ingredients ?
            <Fragment>
                <Burger ingredients={this.state.ingredients} totalPrice={this.state.price}/>
                <BuildControls 
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.price}
                    ingredients={this.state.ingredients}
                    orderDisabled={!this.purchasable()}
                    toCheckout={this.toCheckout.bind(this)}
                    addIngredientHandler={this.addIngredientHandler.bind(this)}
                    removeIngredientHandler={this.removeIngredientHandler.bind(this)}
                /> 
            </Fragment> : 
                !this.state.error ?
                    <Spinner /> : 
                    <p style={{ textAlign: 'center'}}>
                        <strong>Fatal Error. The Burger App is out of order</strong>
                    </p> ;
        return (
            <Fragment>
                { ui }
            </Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
