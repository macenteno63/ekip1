import React, {useState} from 'react';
import SignInForm from "./SignInForm";
import SignUpForm from "./signUpForm";

const Log = () => {
    const [signUPModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    };
    return (
        <div>
            <ul  id={"bouton"}>
                <li className={signInModal ? "active-btn" : "inactive-btn"} id={"login"} onClick={handleModals}>
                    Connexion
                </li>
                <li className={signUPModal ? "active-btn" : "inactive-btn"} id={"register"} onClick={handleModals} >
                    Inscription
                </li>
            </ul>
            {signUPModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
    );
};

export default Log;