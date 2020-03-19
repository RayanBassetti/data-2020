import React from 'react';

import ListClients from './ListClients'
// import ChartSingleClient from './ChartSingleClient'
// import NavMenu from '../common/NavMenu';


function Home() {
    return(
        <>
            <div className="content">
                <ListClients />
                {/* <ChartSingleClient /> */}
            </div>
        </>
    )
}

export default Home