import React, {useContext} from 'react'

import {ClientDisplayContext} from '../contexts/ClientDisplayContext'
import UserInfo from './UserInfo'
import UserGraphs from './UserGraphs'

function UserContent({data}) {
    const {theme} = useContext(ClientDisplayContext)
    return (
        <>
            {theme === "Infos" &&
                <UserInfo user={data}/>
            }
            {theme === "Stats" &&
                <UserGraphs user={data}/>
            }
        </>
    )
}

export default UserContent