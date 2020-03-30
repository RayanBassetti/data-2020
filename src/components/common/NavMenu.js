import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import {ThemeContext} from '../contexts/ThemeContext'


function NavMenu()  {
    const {isLightTheme, theme, toggleTheme} = useContext(ThemeContext)
    console.log(isLightTheme, theme)
    return(
        <div className={`navMain ${theme}`}>
            <div className="navMain_header">
                <img src="" alt="logo engie"></img>
                <h1 className="mainTitle">Dashboard Engie</h1>
                <Switch
                    onChange={toggleTheme}
                    checked={!isLightTheme}
                    value={isLightTheme}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </div>
        </div>
    )
}

export default NavMenu