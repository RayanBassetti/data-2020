import React from 'react';

import UserInfo from './UserInfo';

import Header from '../common/components/Header'

function UserProfile(props) {
    const user = props.location.state
    return(
        <div className="content">
            <Header profil={true}/>
            <UserInfo data={user}/>
        </div>
    )

}

export default UserProfile