import React, {useState} from 'react';
// import Switch from '@material-ui/core/Switch';
// import {ThemeContext} from '../contexts/ThemeContext'

// external components 
import Alertes from './NavMenuList/Alertes'
import ListItemLink from './ListItemLink'

// list components
import List from '@material-ui/core/List';
//icons
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import Planning from './NavMenuList/Planning';


function NavMenuList()  {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    
    return(
            <List component="nav" aria-label="main home clients">
                <ListItemLink to="/" primary="Accueil" icon={<HomeIcon />} selected={selectedIndex === 0} handleListItemClick={(event) => handleListItemClick(event, 0)} />
                <ListItemLink to="/users" primary="Clients" icon={<GroupIcon />} selected={selectedIndex === 1} handleListItemClick={(event) => handleListItemClick(event, 1)}/>
                <Alertes selected={selectedIndex === 2} handleListItemClick={(event) => handleListItemClick(event, 2)} text={"Alertes"} />
                <ListItemLink to="/messagerie" primary="Messagerie" icon={<ForumIcon />} selected={selectedIndex === 3} handleListItemClick={(event) => handleListItemClick(event, 3)}/>
                <Planning selected={selectedIndex === 4} handleListItemClick={(event) => handleListItemClick(event, 4)} text={"Planning"} />
            </List>
            )
}

export default NavMenuList