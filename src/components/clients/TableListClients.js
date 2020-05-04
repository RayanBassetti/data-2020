import React, {useContext} from 'react';
import MaterialTable, {MTableBodyRow, MTableToolbar, MTableBody} from 'material-table'

import {handleProfil, handleFeeling} from '../common/methods/ConvertIntMethod'

import { withRouter } from 'react-router-dom';
import Feeling from '../common/components/Feeling';
import ProfilTag from '../common/components/ProfilTag';
import ToolbarSwitch from './ToolbarSwitch';
import DataListClients from './DataListClients'
import {ListDisplayContext} from '../contexts/ListDisplayContext'

function TableListClients(props) {
    const {users} = props
    const handleId = (idClient, user) => {
        delete user.tableData
        props.history.push(`/clients/${idClient}`, user)
    }
    const {theme} = useContext(ListDisplayContext)

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
                Toolbar: props => (
                    <>
                        <MTableToolbar {...props} />
                        <ToolbarSwitch />
                    </>
                ),
                Row: props => (
                    <>
                        {theme === "List" &&
                        <MTableBodyRow {...props} />
                        }
                        {theme === "Data" &&
                        <></>
                        }
                        {theme === "Squares" &&
                        <p>single square</p>
                        }
                    </>
                )
                // Body: props => (
                //     <>
                //     {(theme === "List" || theme === "Squares") &&
                //     <MTableBody {...props} />
                    
                //     }
                //     {theme === "Data" &&
                //         <DataListClients data={users}/>
                //     }
                //     </>
                // ),

            }}
            options={{selection: true}}
        />
    )
}

export default withRouter(TableListClients)