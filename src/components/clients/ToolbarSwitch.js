import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import {ListDisplayContext} from '../contexts/ListDisplayContext'

function ToolbarSwitch() {
    const {toggleDisplay} = useContext(ListDisplayContext)
    const img = {
        width: '50px',
        height: '50px'
    }
    return (
        <div>
            <Button variant="outlined" onClick={() => toggleDisplay("List")}><img alt="list" src="https://image.flaticon.com/icons/svg/2099/2099153.svg" style={img}/></Button>
            <Button variant="outlined" onClick={() => toggleDisplay("Data")}><img alt="dataviz" src="https://image.flaticon.com/icons/svg/2575/2575553.svg" style={img}/></Button>
            <Button variant="outlined" onClick={() => toggleDisplay("Squares")}><img alt="squares" src="https://image.flaticon.com/icons/svg/566/566001.svg" style={img}/></Button>
        </div>
    )
}

export default ToolbarSwitch