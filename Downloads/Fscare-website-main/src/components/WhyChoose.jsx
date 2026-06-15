import React from 'react';
import { ShieldCheck, Award, UserCheck, MapPin } from 'lucide-react';
import './WhyChoose.css';

const reasons = [
  {
    icon: <UserCheck size={26}/>,
    title: 'Trusted Healthcare Professionals',
    desc: 'Receive guidance from qualified, licensed pharmaceutical professionals who are dedicated to your wellbeing and health outcomes.',
    color: '#dbeafe',
    accent: '#2563eb',
  },
  {
    icon: <Award size={26}/>,
    title: 'Quality Assurance',
    desc: 'Every product is sourced from NAFDAC-certified manufacturers and authorized distributors. We never compromise on safety.',
    color: '#d1fae5',
    accent: '#10b981',
  },
  {
    icon: <ShieldCheck size={26}/>,
    title: 'Customer-Focused Service',
    desc: 'We tailor healthcare solutions to your individual needs — because no two patients are the same, and neither are their health journeys.',
    color: '#fef3c7',
    accent: '#f59e0b',
  },
  {
    icon: <MapPin size={26}/>,
    title: 'Accessibility & Convenience',
    desc: 'Convenient access to healthcare products, WhatsApp consultations, and professional support — when and where you need us.',
    color: '#fce7f3',
    accent: '#ec4899',
  },
];

const testimonials = [
  { name: 'Adaeze O.', location: 'Lagos Island', rating: 5, text: 'FS Care saved me so much stress. The pharmacist explained my prescription clearly and the service was incredibly fast.' },
  { name: 'Emeka T.', location: 'Victoria Island', rating: 5, text: 'Best pharmacy experience I\'ve had in Lagos. They always have what I need in stock and the staff are so professional.' },
  { name: 'Fatima A.', location: 'Lekki', rating: 5, text: 'I love that I can WhatsApp them and get a response immediately. It feels like having a personal pharmacist.' },
];

export default function WhyChoose() {
  return (
    <section className="section why-section" id="why">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why FS Care</span>
          <h2 className="section-title"><span style={{color:"var(--blue-700)"}}>Healthcare You Can</span><br /><span style={{color:"var(--orange)"}}>Actually Trust</span></h2>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon" style={{background: r.color, color: r.accent}}>
                {r.icon}
              </div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-section">
          <div className="section-header" style={{marginTop:64}}>
            <span className="section-label">Patient Stories</span>
            <h2 className="section-title"><span style={{color:"var(--orange)"}}><span style={{color:"var(--blue-700)"}}>What Our Customers</span> <span style={{color:"var(--orange)"}}>Say</span></span></h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars">{'★'.repeat(t.rating)}</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-location">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
