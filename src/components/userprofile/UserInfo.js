import React from 'react';

function UserProfile(props) {
    const {data} = props
    return(
        <>
            <div className="user_profile">
                <h1>Name: {data.name}</h1>
            </div>
        </>
    )
}
 
export default UserProfile