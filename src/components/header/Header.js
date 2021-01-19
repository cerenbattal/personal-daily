import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    render() {
        return (
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
        );
    }
}

export default Header;