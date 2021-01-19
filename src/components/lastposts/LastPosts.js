import React, { Component } from 'react';
import Header from "../header/Header";
import { Form, Row, Col, Container } from "react-bootstrap"
import post from './post.jpg';

export default class LastPosts extends Component {
    render() {
        const avgScore = "8.7";
        return (

            <div className="post">
            <Header />
                {/** image section */}
                <img className="post__image" src={post}></img>

                {/** average score section */}
                <Form.Label className="post__averageScore"> Score:
                    <span>{avgScore}</span>
                </Form.Label>

                {/** Listed comments */}
                <div className="comment__score">
                    <Container>
                        <Row xs={1} md={2}>
                            <Col>
                                <p>
                                <span className="username" style={{ 
                                    color: "lightgray", marginRight: "30px"
                                }}>cebattal</span>
                                    Nice pic!
                                </p>
                            </Col>
                           
                        </Row>
                </Container>
                </div>
                
            </div>
            
        )
    }
}
