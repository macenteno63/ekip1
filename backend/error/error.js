module.exports.signUpErrors = (err) => {
    let errors = { prenom: "", nom: "", email: "", password: "" };
    // switch (err) {
    //     case err.code === 11000 && Object.keys(err.keyValue)[0].includes("nom"):
    //         errors.nom = "Ce nom est déjà pris";
    //         break;
    //     case err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"):
    //         errors.email = "Cet email est déjà enregistré";
    //         break;
    //     case err.message.includes("email"):
    //         errors.email = "email incorrect";
    //         break;
    //     case err.message.includes("prenom"):
    //         errors.email = "prenom incorrect ou deja pris";
    //         break;
    //     case err.message.includes("password"):
    //         errors.email = "Le mot de passe doit faire 6 caractères minimum";
    //         break;
    //     case err.code === 11000 && Object.keys(err.keyValue)[0].includes("prenom"):
    //         errors.email = "ce prenom est deja pris";
    //         break;
    // }
    if (err.message.includes("nom"))
        errors.nom = "nom incorrect ou déjà pris";
    if (err.message.includes("prenom"))
        errors.prenom = "prenom incorrect ou déjà pris";

    if (err.message.includes("email")) errors.email = "Email incorrect";

    if (err.message.includes("password"))
        errors.password = "Le mot de passe doit faire 6 caractères minimum";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("nom"))
        errors.nom = "Ce nom est déjà pris";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
        errors.email = "Cet email est déjà enregistré";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("prenom"))
        errors.nom = "Ce prenom est déjà pris";
    console.log(err);
    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}

    if (err.message.includes("email"))
        errors.email = "Email inconnu";

    if (err.message.includes('password'))
        errors.password = "Le mot de passe ne correspond pas"

    return errors;
}