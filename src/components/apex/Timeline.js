import React from 'react';
import Chart from "react-apexcharts";



function RadialChart(props) {
    
    const {text} = props

    const options = {
        chart: {
            type: 'rangeBar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%'
          }
        },
        xaxis: {
          type: 'datetime'
        },
        stroke: {
          width: 1
        },
        fill: {
          type: 'solid',
          opacity: 0.6
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
    }
    const series =  [
        {
          name: 'Réunions',
          data: [
            {
              x: 'Lundi',
              y: [
                new Date('2019-03-05').getTime(),
                new Date('2019-03-06').getTime()
              ]
            },
            {
              x: 'Mardi',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-05').getTime()
              ]
            }
          ]
        },
        {
          name: 'Alertes en cours',
          data: [
            {
              x: 'Lundi',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-05').getTime()
              ]
            },
            {
              x: 'Mardi',
              y: [
                new Date('2019-03-06').getTime(),
                new Date('2019-03-16').getTime()
              ]
            }
          ]
        },
        {
          name: 'Prise de contact',
          data: [
            {
              x: 'Lundi',
              y: [
                new Date('2019-03-14').getTime(),
                new Date('2019-03-15').getTime()
              ]
            },
          ]
        },
        {
          name: 'RDV',
          data: [
            {
              x: 'Lundi',
              y: [
                new Date('2019-03-12').getTime(),
                new Date('2019-03-13').getTime()
              ]
            },
          ]
        },
        {
          name: 'Campagnes',
          data: [
            {
              x: 'Lundi',
              y: [
                new Date('2019-03-10').getTime(),
                new Date('2019-03-11').getTime()
              ]
            },
          ]
        }
    ]
    return (
        <>
            <p>{text}</p>
            <Chart options={options} series={series} height={'40%'} type="rangeBar" />
        </>
    )
}

export default RadialChart