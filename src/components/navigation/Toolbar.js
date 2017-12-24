import React from 'react';

import Logo from '../common/Logo';
import classes from './Toolbar.css';

const Toolbar = (props) => {

    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <ul>
                    <li></li>
                </ul>
            </nav>
        </header>
    );
}

export default Toolbar;