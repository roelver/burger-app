import React from 'react';

import classes from './Button.css';

const Button = (props) => {

    return (
        <button className={[ classes.Button, classes[props.type]].join(' ')} onClick={props.handler}>
           { props.children }
        </button>
    );
}

export default Button;