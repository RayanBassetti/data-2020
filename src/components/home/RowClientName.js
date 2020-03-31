import React from 'react'

import Avatar from '@material-ui/core/Avatar';

function RowClientName(props) {
    return(
        <div className="rowClientName">
            <Avatar>A</Avatar>
            <div className="rowClientNameDetails">
                <p className="name">{props.users.name}</p>
                <p className="scoring">Scoring: 45.5</p>
            </div>
        </div>
    )
}

export default RowClientName