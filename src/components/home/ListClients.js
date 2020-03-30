import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import MaterialTable from 'material-table'

import SingleClient from './SingleClient'
class ListClients extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/users')
            .then(results => {
                return results.json()
            }).then(res => {
                this.setState({
                    loading: false,
                    users: res.data
                })
                // let foreignUsers = res.data
                // let allUsers = []
                // foreignUsers.forEach((item, index) => {
                //     const user = <SingleClient data={item} key={index} />
                //     allUsers.push(user)
                // })
                // this.setState({
                //     users: allUsers,
                //     loading: false
                // })
            })
    }

    render() {
        const {users, loading} = this.state;
        console.log(users)
        return(
            <>
                {! loading &&
                <>
                <h1>List Clients</h1>
                <div className="list_users">
                    
                    <div>
                        <MaterialTable
                            columns={[
                                { title: 'Id', field: 'id' }
                            ]}
                            data={users}
                            title="Demo Title"
                        />
                    </div>
                    {/* {users} */}
                </div>
                </>
                }
                {loading &&
                <>
                <h1>List Clients</h1>
                <h2>Loading... (if nothing appears, check logs, statusCode did not return 200.)</h2>
                        <div className="sweet-loading">
                            <ClipLoader
                            size={150}
                            //size={"150px"} this also works
                            color={"#00AAFF"}
                            loading={this.state.loading}
                            />
                        </div>
                </>
                }
            </>
        )
    }
}

export default ListClients