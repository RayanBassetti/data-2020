import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home'
import UserProfile from '../userprofile'

function RoutingSwitch() {
    return(
        <Router>
            <Switch>
                    <Route 
                        exact 
                        path="/"
                        render={() => <Home />}>
                    </Route>
                    <Route 
                        path="/users/:user_id"
                        render={(props) => <UserProfile {...props} />} // allows to pass props from parent component to this one
                    >
                    </Route>
            </Switch>
        </Router>
    )
}

export default RoutingSwitch