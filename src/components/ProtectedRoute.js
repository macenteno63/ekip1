import React, {useContext, useEffect, useState} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {UidContext} from "./AppContext";
import {useSelector} from "react-redux";
import {isEmpty} from "./utils";

const ProtectedRoute = () => {
    // const uid = true
    const [ok,setOk] = useState(true)
    const uid = useContext(UidContext)
    // function test (){
    //     console.log(user)
    //     if(!isEmpty(user)){
    //         setOk(false)
    //     }else {
    //         setOk(true);
    //     }
    // }
    // useEffect(()=>{
    //     isEmpty(user) && test()
    //     console.log(user)
    // })
    return (uid === null ? <Navigate to={"/formulaire"}/>: <Outlet/>);
};

export default ProtectedRoute;