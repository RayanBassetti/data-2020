import React, {useState} from 'react';
// import Switch from '@material-ui/core/Switch';
// import {ThemeContext} from '../contexts/ThemeContext'

// external components 
import Alertes from './NavMenuList/Alertes'

// react router components 

import { MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';


// list components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//icons
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import MapIcon from '@material-ui/icons/Map';


function NavMenuList()  {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index, route) => {
      setSelectedIndex(index);
    };

    function ListItemLink(props) {
        const { secIndex, icon, primary, to } = props;
      
        const renderLink = React.useMemo(
          () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
          [to],
        );
      
        return (
          <li>
            <ListItem button component={renderLink} selected={selectedIndex === secIndex} onClick={(event) => handleListItemClick(event, secIndex)}>
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
              <ListItemText primary={primary} />
            </ListItem>
          </li>
        );
      }
    
    return(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <List component="nav" aria-label="main home clients">
                <ListItem
                button
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Accueil" />
                </ListItem>
                <ListItemLink to="/users" primary="Clients" icon={<GroupIcon />} secIndex={1} />
                <Alertes selected={selectedIndex === 2} handleListItemClick={(event) => handleListItemClick(event, 2)} text={"Alertes"} />
                <ListItem
                button
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <ForumIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messagerie" />
                </ListItem>
                <ListItem
                button
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemIcon>
                        <MapIcon />
                    </ListItemIcon>
                    <ListItemText primary="Planning" />
                </ListItem>
            </List>
        </MemoryRouter>
            )
}

export default NavMenuList