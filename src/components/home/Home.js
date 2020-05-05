import React from 'react'
import Header from '../common/components/Header'
import HomeLeft from './left/HomeLeft'
import HomeMiddle from './middle/HomeMiddle'
import HomeRight from './right/HomeRight'

function Home() {
    return (
        <div className="content  Home">
            <Header text={"Bonjour, Sophie !"} emoji={"waving_hand"}/>
            <div className="cards flexed-row-space padding_content">
                <HomeLeft />
                <HomeMiddle />
                <HomeRight />
            </div>
        </div>
    )
}

export default Home