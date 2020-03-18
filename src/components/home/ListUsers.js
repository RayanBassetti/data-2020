import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import SingleUser from './SingleUser'
class ListUsers extends React.Component {
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
                let foreignUsers = res.data
                let allUsers = []
                foreignUsers.forEach((item, index) => {
                    const user = <SingleUser data={item} key={index} />
                    allUsers.push(user)
                })
                this.setState({
                    users: allUsers
                })
            })
    }

    render() {
        const {users, loading} = this.state;
        return(
            <>
                {! loading &&
                <>
                <h1>List Clients</h1>
                <div className="list_users">
                    {users}
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

export default ListUsers