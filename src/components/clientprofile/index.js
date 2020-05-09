import React from 'react';

import HeaderProfile from '../common/components/HeaderProfile'
import UserContent from './UserContent'
import ClientDisplayContextProvider from '../contexts/ClientDisplayContext'
import CampaignContextProvider from '../contexts/CampaignContext'

function UserProfile(props) {
    const user = props.location.state
    return(
        <div className="content">
            <ClientDisplayContextProvider>
                <HeaderProfile />
                <CampaignContextProvider>
                    <UserContent data={user}/>
                </CampaignContextProvider>
            </ClientDisplayContextProvider>
        </div>
    )

}

export default UserProfile