import React from 'react'
import "./LastCommentItem.css"
import { Row, Col, Container } from "react-bootstrap";

function LastCommentItem(props) {
    return (
        <Container> 
            <Row style={{ borderBottom: '1px solid lightgrey' }}>
                <Col className="comment" xs={6}>
                    <img className="comment__picture"/>
                </Col>
                <Col className="d-flex justify-content-center comment" xs={6}>
                    <p style={{ fontSize: '14px' }} >{props.comment}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default LastCommentItem
