import React from 'react';

import UserInfo from './UserInfo';

function UserProfile(props) {
    const user = props.location.state
    return(
        <UserInfo data={user}/>
    )

}

export default UserProfile