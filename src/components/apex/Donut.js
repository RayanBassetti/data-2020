import React from 'react';
import Chart from "react-apexcharts";

function Donut({data}) {
    console.log(data)

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
                    console.log("error")
            }
        });
        return [negatif, mitige, curieux]
    }

    const series = handleData()
    console.log(series)

    const options = {
        colors: [ '#FF6060','#FFA34F', '#FFDD2D' ],
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

export default Donut