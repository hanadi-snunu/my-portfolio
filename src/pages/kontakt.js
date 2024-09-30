import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importera EmailJS
import '../css/kontakt.css';  // Importera CSS specifikt för kontaktformuläret

function Kontakt() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // Status för att visa meddelande

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Använd de uppgifter som du har gett mig
        const serviceID = 'service_3gg38m9';      // Ditt Service ID från EmailJS
        const templateID = 'template_vw0m26a';    // Ditt Template ID från EmailJS
        const userID = '6-AoAcJWSt4xDW36r';       // Din User ID från EmailJS (Offentlig nyckel)

        console.log('Service ID:', serviceID);
        console.log('Template ID:', templateID);
        console.log('User ID:', userID);

        // Skicka e-post via EmailJS
        emailjs.send(
            serviceID,
            templateID,
            {
                from_name: formData.name,      // Avsändarens namn
                to_name: 'Hanadi',             // Mottagarens namn, kan vara ditt namn
                message: formData.message,     // Meddelandetext
                reply_to: formData.email       // Avsändarens e-postadress
            },
            userID
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatus('Ditt meddelande har skickats!');
            setFormData({ name: '', email: '', message: '' }); // Rensa formuläret efter skickat meddelande
        }, (error) => {
            console.error('FAILED...', error);
            setStatus('Något gick fel, försök igen.');
        });
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">Kontakta mig</h1>
            <p className="contact-description">Fyll i formuläret nedan om du har några frågor eller förfrågningar!</p>
            {status && <p>{status}</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Namn:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-post:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Meddelande:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Skicka</button>
            </form>
        </div>
    );
}

export default Kontakt;
