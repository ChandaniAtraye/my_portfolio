import React, { useState } from 'react';

const contactInput = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  color: "#ffffff",
  padding: "12px 14px"
};

const textArea = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  color: "#ffffff",
  padding: "12px 14px",
  minHeight: "110px"
};

const sendbtn = {
  background: "#1A5CFF",
  color: "#fff",
  borderRadius: "8px",
  padding: "10px 15px",
  fontSize: "0.9rem",
  fontWeight: 600,
  border: "none",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch("https://formspree.io/f/xpqeblpq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      })
    });

    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mb-3 border border-rounded py-5"
      style={{ background: "#0D1B2A", padding: "60px 0", scrollMarginTop: "80px" }}>
      
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row d-flex justify-content-center">

            {/* Heading */}
            <div className="text-center mb-2">
              <h3 style={{ fontWeight: 700, fontSize: "2rem", color: "#ffffff" }}>
                Contact me
              </h3>
              <p style={{ color: "#00C2CB", fontSize: "0.85rem", letterSpacing: "0.08em" }}>
                GET IN TOUCH
              </p>
            </div>

            <p className="text-center" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>
              I am open to frontend roles and internships.
            </p>

            {/* Contact Info */}
            <div className="col-12 col-md-4 fs-5 mt-4 mb-4">
              <a href="mailto:chandaniatraye5010@gmail.com"
                className="text-decoration-none"
                style={{ wordBreak: "break-all" }}>
                <i className="bi bi-envelope me-2"></i>
                chandaniatraye5010@gmail.com
              </a><br /><br />
              <a href="https://www.linkedin.com/in/chandani-atraye"
                className="text-decoration-none">
                <i className="bi bi-linkedin me-2"></i> LinkedIn
              </a><br /><br />
              <a href="https://www.github.com/chandani-atraye"
                className="text-decoration-none">
                <i className="bi bi-github me-2"></i> GitHub
              </a>
            </div>

            {/* Form */}
            <div className="col-12 col-md-6 mt-3 info_form">
              <div className="row p-3">

                <div className="col-md-10 mb-3">
                  <label htmlFor="name" className="form-label"
                    style={{ color: "rgba(255,255,255,0.5)" }}>
                    Enter full name
                  </label>
                  <input type="text" className="form-control"
                    style={contactInput} id="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange} required />
                </div>

                <div className="col-md-10 mb-3">
                  <label htmlFor="email" className="form-label"
                    style={{ color: "rgba(255,255,255,0.5)" }}>
                    Enter email address
                  </label>
                  <input type="email" className="form-control"
                    style={contactInput} id="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange} required />
                </div>

                <div className="col-md-10 mb-3">
                  <label htmlFor="phone" className="form-label"
                    style={{ color: "rgba(255,255,255,0.5)" }}>
                    Enter number
                  </label>
                  <input type="number" className="form-control"
                    style={contactInput} id="phone"
                    placeholder="Enter number"
                    value={formData.phone}
                    onChange={handleChange} />
                </div>

                <div className="col-md-12 mb-3">
                  <label htmlFor="message" className="form-label"
                    style={{ color: "rgba(255,255,255,0.5)" }}>
                    Message
                  </label>
                  <textarea className="form-control"
                    style={textArea} id="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange} required>
                  </textarea>
                </div>

                <div className="col-md-3">
                  <button className="btn btn-primary" style={sendbtn}
                    type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send'}
                  </button>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <p style={{ color: '#00C2CB', marginTop: '10px' }}>
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ color: 'red', marginTop: '10px' }}>
                    ❌ Failed to send. Please try again.
                  </p>
                )}

              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;