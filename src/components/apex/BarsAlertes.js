import React from 'react'
import Chart from "react-apexcharts";


function BarsAlertes() {
    const series = [{
        data: [21, 22, 10, 28, 16]
    }]
    const options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['En attentes', 'En cours', 'A vérifier', 'Terminées', 'Postmortem à réaliser'],
        }
      }

    return (
        <Chart options={options} series={series} width={'100%'} type="bar"/>
    )
}

export default BarsAlertes