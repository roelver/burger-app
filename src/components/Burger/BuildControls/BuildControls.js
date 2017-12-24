import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';
import Modal from '../../common/Modal';
import Button from '../../common/Button';
import OrderSummary from '../OrderSummary/OrderSummary';

const controls = [
   { label: 'Salad', type: 'salad'},
   { label: 'Cheese', type: 'cheese'},
   { label: 'Bacon', type: 'bacon'},
   { label: 'Meat', type: 'meat'}
];

class BuildControls extends Component {
    
    state = {
        modalIsOpen: false
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
                            removeDisabled={this.props.disabledInfo[control.type]}
                            addIngredientHandler={() => this.props.addIngredientHandler(control.type)}
                            removeIngredientHandler={() => this.props.removeIngredientHandler(control.type)}
                        />
                    )
                )}
                <button 
                    className={classes.OrderButton} 
                    disabled={this.props.orderDisabled}
                    onClick={() => this.openModal()}
                    >ORDER NOW</button>
                    
                    <Modal show={this.state.modalIsOpen} closeHandler={() => this.closeModal()}>
                        <OrderSummary 
                            labels={controls} 
                            order={this.props.ingredients} 
                            totalPrice={this.props.totalPrice}
                        />
                        <Button handler={() => this.closeModal()} type="Success">Continue</Button>
                        <Button handler={() => this.closeModal()} type="Danger">Cancel</Button>
                    </Modal>
            </div>
        );
    }
}

BuildControls.propTypes = {
    ingredients: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired,
    orderDisabled: PropTypes.bool,
    addIngredientHandler: PropTypes.func.isRequired,
    removeIngredientHandler: PropTypes.func.isRequired,
    disabledInfo: PropTypes.object.isRequired
}

export default BuildControls;