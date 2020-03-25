import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home'
import ClientProfile from '../clientprofile'

function RoutingSwitch(props) {
    return(
        <Router>
            <Switch>
                    <Route 
                        exact 
                        path="/"
                        render={() => <Home props={props} />}>
                    </Route>
                    <Route 
                        path="/users/:user_id"
                        render={(props) => <ClientProfile {...props} />} // allows to pass props from parent component to this one
                    >
                    </Route>
            </Switch>
        </Router>
    )
}

export default RoutingSwitch