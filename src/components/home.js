import React from 'react';
import Chart from "react-apexcharts";
import ClipLoader from "react-spinners/ClipLoader";

class Home extends React.Component {
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
        fetch('http://localhost:4000/api/single')
            .then(results => {
                return results.json()
            }).then(res => {
                this.setState({
                    data: res.data,
                    loading: false
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
                series: {
                    name: 'From Gen To Consumer',
                    data: arrayConso
                }
            })
        
            

        }


    }
    

    render() {
        const {loading, options, series} = this.state;
        console.log(this.state)
        return(
                <div>
                    {loading === false && 
                    <div>
                        <h2>Status Code : 200. Data received !</h2>
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            width="500"
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