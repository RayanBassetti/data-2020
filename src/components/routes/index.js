import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Clients from '../clients/Clients'
import ClientProfile from '../clientprofile'
import NavMenu from '../common/navigation/NavMenu';
import Home from '../home/Home';
import Planning from '../planning';
import Messagerie from '../messagerie';

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
                    <Route 
                        exact 
                        path="/messagerie/"
                        render={() => <Messagerie />}>
                    </Route>
                    <Route 
                        exact 
                        path="/planning/"
                        render={() => <Planning />}>
                    </Route>
            </Switch>
        </Router>
    )
}

export default RoutingSwitch