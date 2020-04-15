import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Clients from '../clients/Clients'
import ClientProfile from '../clientprofile'
import NavMenu from '../common/NavMenu';
import Home from '../home/Home';

function RoutingSwitch() {
    return(
        <Router>
            <NavMenu />
            <Switch>
                    <Route 
                        exact 
                        path="/"
                        render={() => <Home />}>
                    </Route>
                    <Route 
                        exact 
                        path="/clients/"
                        render={() => <Clients />}>
                    </Route>
                    <Route 
                        exact 
                        path="/clients/:client_id"
                        render={(props) => <ClientProfile {...props} />} // allows to pass props from component to this one
                    >
                    </Route>
            </Switch>
        </Router>
    )
}

export default RoutingSwitch