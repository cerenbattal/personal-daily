import React, { Component } from 'react';
import "./Profile.css";
import Header from "../header/Header";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Profile extends Component {
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (
            <div className="profile">
                {/** Header */}
                <Header />

                {/** Profile Card */}
                <Card className="text-center">
                <Card.Header>
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/profile"> 
                                    Profile
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link> 
                                <Link to="/last-comments"> 
                                    Your last comments
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                
                <Card.Body>
                <img className="profile__picture" />
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        );
    }
}

export default Profile;
