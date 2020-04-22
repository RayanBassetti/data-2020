import React from 'react';
import Chart from "react-apexcharts";

function LineLabels({data}) {
    const options = {
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
                }
        },
        colors: ['#99C0FF', '#3B86FF'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: "Semaines",
                style: {
                    fontFamily: 'Montserrat'
                }
            }
        },
        yaxis: {
            title: {
                text: "Kw/h",
                style: {
                    fontFamily: 'Montserrat'
                }
            },
            min: 5,
            max: 40
        },
        // legend: {
        //     position: 'bottom',
        //     horizontalAlign: 'right',
        //     floating: true,
        //     offsetY: -25,
        //     offsetX: -5
        // }
    }
    const series = [
        {
          name: "Consommation",
          data: [28.5, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Production",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
    ]
    return (
        <Chart options={options} series={series} width={'450px'} type="line"/>
    )
}

export default LineLabels