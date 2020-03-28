import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import {ThemeContext} from '../contexts/ThemeContext'


function NavMenu()  {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return(
        <div className={`navMain ${theme}`}>
            <div className="navMain_header">
                <img src="" alt="logo engie"></img>
                <h1 className="mainTitle">Dashboard Engie</h1>
                <Switch
                    onChange={toggleTheme}
                    value="switcher"
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </div>
        </div>
    )
}

export default NavMenu