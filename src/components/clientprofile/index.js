import React from 'react';

import UserInfo from './UserInfo';

import Header from '../common/components/Header'

function UserProfile(props) {
    const user = props.location.state
    return(
        <>
            <Header profil={true}/>
            <UserInfo data={user}/>
        </>
    )

}

export default UserProfile