import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';

function NavMenu()  {
    const [darkMode, setDarkMode] = useState("light");
    const [switcher, setSwitcher] = useState(false)

    function toggleState() {
        darkMode === "light" ? setDarkMode("black") : setDarkMode("light");
        switcher === false ? setSwitcher(true) : setSwitcher(false)
    }

    return(
        <div className={`navMain ${darkMode}`}>
            <div className="navMain_header">
                <img src="" alt="logo engie"></img>
                <h1 className="mainTitle">Dashboard Engie</h1>
                {/* <button onClick={() => toggleState()}>{buttonText}</button> */}
                <p>{darkMode}</p>
                <Switch
                    value={switcher}
                    onChange={() => toggleState()}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </div>
        </div>
    )
}

export default NavMenu