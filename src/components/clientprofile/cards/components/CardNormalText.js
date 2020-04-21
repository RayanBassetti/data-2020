import React from 'react';

const CardNormalText = ({title, text}) => {
    return (
    <div className="flexed-row">
        <h1 className="card_content_text card_title_text">{title}</h1>
        <p className="card_content_text card_normal_text">{text}</p>
    </div>
    )
}

export default CardNormalText