import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../logo.png";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Health Hub", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="FS Care Logo" className="logo-img" />
        </a>

        <nav className={`navbar-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="tel:07031934857" className="btn btn-primary nav-cta">
            <Phone size={15} /> Call Us
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
