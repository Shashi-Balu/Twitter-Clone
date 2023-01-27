import React from "react";
import "./Home.css";
import Feed from "../components/Feed";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

function Home() {
    return (
        <div className="home-container">
            <LeftBar />
            <Feed />
            <RightBar />
        </div>
    );
}

export default Home;
