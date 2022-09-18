import React from "react";
import { useState } from "react";
import "./App.css"

const FORM_ENDPOINT = "";

const ContactForm = () => {
    const [submitted,setSubmitted] = useState(false);
    const handleSubmit = () =>{
        setTimeout(() => {
            setSubmitted(true);
        },100);
    };
    if (submitted){
        return(
            <div>
            <h2>Thank you!</h2>
            <div>We'll be in touch soon</div>
            </div>
        );
    }

    return(
        <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank">
            <div className="container">
                <input type="text" placeholder="Your name" name="name" required/>
            </div>

            <div className="container">
                <input type="email" placeholder="Email" name="email" required/>
            </div>

            <div className="container">
                <textarea placeholder="Your message" name="message" required/>
            </div>

            <div className="container">
                <button className="sendMessage" type="submit">Send a message</button>
            </div>
        </form>
    )
}


export default ContactForm;