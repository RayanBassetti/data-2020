import React from 'react';

import ListUsers from './ListUsers'
// import ChartSingleUser from './ChartSingleUser'
import NavMenu from '../common/NavMenu';


function Home() {
    return(
        <>
            <NavMenu />
            <div className="content">
                <ListUsers />
                {/* <ChartSingleUser /> */}
            </div>
        </>
    )
}

export default Home