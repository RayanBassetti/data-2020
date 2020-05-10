import React from 'react'
import { Card, CardContent, Button } from '@material-ui/core'
import CardNormalText from '../clientprofile/cards/components/CardNormalText'


function CardKanban({data}) {

    const {title, client_name, priority, date, tags, status} = data

    const handleChange = (status) => {
        status = status + 1;
    }

    const handleTags = () => {
        let tagsList = []
        let count = 0
        tags.forEach(tag => {
            const singleTag = <span>{tag}</span>
            tagsList.push(singleTag)
            count = count + 1;
        })
        return tagsList
    }

    const items = handleTags()

    return (
        <Card>
            <CardContent className="flexed-row">
                <div className="ck_checkbox">
                    <input type="checkbox"/>
                </div>
                <div className="ck_content">
                    <p className="alerte_title">{title}</p>
                    <CardNormalText title="Client" text={client_name}/>
                    <p className="card_content_text card_title_text">{priority}</p>
                    <p className="card_content_text card_subtitle">Ouvert le {date}</p>
                    <div className="flexed-row">
                        {items}
                    </div>
                    <Button variant="outlined" onClick={() => handleChange(status)}>Next step</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardKanban