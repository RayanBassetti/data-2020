import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home'
import UserProfile from '../userprofile'

function RoutingSwitch() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/users/:user_id">
                    <UserProfile />
                </Route>
            </Switch>
        </Router>
    )
}

export default RoutingSwitch