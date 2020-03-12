import React from 'react';


class SingleUser extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
        this.handleNames = this.handleNames.bind(this);
        this.handleId = this.handleId.bind(this);
    }

    handleNames() {
        const {data} = this.props
        if (data && data.name !== undefined) {
            return data.name.replace(/\d+/g,'')
        } else {
            console.log("error")
        }
    }

    handleId(idClient) {
        console.log(idClient)
    }

    render() {
        const {data} = this.props
        const {handleNames, handleId} = this
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
}

export default SingleUser