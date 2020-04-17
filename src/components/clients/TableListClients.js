import React from 'react';
import MaterialTable, {MTableBodyRow} from 'material-table'

import { withRouter } from 'react-router-dom';


function TableListClients(props) {
    const {users} = props
    console.log(props)
    const handleId = (idClient, user) => {
        delete user.tableData
        props.history.push(`/clients/${idClient}`, user)
    }

    return(
        <MaterialTable
            title=""
            data={users}
            style={{
                width: "100%",
                marginLeft: "18px",
                marginRight: "15px"
            }}
            columns={[
                { 
                    title: 'État', 
                    field: 'emotion' 
                },
                { 
                    title: 'Identité', 
                    field: 'name', 
                    render: users => {
                        return (
                            <p>{users.name}</p>
                        )
                    } 
                },
                { 
                    title: 'Profil', 
                    field: 'profil_client' 
                },
                { 
                    title: 'Type de famille', 
                    field: 'familly_client' 
                },
            ]}
            onRowClick={((evt, selectedRow) => handleId(selectedRow.id, selectedRow))}
            components={{
                Row: props => (
                    <MTableBodyRow {...props} />
                )
            }}
            options={{selection: true}}
        />
    )
}

export default withRouter(TableListClients)