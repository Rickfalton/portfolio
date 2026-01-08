import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="RICKFALTON ODHIAMBO" required />
                <input type="email" placeholder="forsmanrick@gmail.com" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;