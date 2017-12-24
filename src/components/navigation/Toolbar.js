import React from 'react';

import Logo from '../common/Logo';
import NavigationItems from './NavigationItems';
import DrawerToggle from './DrawerToggle';
import classes from './Toolbar.css';

const Toolbar = (props) => {

    return (
        <header className={classes.Toolbar}>
            <DrawerToggle 
                toggleSideDrawerHandler={props.toggleSideDrawerHandler} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;