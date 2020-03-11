import React from 'react';


class SingleUser extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
        this.handleNames = this.handleNames.bind(this)
    }

    handleNames() {
        const {data} = this.props
        if (data) {
            return data.name.replace(/\d+/g,'')
        } else {
            console.log("error")
        }
    }

    render() {
        const {data} = this.props
        const {handleNames} = this
        return (
            <div className="singleUser">
                <h1>Single User</h1>
                <p>Id :{data.id}</p>
                <p>Name :{handleNames()}</p>
            </div>
        )
    }
}

export default SingleUser