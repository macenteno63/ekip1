import React from 'react';
import AccountCircle from "../../images/account_circle.png";
import {AiOutlineDislike, AiOutlineLike, AiOutlineMessage} from "react-icons/ai";

const Card = ({post}) => {
    return (
        <div className="post">

            <div className="grid-containerHeaderPost">
                <img className="PPPost" src={AccountCircle}/>
                <h3>{post._id}</h3>
            </div>

            <hr/>
            <div className="textPost">
                <a>
                    {post.message}
                </a>
            </div>

            <hr/>
            <div className="textPost">
                <button><AiOutlineLike className='Icon'/>32</button>
                <button><AiOutlineDislike className='Icon'/>5</button>
                <button><AiOutlineMessage className='Icon'/>9</button>
            </div>
        </div>
    );
};

export default Card;