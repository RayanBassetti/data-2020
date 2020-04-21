import React from 'react'

const Feeling = ({feeling}) => {
    const ball = {
        backgroundColor: feeling,
        width: '20px',
        height: '20px',
        borderRadius: '50%'
    }
    return (
        <div style={ball}>
        </div>
    )
}

export default Feeling