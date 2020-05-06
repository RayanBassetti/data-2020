import React, {useEffect} from 'react';
import Chart from "react-apexcharts";

function LineLabels({userId}) {

    const dates = []
    const cons = []
    const prod = []

    async function fetchData() {
        const res = await fetch(`http://localhost:4000/clients/${userId}/cons_prod`);
        res
            .json()
            .then(res => {
                const {data} = res
                data.forEach((item) => {
                    dates.push(item.date)
                    cons.push(item.from_gen_to_consumer)
                    prod.push(item.from_grid_to_consumer)
                }) 
            })
            .then()
            .catch(err => console.log(err));
    }
    
    useEffect(() => {
        fetchData();
    });

    const options = {
        chart: {
            height: 200,
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
            categories: ["2020-03-12", "2020-03-13", "2020-03-13", "2020-03-13", "2020-03-13"],
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
            min: 0,
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
            data: cons
        },
        {
            name: "Production",
            data: prod
        }
    ]

    return (
        <>
        <Chart options={options} series={series} width={'450px'} type="line"/>
        </>
    )
}

export default LineLabels