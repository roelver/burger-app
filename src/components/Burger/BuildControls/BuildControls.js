import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
   { label: 'Salad', type: 'salad'},
   { label: 'Meat', type: 'meat'},
   { label: 'Cheese', type: 'cheese'},
   { label: 'Bacon', type: 'bacon'}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls }> 
            { controls.map( control => (
                    <BuildControl key={control.type} label={control.label} type={control.type} />
                )
            )}
        </div>
    );
}

export default buildControls;