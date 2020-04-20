import React from 'react';

const Title = (props) => {
    const {text, sub_text} = props
    return(
        <div className="client_card_title flexed-row-space">
            <p className="cct_text">{text}</p>
            <p className="cct_subtext">Dernière activité le {sub_text}</p>
        </div>
    )
}

export default Title