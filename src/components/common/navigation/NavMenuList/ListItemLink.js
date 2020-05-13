import React, {useMemo, forwardRef} from 'react'
import { Link as RouterLink } from 'react-router-dom';

// list components
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
    const { handleListItemClick, selected, icon, primary, to } = props;

    const renderLink = useMemo(
      () => forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
      [to],
    );
  
    return (
      <li>
        <ListItem button component={renderLink} selected={selected} onClick={handleListItemClick}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
}

export default ListItemLink