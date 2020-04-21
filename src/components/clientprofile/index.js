import React from 'react';

import Header from '../common/components/Header'
import UserContent from './UserContent'
import ClientDisplayContextProvider from '../contexts/ClientDisplayContext'

function UserProfile(props) {
    const user = props.location.state
    return(
        <div className="content">
            <ClientDisplayContextProvider>
                <Header profil={true}/>
                <UserContent data={user}/>
            </ClientDisplayContextProvider>
        </div>
    )

}

export default UserProfile