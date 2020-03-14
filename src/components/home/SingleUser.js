import React from 'react';

import { withRouter } from 'react-router-dom';

class SingleUser extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleNames = this.handleNames.bind(this);
        this.handleId = this.handleId.bind(this);
    }
    

    handleNames() {
        const {data} = this.props;
        if (data && data.name !== undefined) {
            return data.name.replace(/\d+/g,'')
        } else {
            console.log("error")
        }
    }

    handleId(idClient) {
        this.props.history.push('/users/' + idClient, this.props.data)
    }

    render() {
        const {data} = this.props;
        return (
            <div className="single_user">
                <p>Id :{data.id}</p>
                <p>Espace: {data.square_meters}m²</p>
                <button onClick={() => this.handleId(data.id)}>Go to profil</button>
            </div>
        )
    }
    
}

export default withRouter(SingleUser)