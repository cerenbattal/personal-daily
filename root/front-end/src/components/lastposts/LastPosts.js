import React, { Component } from 'react';
import Header from "../header/Header";
import { Form, Row, Col, Container } from "react-bootstrap"
import post from './post.jpg';
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
    }

    render() {
        if(this.state.imageArray) {
            return ( 
                <div className="post">
                <Header />
                {this.state.imageArray.map(d => (
                    <div key={d.id}>
                        
                        {/** image section */}
                        <img className="post__image" src={d.source}></img>
    
                        {/** average score section */}
                        <Form.Label className="post__averageScore"> Score:
                            <span>{d.average_score}</span>
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
