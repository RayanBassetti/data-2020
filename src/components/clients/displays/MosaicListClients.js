import React from 'react';
import MaterialTable from 'material-table'

import SingleClient from './SingleClient'

function MosaicListClients(props) {
    const {users} = props

    return(
        <div className="mosaic_table">
            <MaterialTable
                title=""
                data={users}
                style={{
                    width: "100%",
                    marginLeft: "18px",
                    marginRight: "15px"
                }}
                components={{
                    Row: data => (
                        <SingleClient data={data} />
                    ),
                    Header: props => (
                        <></>
                    )
                }}
                options={{header: false}}
            />
        </div>
    )
}

export default MosaicListClients