import React, { useState } from 'react';
import { Pill, HeartPulse, Leaf, ChevronRight } from 'lucide-react';
import './Services.css';

const categories = [
  {
    icon: <Pill size={24}/>,
    color: '#dbeafe',
    accent: '#2563eb',
    title: 'Pharmaceutical Services',
    items: [
      { name: 'Prescription Fulfillment', desc: 'Fast, accurate dispensing of your prescribed medications.' },
      { name: 'Medication Counseling', desc: 'Expert guidance on dosage, interactions, and side effects.' },
      { name: 'Drug Information Services', desc: 'Detailed information on any medication you need.' },
      { name: 'Medication Therapy Management', desc: 'Optimizing your medication regimen for better outcomes.' },
    ],
  },
  {
    icon: <HeartPulse size={24}/>,
    color: '#fee2e2',
    accent: '#ef4444',
    title: 'Health Services',
    items: [
      { name: 'Blood Pressure Checks', desc: 'Free, quick BP monitoring at our pharmacy.' },
      { name: 'Blood Sugar Monitoring', desc: 'Diabetes screening and glucose tracking support.' },
      { name: 'Health Consultations', desc: 'One-on-one sessions with our healthcare professionals.' },
      { name: 'Preventive Health Education', desc: 'Workshops and guides to help you stay ahead of illness.' },
    ],
  },
  {
    icon: <Leaf size={24}/>,
    color: '#d1fae5',
    accent: '#10b981',
    title: 'Wellness Solutions',
    items: [
      { name: 'Vitamins & Supplements', desc: 'Curated range of certified nutritional supplements.' },
      { name: 'Personal Care Products', desc: 'Trusted brands for skin, hair, and body care.' },
      { name: 'Family Health Products', desc: 'Baby care, maternal health, and family essentials.' },
      { name: 'Lifestyle & Wellness Support', desc: 'Tools and resources for a healthier everyday life.' },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title"><span style={{color:"var(--blue-700)"}}>Comprehensive Healthcare</span><br /><span style={{color:"var(--orange)"}}>Under One Roof</span></h2>
          <p className="section-sub">
            From prescription fulfillment to wellness coaching — FS Care covers every
            dimension of your health journey.
          </p>
        </div>

        <div className="services-tabs">
          {categories.map((c, i) => (
            <button
              key={i}
              className={`service-tab${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
              style={active === i ? {'--tab-accent': c.accent} : {}}
            >
              <span className="tab-icon" style={{background: c.color, color: c.accent}}>
                {c.icon}
              </span>
              {c.title}
            </button>
          ))}
        </div>

        <div className="services-panel">
          <div className="panel-header">
            <div className="panel-icon" style={{background: cat.color, color: cat.accent}}>
              {cat.icon}
            </div>
            <div>
              <h3 className="panel-title">{cat.title}</h3>
              <p style={{color:'var(--gray-500)', fontSize:'14px'}}>
                {cat.items.length} services available
              </p>
            </div>
          </div>
          <div className="services-grid">
            {cat.items.map((item, i) => (
              <div className="service-item" key={i} style={{'--item-accent': cat.accent}}>
                <div className="service-item-top">
                  <span className="service-dot" style={{background: cat.accent}} />
                  <h4 className="service-item-name">{item.name}</h4>
                </div>
                <p className="service-item-desc">{item.desc}</p>
                <a href="#contact" className="service-item-link">
                  Learn more <ChevronRight size={14}/>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta-bar">
          <p>Need a service not listed here? Our pharmacists are ready to help.</p>
          <a href="https://wa.me/2347054172448" target="_blank" rel="noreferrer" className="btn btn-primary">
            Ask a Pharmacist
          </a>
        </div>
      </div>
    </section>
  );
}
