import React, {useContext} from 'react'

import HeaderBadges from './HeaderBadges'

import {withRouter} from 'react-router-dom'

import EmojiMethod from '../methods/EmojiMethod'
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {ClientDisplayContext} from '../../contexts/ClientDisplayContext'

function Header(props) {
    const {theme, toggleDisplay} = useContext(ClientDisplayContext)
    const {text, emoji, profil} = props;
    return (
        <div className="header flexed-row-space">
            <div className="text flexed-row-space">
                {!profil && 
                    <>
                        <h1>{text}</h1>
                        {emoji &&
                        EmojiMethod(emoji, 50, 50)
                        }
                    </>
                }
                {profil && 
                    <>
                    <Button 
                        variant="outlined" 
                        startIcon={<ArrowBackIosIcon />} 
                        onClick={() => props.history.goBack()} 
                    >Liste clients</Button>
                    <Button 
                        onClick={() => toggleDisplay()}
                    >{theme}</Button>
                    </>
                }
            </div>
            <HeaderBadges />
        </div>
    )
}

export default withRouter(Header)