import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import {ListDisplayContext} from '../contexts/ListDisplayContext'

function ToolbarSwitch() {
    const {toggleDisplay} = useContext(ListDisplayContext)
    return (
        <div>
            <Button variant="outlined" onClick={() => toggleDisplay("List")}>List</Button>
            <Button variant="outlined" onClick={() => toggleDisplay("Data")}>Data</Button>
            <Button variant="outlined" onClick={() => toggleDisplay("Squares")}>Squares</Button>
        </div>
    )
}

export default ToolbarSwitch