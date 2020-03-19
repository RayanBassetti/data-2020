import React from 'react';

import UserInfo from './UserInfo';

function UserProfile(props) {
    const {state} = props.location
    return(
        <>
            <UserInfo data={state}/>
        </>
    )

}

export default UserProfile