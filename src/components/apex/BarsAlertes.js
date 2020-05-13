import React, { useContext } from 'react'
import Chart from "react-apexcharts";

import {AlertesContext} from '../contexts/AlertesContext'


function BarsAlertes() {

    const {alertes} = useContext(AlertesContext)

    const handleAlertes = () => {
        let waiting = 0
        let doing = 0
        let toCheck = 0
        let done = 0
        alertes.forEach(item => {
            switch(item.status) {
                case(1) : 
                    waiting = waiting + 1;
                    break;
                case(2) :
                    doing = doing + 1;
                    break;
                case(3) : 
                    toCheck = toCheck + 1;
                    break;
                case(4) :
                    done = done + 1;
                    break;
                default : 
                    return false;
            }
        });
        return [waiting, doing, toCheck, done, 0]
    }

    const series = [{
        data: handleAlertes()
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
            enabled: true
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