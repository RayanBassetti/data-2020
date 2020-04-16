import React from 'react';
import Chart from "react-apexcharts";



function RadialChart(props) {
    
    const {text, data} = props

    const options = {
        chart: {
            id: "basic-radial"
        },
        yaxis : {
            reversed: true
        },
        colors: ['#C2D7FA'],
        labels: [`+ ${data}`],
        plotOptions: {
            radialBar: {
                track: {
                    show: false
                },
                startAngle: 0,
                endAngle: 360,
                offsetY: -20,
                hollow: {
                    margin: 5,
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        fontFamily: 'Montserrat',
                        fontWeight: 900
                    }
                },
            },
        },
    }
    const series =  [60]
    return (
        <>
            <p>{text}</p>
            <Chart options={options} series={series} type="radialBar" />
        </>
    )
}

export default RadialChart