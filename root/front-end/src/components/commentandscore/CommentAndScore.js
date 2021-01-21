import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import "./CommentAndScore.css" 
import { Form } from "react-bootstrap";

class CommentAndScore extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.rating)
        console.log(this.state.commentText)
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
