import React, {useEffect, useState} from 'react';
import {AiOutlineDislike, AiOutlineLike, AiOutlineMessage} from "react-icons/ai";
import {isEmpty} from "../utils";
import '../../styles/components/post.css';
import Like from "./Like";

const Card = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userr,setUserr] = useState([])
   function user (){
        props.users.forEach(element => element._id === props.post.posterId && setUserr(element))
        }

    useEffect(() => {
        !isEmpty(props.users[0]) && setIsLoading(false);
        isEmpty(props.users)  ? console.log("loading") : user()
    }, [props.users]);
    return (
        isLoading ? (<div>null</div>) : (<div className='ContainerPost'> <div className="post">
            <img src={userr.picture} alt={"pp"}/>
            <div className="grid-containerHeaderPost">
                <h3>{userr.nom + " " +userr.prenom}</h3>
            </div>

            <hr/>
            <div className="textPostMessage">
                <a>
                    {props.post.message}
                </a>
            </div>

            <hr/>
            <img src={`./post/${props.post.picture}`} alt={"pp"}/>
            <div className="textPost">
                 <Like post={props.post}/>
                <button><AiOutlineDislike className='Icon'/>5</button>
                <button><AiOutlineMessage className='Icon'/>9</button>
            </div>
        </div></div>)

    );
};

export default Card;