import React from 'react'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -18,
    top: -15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function HomeHeader() {
    return (
        <div className="header flexed-row-space ">
            <div className="text flexed-row-space ">
                <h1>Bonjour, Sophie!</h1>
                <img  className="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/waving-hand-sign_1f44b.png" alt="waving_hand_emoji" />
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

export default HomeHeader