import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import "./CommentAndScore.css" 
import { Form } from "react-bootstrap";
import postService from "../../services/postService";

class CommentAndScore extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.rating)
        console.log(this.state.commentText)
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.id;
        postService.saveComment(this.state.commentText, this.state.rating, 1, userId).then(
            (response) => {
                console.log(response)
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    }

    onChangeRating = (newRating) => {
        this.setState({
            rating: newRating
        });
        console.log(newRating);
    }

    onChangeCommentText = (e) => {
        this.setState({
            commentText: e.target.value
        });
        console.log(e.target.value);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group className="comment__section" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="comment__label">How do you feel about today's image?</Form.Label>
                        <Form.Control 
                            className="comment__form"
                            as="textarea" 
                            rows={3} 
                            maxLength="100" 
                            onChange={this.onChangeCommentText}
                        />
                    </Form.Group>
                
                <ReactStars
                    count={10}
                    onChange={this.onChangeRating}
                    size={24}
                    activeColor="#ffd700"
                    isHalf={true}
                />
                <button className="comment__submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CommentAndScore;
