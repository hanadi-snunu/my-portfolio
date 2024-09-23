import React, { useState } from 'react';
import '../css/kontakt.css';  // Importera CSS specifikt för kontaktformuläret

function Kontakt() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Här kan du skicka formulärdata till ett backend API eller en e-posttjänst
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">Kontakta mig</h1>
            <p className="contact-description">Fyll i formuläret nedan om du har några frågor eller förfrågningar!</p>
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
