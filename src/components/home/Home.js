import React from 'react'
import Header from '../common/components/Header'
import HomeLeft from './left/HomeLeft'
import HomeMiddle from './middle/HomeMiddle'
import HomeRight from './right/HomeRight'
import { withRouter } from 'react-router'

function Home(props) {
    return (
        <div className="content  Home">
            <Header text={"Bonjour, Sophie !"} emoji={"waving_hand"}/>
            <div className="cards flexed-row-around padding_content">
                <HomeLeft />
                <HomeMiddle />
                <HomeRight />
            </div>
        </div>
    )
}

export default withRouter(Home)