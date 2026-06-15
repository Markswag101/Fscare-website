import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

const values = [
  { emoji: '🤝', title: 'Integrity', desc: 'Honest, transparent service in every interaction.' },
  { emoji: '🎓', title: 'Professionalism', desc: 'Certified experts upholding the highest standards.' },
  { emoji: '💙', title: 'Compassion', desc: 'We treat every patient with empathy and care.' },
  { emoji: '⭐', title: 'Excellence', desc: 'Committed to quality in products and service.' },
  { emoji: '💡', title: 'Innovation', desc: 'Modern solutions for modern healthcare needs.' },
  { emoji: '👤', title: 'Customer-Centered', desc: 'Your health goals guide everything we do.' },
];

const pillars = [
  'Trusted by thousands of families across Nigeria',
  'Stocking only certified, quality-assured medications',
  'Guided by licensed pharmaceutical professionals',
  'Community-first healthcare approach',
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">

        <div className="about-grid">
          <div className="about-content">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              <span style={{color:"var(--blue-700)"}}>A Pharmacy Built on</span><br /><span style={{color:"var(--orange)"}}>Trust & Excellence</span>
            </h2>
            <p className="section-sub" style={{marginBottom:28}}>
              FS Care is a trusted pharmacy and healthcare provider committed
              to improving lives through accessible healthcare solutions, quality
              medications, professional pharmaceutical services, and wellness education.
            </p>

            <ul className="about-pillars">
              {pillars.map((p, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} color="var(--blue-600)" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mission-box">
              <div className="mission-item">
                <h4>Our Mission</h4>
                <p>To deliver reliable healthcare products and pharmaceutical services that improve the health and wellbeing of our community.</p>
              </div>
              <div className="mission-item">
                <h4>Our Vision</h4>
                <p>To become the most trusted neighborhood healthcare and pharmacy brand in Nigeria.</p>
              </div>
            </div>
          </div>

          <div className="values-grid">
            <div className="values-header">
              <span className="section-label">Core Values</span>
            </div>
            <div className="grid-3" style={{gap:'16px'}}>
              {values.map((v, i) => (
                <div className="value-card" key={i}>
                  <div className="value-emoji">{v.emoji}</div>
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
