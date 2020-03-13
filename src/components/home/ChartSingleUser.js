import React from 'react'

import Chart from "react-apexcharts";
import ClipLoader from "react-spinners/ClipLoader";

class ChartSingleUser extends React.Component {
    constructor() {
        super();
        this.state =  {
            data: [],
            loading: true,
        }
        this.handleDataChart = this.handleDataChart.bind(this);
    }

    componentDidMount() {
        const {handleDataChart} = this;
        fetch('http://localhost:4000/users/single')
            .then(results => {
                return results.json()
            }).then(res => {
                this.setState({
                    data: res.data
                })
                handleDataChart()
            })
    }

    handleDataChart() {
        const {data} = this.state
        let arrayDates = []
        let arrayConso = []

        if(data.length > 0) {
            data.forEach((item) => {
                for (const [key, value] of Object.entries(item)) {
                    if(key === "date") {
                        arrayDates.push(value)
                    }
                    if(key === "from_gen_to_consumer") {
                        arrayConso.push(value)
                    }
                  }
            })
            this.setState({
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: arrayDates
                    }
                },
                series: [
                    {
                        name: 'From Gen To Consumer',
                        data: arrayConso

                    }
                ],
                loading: false
            })
        }


    }
    

    render() {
        const {loading, options, series} = this.state;
        return(
                <>
                    {!loading && 
                    <div>
                        <h2>Status Code : 200. Data received !</h2>
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            width="1000"
                        />
                    </div>
                    }
                    {loading &&
                    <div>
                        <h2>Loading... (if nothing appears, check logs, statusCode did not return 200.)</h2>
                        <div className="sweet-loading">
                            <ClipLoader
                            size={150}
                            //size={"150px"} this also works
                            color={"#00AAFF"}
                            loading={this.state.loading}
                            />
                        </div>
                    </div>
                    }
                </>
        )
    }
}

export default ChartSingleUser