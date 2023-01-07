import React, {useState} from 'react';
import { isEmpty } from "./utils.js";
import Card from "./post/Card";
import AccountCircle from '../images/account_circle.png';
import {AiOutlineLike, AiOutlineDislike, AiOutlineMessage, AiFillDislike, AiFillLike} from "react-icons/ai";
import {useSelector} from "react-redux";
import {fetchPost} from "../reducers/postSlice";


const Post = () => {
    const posts = useSelector(state => state.post.post)
    const users = useSelector(state => state.utilisateurs.utilisateurs);
    //fetchPost();
    return (
        <div>
                {posts === null || users === null ? <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> :
                    posts.map((post) => {
                                return <Card post={post} users={users} key={post._id}/>;
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