import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import TableListClients from './TableListClients'

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
                    data: res.data
                })
            })
    }

    render() {
        const {data, loading} = this.state;
        return(
            <>
                {! loading &&
                <>
                <div className="list_users">
                    <TableListClients users={data}/>
                    {/* {users} */}
                </div>
                </>
                }
                {loading &&
                <>
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