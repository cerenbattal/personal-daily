import React from 'react'
import "./Profile.css";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <div className="profile">
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
                <Card.Title>cebattal</Card.Title>
                <Card.Text>
                    cerenbattal97@gmail.com
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Profile
