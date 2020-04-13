import React, {useState} from 'react';

import NotificationsIcon from '@material-ui/icons/Notifications';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function Planning(props) {
    const {text} = props
    return(
        <List>
            <ListItem>
                <ListItemText primary={text} />
            </ListItem>
        </List>
    )
}

export default Planning