import React from 'react';
// import Switch from '@material-ui/core/Switch';
// import {ThemeContext} from '../contexts/ThemeContext'
import NavMenuList from './NavMenuList'

function NavMenu()  {
    // const {theme, toggleTheme} = useContext(ThemeContext)
    // const themeDark = theme === "dark" ? true : false

    
    return(
        <div className={`navMain`}>
            <div className="navMain_header">
                <img src="https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-Engie-1.jpg" width="100px" height="100px" alt="logo engie" margin-right="auto" margin-left="auto"></img>
                <NavMenuList />
                {/* <Switch
                    onChange={toggleTheme}
                    checked={themeDark}
                    value={theme}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                /> */}
            </div>
        </div>
    )
}

export default NavMenu