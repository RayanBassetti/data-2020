import React from 'react';

import NavMenu from '../common/NavMenu'
import UserInfo from './UserInfo';

function UserProfile() {
    return(
        <div className="app">
            <NavMenu />
            <UserInfo />
        </div>
    )

}

export default UserProfile