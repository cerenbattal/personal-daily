import React, { Component } from 'react';
import Header from "../header/Header";
import { Link } from "react-router-dom";
import postService from "../../services/postService";
import "./AdminPanel.css"
import { Container, Nav, Card, Form, Button } from "react-bootstrap";

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentFile: undefined,
          message: "",
        };
    }

    onChangeImgInput = (e) => {
        this.setState({
            currentFile: e.target.value
        });
        console.log(e.target.value);
    }

    upload = (e) => {
        e.preventDefault();
        console.log(e);
        const uploadDate = new Date();
        const dateString =
        uploadDate.getUTCFullYear() + "-" +
            ("0" + (uploadDate.getUTCMonth()+1)).slice(-2) + "-" +
            ("0" + uploadDate.getUTCDate()).slice(-2) + " ";
        console.log(dateString);
        postService.saveImage(this.state.currentFile, dateString, 7.5).then(
            (response) => {
                console.log(response)
                this.setState({
                    message: "Uploaded!",
                    currentFile: this.state.currentFile
                });
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage)
                this.setState({
                    message: "Could not upload image!",
                    currentFile: undefined
                });
            }
        );

    }

    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        const userProfilePic = JSON.parse(localStorage.getItem('userProfilePic'));
        const profile_picture = {
            backgroundImage: `url(${userProfilePic.profilePic})`
        };
        const {
            currentFile,
            message,
            fileName
        } = this.state;

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
                        <img style={profile_picture} className="profile__picture" />
                            <Card.Title>{user.username}</Card.Title>
                            <Card.Text style={{ borderBottom: "1px solid lightgrey", padding: "20px"}}>
                                This is your admin panel. You can add today's image and browse older images.
                            </Card.Text>
                            <Card.Text variant="primary">
                                Upload today's image!
                            </Card.Text>
                            <form onSubmit={this.upload}>
                                <Form.Group>
                                    <Form.Control 
                                        type="input" 
                                        placeholder="Enter image URL"
                                        onChange={this.onChangeImgInput}
                                    />
                                </Form.Group>
                                <Button 
                                    variant="primary" 
                                    as="input" 
                                    type="submit" 
                                    value="Submit"
                                    //disabled={currentFile}
                                />
                            </form>
                            {message && (
                                <div className="alert alert-secondary mt-3" role="alert">
                                    {message}
                                </div> 
                            )}
                        </Card.Body>
                    </Card>
                </div>
                </Container>
            </div>
        );
    }
}

export default AdminPanel;