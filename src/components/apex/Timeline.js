import React from 'react';
import Chart from "react-apexcharts";
// for the sake of not wasting your time, don't go down further. 
function RadialChart({text}) {

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
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Mardi',
              y: [
                new Date('2020-05-12T11:00:00').getTime(),
                new Date('2020-05-12T12:00:00').getTime()
              ]
            },
            {
              x: 'Mercredi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Jeudi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Vendredi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
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
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Mardi',
              y: [
                new Date('2020-05-12T11:00:00').getTime(),
                new Date('2020-05-12T12:00:00').getTime()
              ]
            },
            {
              x: 'Mercredi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Jeudi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Vendredi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },

          ]
        },
        {
          name: 'Prise de contact',
          data: [

            {
              x: 'Lundi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Mardi',
              y: [
                new Date('2020-05-12T11:00:00').getTime(),
                new Date('2020-05-12T12:00:00').getTime()
              ]
            },
            {
              x: 'Mercredi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Jeudi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },
            {
              x: 'Vendredi',
              y: [
                new Date('2020-05-11T11:00:00').getTime(),
                new Date('2020-05-11T12:00:00').getTime()
              ]
            },

          ]
        },
    ]
    return (
        <Chart options={options} series={series} height={'80%'} type="rangeBar" />
    )
}

export default RadialChart