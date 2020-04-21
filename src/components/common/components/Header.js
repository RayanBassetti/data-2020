import React from 'react'

import HeaderBadges from './HeaderBadges'

import EmojiMethod from '../methods/EmojiMethod'

function Header(props) {

    const {text, emoji} = props;
    return (
        <div className="header flexed-row-space">
            <div className="text flexed-row-space">
                <>
                    <h1>{text}</h1>
                    {emoji &&
                    EmojiMethod(emoji, 50, 50)
                    }
                </>
            </div>
            <HeaderBadges />
        </div>
    )
}

export default Header