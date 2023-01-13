import Card from "./post/Card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchPost} from "../reducers/postSlice";


const Post = () => {
    const posts = useSelector(state => state.post.post)
    const users = useSelector(state => state.utilisateurs.utilisateurs);
    const [count, setCount] = useState(5);
    const dispatch = useDispatch();
    const [loadPost, setLoadPost] = useState(true);
    const loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
            setLoadPost(true);
        }
    }
    useEffect(() => {
        if (loadPost) {
            dispatch(fetchPost(count));
            setLoadPost(false);
            setCount(count + 5);
        }
        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll', loadMore);
    }, [loadPost, dispatch, count]);
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