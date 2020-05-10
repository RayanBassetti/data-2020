import React, { useState, useEffect, useContext } from 'react'
import TableListClients from './displays/TableListClients'
import ToolbarSwitch from './components/ToolbarSwitch';
import DataListClients from './displays/DataListClients'
import MosaicListClients from './displays/MosaicListClients'

import {ListDisplayContext} from '../contexts/ListDisplayContext'
import { ReactLoader } from '../common/components/ReactLoader';


function ListClients()  {
    
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const {theme} = useContext(ListDisplayContext)

    useEffect(() => {
        fetch('http://localhost:4000/clients')
            .then(results => {
                return results.json()
            }).then(res => {
                setLoading(false)
                setData(res.data)
            })
    }, [])

    return(
        <>
            {!loading &&
                <div className="list_users">
                    <ToolbarSwitch />
                    {theme === "List" &&
                    <TableListClients users={data}/>
                    }
                    {theme === "Data" &&
                    <DataListClients users={data}/>
                    }
                    {theme === "Mosaic" &&
                    <MosaicListClients users={data}/>
                    }
                    {/* {users} */}
                </div>
            }
            {loading &&
            <>
                <h2>Loading... (if nothing appears, check logs, statusCode did not return 200.)</h2>
                <ReactLoader loading={loading} />
            </>
            }
        </>
    )
    
}

export default ListClients