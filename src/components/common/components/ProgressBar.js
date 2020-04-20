import React from 'react'

const ProgressBar = (props) => {
    const {width} = props
    return (
        <div className="progressbar_back">
            <div className="progressbar_front" style={{width: width}}></div>
        </div>
    )
}

export default ProgressBar