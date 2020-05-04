import React, { useContext, useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import TableListClients from './TableListClients'
import ToolbarSwitch from './ToolbarSwitch'

import {ListDisplayContext} from '../contexts/ListDisplayContext'


function ListClients()  {
    
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/fake_clients')
            .then(results => {
                return results.json()
            }).then(res => {
                setLoading(false)
                setData(res.data)
            })
    })

    const {theme} = useContext(ListDisplayContext)
    return(
        <>
            {! loading &&
                <div className="list_users">
                    <ToolbarSwitch />
                    {theme === "List" && 
                        <TableListClients users={data}/>
                    }
                    {theme === "Data" && 
                        <h1>Data</h1>
                    }
                    {theme === "Squares" && 
                        <h1>Squares</h1>
                    }
                    {/* {users} */}
                </div>
            }
            {loading &&
            <>
            <h2>Loading... (if nothing appears, check logs, statusCode did not return 200.)</h2>
                <div className="sweet-loading">
                    <ClipLoader
                    size={150}
                    //size={"150px"} this also works
                    color={"#00AAFF"}
                    loading={loading}
                    />
                </div>
            </>
            }
        </>
    )
    
}

export default ListClients