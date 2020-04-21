import React, {useContext} from 'react'

import {ClientDisplayContext} from '../contexts/ClientDisplayContext'
import UserInfo from './UserInfo'
import UserGraphs from './UserGraphs'

function UserContent({data}) {
    const {theme} = useContext(ClientDisplayContext)
    return (
        <div className="single_client_content">
            {theme === "Infos" &&
                <UserInfo user={data}/>
            }
            {theme === "Stats" &&
                <UserGraphs user={data}/>
            }
        </div>
    )
}

export default UserContent