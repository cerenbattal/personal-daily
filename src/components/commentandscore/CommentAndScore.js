import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./CommentAndScore.css" 
import { Form } from "react-bootstrap";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

function CommentAndScore() {
    return (
        <div>
            <div className="comment">
                <Form.Group className="comment__section" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="comment__label">How do you feel about today's image?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>   
            </div>
            <div className="score">
                <ReactStars
                    count={10}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
            </div>
            <button className="comment__submit" type="submit">Submit</button>
        </div>
    )
}

export default CommentAndScore
