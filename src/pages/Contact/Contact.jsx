import React, { useState } from 'react';
import './Contact.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Button from '../../components/Button/Button';
import GoogleMap from '../../pages/GoggleMap/GoggleMap';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name) {
            setError('Your name must not be empty!');
            return;
        }
        if (!validateEmail(formData.email)) {
            setError('Your email must be in the correct format!');
            return;
        }

        if (!formData.phone) {
            setError('Your phone must not be empty!');
            return;
        }
        if (!formData.subject || !formData.message) {
            setError('Your subject must not be empty!');
            return;
        }
        if (!formData.message) {
            setError('Your message must not be empty!');
            return;
        }
        setError('');
        setSubmitted(true);
    };
    return (
        <>
            <Breadcrumb heading="Get 24/7 Support" title="Contact us" />
            <div className="contact-from-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Have you any question?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                            </div>
                            {submitted ? (
                                <div className="thank-you-message">
                                    <h2>Thank you for your message!</h2>
                                </div>
                            ) : (
                                <>
                                    {error && (
                                        <div className="error-box">
                                            {error}
                                        </div>
                                    )}
                                    <div className="contact-form">
                                        <form type="POST" id="fruitkha-contact" onSubmit={handleSubmit}>
                                            <p>
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    style={{
                                                        borderColor: !formData.name && error ? 'red' : ''
                                                    }}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    style={{
                                                        borderColor: (!formData.email || !validateEmail(formData.email)) && error ? 'red' : ''
                                                    }}
                                                />
                                            </p>
                                            <p>
                                                <input
                                                    type="tel"
                                                    placeholder="Phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    style={{
                                                        borderColor: !formData.phone && error ? 'red' : ''
                                                    }}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    style={{
                                                        borderColor: !formData.subject && error ? 'red' : ''
                                                    }}
                                                />
                                            </p>
                                            <p>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="10"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    style={{
                                                        borderColor: !formData.message && error ? 'red' : ''
                                                    }}
                                                />
                                            </p>
                                            <input type="hidden" name="token" value="FsWga4&@f6aw" />
                                            <div className="Add-Cart-btn">
                                                <Button textKey="apply" type="btn" className="btn-warning" />
                                            </div>
                                        </form>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-form-wrap">
                                <div className="contact-form-box">
                                    <h4>
                                        <i className="fa-solid fa-map"></i> Shop Address
                                    </h4>
                                    <p>
                                        34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Country Name
                                    </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4>
                                        <i className="far fa-clock"></i> Shop Hours
                                    </h4>
                                    <p>
                                        MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM
                                    </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4>
                                        <i className="fas fa-address-book"></i> Contact
                                    </h4>
                                    <p>
                                        Phone: +00 111 222 3333 <br /> Email: support@fruitkha.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoogleMap />
        </>
    );
};
export default Contact;
