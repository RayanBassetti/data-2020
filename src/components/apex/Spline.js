import React from 'react';
import Chart from "react-apexcharts";

function Spline(props) {
    const {text, height} = props
    const series =  [{
        name: 'Alertes résolues',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Nouveaux clients',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]
    const options = {
        chart: {
          type: 'area',
          toolbar: {
              show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'string',
          categories: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
        },
        yaxis: {
          show: false
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
    }
    return (
        <>
            <p>{text}</p>
            <Chart options={options} series={series} type="area" height={height} width={'100%'}/>
        </>
    )
}

export default Spline