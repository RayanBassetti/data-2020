import React from 'react';

import ChartSingleClient from './ChartSingleClient';

import Card from '@material-ui/core/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import { withRouter } from 'react-router-dom';

function SingleClient(props) {

    const handleId = (idClient) => {
        props.history.push('/users/' + idClient, props.data)
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const {data} = props;
    return (
        <Card className="single_user darkmode">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {data.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {data.square_meters}
                </Typography>
            </CardContent>
                <CardActions>
                <Button size="small" color="primary" onClick={() => handleId(data.id)}>
                    Aller sur le profil
                </Button>
                <IconButton
                // className={clsx(classes.expand, {
                //     [classes.expandOpen]: expanded,
                // })}
                onClick={handleExpandClick}
                // aria-expanded={expanded}
                aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <ChartSingleClient />
                </CardContent>
            </Collapse>
        </Card>
    )
    
    
}

export default withRouter(SingleClient)