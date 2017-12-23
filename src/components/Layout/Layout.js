import React, {Fragment} from 'react';

const layout = (props) => {
    return (
        <Fragment>
            <div>Toolbar, SideDrawer, BackDrawer</div>
            <main>
                { props.children }
            </main>
        </Fragment>
    );
}

export default layout;