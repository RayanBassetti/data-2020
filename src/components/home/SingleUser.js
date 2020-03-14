import React from 'react';

import { withRouter } from 'react-router-dom';

function SingleUser(props) {
    const {data} = props

    function handleNames() {
        if (data && data.name !== undefined) {
            return data.name.replace(/\d+/g,'')
        } else {
            console.log("error")
        }
    }

    function handleId(idClient) {
        props.history.push('/users/' + idClient)
    }

    return (
        <div className="single_user">
            <p>Id :{data.id}</p>
            <p>Name :{handleNames()}</p>
            <p>Espace: {data.square_meters}m²</p>
            <button onClick={() => handleId(data.id)}>Go to profil</button>
        </div>
    )
    
}

export default withRouter(SingleUser)