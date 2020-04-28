import React, {useEffect, useState} from 'react';
import Chart from "react-apexcharts";

function LineLabels({userId}) {
    const [data, setData] = useState(false);

    async function fetchData() {
        const res = await fetch(`http://localhost:4000/cons_prod_clients/${userId}`);
        res
          .json()
          .then(res => setData(res))
          .catch(err => console.log(err));
    }
    
    useEffect(() => {
        fetchData();
        // console.log(data)
    });

    const arrayDates = []
    const arrayCons = []
    const arrayProd = []
    var arrays = []
    function handleData() {
        data.forEach((item) => {
            arrayDates.push(item.date)
            arrayCons.push(item.from_gen_to_consumer)
            arrayProd.push(item.from_grid_to_consumer)
        })
        arrays = [arrayDates, arrayCons, arrayProd]
        console.log(arrays)
    }

    const options = {
        chart: {
            height: 350,
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
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
            min: 5,
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
          data: [28.5, 29, 33, 36, 32]
        },
        {
          name: "Production",
          data: [12, 11, 14, 18, 17]
        }
    ]
    return (
        <>
        <Chart options={options} series={series} width={'450px'} type="line"/>
        {arrays}
        </>
    )
}

export default LineLabels