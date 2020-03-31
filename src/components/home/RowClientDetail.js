import React from 'react'

import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';


function RowClientDetail(props) {

    const handleId = (idClient) => {
        console.log(props)
        // props.history.push('/users/' + idClient, props.users)
    }

    const {users} = props;

    return(
        <>
            <Button size="small" color="primary" onClick={() => handleId(users.id)}>
                Aller sur le profil
            </Button>
            {props.users.id}
        </>
    )
}

export default withRouter(RowClientDetail)