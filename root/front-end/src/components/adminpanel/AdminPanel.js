import React, { Component } from 'react';
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { Container, Nav, Card, Form, Row } from "react-bootstrap";

class AdminPanel extends Component {
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(this.props);
        return (
            <div>
                <Header />
                <Container>
                <div className="admin-panel">
                    {/** Profile Card */}
                    <Card className="text-center">
                        <Card.Header>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link> 
                                        <Link to="/last-posts"> 
                                            Last Posts
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        
                        <Card.Body>
                        <img className="profile__picture" />
                            <Card.Title>{user.username}</Card.Title>
                            <Card.Text style={{ borderBottom: "1px solid lightgrey", padding: "20px"}}>
                                This is your admin panel. You can add today's image and browse older images.
                            </Card.Text>
                            <Card.Text variant="primary">
                                Upload today's image!
                            </Card.Text>

                            <Form>
                            <Form.File 
                                id="custom-file"
                                label="Drop your image here"
                                custom
                            />
                        </Form>
                        </Card.Body>
                    </Card>
                </div>
                </Container>
            </div>
        );
    }
}

export default AdminPanel;