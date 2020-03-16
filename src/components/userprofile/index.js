import React from 'react';

import NavMenu from '../common/NavMenu'
import UserInfo from './UserInfo';

function UserProfile(props) {
    const {state} = props.location
    return(
        <>
            <NavMenu />
            <UserInfo data={state}/>
        </>
    )

}

export default UserProfile