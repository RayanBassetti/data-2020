import React from 'react';
import Chart from "react-apexcharts";

function LineLabels({data}) {
    console.log(data)

    const series = [44, 55, 41, 17, 15]

    const options = {
        chart: {
        type: 'donut',
        },
        responsive: [{
        breakpoint: 480,
        options: {
            chart: {
            width: 200
            },
            legend: {
            position: 'bottom'
            }
        }
        }]
    }

    return (
        <>
        <Chart options={options} series={series} width={'450px'} type="donut"/>
        </>
    )
}

export default LineLabels