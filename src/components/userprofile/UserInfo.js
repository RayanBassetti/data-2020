import React from 'react';

function UserProfile(props) {
    const {data} = props;
    return(
        <>
        <h1>User profile</h1>
        <p>{data.name}</p>
        </>
    )
}
 
export default UserProfile