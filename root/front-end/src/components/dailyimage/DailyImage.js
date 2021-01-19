import React, { Component } from 'react';
import "./DailyImage.css"
import post from './post.jpg';
import CommentAndScore from "../commentandscore/CommentAndScore";
import { Form } from "react-bootstrap"


class DailyImage extends Component {
    constructor(props) {
        super(props);
        this.setColorForGoodAndBadAvg = this.setColorForGoodAndBadAvg.bind(this);
    }
    setColorForGoodAndBadAvg = (avgScore) => {
        if(avgScore > 0 && avgScore < 5) {
            return "#dc2f02";
        } else if (avgScore > 5 && avgScore < 8.5) {
            return "#00b4d8";
        } else {
            return "#43aa8b";
        }
    }
    render() {
        const avgScore = "8.7";
        const scoreColor = this.setColorForGoodAndBadAvg(avgScore);
        return (
            <div className="post">
                {/** image section */}
                <img className="post__image" src={post}></img>

                {/** average score section */}
                <Form.Label className="post__averageScore">
                    <span style={{ color: `${scoreColor}` }} >{avgScore}</span> out of 10
                </Form.Label>

                {/** Comment and Score section */}
                <div className="comment__score">
                    <CommentAndScore />
                </div>
                
            </div>
        )
    }
}

export default DailyImage;
