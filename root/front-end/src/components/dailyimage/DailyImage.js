import React, { Component } from 'react';
import "./DailyImage.css"
import post from './post.jpg';
import CommentAndScore from "../commentandscore/CommentAndScore";
import postService from "../../services/postService";
import { Form } from "react-bootstrap"


class DailyImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avgScore: "",
            todaysPost: "",
            message: "",
            isThereTodaysPost: false,
        };
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

    getDailyImage(date) {
        return new Promise((resolve, reject) => {
            postService.findImageByDate(date)
            .then(
                (response) => {
                    console.log(response)
                    resolve(response)
                },
                (error) => {
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

    componentDidMount() {
        const date = new Date().toJSON().slice(0,10);
        console.log(date)
        this.getDailyImage(date).then((res) => {
            console.log(res)
            this.setState({
                isThereTodaysPost: true,
                todaysPost: res.data.imgData.source,
                avgScore: res.data.imgData.average_score
            });
        }, (error) => {
            this.setState({
                message: error
            });
        });
    }

    render() {
        const { avgScore, todaysPost, isThereTodaysPost } = this.state;
        const scoreColor = this.setColorForGoodAndBadAvg(avgScore);

        if(isThereTodaysPost) {
            return(
                <div className="post">
                    {/** image section */}
                    <img className="post__image" src={todaysPost}></img>

                    {/** average score section */}
                    <Form.Label className="post__averageScore">
                        <span style={{ color: `${scoreColor}` }}>{avgScore}</span> out of 10
                    </Form.Label>

                    {/** Comment and Score section */}
                    <div className="comment__score">
                        <CommentAndScore />
                    </div>
                
                </div>
            );
        } else {
            return(
                <div className="post">
                    Unfortunately, today's picture has not come yet!
                </div>
            );
        }

    }
}

export default DailyImage;
