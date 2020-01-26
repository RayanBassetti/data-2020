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
        const {data} = this.state;
        console.log(this.state)
        return(
            <div>
                {data !== [] &&
                <div>
                    {data.statusCode === 200 && 
                    <div>
                        <h2>Status Code : 200. Data received !</h2>
                    </div>
                    }
                    {data.statusCode !== 200 &&
                    <div>
                        <h2>Loading... (if nothing appears, check logs, statusCode did not return 200.)</h2>
                    </div>
                    }
                </div>
                }
            </div>
        )
    }
}

export default Home