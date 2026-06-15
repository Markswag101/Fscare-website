import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Blog.css';

const posts = [
  {
    tag: 'Hypertension',
    tagColor: '#fee2e2',
    tagText: '#ef4444',
    title: 'Managing Hypertension Effectively in 2024',
    excerpt: 'High blood pressure affects 1 in 3 Nigerians. Discover evidence-based strategies for keeping your BP in check through lifestyle and medication.',
    readTime: '5 min read',
    date: 'Jun 2025',
    href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11265034/',
  },
  {
    tag: 'Diabetes',
    tagColor: '#fef3c7',
    tagText: '#d97706',
    title: 'Understanding Diabetes: Types, Symptoms & Management',
    excerpt: 'Learn the difference between Type 1 and Type 2 diabetes, how to spot early warning signs, and what treatment options are available to you.',
    readTime: '7 min read',
    date: 'May 2025',
    href: 'https://www.webmd.com/diabetes/understanding-diabetes-symptoms',
  },
  {
    tag: 'Medication Safety',
    tagColor: '#dbeafe',
    tagText: '#2563eb',
    title: 'Essential Medication Safety Tips Every Family Should Know',
    excerpt: 'Storing medicines correctly, avoiding drug interactions, and knowing when to seek professional advice could save your family from serious harm.',
    readTime: '4 min read',
    date: 'May 2025',
    href: 'https://www.who.int/initiatives/medication-without-harm',
  },
  {
    tag: 'Family Health',
    tagColor: '#d1fae5',
    tagText: '#10b981',
    title: 'A Complete Family Health Guide for Nigerian Homes',
    excerpt: 'From immunizations for children to health checks for seniors — a practical guide to keeping every member of your household healthy.',
    readTime: '8 min read',
    date: 'Apr 2025',
    href: 'https://www.healthline.com/health/what-is-preventive-health-and-why-is-it-important',
  },
  {
    tag: 'Prevention',
    tagColor: '#f3e8ff',
    tagText: '#7c3aed',
    title: 'Preventive Healthcare Practices That Actually Work',
    excerpt: 'Prevention is cheaper than cure. These science-backed habits can dramatically reduce your risk of chronic disease and early-onset illness.',
    readTime: '6 min read',
    date: 'Apr 2025',
    href: 'https://www.wellcarecommunityhealth.org/education/the-ultimate-guide-to-preventative-health-care-strategies-for-a-healthier-life',
  },
  {
    tag: 'Nutrition',
    tagColor: '#fce7f3',
    tagText: '#db2777',
    title: 'The Role of Nutrition in Long-Term Wellness',
    excerpt: 'Food is medicine. Explore how balanced nutrition supports immunity, energy levels, mental health, and disease prevention across all ages.',
    readTime: '5 min read',
    date: 'Mar 2025',
    href: 'https://www.webmd.com/diet/ss/slideshow-vitamins-supplements-overview',
  },
];

export default function Blog() {
  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="blog-top">
          <div>
            <span className="section-label">Health Education Hub</span>
            <h2 className="section-title"><span style={{color:"var(--blue-700)"}}>Knowledge Is the</span><br /><span style={{color:"var(--orange)"}}>Best Medicine</span></h2>
            <p className="section-sub">
              Expert articles, guides, and health tips from our pharmaceutical team —
              empowering you to make informed decisions about your health.
            </p>
          </div>
          <a href="#blog" className="btn btn-outline">View All Articles <ArrowRight size={16}/></a>
        </div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <article className="blog-card" key={i}>
              <div className="blog-img" style={{background: `linear-gradient(135deg, ${post.tagColor}, white)`}}>
                <span className="blog-tag" style={{background: post.tagColor, color: post.tagText}}>
                  {post.tag}
                </span>
              </div>
              <div className="blog-body">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read">{post.readTime}</span>
                </div>
                <a href={post.href} target="_blank" rel="noreferrer" className="blog-link">
                  Read article <ArrowRight size={14}/>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
