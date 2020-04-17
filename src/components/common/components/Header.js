import React from 'react'

import HeaderBadges from './HeaderBadges'

import EmojiMethod from '../methods/EmojiMethod'
import { Button } from '@material-ui/core';


function Header(props) {
    const {text, emoji, profil} = props;
    return (
        <div className="header flexed-row-space padding_content">
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
                        <Button>Salut</Button>
                }
            </div>
            <HeaderBadges />
        </div>
    )
}

export default Header