import React from 'react'
import LastCommentItem from "./LastCommentItem";
import { ListGroup, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function LastComments() {
    const comment = "In computer programming, a comment is a programmer-readable explanation or annotation in the source code of a computer program.";
    return (
        <div>
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
                <ListGroup>
                    <LastCommentItem comment={comment} />
                    <LastCommentItem comment={comment} />
                    <LastCommentItem comment={comment} />
                    <LastCommentItem comment={comment} />
                    <LastCommentItem comment={comment} />
                </ListGroup>
            </Card.Body>
            
        </Card>
            
        </div>
    )
}

export default LastComments
