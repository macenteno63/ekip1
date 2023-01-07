import '../styles/pages/accueil.css'
import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation';
import Personne from '../components/Personne';
import {useSelector} from "react-redux";
import { io } from "socket.io-client";

const Messagerie = () => {
    const [nom,setNom] = useState([]);
    const [message,setMessage] = useState("")


    const socket = io("ws://localhost:5000");

// send a message to the server
    socket.emit("hello from client");

// receive a message from the server
    socket.on("hello from server", (...args) => {
        console.log("bien recu ->server->client")
        setMessage("bien recu ->server->client");
    });
    const sendMessage = ()=>{
        socket.emit("hello from client")
    }
    // const users = useSelector(state => state.utilisateurs.utilisateurs);
    // useEffect(()=>{
    //     fetchNom();
    // }, [nom])
    // const fetchNom = async () =>{
    //     await fetch('http://localhost:4000/api/user/all')
    //         .then((resp)=>{
    //             return resp.json();
    //         })
    //         .then((res)=>{
    //             setNom(res);
    //         })
    //         .catch((err) => console.log(err));
    // }
    return (
    <div>
        <Navigation/>
        {/*<Personne scaleValue={users}/>*/}
        <h2>Messagerie</h2>
        <div style={{textAlign:"center"}}>{message}</div>
        <button style={{textAlign:"center"}} onClick={sendMessage()}>envoie coucou</button>
    </div>
    );
};

export default Messagerie