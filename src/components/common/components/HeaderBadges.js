import React from 'react'
import Badge from '@material-ui/core/Badge';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Avatar from '@material-ui/core/Avatar';

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
    const classes = useStyles();
    return (
        <div className="badges flexed-row-space">
            <div className="badge b_chat">
                <IconButton aria-label="messages">
                    <StyledBadge badgeContent={3} max={9} color="secondary">
                        <ChatBubbleOutlineOutlinedIcon fontSize="large"/>
                    </StyledBadge>
                </IconButton>
            </div>
            <div className="badge">
                <IconButton aria-label="notif">
                    <StyledBadge badgeContent={15} max={9} color="secondary">
                        <NotificationsNoneOutlinedIcon fontSize="large"/>
                    </StyledBadge>
                </IconButton>
            </div>
            <div className="badge">
                <IconButton aria-label="avatar">
                    <Avatar alt="avatar_user" src="https://www.europeanceo.com/wp-content/uploads/2016/11/E03-Kocher.jpg" variant="rounded" className={classes.large}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header