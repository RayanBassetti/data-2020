import React from 'react';
import Chart from "react-apexcharts";

function RadialChart(props) {
    const {text} = props
    const options = {
        chart: {
            id: "basic-radial"
        },
        labels: [text],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '5%',
                },
                startAngle: 80,
                endAngle: 0,
                offsetX: 0,
                offsetY: 0,
            },
        },
    }
    const series =  [60]
    return (
        <>
            <Chart options={options} series={series} type="radialBar" />
        </>
    )
}

export default RadialChart