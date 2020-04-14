import React, {useState} from 'react';

import MapIcon from '@material-ui/icons/Map';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

function Planning(props) {
    const {text, handleListItemClick, selected} = props
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      handleListItemClick()
      setOpen(!open);
    };

    return(
        <>
            <ListItem
                button
                selected={selected}
                onClick={handleClick}
                >
                <ListItemIcon>
                    <MapIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button style={{paddingLeft: "50px"}}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Sous-Menu" />
                </ListItem>
                </List>
            </Collapse>
        </>
    )
}

export default Planning