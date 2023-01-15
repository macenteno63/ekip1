import React, {useContext, useEffect, useState} from 'react';
import {AiOutlineDislike, AiOutlineLike, AiOutlineMessage} from "react-icons/ai";
import {isEmpty} from "../utils";
import '../../styles/components/post.css';
import Like from "./Like";
import {useDispatch} from "react-redux";
import {deleteP, updatePost} from "../../reducers/postSlice";
import {UidContext} from "../AppContext";

const Card = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userr, setUserr] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const dispatch = useDispatch();
    const uid = useContext(UidContext);

    function user() {
        props.users.forEach(element => element._id === props.post.posterId && setUserr(element))
    }
    const deletePost = () =>{
        if(window.confirm("es-tu sur de vouloir supprimer ?")){
            dispatch(deleteP(props.post._id))
        }
    }

    useEffect(() => {
        !isEmpty(props.users[0]) && setIsLoading(false);
        isEmpty(props.users) ? console.log("loading") : user()
    }, [props.users]);
    const updateItem = () => {
        if (textUpdate) {
            dispatch(updatePost(props.post._id, textUpdate));
        }
        setIsUpdated(false);
    };
    return (
        isLoading ? (<div>null</div>) : (<div className='ContainerPost'>
            <div className="post">
                <img src={userr.picture} alt={"pp"}/>
                <div className="grid-containerHeaderPost">
                    <h3>{userr.nom + " " + userr.prenom}</h3>
                </div>

                <hr/>
                <div className="textPostMessage">
                    {isUpdated === false && <p>{props.post.message}</p>}
                    {isUpdated && (
                        <div className="update-post">
                <textarea
                    defaultValue={props.post.message}
                    onChange={(e) => setTextUpdate(e.target.value)}
                />
                            <div className="button-container">
                                <button className="btn" onClick={updateItem}>
                                    Valider modification
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <hr/>
                <img src={`./post/${props.post.picture}`} alt={"pp"}/>
                <div className="textPost">
                    <Like post={props.post}/>
                    {uid === props.post.posterId && <><button onClick={() => setIsUpdated(true)}><AiOutlineDislike className='Icon'/>5</button>
                        <button onClick={() => deletePost()}><AiOutlineDislike className='Icon'/>5</button></>
                    }
                    <button><AiOutlineMessage className='Icon'/>9</button>
                </div>
            </div>
        </div>)

    );
};

export default Card;