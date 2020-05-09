import React from 'react';
import Chart from "react-apexcharts";

function Donut({data}) {

    let negatif = 0;
    let mitige = 0;
    let curieux = 0; 

    const handleData = () => {
        data.forEach(item => {
            switch(item.feeling) {
                case(1) :
                    negatif = negatif + 1
                    break;
                case(2) :
                    mitige = mitige + 1
                    break;
                case(3) : 
                    curieux = curieux + 1
                    break;
                default : 
                    return false
            }
        });
        return [negatif, mitige, curieux]
    }

    const series = handleData()

    const options = {
        colors: [ '#FF6060','#FFA34F', '#FFDD2D' ],
        chart: {
        type: 'donut',
        },
        labels: ['Négatifs', 'Mitigés', 'Curieux'],
        legend: {
            position: 'bottom',
        },
        responsive: [{
        breakpoint: 480, 
        }]
    }

    return (
        <>
        <Chart options={options} series={series} width={'450px'} type="donut"/>
        </>
    )
}

export default Donut