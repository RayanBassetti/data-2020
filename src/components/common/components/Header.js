import React from 'react'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'

import EmojiMethod from '../methods/EmojiMethod'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -18,
    top: -15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Header(props) {
    const {text, emoji} = props;
    return (
        <div className="header flexed-row-space ">
            <div className="text flexed-row-space ">
                <h1>{text}</h1>
                {EmojiMethod(emoji)}
            </div>
            <div className="badges flexed-row-space">
                <div className="badge">
                    <IconButton aria-label="messages">
                        <StyledBadge badgeContent={15} color="secondary">
                            <NotificationsNoneOutlinedIcon />
                        </StyledBadge>
                    </IconButton>
                </div>
                <div className="badge">
                    <IconButton aria-label="notif">
                        <StyledBadge badgeContent={15} color="secondary">
                            <NotificationsNoneOutlinedIcon />
                        </StyledBadge>
                    </IconButton>
                </div>
                <div className="badge">
                    <IconButton aria-label="avatar">
                        <StyledBadge badgeContent={15} color="secondary">
                            <NotificationsNoneOutlinedIcon />
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header