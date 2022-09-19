import React from "react";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

    function ContactForm() {
        const [formStatus,setFormStatus] = useState('Send');
        const onSubmit = (e) =>{
            e.preventDefault()
            setFormStatus('Submitting...')
            const {name,email,message} = e.target.elements
            
            let conFom = {
                name: name.value,
                email: email.value,
                message: message.value,
            }
            console.log(conFom)
        }
    
    return(
        <div>
        <div className="container mt-5">
            <h2 className="mb-3" >React Contact Form Example</h2>
            </div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-control" type="text" id="name" required/>
                </div>

                <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" type="email" id="name" required/>
                </div>

                <div className="mb-3">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" id="message" required/>
                </div>
                <button className="btn btn-danger" type="submit">{formStatus}</button>
            </form>
        </div>
    )
}

export default ContactForm;