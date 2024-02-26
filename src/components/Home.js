import React from "react";
import DashboardCarousel from "./DashboardCarousel";
import CardLayout from "./CardLayout";
import SearchBar from "./SearchBar";

function Home() {
    return (
        <div>
            <div><SearchBar /></div>
            <div class="flex">
                <div class="flex-initial w-1/2">
                    <DashboardCarousel />
                </div>
                <div class="flex-initial w-1/2">
                    <CardLayout />
                </div>
            </div>
        </div>
    );
}

export default Home;
