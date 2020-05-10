import React, { useContext } from 'react'
import { Card, CardContent, Button } from '@material-ui/core'
import CardNormalText from '../clientprofile/cards/components/CardNormalText'
import { AlertesContext } from '../contexts/AlertesContext'

import {ReactLoader} from '../common/components/ReactLoader'
import Priority from '../common/components/Priority'

function CardKanban({data}) {

    const {title, alerte_id, client_name, priority, date, status} = data

    const {loading, updateAlerte} = useContext(AlertesContext)

    return (
        <Card style={{marginTop: '5%'}}>
            <CardContent className="flexed-row">
                {loading &&
                    <ReactLoader loading={loading} />
                }
                {!loading &&
                <div className="ck_content">
                    <p className="alerte_title">{title}</p>
                    <CardNormalText title="Client" text={client_name}/>
                    <div className="flexed-row">
                        <CardNormalText title="Priorité"/>
                        <Priority priority={priority} />
                    </div>
                    <p className="card_content_text card_subtitle">Ouvert le {date}</p>
                    <div className="flexed-row">
                        {/* {tags.map((item, index) => {
                            return <span key={index}>{item}</span>
                        })} */}
                    </div>
                    {status !== 4 &&
                    <Button variant="outlined" onClick={() => updateAlerte(alerte_id, (status + 1))}>Next step</Button>
                    }
                </div>
                }
            </CardContent>
        </Card>
    )
}

export default CardKanban