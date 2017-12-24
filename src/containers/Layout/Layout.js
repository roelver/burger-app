import React, {Fragment, Component} from 'react';

import Toolbar from '../../components/navigation/Toolbar';
import SideDrawer from '../../components/navigation/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerIsOpen: false
        }
    }
    
    toggleSideDrawerHandler = () => {
        this.setState((oldState) => {
            return { drawerIsOpen: !oldState.drawerIsOpen}}
        );
    }

    closeSideDrawerHandler = () => {
        this.setState({drawerIsOpen: false});
    }
    
    render() {
        return (
            <Fragment>
                <Toolbar 
                    toggleSideDrawerHandler={() => this.toggleSideDrawerHandler()}
                />
                <SideDrawer 
                    show={this.state.drawerIsOpen}
                    closeSideDrawerHandler={() => this.closeSideDrawerHandler()}
                />
                <main className={classes.Content}>
                    { this.props.children }
                </main>
            </Fragment>
        );
    }
}

export default Layout;