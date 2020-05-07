import React from 'react';
import MaterialTable from 'material-table'


import { withRouter } from 'react-router-dom';
import SingleClient from './SingleClient'

function SquaresListClients(props) {
    const {users} = props
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
            onRowClick={((evt, selectedRow) => handleId(selectedRow.id, selectedRow))}
            components={{
                Row: data => (
                    <SingleClient data={data} />
                ),
                Header: props => (
                    <></>
                )
            }}
            options={{selection: true}}
        />
    )
}

export default withRouter(SquaresListClients)