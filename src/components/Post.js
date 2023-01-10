import Card from "./post/Card";
import {useSelector} from "react-redux";


const Post = () => {
    const posts = useSelector(state => state.post.post)
    const users = useSelector(state => state.utilisateurs.utilisateurs);
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