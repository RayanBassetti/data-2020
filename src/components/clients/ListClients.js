import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import TableListClients from './TableListClients'



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

    return(
        <>
            {! loading &&
                <div className="list_users">
                    <TableListClients users={data}/>
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