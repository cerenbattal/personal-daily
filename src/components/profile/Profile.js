import React from 'react'
import "./Profile.css";
import { Card, Nav } from "react-bootstrap";

function Profile() {
    return (
        <div className="profile">
            <Card className="text-center">
            <Card.Header>
                <Nav variant="pills" defaultActiveKey="#profile">
                    <Nav.Item>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#lastcomments">Your last comments</Nav.Link>
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
