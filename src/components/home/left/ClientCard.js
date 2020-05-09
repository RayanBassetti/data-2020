import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import ClipLoader from "react-spinners/ClipLoader";


import ProfilTag from '../../common/components/ProfilTag'
import { handleFeeling, handleProfil, handleFamily } from '../../common/methods/ConvertIntMethod';
import Feeling from '../../common/components/Feeling'

function ClientCard() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:4000/clients?limit=1')
        .then(results => {return results.json()})
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
    }, [])
    

    return(
        
        <div>
            <p className="card_content_text card_title_text" style={{width: '100%', textTransform: 'uppercase'}}>DERNIER PROFIL CONSULTÉ</p>
            
            <Card>
                {!loading && 
                <CardContent className="flexed-row-around">
                    <div>
                        <p className="card_content_text">{data[0].name}</p>
                        <p className="card_content_text">Dernière activité: {data[0].last_activity}</p>
                        <p className="card_content_text">Etat de l'alerte</p>
                        <p >client_alerte</p>
                        <p className="card_content_text">Priorité</p>
                        <p>priority</p>
                    </div>
                    <div>
                        <div className="flexed-row-space">
                            <ProfilTag text={handleProfil(data[0].profil)} />
                            <ProfilTag text={handleFamily(data[0].famille)} />
                        </div>
                        <p className="card_content_text">Messagerie</p>
                        <p>client_messages</p>
                        <Feeling feeling={handleFeeling(data[0].feeling)} />
                    </div>
                </CardContent>
                }
                {loading &&
                    <div className="sweet-loading">
                        <ClipLoader
                        size={150}
                        //size={"150px"} this also works
                        color={"#00AAFF"}
                        loading={loading}
                        />
                    </div>
                }
            </Card>
            
            {}
        </div>
    )
}

export default ClientCard