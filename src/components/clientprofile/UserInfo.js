import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

function ClientProfile(props) {
    const {id} = props.data
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`content ${theme}`}>
            <h1>Client profile</h1>
            <p>{id}</p>
        </div>
    )
}
 
export default ClientProfile