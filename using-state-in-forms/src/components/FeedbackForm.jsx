import { useState } from "react";

export default function FeedbackForm () {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData ((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Feedback submitted! Thank you for your feedback!");
    };

    return (
        <div className="container">
            <div className="header"><h1>Feedback Form</h1></div>
            <form className="form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
                <label>Feedback</label>
                <textarea name="feedback" value={formData.feedback} onChange={handleChange} maxLength="200" rows="6" />
                <br />
                <button type="submit">Submit Feedback</button>
            </form>
            <div className="preview">
                <h2>Live Feedback</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Feedback: {formData.feedback}</p>
            </div>
        </div>
    )
}