import React from 'react';
import EmojiMethod from '../methods/EmojiMethod';

function CardTitle(props) {
    const {emoji, emWidth, emHeight, text} = props
    return (
        <div className="flexed-row card_title">
            {EmojiMethod(emoji, emWidth, emHeight)}
            <p>{text}</p>
        </div>
    )
}

export default CardTitle