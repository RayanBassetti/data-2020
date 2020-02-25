import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';

import ClipLoader from "react-spinners/ClipLoader";

class Home extends React.Component {
    constructor() {
        super();
        this.state =  {
            data: [],
            loading: true,
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/single')
            .then(results => {
                return results.json()
            }).then(data => {
                this.setState({
                    data: data.data,
                    loading: false
                })
            })
    }

    

    render() {
        const {data, loading} = this.state;
        console.log(data)
        return(
                <div>
                    {loading === false && 
                    <div>
                        <h2>Status Code : 200. Data received !</h2>

                        <BarChart
                            width={1000}
                            height={500}
                            data={data}
                            margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            {/* <Legend /> */}
                            <Bar dataKey="from_gen_to_consumer" fill="#00AAFF" />
                        </BarChart>

                    </div>
                    }
                    {loading &&
                    <div>
                        <h2>Loading... (if nothing appears, check logs, statusCode did not return 200.)</h2>
                        <div className="sweet-loading">
                            <ClipLoader
                            size={150}
                            //size={"150px"} this also works
                            color={"#123abc"}
                            loading={this.state.loading}
                            />
                        </div>
                    </div>
                    }
                </div>
        )
    }
}

export default Home
