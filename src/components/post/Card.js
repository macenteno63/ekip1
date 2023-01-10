import React, {useEffect, useState} from 'react';
import AccountCircle from "../../images/account_circle.png";
import {AiOutlineDislike, AiOutlineLike, AiOutlineMessage} from "react-icons/ai";
import {useSelector} from "react-redux";
import {isEmpty} from "../utils";
import log from "../log";
import '../../styles/components/post.css';

const Card = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userr,setUserr] = useState([])
    const test = useSelector(state => state.utilisateurs.utilisateurs)
   function user (){
        props.users.forEach(element => element._id === props.post.posterId && setUserr(element))
        }

    useEffect(() => {
        !isEmpty(props.users[0]) && setIsLoading(false);
        isEmpty(props.users)  ? console.log("loading") : user()
    }, [props.users]);
    return (
        isLoading ? (<div>null</div>) : (<div className='ContainerPost'> <div className="post">
            {/*<img*/}
            {/*    src={*/}
            {/*        !isEmpty(users[0]) &&*/}
            {/*        users*/}
            {/*            .map((user) => {*/}
            {/*                if (user._id === props.post.posterId){*/}
            {/*                    return user.picture;*/}
            {/*                }*/}
            {/*                else return null;*/}
            {/*            })*/}
            {/*            .join("")*/}
            {/*    }*/}
            {/*    alt="poster-pic"*/}
            {/*/>*/}
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
                <button><AiOutlineLike className='Icon'/>32</button>
                <button><AiOutlineDislike className='Icon'/>5</button>
                <button><AiOutlineMessage className='Icon'/>9</button>
            </div>
        </div></div>)

    );
};

export default Card;