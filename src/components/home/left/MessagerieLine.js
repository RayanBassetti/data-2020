import React from 'react'

import HomeTitle from '../HomeTitle'
function MessagerieLine({icon, text}) {

    const style = {
        background: '#E5E5E5',
        borderRadius: '10px',
        margin: '2px',
        borderLeft: '8px solid #3B86FF'
    }

    const textStyle = {
        textOverflow: 'ellipsis'
    }

    return (
        <div className="flexed-row" style={style}>
            <img alt={icon}/>
            <HomeTitle text={text} size="12px" style={textStyle}/>
        </div>
    )
}

export default MessagerieLine