import React, {useState} from 'react';
import SignInForm from "./SignInForm";
import SignUpForm from "./signUpForm";

const Log = () => {
    const [signUPModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);

    let [isOpen, setIsOpen] = useState(true);
    let [nom, setNom] = useState("Déjà un compte : Se connecter");
    const handleModals = () => {
        if (isOpen)
        {
            setIsOpen(false);
            setNom("Pas encore de compte : S'inscrire");
        }

        else
        {
            setIsOpen(true);
            setNom("Déjà un compte : Se connecter");
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
        <div id={"formu"}>
            {isOpen ?  <SignUpForm /> : <SignInForm />}
            {/*{signInModal && <SignInForm />}*/}
            <ul  id={"bouton"}>
                <li className={signInModal ? "active-btn" : "inactive-btn"} id={"login"} onClick={handleModals}>
                    {nom}
                </li>
                {/*<li className={signUPModal ? "active-btn" : "inactive-btn"} id={"register"} onClick={handleModals} >*/}
                {/*    {nom}*/}
                {/*</li>*/}
            </ul>
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

