import React, { Fragment } from 'react';

import Logo from '../common/Logo';
import Backdrop from '../common/Backdrop';
import NavigationItems from './NavigationItems';

import classes from './SideDrawer.css';

const SideDrawer = (props) => {
    const attachedClasses = [ classes.SideDrawer, 
        (props.show ? classes.Open : classes.Close)].join(' ');
    return (
        <Fragment>
            <Backdrop show={props.show} closeHandler={props.closeSideDrawerHandler}/>
            <div className={attachedClasses}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
}

export default SideDrawer;