import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../styles/pages/contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cepmvma",
        "template_ekip",
        form.current,
        "RQeUBy3B_EV1uHe2W"
      ) 
      .then(
        (result) => {
          console.log(result.text);
          console.log("Messagee envoyé");
          alert ("Message envoyé\n" + result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

    const retour = (e) => {
        e.preventDefault();
        window.location.href = "http://localhost:3000/formulaire";
    }

  return (
    <div>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="nom" required placeholder="Votre nom" />
        <label>Email</label>
        <input type="email" name="email" required placeholder="Votre mail" />
        <label>Sujet</label>
        <input type="text" name="sujet" required placeholder="Le sujet"/>
        <label>Message</label>
        <textarea name="message" require placeholder="Votre message"/> 
        <input type="submit" value="Envoyer" />
        <input type="retour" value="Retour au formulaire" onClick={retour}/>
      </form>
    </div>
  );
};

export default Contact;
