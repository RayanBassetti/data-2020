import React from 'react';

import HeaderProfile from '../common/components/HeaderProfile'
import UserContent from './UserContent'
import ClientDisplayContextProvider from '../contexts/ClientDisplayContext'

function UserProfile(props) {
    const user = props.location.state
    return(
        <div className="content">
            <ClientDisplayContextProvider>
                <HeaderProfile />
                <UserContent data={user}/>
            </ClientDisplayContextProvider>
        </div>
    )

}

export default UserProfile