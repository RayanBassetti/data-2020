import React from 'react';

const Title = ({text, sub_text}) => {
    return(
        <div className="client_card_title flexed-row-space">
            <p className="card_content_text cct_text">{text}</p>
            <p className="card_content_text card_subtitle">Dernière activité le {sub_text}</p>
        </div>
    )
}

export default Title