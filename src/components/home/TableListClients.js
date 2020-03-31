import React from 'react';
import MaterialTable from 'material-table'

import RowClientDetail from './RowClientDetail'
import RowClientName from './RowClientName'

function TableListClients(props) {
    const {users} = props
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
                    title: 'Nom du client', 
                    field: 'name', 
                    render: users => {
                        return (
                            <RowClientName users={users}/>
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
                }
            ]}
            detailPanel={[
                {
                  tooltip: 'Détail du client',
                  render: users => {
                    return (
                      <RowClientDetail users={users}/>
                    )
                  },
                }
            ]}
        />
    )
}

export default TableListClients