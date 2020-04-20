import React from 'react';
import MaterialTable, {MTableBodyRow} from 'material-table'

import {handleProfil, handleFeeling} from '../common/methods/ConvertIntMethod'

import { withRouter } from 'react-router-dom';
import Feeling from '../common/components/Feeling';
import ProfilTag from '../common/components/ProfilTag';


function TableListClients(props) {
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
            columns={[
                { 
                    title: 'État', 
                    field: 'feeling', 
                    render: users => {
                        return <Feeling feeling={handleFeeling(users.feeling)} />
                    } 
                },
                { 
                    title: 'Identité', 
                    field: 'name', 
                    render: users => {
                        return (
                            <span value={users.name}>{users.name}</span>
                        )
                    } 
                },
                { 
                    title: 'Profil', 
                    field: 'profil' , 
                    render: users => {
                        return <ProfilTag text={handleProfil(users.profil)} />
                    } 
                },
                { 
                    title: 'Client depuis', 
                    field: 'engie_time', 
                    render: users => {
                        return (
                            <span value={users.engie_time}>{users.engie_time}</span>
                        )
                    } 
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