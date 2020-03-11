import React from 'react';

import ListUsers from './ListUsers'
import ChartSingleUser from './ChartSingleUser';

class Home extends React.Component {

    render() {
        return(
                <div className="home">
                    <ListUsers />
                    <ChartSingleUser />
                </div>
        )
    }
}

export default Home