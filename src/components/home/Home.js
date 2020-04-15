import React from 'react'
import Header from '../common/components/Header'
import HomePlanning from './HomePlanning'
import HomeStats from './HomeStats'
import HomeDataviz from './HomeDataviz'
function Home() {
    return (
        <div className="content Home">
            <Header text={"Bonjour, Sophie !"} emoji={"waving_hand"}/>
            <div className="cards flexed-row-space">
                <HomePlanning />
                <div className="cards_right">
                    <HomeStats />
                    <HomeDataviz />
                </div>
            </div>
        </div>
    )
}

export default Home