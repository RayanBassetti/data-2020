import React from 'react'

import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';


function RowClientDetail(props) {

    const {users, handleId} = props;

    return(
        <>
            <Button size="small" color="primary" onClick={() => handleId(users.id, users)}>
                Aller sur le profil
            </Button>
            {users.id}
        </>
    )
}

export default withRouter(RowClientDetail)