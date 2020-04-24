import React from 'react'

import CardKanban from './CardKanban'

function AlerteColonne({title, titleStyle}) {
    return(
        <div className="single_kanban">
            <div className="sk_header flexed-row-around">
                <p className="sk_title" style={titleStyle}>{title}</p>
                <p className="sk_count">1</p>
            </div>
            <div className="sk_content">
                <CardKanban />
            </div>

        </div>
    )
}

export default AlerteColonne