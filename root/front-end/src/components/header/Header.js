import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        const userProfilePic = JSON.parse(localStorage.getItem('userProfilePic'));
        const profile_picture = {
            backgroundImage: `url(${userProfilePic.profilePic})`
        };
        return (
            <div className="dashboard__header">
                    <Navbar>
                        <Link to="/dashboard">
                            <Navbar.Brand className="dashboard__headerTitle">Personal Daily</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <img style={profile_picture} className="header__profile" /> 
                            <Link style={{ color: '#0056b3'}} to="/profile">{user.username}</Link>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
        );
    }
}

export default Header;