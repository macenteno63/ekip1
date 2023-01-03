import React, {useState} from 'react';
import '../styles/components/post.css';
import { isEmpty } from "./utils.js";
import Card from "./post/Card";
import AccountCircle from '../images/account_circle.png';
import {AiOutlineLike, AiOutlineDislike, AiOutlineMessage, AiFillDislike, AiFillLike} from "react-icons/ai";
import {useSelector} from "react-redux";


const Post = () => {
    const posts = useSelector(state => state.post.post)
    return (
        <div>
                {!isEmpty(posts[0]) &&
                    posts.map((post) => {
                        return <Card post={post} key={post._id}/>;
                    })}

        </div>

    );
};

export default Post;

// { isLoading} ? (<i className="fas fa-spinner fa-spin"></i>) : (
//     <div className="grid-itemPost">
//         <ul>
//             {!isEmpty(posts[0]) &&
//                 posts.map((post) => {
//                     return <Card post={post} key={post._id}/>;
//                 })}
//         </ul>
//     </div>
// )