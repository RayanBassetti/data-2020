import React from 'react';

import ListUsers from './ListUsers'
import ChartSingleUser from './ChartSingleUser'
import NavMenu from '../common/NavMenu';


function Home() {
    return(
        <>
            <div className="app">
                <NavMenu />
                <div className="content">
                    <ListUsers />
                    <ChartSingleUser />
                </div>
            </div>
        </>
    )
}

export default Home