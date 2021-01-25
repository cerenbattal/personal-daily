import React, { Component } from 'react';
import "./LastCommentItem.css"
import { Row, Col, Container } from "react-bootstrap";

class LastCommentItem extends Component {
    render() {
        const userProfilePic = JSON.parse(localStorage.getItem('userProfilePic'));
        const profile_picture = {
            backgroundImage: `url(${userProfilePic.profilePic})`
        };
        return (
            <Container> 
                <Row style={{ borderBottom: '1px solid lightgrey' }}>
                    <Col className="comment" xs={6}>
                        <img style={profile_picture} className="comment__picture"/>
                    </Col>
                    <Col className="d-flex justify-content-center comment" xs={6}>
                        <p style={{ fontSize: '14px' }} >{this.props.comment}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LastCommentItem;
