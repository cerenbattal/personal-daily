import React from 'react';
import "./DailyImage.css"
import CommentAndScore from "../commentandscore/CommentAndScore";
import post from './post.jpg';


function DailyImage() {
    return (
        <div className="post">

            <img className="post__image" src={post}></img>
            {/** Comment and Score section */}
            <div className="comment__score">
                <CommentAndScore />
            </div>
            
        </div>
    )
}

export default DailyImage
