import React, {useContext} from 'react'

import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {withRouter} from 'react-router-dom'

import HeaderBadges from './HeaderBadges'
import {ClientDisplayContext} from '../../contexts/ClientDisplayContext'

function HeaderProfile(props) {
    const {theme, toggleDisplay} = useContext(ClientDisplayContext)
    const actualTheme = theme === "Infos" ? "Stats" : "Infos";
    return (
        <div className="header flexed-row-space">
            <div className="text flexed-row-space">
            <Button 
                variant="outlined" 
                startIcon={<ArrowBackIosIcon />} 
                onClick={() => props.history.goBack()} 
            >Liste clients</Button>
            <Button 
                onClick={() => toggleDisplay()}
            >{actualTheme}</Button>
            </div>
            <HeaderBadges />
        </div>
    )
}

export default withRouter(HeaderProfile)