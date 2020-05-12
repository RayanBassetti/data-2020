import React from 'react'

const HomeTitle = ({text, size, textStyle}) => {
    return (
        <p className="card_content_text card_title_text" style={{width: '100%', textTransform: 'uppercase', fontSize: size, textOverflow: 'ellipsis'}}>{text}</p>
    )
}

export default HomeTitle
