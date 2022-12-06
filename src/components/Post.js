import React from 'react';
import '../styles/components/post.css';
import AccountCircle from '../images/account_circle.png';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TextsmsIcon from '@mui/icons-material/Textsms';

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
                    <a> 
                        Lorem ipsum dolor sit amet. Et eius omnis sit odit nostrum nam officia illo hic autem voluptas qui provident distinctio id voluptas commodi. Eum dolorem dolor ea nobis repellat ea molestiae libero eos velit reiciendis et modi ipsam qui sunt odit est debitis ipsa. Sed esse iste rem itaque Quis quo quia minus ea quia recusandae. Aut architecto autem ex quam architecto aut laborum adipisci est inventore voluptate et sapiente repudiandae quo adipisci aliquam ea repudiandae iste! Id aperiam molestias 33 error expedita non soluta doloribus et dolores veritatis et repellat beatae ab perspiciatis enim. Ut dolores tenetur aut dolorem fugit qui nostrum optio non laboriosam vitae eos velit perspiciatis ex quibusdam voluptates! Et fugiat Quis a atque sint eos omnis sapiente non fuga necessitatibus vel quidem dignissimos aut Quis omnis.
                    </a>
                </div>
                
                <hr/>
                <div className="textPost">
                    <a><ThumbUpOffAltIcon sx={{fontSize: 40}} />20</a> 
                    <a><ThumbDownOffAltIcon sx={{fontSize: 40}} />5</a>
                    <TextsmsIcon sx={{fontSize: 40}} />   
                </div>           
            </div> 
        </div>
    );
};

export default Post;