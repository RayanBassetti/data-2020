import React from 'react'

function ObjectifsProgressBar({progress}) {
    console.log(progress)

    const width = {
        width: `${progress}%`
    }

    return (
        <div className="objectifs_progressbar op_back">
            <div className="objectifs_progressbar op_front" style={width}></div>
        </div>
    )
}

export default ObjectifsProgressBar