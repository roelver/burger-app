import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
   { label: 'Salad', type: 'salad'},
   { label: 'Cheese', type: 'cheese'},
   { label: 'Bacon', type: 'bacon'},
   { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls }> 
            { controls.map( control => (
                    <BuildControl 
                        key={control.type} 
                        label={control.label} 
                        removeDisabled={props.disabledInfo[control.type]}
                        addIngredientHandler={() => props.addIngredientHandler(control.type)}
                        removeIngredientHandler={() => props.removeIngredientHandler(control.type)}
                    />
                )
            )}
            <button 
                className={classes.OrderButton} 
                disabled={props.orderDisabled}
                onClick={() => console.log('Order clicked')}
                >ORDER NOW</button>
        </div>
    );
}

export default buildControls;