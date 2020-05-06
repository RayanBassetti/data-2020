import React from 'react';
import Chart from "react-apexcharts";

function StackedBars({data}) {

    const handleSeries = (profil) => {
        let families = [1, 2, 3, 4, 5, 6, 7, 8]
        let familleCount = [0, 0, 0, 0, 0, 0, 0, 0, 0]

        data.forEach(item => {
            families.forEach(number => {
                switch(item.famille) {
                    case(number) : 
                        switch(item.profil) {
                            case(profil) : 
                                familleCount[number + 1] = familleCount[number + 1] + 1
                                break;
                            default : 
                                console.log("error")
                        }
                    break;
                    default:
                        console.log("error")
                }
            }
            )
        });
        return familleCount
    }

    const series =  [
        {
            name: "Econome",
            data: handleSeries(1)
        },
        {
            name: "Autonome",
            data: handleSeries(2)
        },
        {
            name: "Ecologique",
            data: handleSeries(3)
        },
    ]
    const options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
          categories: ["IFaP", "IFoP", "IFaN", "IFoN", "PFaP", "PFoP", "PFaN", "PFoN"],
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        tooltip: {
            // tooltip on hover
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
            }
    }

    return (
        <>
        <Chart options={options} series={series} width={'450px'} type="bar"/>
        </>
    )
}

export default StackedBars