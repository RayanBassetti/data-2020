import React from 'react';
import MaterialTable, {MTableBodyRow} from 'material-table'

import { withRouter } from 'react-router-dom';


function TableListClients(props) {
    const {users} = props
    const handleId = (idClient, user) => {
        delete user.tableData
        props.history.push(`/clients/${idClient}`, user)
    }

    return(
        <MaterialTable
            title="Clients"
            data={users}
            style={{
                width: "100%",
                marginLeft: "18px",
                marginRight: "15px"
            }}
            columns={[
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
                    title: 'Dernière alerte', 
                    field: 'last_update' 
                },
                { 
                    title: 'Date d\'inscription', 
                    field: 'inscription' 
                },
                { 
                    title: 'Priorité', 
                    field: 'current_emotion' 
                },
                { 
                    title: 'Emotion', 
                    field: 'pouti' 
                },
                { 
                    title: 'Test', 
                    field: 'Test' 
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