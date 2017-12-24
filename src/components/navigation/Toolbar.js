import React from 'react';

import Logo from '../common/Logo';
import NavigationItems from './NavigationItems';
import classes from './Toolbar.css';

const Toolbar = (props) => {

    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;