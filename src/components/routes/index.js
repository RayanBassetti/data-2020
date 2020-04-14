import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home'
import ClientProfile from '../clientprofile'
import NavMenu from '../common/NavMenu';

function RoutingSwitch() {
    return(
        <Router>
            <NavMenu />
            <Switch>
                    <Route 
                        path="/users/"
                        render={() => <Home />}>
                    </Route>
                    <Route 
                        exact 
                        path="/users/:user_id"
                        render={(props) => <ClientProfile {...props} />} // allows to pass props from component to this one
                    >
                    </Route>
            </Switch>
        </Router>
    )
}

export default RoutingSwitch