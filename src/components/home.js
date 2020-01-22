import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        this.state =  {
            data: []
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/all')
            .then(results => {
                return results.json()
            }).then(data => {
                this.setState({
                    data: data
                })
            })
    }

    

    render() {
        console.log(this.state)
        return(
            <div>
                <h1>Home</h1>

            </div>
        )
    }
}

export default Home