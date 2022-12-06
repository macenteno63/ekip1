import React from 'react';
import '../styles/components/post.css';
import AccountCircle from '../images/account_circle.png';
import {AiOutlineLike, AiOutlineDislike, AiOutlineMessage, AiFillDislike, AiFillLike} from "react-icons/ai";

const Post = () => {
    return (
        <div className="grid-itemPost">
            <div className="post">

                <div className="grid-containerHeaderPost">

                    
                    <img className="PPPost" src={AccountCircle}/>
                    
                    <div>
                        <h3>Etienne Fabre</h3>
                        <a>par Groupe FanFoot</a>
                    </div>
                    
                </div>
                
                <hr/>
                <div className="textPost">
                    <a> titre</a>
                    <br/>
                    <a> 
                        Lorem ipsum dolor sit amet. Et eius omnis sit odit nostrum nam officia illo hic autem voluptas qui provident distinctio id voluptas commodi. Eum dolorem dolor ea nobis repellat ea molestiae libero eos velit reiciendis et modi ipsam qui sunt odit est debitis ipsa. Sed esse iste rem itaque Quis quo quia minus ea quia recusandae. Aut architecto autem ex quam architecto aut laborum adipisci est inventore voluptate et sapiente repudiandae quo adipisci aliquam ea repudiandae iste! Id aperiam molestias 33 error expedita non soluta doloribus et dolores veritatis et repellat beatae ab perspiciatis enim. Ut dolores tenetur aut dolorem fugit qui nostrum optio non laboriosam vitae eos velit perspiciatis ex quibusdam voluptates!
                    </a>
                </div>
                
                <hr/>
                <div className="textPost">
                    <button><AiOutlineLike className='Icon'/>20</button>
                    <button><AiOutlineDislike className='Icon'/>5</button>
                    <button><AiOutlineMessage className='Icon'/></button>  
                </div>           
            </div> 
        </div>
    );
};

export default Post;