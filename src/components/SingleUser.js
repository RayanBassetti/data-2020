import React from 'react';


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
        window.open('http://localhost:3000/users/' + idClient)
    }

    return (
        <div className="singleUser">
            <h1>Single User</h1>
            <p>Id :{data.id}</p>
            <p>Name :{handleNames()}</p>
            <p>Espace: {data.square_meters}m²</p>
            <button onClick={() => handleId(data.id)}>Go to profil</button>
        </div>
    )
    
}

export default SingleUser