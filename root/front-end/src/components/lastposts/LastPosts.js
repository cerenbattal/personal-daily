import React, { Component } from 'react';
import Header from "../header/Header";
import { Form, Row, Col, Container } from "react-bootstrap"
import postService from "../../services/postService";

class LastPosts extends Component {
    constructor(props){
        super(props)
        this.state = {
          imageArray: []
        }
    }

    getAllImages = () => {
        return new Promise((resolve, reject) => {
            postService.findAll().then(
                (response) => {
                    console.log(response)
                    resolve(response)
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    reject(resMessage)
                }
            );
        })
        
    }

    findCommentsForImageID = (image_id) => {
        return new Promise((resolve, reject) => {
            postService.findCommentsByImageId(image_id).then(
                (response) => {
                    console.log(response)
                    resolve(response)
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    reject(resMessage)
                }
            );
        })
    }

    componentDidMount(){
        this.getAllImages().then((res) => {
            this.setState({
                imageArray: res
            });
        }, (error) => {
            this.setState({
                error: true
            });
        });

        this.findCommentsForImageID(1).then((res) => {
            console.log(res)
            /*this.setState({
                imageArray: res
            });*/
        }, (error) => {
            console.log(error)
            /*this.setState({
                error: true
            });*/
        });
    }

    render() {
        if(this.state.imageArray) {
            return ( 
                <div className="post">
                <Header />
                {this.state.imageArray.map(d => (
                    <div key={d.id} style={{ marginBottom: "2rem", borderBottom: "1px solid lightgray" }}>
                        
                        {/** image section */}
                        <img className="post__image" src={d.source}></img>
    
                        {/** average score section */}
                        <Form.Label className="post__averageScore"> Average Score: 
                            <span>{d.average_score}</span>, posted date: <span>{d.posted_date}</span>
                        </Form.Label>

                        {/** Listed comments */}
                        {d.comments.map(comment => (
                            <div className="comment__score">
                                <Container>
                                    <Row xs={1} md={2}>
                                        <Col>
                                            <p 
                                                style={{ 
                                                    fontSize: "12px"
                                                }}
                                            >
                                            <span 
                                                className="username" 
                                                style={{ 
                                                    color: "gray", marginRight: "30px"
                                                }}
                                            >userid: {comment.user_id} - </span>
                                                {comment.comment_text}
                                            </p>
                                        </Col>
                                    
                                    </Row>
                                </Container>
                            </div>
                        ))}
                        
                    </div>
                ))} 
                </div>
            )    
        } else {
            return(
                <div className="post">
                    No images found!!
                </div>
            )
        }
    }
}

export default LastPosts;
