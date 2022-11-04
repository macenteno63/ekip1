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
        <div id={"test"}>
            <ul>
                <li className={signInModal ? "active-btn" : null} id={"login"} onClick={handleModals}>
                    Connexion
                </li>
                <li className={signUPModal ? "active-btn" : null} id={"register"} onClick={handleModals} >
                    Inscription
                </li>
            </ul>
            {signUPModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
    );
};

export default Log;