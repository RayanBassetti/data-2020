import React from 'react';
import Header from '../common/components/Header'
import Timeline from '../apex/Timeline'

function Planning() {
    return (
        <div className="content">
            <Header text={"Planning"} emoji={"pin"}/>
            <Timeline className="planning"/>
        </div>

    )
}

export default Planning