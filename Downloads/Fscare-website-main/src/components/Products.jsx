import React from 'react';
import './Products.css';

const categories = [
  { emoji: '💊', name: 'Prescription Medications', desc: 'Dispensed by certified pharmacists with valid prescriptions.', count: '500+ SKUs' },
  { emoji: '🩺', name: 'Over-the-Counter Medicines', desc: 'Trusted OTC remedies for common ailments and conditions.', count: '300+ SKUs' },
  { emoji: '🌿', name: 'Vitamins & Supplements', desc: 'Certified nutritional supplements for all age groups.', count: '200+ SKUs' },
  { emoji: '🍼', name: 'Baby & Mother Care', desc: 'Safe, gentle products for newborns, infants, and new mothers.', count: '150+ SKUs' },
  { emoji: '🧴', name: 'Personal Care', desc: 'Premium skin, hair, and hygiene products from trusted brands.', count: '250+ SKUs' },
  { emoji: '🩹', name: 'First Aid Essentials', desc: 'Complete first aid kits, bandages, antiseptics, and more.', count: '80+ SKUs' },
  { emoji: '🩸', name: 'Health Monitoring Devices', desc: 'BP monitors, glucometers, pulse oximeters, and thermometers.', count: '40+ SKUs' },
];

export default function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="products-top">
          <div>
            <span className="section-label">Our Products</span>
            <h2 className="section-title"><span style={{color:"var(--blue-700)"}}>Everything Your</span><br /><span style={{color:"var(--orange)"}}>Health Needs</span></h2>
            <p className="section-sub">
              All products sourced from certified manufacturers and authorized
              distributors — quality you can trust.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">Browse All Products</a>
        </div>

        <div className="products-grid">
          {categories.map((cat, i) => (
            <div className="product-card" key={i}>
              <div className="product-emoji">{cat.emoji}</div>
              <div className="product-body">
                <h4 className="product-name">{cat.name}</h4>
                <p className="product-desc">{cat.desc}</p>
                <span className="product-count">{cat.count}</span>
              </div>
              <div className="product-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="quality-banner">
          <div className="quality-icon">🏅</div>
          <div>
            <strong>Quality Assurance Guarantee</strong>
            <p>Every product at FS Care is sourced from NAFDAC-certified manufacturers and authorized distributors. We never compromise on what goes on your shelf.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
