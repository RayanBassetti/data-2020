import React, {useState} from 'react';
// import Switch from '@material-ui/core/Switch';
// import {ThemeContext} from '../contexts/ThemeContext'

// external components 
// import Alertes from './NavMenuList/Alertes'
import ListItemLink from './NavMenuList/ListItemLink'
import PathMethod from '../methods/PathMethod'

// list components
import List from '@material-ui/core/List';

//icons
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import MapIcon from '@material-ui/icons/Map';
import NotificationsIcon from '@material-ui/icons/Notifications';



function NavMenuList()  {

    const [selectedIndex, setSelectedIndex] = useState(PathMethod);
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    
    return(
            <List component="nav" aria-label="main home clients">
                <ListItemLink to="/" primary="Accueil" icon={<HomeIcon />} selected={selectedIndex === 0} handleListItemClick={(event) => handleListItemClick(event, 0)} />
                <ListItemLink to="/clients" primary="Clients" icon={<GroupIcon />} selected={selectedIndex === 1} handleListItemClick={(event) => handleListItemClick(event, 1)}/>
                {/* <Alertes selected={selectedIndex === 2} handleListItemClick={(event) => handleListItemClick(event, 2)} text={"Alertes"} /> */}
                <ListItemLink to="/alertes" primary="Alertes" icon={<NotificationsIcon />} selected={selectedIndex === 2} handleListItemClick={(event) => handleListItemClick(event, 2)}/>
                {/* <ListItemLink to="/messagerie" primary="Messagerie" icon={<ForumIcon />} selected={selectedIndex === 3} handleListItemClick={(event) => handleListItemClick(event, 3)}/> */}
                <ListItemLink to="/planning" primary="Planning" icon={<MapIcon />} selected={selectedIndex === 4} handleListItemClick={(event) => handleListItemClick(event, 4)}/>
            </List>
            )
}

export default NavMenuList