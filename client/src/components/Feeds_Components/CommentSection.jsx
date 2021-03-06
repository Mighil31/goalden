import React from 'react';
import ReactDOM from'react-dom';
import {CommentBox} from './Comments/CommentBox';
import {Comment} from './Comments/Comment';


export const CommentSection=({commentToggle})=>{
    return(
        commentToggle   &&
        <div className="CommentsSection">
            <div className="Comments">
                <Comment/>
                <Comment/>
            </div>
            <CommentBox/>
                    
        </div>
    )
}