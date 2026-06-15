import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import './Contact.css';

const info = [
  { icon: <Phone size={20}/>, label: 'Phone', value: '07031934857', href: 'tel:+2347054172448' },
  { icon: <MessageCircle size={20}/>, label: 'WhatsApp', value: 'Chat with us instantly', href: 'https://wa.me/2347054172448', green: true },
  { icon: <Mail size={20}/>, label: 'Email', value: 'firststerlingpharm@gmail.com', href: 'mailto:firststerlingpharm@gmail.com' },
  { icon: <MapPin size={20}/>, label: 'Address', value: '2, Ijero Street, off Nnobi Kilo, Surulere, Lagos', href: '#contact' },
  { icon: <Clock size={20}/>, label: 'Hours', value: 'Mon–Sat: 8am–8pm | Sun: 10am–5pm', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-top">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title"><span style={{color:"var(--blue-700)"}}>We're Here When</span><br /><span style={{color:"var(--orange)"}}>You Need Us</span></h2>
          <p className="section-sub">
            Have a question about your prescription, a product, or your health?
            Reach out — our team responds quickly.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {info.map((item, i) => (
              <div className="info-row" key={i}>
                <div className={`info-icon${item.green ? ' green' : ''}`}>{item.icon}</div>
                <div>
                  <div className="info-label">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className={`info-value link${item.green ? ' green-link' : ''}`}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <div className="info-value">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="social-row">
              <span className="info-label">Follow Us</span>
              <div className="social-links">
                <a href="https://www.facebook.com/FS.care" target="_blank" rel="noreferrer" className="social-pill">Facebook</a>
                <a href="https://www.instagram.com/fs.cares" target="_blank" rel="noreferrer" className="social-pill">Instagram</a>
                <a href="https://x.com/fs_cares" target="_blank" rel="noreferrer" className="social-pill">Twitter / X</a>
                <a href="https://www.tiktok.com/@fs.care" target="_blank" rel="noreferrer" className="social-pill">TikTok</a>
              </div>
            </div>

            <div className="map-placeholder">
              <MapPin size={28} color="var(--blue-400)" />
              <p>Visit us at 2, Ijero Street, off Nnobi Kilo, Surulere, Lagos</p>
              <a href="https://maps.app.goo.gl/zN24LE4jV9xhY57PA" target="_blank" rel="noreferrer" className="btn btn-outline" style={{marginTop:'12px', fontSize:'13px', padding:'9px 18px'}}>
                Open in Maps
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <div style={{fontSize:48}}>✅</div>
                <h3>Message Received!</h3>
                <p>One of our team members will reach out to you shortly. You can also chat us on WhatsApp for a faster response.</p>
                <a href="https://wa.me/2347054172448" target="_blank" rel="noreferrer" className="btn btn-primary">
                  <MessageCircle size={16}/> WhatsApp Us Now
                </a>
              </div>
            ) : (
              <>
                <h3 className="form-title">Send a Message</h3>
                <p className="form-sub">We'll get back to you within a few hours.</p>
                <div className="contact-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="Your full name" type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="07031934857" type="tel"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="How can we help you today?"
                      rows={5}
                    />
                  </div>
                  <button className="btn btn-primary form-btn" onClick={handleSubmit}>
                    <Send size={16}/> Send Message
                  </button>
                </div>
                <a
                  href="https://wa.me/2347054172448"
                  target="_blank" rel="noreferrer"
                  className="wa-quick"
                >
                  <MessageCircle size={18} color="#10b981"/>
                  <span>Prefer WhatsApp? <strong>Chat with us instantly →</strong></span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
