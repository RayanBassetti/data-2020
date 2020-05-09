import React, {useEffect, useState} from 'react';
import Chart from "react-apexcharts";
import ClipLoader from "react-spinners/ClipLoader";

function LineLabels({userId}) {
    const [dates, setDates] = useState([])
    const [cons, setCons] = useState([])
    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4000/clients/${userId}/cons_prod`)
            .then(results => {
                return results.json()
            }).then(res => {
                const {data} = res
                data.forEach((item) => {
                    setDates(dates => [...dates, item.date])
                    setCons(cons => [...cons, item.from_gen_to_consumer])
                    setProd(prod => [...prod, item.from_grid_to_consumer])
                }) 
                setLoading(false)
            })
    }, [userId])

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
            categories: dates,
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
        {!loading && 
            <Chart options={options} series={series} width={'450px'} type="line"/>
        }
        {loading &&
            <div className="sweet-loading">
                <ClipLoader
                size={150}
                //size={"150px"} this also works
                color={"#00AAFF"}
                loading={loading}
                />
            </div>
        }
        </>
    )
}

export default LineLabels