import React, { useContext, useState, useEffect } from 'react'
import Badge from '@material-ui/core/Badge';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
// import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Avatar from '@material-ui/core/Avatar';
import {AlertesContext} from '../../contexts/AlertesContext'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -18,
    top: -15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));

function Header() {

    const {alertes} = useContext(AlertesContext)
    const [alertesLength, setAlertesLength] = useState(0)

    const classes = useStyles();

    useEffect(() => {
      handleAlertes()
    }, [alertes])

    const handleAlertes = () => {
      let count = 0
      alertes.forEach(item => {
        if(item.status !== 4) {
          count += 1;
        }
      })
      setAlertesLength(count)
    }

    return (
        <div className="badges flexed-row-around">
            {/* <div className="badge b_chat">
                <IconButton aria-label="messages">
                    <StyledBadge badgeContent={3} max={9} color="secondary">
                        <ChatBubbleOutlineOutlinedIcon fontSize="large"/>
                    </StyledBadge>
                </IconButton>
            </div> */}
            <div className="badge">
                <IconButton aria-label="notif">
                    <StyledBadge badgeContent={alertesLength} max={9} color="secondary">
                        <NotificationsNoneOutlinedIcon fontSize="large"/>
                    </StyledBadge>
                </IconButton>
            </div>
            <div className="badge">
                <IconButton aria-label="avatar">
                    <Avatar alt="avatar_user" src="https://blog.hubspot.fr/hubfs/Photo%20Profile%202%20Jules%20Perignon.png" variant="rounded" className={classes.large}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header