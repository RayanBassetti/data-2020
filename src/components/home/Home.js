import React from 'react';

import ListClients from './ListClients'


function Home(props) {
    const {darkMode} = props.props
    return(
        <>
            <div className={`content ${darkMode}`}>
                <ListClients />
            </div>
        </>
    )
}

export default Home