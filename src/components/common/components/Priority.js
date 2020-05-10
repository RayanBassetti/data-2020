import React from 'react'

function Priority({priority}) {

    const handleProgress = (priority) => {
        switch(priority) {
            case(1) : 
                return <div className="single"></div>
            case(2) : 
                return <>
                <div className="single"></div>
                <div className="single"></div>
                </>
            case(3) : 
                return <>
                <div className="single"></div>
                <div className="single"></div>
                <div className="single"></div>
                </>
            default :
                return <></>
        }
    }
 
    return (
        <div className="priority_bubble flexed-row">
            {handleProgress(priority)}
        </div>
    )
}

export default Priority