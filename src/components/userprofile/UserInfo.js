import React from 'react';

function UserProfile(props) {
    const {data} = props;

    
    function handleNames() {
        if (data && data.name !== undefined) {
            return data.name.replace(/\d+/g,'')
        } else {
            console.log("error")
        }
    }

    console.log(props)
    return(
        <>
        </>
    )
}
 
export default UserProfile