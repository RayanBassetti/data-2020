import React from 'react'

import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';


function RowClientDetail(props) {

    const {user, handleId} = props;

    return(
        <>  
            <Button size="small" color="primary" onClick={() => handleId(user.id, user)}>
                Aller sur le profil
            </Button>
            {user.id}
            
        </>
    )
}

export default withRouter(RowClientDetail)