import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {timestampParser} from "../utils";
import {addComment, fetchPost} from "../../reducers/postSlice";

const CardComment = (props) => {
    const userData = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const handleComment = (e) => {
        e.preventDefault();

        if (text) {
            dispatch(addComment(props.post._id, userData._id, text, userData.nom))
                .then(() => dispatch(fetchPost()))
                .then(() => setText(''));
        }
    };
    return (
        <div className="comments-container">
            {props.post.comments.map((comment) => {
                return (
                    <div
                        className={
                            comment.commenterId === userData._id
                                ? "comment-container client"
                                : "comment-container"
                        }
                        key={comment._id}
                    >
                        <div className="right-part">
                            <div className="comment-header">
                                    <h3>{comment.nom}</h3>
                            </div>
                            <p>{comment.text}</p>
                            <span>{timestampParser(comment.timestamp)}</span>
                            {/*<EditDeleteComment comment={comment} postId={post._id} />*/}
                        </div>
                    </div>
                );
            })}
            {userData._id && (
                <form action="" onSubmit={handleComment} className="comment-form">
                    <input
                        type="text"
                        name="text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        placeholder="Laisser un commentaire"
                    />
                    <br />
                    <input type="submit" value="Envoyer" />
                </form>
            )}
        </div>
    );
};

export default CardComment;