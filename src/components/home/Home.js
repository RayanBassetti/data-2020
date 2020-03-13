import React from 'react';

import ListUsers from './ListUsers'
import ChartSingleUser from './ChartSingleUser'
import NavMenu from '../common/NavMenu';


function Home() {
    return(
        <>
            <div className="app">
                <NavMenu />
                <ListUsers />
            </div>
            <ChartSingleUser />
        </>
    )
}

export default Home