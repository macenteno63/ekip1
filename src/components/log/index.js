import React, {useState} from 'react';
import SignInForm from "./SignInForm";
import SignUpForm from "./signUpForm";

const Log = () => {
    // const [signUPModal, setSignUpModal] = useState(true);
    // const [signInModal, setSignInModal] = useState(true);

    let [isOpen, setIsOpen] = useState(false);
    let [nom, setNom] = useState("S'inscrire");
    const handleModals = () => {
        if (isOpen)
        {
            setIsOpen(false);
            setNom("S'inscrire");
        }

        else
        {
            setIsOpen(true);
            setNom("Se connecter");
        }
    }

    // const handleModals = (e) => {
    //     // if (e.target.id === "register") {
    //     //     setSignInModal(false);
    //     //     setSignUpModal(true);
    //     // } else if (e.target.id === "login") {
    //     //     setSignUpModal(false);
    //     //     setSignInModal(true);
    //     // }
    // };
    return (
        <div id={isOpen ? "FormuIns" : "FormuCnx"}>
            {isOpen ?  <SignUpForm /> : <SignInForm />}
            {/*{signInModal && <SignInForm />}*/}
            <div  id={"bouton"}>
                <button className={isOpen ? "boutonToCnx" : "boutonToIns"} id={"login"} onClick={handleModals}>
                    {nom}
                </button>
                {/*<li className={signUPModal ? "active-btn" : "inactive-btn"} id={"register"} onClick={handleModals} >*/}
                {/*    {nom}*/}
                {/*</li>*/}
            </div>
        </div>
    );
};

// const Log = () => {
//     let [isOpen, setIsOpen] = useState(true)
//     const handleModals = () => {
//         if (isOpen)
//             setIsOpen(false);
//         else
//             setIsOpen(true);
//     }
//
//     return isOpen ?(
//         <div>
//             <SignInForm/>
//             <ul>
//                 <li onClick={() => setIsOpen(true)}>inscription</li>
//             </ul>
//         </div>
//     ) : (
//         <div>
//             <SignUpForm />
//             <ul>
//                 <li>connexion</li>
//             </ul>
//         </div>
//
//     )
// };

export default Log;