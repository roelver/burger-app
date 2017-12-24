import React, { Component } from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';
import Modal from '../../common/Modal';
import OrderSummary from '../OrderSummary/OrderSummary';

const controls = [
   { label: 'Salad', type: 'salad'},
   { label: 'Cheese', type: 'cheese'},
   { label: 'Bacon', type: 'bacon'},
   { label: 'Meat', type: 'meat'}
];

class BuildControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
    
    render() {
    return (
        <div className={classes.BuildControls }> 
            { controls.map( control => (
                    <BuildControl 
                        key={control.type} 
                        label={control.label} 
                        removeDisabled={this.props.disabledInfo[control.type] || this.state.modalIsOpen}
                        addDisabled={this.state.modalIsOpen}
                        addIngredientHandler={() => this.props.addIngredientHandler(control.type)}
                        removeIngredientHandler={() => this.props.removeIngredientHandler(control.type)}
                    />
                )
            )}
            <button 
                className={classes.OrderButton} 
                disabled={this.props.orderDisabled || this.state.modalIsOpen}
                onClick={() => this.openModal()}
                >ORDER NOW</button>
                <Modal show={this.state.modalIsOpen} >
                    <OrderSummary 
                        labels={controls} 
                        order={this.props.ingredients} 
                        totalPrice={this.props.totalPrice}
                    />
                    <button>Confirm</button>
                    <button onClick={() => this.closeModal()}>Cancel</button>
                </Modal>
        </div>
    );
}
}

export default BuildControls;