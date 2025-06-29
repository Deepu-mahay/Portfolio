import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add logic to send the form data to your email or backend
  };

  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f7fafd', padding: '2rem' }}>
      <h2 style={{ fontSize: '2.2rem', color: '#222', marginBottom: '1.5rem' }}>Contact Me</h2>
      <p style={{ color: '#444', marginBottom: '2rem', textAlign: 'center' }}>
        Feel free to reach out for collaborations, project inquiries, or just to say hi!
      </p>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', maxWidth: '400px', width: '100%' }}>
        {submitted ? (
          <div style={{ color: '#1a237e', textAlign: 'center', fontWeight: 'bold' }}>
            Thank you for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: '#222' }}>Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: '#222' }}>Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: '#222' }}>Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }} />
            </div>
            <button type="submit" style={{ background: '#1a237e', color: '#fff', padding: '0.7rem 2rem', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
              Send Message
            </button>
          </form>
        )}
      </div>
      <div style={{ marginTop: '2rem', color: '#444', textAlign: 'center' }}>
        <div>Email: <a href="mailto:your.email@example.com" style={{ color: '#1a237e', textDecoration: 'none' }}>dpinder.mahay.786@gmail.com</a></div>
        <div style={{ marginTop: '0.5rem' }}>LinkedIn: <a href="https://linkedin.com/in/deepu-mahay" target="_blank" rel="noopener noreferrer" style={{ color: '#1a237e', textDecoration: 'none' }}>linkedin.com/in/Deepu-mahay</a></div>
      </div>
    </main>
  );
}

export default Contact;
