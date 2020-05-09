import React from 'react'

import HomeTitle from '../HomeTitle'
function MessagerieLine({icon, text}) {

    const style = {
        background: '#E5E5E5',
        borderRadius: '10px',
        margin: '2px',
        borderLeft: '8px solid #3B86FF'
    }

    return (
        <div className="flexed-row" style={style}>
            <img alt={icon}/>
            <HomeTitle text={text} size="12px" />
        </div>
    )
}

export default MessagerieLine