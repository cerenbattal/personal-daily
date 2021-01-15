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
                        Signed in as: <Link to="/profile">cebattal</Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            {/** Post */}
            <DailyImage/>
            {/** On the side panel, the user's last five comments and their images will be shown */}

        </div>
    )
}

export default Dashboard
