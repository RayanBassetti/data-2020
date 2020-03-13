import React from 'react'

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
        return(
            <>
                <h1>List Users</h1>
                {this.state.users}
            </>
        )
    }
}

export default ListUsers