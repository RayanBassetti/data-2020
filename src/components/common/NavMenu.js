import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import {ThemeContext} from '../contexts/ThemeContext'


function NavMenu()  {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const themeDark = theme === "dark" ? true : false
    
    return(
        <div className={`navMain ${theme}`}>
            <div className="navMain_header">
                <img src="" alt="logo engie"></img>
                <h1 className="mainTitle">Dashboard Engie</h1>
                <Switch
                    onChange={toggleTheme}
                    checked={themeDark}
                    value={theme}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </div>
        </div>
    )
}

export default NavMenu