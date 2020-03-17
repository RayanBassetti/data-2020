import React from 'react';

function UserProfile(props) {
    const {data} = props
    return(
        <>
            <div className="user_profile">
                <h1>Client profile</h1>
                <p>{data.id}</p>
            </div>
        </>
    )
}
 
export default UserProfile