import React, {useContext, useState} from 'react';
import {AiOutlineLike} from "react-icons/ai";
import "reactjs-popup/dist/index.css";
import {useDispatch} from "react-redux";
import {likePost, unlikePost} from "../../reducers/postSlice";
import {UidContext} from "../AppContext";

const Like = (props) => {
    const [liked, setLiked] = useState(false);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();

    const like = () => {
        dispatch(likePost(props.post._id, uid))
        setLiked(true);
    };

    const unlike = () => {
        dispatch(unlikePost(props.post._id, uid))
        setLiked(false);
    };
    // useEffect(() => {
    //   if (post.likers.includes(uid)) setLiked(true);
    //   else setLiked(false);
    // }, [uid, post.likers, liked]);

    return (
        <>
            {liked ? <button onClick={unlike}><AiOutlineLike className='Icon'/>{props.post.likers.length}</button> :
                <button onClick={like}><AiOutlineLike className='Icon'/>{props.post.likers.length}</button>}
        </>
    );
};
// {!isEmpty(post) && liked === false && (
//     <button><AiOutlineLike className='Icon'/>{post.likers.length}</button>
// )}
// {!isEmpty(post) && liked && (
//     <button><AiOutlineLike className='Icon'/>{post.likers.length}</button>
// )}}
export default Like;
