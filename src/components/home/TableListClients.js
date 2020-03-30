import React from 'react';
import MaterialTable from 'material-table'

function TableListClients(props) {
    const {users} = props
    return(
        <MaterialTable
            title="Clients"
            style={{
                width: "100%"
            }}
            options={{
                searchFieldStyle: {
                    position: "absolute",
                    top: "-30px"
                }
            }}
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Dernière alerte', field: 'last_update' },
                { title: 'Date d\'inscription', field: 'inscription' },
                { title: 'Priorité', field: 'current_emotion' }
            ]}
            detailPanel={[
                {
                  tooltip: 'Show Name',
                  render: users => {
                    return (
                      <div>
                          <h1>Salut</h1>
                      </div>
                    )
                  },
                }
            ]}
            pagination={{
                labelRowsSelect: "Affichage par page",
                labelRowsPerPage: "Affichage par page"
            }}
            data={users}
        />
    )
}

export default TableListClients