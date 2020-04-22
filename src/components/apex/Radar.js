import React from 'react';
import Chart from "react-apexcharts";
import { handleProfil } from '../common/methods/ConvertIntMethod';

function Radar({data}) {
    const {satisfaction, relation, advice, profil_speech, time_activity, profil} = data
    const options = {
        chart: {
            height: '100%',
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            },
            toolbar: {
                show: false
                }
        },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: '#e8e8e8',
                    strokeWidth: 1,
                    connectorColors: '#e8e8e8',
                    fill: {
                      colors: undefined
                    }
                }
            }
        },
        colors: ['#639FFF', '#929292', '#57D498'],
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: ['Satisfaction', 'Relation', 'Taux de réponse', 'Activité sur l\'application', 'Conseil', handleProfil(profil)],
            labels : {
                style: {
                    fontSize: '15px'
                }
            }
        }
    }
    const series = [{
        name: 'Actuel',
        data: [satisfaction, relation, 30, time_activity, advice, profil_speech],
      }, {
        name: 'Conseillé',
        data: [satisfaction + 10, relation + 10, 40, time_activity - 10, advice + 10, profil_speech + 20],
      }, {
        name: 'Ma progression',
        data: [10, 10, 10, 10, 10, 10],
    }]
    return (
        <Chart options={options} series={series} height={'500'} type="radar"/>
    )
}

export default Radar