import React, { Component } from 'react';
import './Dashboard.css';
import DailyImage from "../dailyimage/DailyImage";
import Header from "../header/Header";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                {/** Header */}
                <Header />
                {/** Post */}
                <DailyImage/>
    
            </div>
        )
    }
}

export default Dashboard;
