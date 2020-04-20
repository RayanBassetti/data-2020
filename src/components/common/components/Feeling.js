import React from 'react'

const Feeling = (props) => {
    const ball = {
        backgroundColor: props.feeling,
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