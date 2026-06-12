import React from "react";
import {
  ShoppingBag,
  MessageCircle,
  CalendarCheck,
  MapPin,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import logo from "../logo.png";
import "./Hero.css";

const stats = [
  { icon: <Users size={18} />, value: "5,000+", label: "Patients Served" },
  {
    icon: <ShieldCheck size={18} />,
    value: "100%",
    label: "Certified Products",
  },
  { icon: <Star size={18} />, value: "4.9★", label: "Customer Rating" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-grid" />

        <div className="hero-logo-watermark">
          <img src={logo} alt="FS Care" className="watermark-img" />
        </div>
      </div>

      <div className="container hero-inner">
        <div className="hero-content animate-fadeUp">
          <div className="hero-badge">
            <ShieldCheck size={14} />
            Nigeria's Trusted Pharmacy Partner
          </div>

          <h1 className="hero-title">
            <span style={{ color: "var(--blue-700)" }}>Your Health.</span>
            <br />
            <span className="hero-title-accent">Our Priority.</span>
          </h1>

          <p className="hero-sub">
            Professional pharmaceutical care, quality medications, wellness
            products, and personalized health support delivered with excellence.
          </p>

          <div className="hero-ctas">
            <a href="#products" className="btn btn-white">
              <ShoppingBag size={17} />
              Shop Products
            </a>

            <a
              href="https://wa.me/2347054172448"
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>

          <div className="hero-ctas-2">
            <a href="#contact" className="hero-link">
              <CalendarCheck size={15} />
              Book a Consultation
            </a>

            <a href="#contact" className="hero-link">
              <MapPin size={15} />
              Find Our Location
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fadeUp delay-2">
          <div className="hero-card main-card fade-card">
            <div className="card-header">
              <div className="avatar-group">
                {["#3b82f6", "#10b981", "#f59e0b"].map((c, i) => (
                  <div
                    key={i}
                    className="avatar"
                    style={{
                      background: c,
                      zIndex: 3 - i,
                    }}
                  />
                ))}
              </div>

              <span className="card-tag">Pharmacists Online</span>
            </div>

            <p className="card-body-text">
              "Speak with a certified pharmacist right now — no waiting, no
              appointment needed."
            </p>

            <a
              href="https://wa.me/2347054172448"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                fontSize: "13px",
                padding: "9px 18px",
              }}
            >
              <MessageCircle size={14} />
              Chat Now
            </a>
          </div>

          <div className="mini-cards-row">
            <div className="hero-card mini-card fade-card delay-1">
              <div className="mini-icon" style={{ background: "#dbeafe" }}>
                💊
              </div>

              <div>
                <div className="mini-label">Prescription Ready</div>

                <div className="mini-sub">Fast 30-min fulfillment</div>
              </div>
            </div>

            <div className="hero-card mini-card fade-card delay-2">
              <div className="mini-icon" style={{ background: "#d1fae5" }}>
                ❤️
              </div>

              <div>
                <div className="mini-label">Health Checks</div>

                <div className="mini-sub">BP & Blood Sugar</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="stats-row">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
