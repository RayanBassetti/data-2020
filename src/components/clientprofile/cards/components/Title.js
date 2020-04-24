import React from 'react';
import { Button } from '@material-ui/core';

const Title = ({text, sub_text, button}) => {
    return(
        <div className="client_card_title flexed-row-space">
            <p className="card_content_text cct_text">{text}</p>
            {sub_text && 
            <p className="card_content_text card_subtitle">Dernière activité le {sub_text}</p>
            }
            {button && button === "objectifs" &&
                <Button 
                    variant="outlined"
                    onClick={() => alert('Clicked')}
                >Nouvelle Campagne</Button>
            }
        </div>
    )
}

export default Title