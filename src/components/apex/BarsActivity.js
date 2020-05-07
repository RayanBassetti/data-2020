import React from 'react'
import Chart from "react-apexcharts";


function BarsActivity() {
    const series = [{
        data: [21, 22, 10, 28, 16]
    }]
    const options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: ['#03ABFF'],
        // colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        yaxis: {
            show: false
        },
        xaxis: {
            categories: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
            labels: {
                style: {
                //   colors: colors,
                fontSize: '12px'
                }
            }
        }
      }

    return (
        <Chart options={options} series={series} width={'100%'} type="bar"/>
    )
}

export default BarsActivity