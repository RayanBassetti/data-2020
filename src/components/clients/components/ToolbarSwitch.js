import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import {ListDisplayContext} from '../../contexts/ListDisplayContext'

function ToolbarSwitch() {
    const {toggleDisplay} = useContext(ListDisplayContext)
    const img = {
        width: '50px',
        height: '50px'
    }
    return (
        <div>
            <Button variant="outlined" onClick={() => toggleDisplay("List")}>
                <img alt="list" src="../../../ressources/lines.png" style={img}/>
            </Button>
            <Button variant="outlined" onClick={() => toggleDisplay("Data")}>
                <img alt="dataviz" src="../../../ressources/data.png" style={img}/>
            </Button>
            <Button variant="outlined" onClick={() => toggleDisplay("Mosaic")}>
                <img alt="mosaic" src="../../../ressources/mosaic.png" style={img}/>
            </Button>
        </div>
    )
}

export default ToolbarSwitch