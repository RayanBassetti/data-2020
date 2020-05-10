import React, { useContext } from 'react'
import { Card, CardContent, Button } from '@material-ui/core'
import CardNormalText from '../clientprofile/cards/components/CardNormalText'
import { AlertesContext } from '../contexts/AlertesContext'

import {ReactLoader} from '../common/components/ReactLoader'

function CardKanban({data}) {

    const {title, id, client_name, priority, date, tags} = data

    const {handleStatus, loading} = useContext(AlertesContext)

    return (
        <Card>
            <CardContent className="flexed-row">
                {loading &&
                    <ReactLoader loading={loading} />
                }
                {!loading &&
                <div className="ck_content">
                    <p className="alerte_title">{title}</p>
                    <CardNormalText title="Client" text={client_name}/>
                    <CardNormalText title="Priorité" text={priority}/>
                    <p className="card_content_text card_subtitle">Ouvert le {date}</p>
                    <div className="flexed-row">
                        {/* {tags.map((item, index) => {
                            return <span key={index}>{item}</span>
                        })} */}
                    </div>
                    <Button variant="outlined" onClick={() => handleStatus(id)}>Next step</Button>
                </div>
                }
            </CardContent>
        </Card>
    )
}

export default CardKanban