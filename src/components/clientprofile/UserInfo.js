import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

function ClientProfile(props) {
    const {data} = props
    const {theme} = useContext(ThemeContext)
    return(
        <>
            <div className={`context ${theme}`}>
                <h1>Client profile</h1>
                <p>{data.id}</p>
            </div>
        </>
    )
}
 
export default ClientProfile