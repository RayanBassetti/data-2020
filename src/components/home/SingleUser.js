import React from 'react';

import ChartSingleUser from './ChartSingleUser';

import {
    Button,
    Card,
    CardActions,
    CardTitle,
    CardText
} from 'react-md';

import { withRouter } from 'react-router-dom';

function SingleUser(props) {

    function handleId(idClient) {
        props.history.push('/users/' + idClient, props.data)
    }

    const {data} = props;
    return (
        <Card className="single_user md-block-centered">
            <CardTitle
            title={data.name}
            subtitle={data.square_meters}
            />
            <CardActions expander>
            <Button flat onClick={() => handleId(data.id)}>Go to profil</Button>
            </CardActions>
            <CardText expandable>
                <ChartSingleUser />
            </CardText>
        </Card>
    )
    
    
}

export default withRouter(SingleUser)