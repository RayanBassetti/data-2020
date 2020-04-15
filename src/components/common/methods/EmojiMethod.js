// method to get the correct emoji 
import React from 'react'

const EmojiMethod = (string) => {
        switch(string) {
            case "waving_hand":
                return <img className="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/waving-hand-sign_1f44b.png" alt={string} />
            case "sun": 
                return <img className="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/black-sun-with-rays_2600.png" alt={string} />
            case "calendar": 
                return <img className="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/37/calendar_1f4c5.png" alt={string} />
            case "memo": 
                return <img className="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/memo_1f4dd.png" alt={string} />
            default :
                return <img alt="emoji_not_found" />
        }
}

export default EmojiMethod