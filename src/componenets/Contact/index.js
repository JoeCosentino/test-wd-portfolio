import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import './contact.css'

function Contact() {

    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-wrapper">
            <h1> Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;