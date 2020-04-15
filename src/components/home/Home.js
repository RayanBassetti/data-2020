import React from 'react'
import HomeHeader from './HomeHeader'
import HomePlanning from './HomePlanning'
import HomeStats from './HomeStats'
import HomeDataviz from './HomeDataviz'
function Home() {
    return (
        <div className="content Home">
            <HomeHeader />
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