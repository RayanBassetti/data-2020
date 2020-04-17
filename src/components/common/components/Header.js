import React from 'react'
import Badge from '@material-ui/core/Badge';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Avatar from '@material-ui/core/Avatar';
import EmojiMethod from '../methods/EmojiMethod'

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

function Header(props) {
    const {text, emoji} = props;
    const classes = useStyles();
    return (
        <div className="header flexed-row-space padding_content">
            <div className="text flexed-row-space ">
                <h1>{text}</h1>
                {EmojiMethod(emoji, 50, 50)}
            </div>
            <div className="badges flexed-row-space">
                <div className="badge b_chat">
                    <IconButton aria-label="messages">
                        <StyledBadge badgeContent={3} max={9} color="primary">
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
                        <Avatar alt="avatar_user" src="" variant="rounded" className={classes.large}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header