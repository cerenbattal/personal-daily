import React from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";
import DailyImage from "../dailyimage/DailyImage";
import { Navbar } from "react-bootstrap";

function Dashboard() {
    return (
        <div className="dashboard">
            {/** Header */}
            <div className="dashboard__header">
                <Navbar>
                    <Navbar.Brand className="dashboard__headerTitle">Personal Daily</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <img 
                            className="profile__picture" 
                            style={{ width: '50px', height: '50px', marginRight: '0.5rem' }} 
                        /> 
                        <Link style={{ color: '#0056b3'}} to="/profile">cebattal</Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            {/** Post */}
            <DailyImage/>

        </div>
    )
}

export default Dashboard
