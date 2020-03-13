import React from 'react';

import ListUsers from './ListUsers'
import ChartSingleUser from './ChartSingleUser'
import NavMenu from './common/NavMenu';


class Home extends React.Component {

    render() {
        return(
                <div className="home">
                    <NavMenu />
                    <ListUsers />
                    <ChartSingleUser />
                </div>
        )
    }
}

export default Home