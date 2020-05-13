import React, { useContext } from 'react'
import { Card, CardContent } from '@material-ui/core'
import CardNormalText from '../clientprofile/cards/components/CardNormalText'
import { AlertesContext } from '../contexts/AlertesContext'

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import {ReactLoader} from '../common/components/ReactLoader'
import Priority from '../common/components/Priority'

function CardKanban({data}) {

    const {title, alerte_id, client_name, priority, date, status} = data
    const {loading, updateAlerte, setUpdated} = useContext(AlertesContext)


    const handleChange = (event) => {
        updateAlerte(alerte_id, event.target.value)
        setUpdated(true)
    }

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
                        <>
                            <FormControl>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                onChange={handleChange}
                                >
                                <MenuItem value={1}>En attente</MenuItem>
                                <MenuItem value={2}>En cours</MenuItem>
                                <MenuItem value={3}>A vérifié</MenuItem>
                                <MenuItem value={4}>Terminé</MenuItem>
                                </Select>
                            </FormControl>
                        </>
                    }
                </div>
                }
            </CardContent>
        </Card>
    )
}

export default CardKanban