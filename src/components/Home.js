import React from 'react'
import DashboardCarousel from './DashboardCarousel'
import CardLayout from './CardLayout'

function Home() {
    return (
        <div>

            <div class="row">
                <div class="col-sm-6">
                    <DashboardCarousel />
                </div>
                <div class="col-sm-6">
                   <CardLayout/>
                </div>
            </div>
        </div>
    )
}

export default Home