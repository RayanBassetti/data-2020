import React, {useState} from 'react';
// import ProgressBar from '../common/components/ProgressBar';
import ObjectifsProgressBar from './cards/components/ObjectifsProgressBar'
import ObjectifsList from './ObjectifsList'
import { Button } from '@material-ui/core';

function Objectifs() {
    const [objectifs, setObjectifs] = useState([])

    const addNewObjectif = () => {
        let item = {title: "Lorem Ipsum", text: "Faire les courses", status: false}
        setObjectifs(objectifs => [...objectifs, item])
    }

    return(
        <div className="objectifs_content">
            <Button variant="outlined" onClick={() => addNewObjectif()}>add objectif</Button>
            {objectifs.length === 0 && 
            <p className="card_content_text oc_subtitle">Pas de campagne en cours.</p>
            }
            {objectifs.length > 0 && 
            <>
                <p className="card_content_text oc_subtitle">Campagne lancée le DATE se termine le DATE</p>
                <ObjectifsProgressBar progress={50}/>
                <ObjectifsList objectifs={objectifs}/>
            </>
            }
        </div>
    )
}

export default Objectifs