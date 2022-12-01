import React from 'react';
import '../styles/components/post.css';
import Event from '../images/event.png';


const Post = () => {
    return (
        <div className="grid-itemPost">
            <div className="post">

                <div className="grid-containerHeaderPost">

                    <div>
                        <img className="image" src={Event}/>
                    </div>
                    <div>
                        <h3>Etienne Fabre</h3>
                        <a>par Groupe FanFoot</a>
                    </div>
                    
                </div>
                
                <hr/>
                <a> titre</a>
                <a> texte</a>
                <hr/>

                <a>like dislike repondre</a>               
            </div> 
        </div>
    );
};

export default Post;