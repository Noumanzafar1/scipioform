'use client'

import { useState, useEffect } from 'react'

const WA_LINK = 'https://wa.me/923008976015'
const CAL_LINK = 'https://calendly.com/scipioform/30min'

const css = `
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:Georgia,serif;background:#FAF8F3;-webkit-font-smoothing:antialiased}
  ::selection{background:#C9A84C;color:#0D1B2A}
  ::-webkit-scrollbar{width:5px}
  ::-webkit-scrollbar-track{background:#0D1B2A}
  ::-webkit-scrollbar-thumb{background:#C9A84C;border-radius:3px}
  a{text-decoration:none}
  .nav{position:fixed;top:0;left:0;right:0;z-index:50;background:#FAF8F3;border-bottom:1px solid #E8E0CC;transition:all .3s}
.nav-inner{max-width:1100px;margin:0 auto;padding:0 20px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:12px}  .nav-logo-word{font-family:Georgia,serif;font-size:18px;color:#0D1B2A;font-style:italic;letter-spacing:.04em}
  .nav-logo-sub{font-family:Arial,sans-serif;font-size:9px;color:#C9A84C;letter-spacing:.2em;text-transform:uppercase;margin-top:1px}
  .nav-links{display:flex;gap:28px}
  .nav-links a{font-family:Arial,sans-serif;font-size:11px;color:#888;letter-spacing:.08em;text-transform:uppercase;transition:color .2s}
  .nav-links a:hover{color:#0D1B2A}
  .nav-cta{font-family:Arial,sans-serif;font-size:10px;color:#0D1B2A;border:1px solid #0D1B2A;padding:9px 20px;letter-spacing:.12em;text-transform:uppercase;transition:all .2s}
  .nav-cta:hover{background:#0D1B2A;color:#C9A84C}
.nav-cta{font-family:Arial,sans-serif;font-size:10px;color:#0D1B2A;border:1px solid #0D1B2A;padding:9px 20px;letter-spacing:.12em;text-transform:uppercase;transition:all .2s}
.hamburger{display:none;background:none;border:none;cursor:pointer;padding:4px;flex-direction:column;gap:5px;flex-shrink:0;margin-left:8px}
.hamburger span{display:block;width:22px;height:2px;background:#0D1B2A}
.nav-cta:hover{background:#0D1B2A;color:#C9A84C}  .mobile-menu{display:none;background:#FAF8F3;border-top:1px solid #E8E0CC;padding:16px 24px;flex-direction:column;gap:16px}
  .mobile-menu a{font-family:Arial,sans-serif;font-size:12px;color:#555;letter-spacing:.08em;text-transform:uppercase}
  .hero{background:#0D1B2A;padding:100px 24px 0}
  .hero-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end}
  .hero-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:24px}
  .hero-eyebrow-line{width:32px;height:1px;background:#C9A84C;flex-shrink:0}
  .hero-eyebrow-text{font-family:Arial,sans-serif;font-size:10px;color:#C9A84C;letter-spacing:.18em;text-transform:uppercase}
  .hero-h1{font-family:Georgia,serif;font-size:44px;color:#FAF8F3;line-height:1.1;font-weight:400;margin-bottom:20px}
  .hero-h1 em{color:#C9A84C;font-style:italic}
  .hero-body{font-family:Arial,sans-serif;font-size:13px;color:rgba(250,248,243,.5);line-height:1.85;margin-bottom:36px;max-width:380px}
  .hero-ctas{display:flex;align-items:center;gap:24px;padding-bottom:72px;flex-wrap:wrap}
  .btn-primary{background:#C9A84C;color:#0D1B2A;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:14px 28px;transition:background .2s}
  .btn-primary:hover{background:#b8963e}
  .btn-ghost{font-family:Arial,sans-serif;font-size:11px;color:rgba(250,248,243,.45);letter-spacing:.06em;border-bottom:1px solid rgba(250,248,243,.2);padding-bottom:2px;transition:all .2s}
  .btn-ghost:hover{color:#FAF8F3;border-bottom-color:#FAF8F3}
  .hero-pull{background:#C9A84C;padding:40px 36px;align-self:flex-end}
  .hero-pull-quote{font-family:Georgia,serif;font-size:21px;color:#0D1B2A;font-style:italic;line-height:1.45;margin-bottom:14px}
  .hero-pull-attr{font-family:Arial,sans-serif;font-size:10px;color:rgba(13,27,42,.55);letter-spacing:.12em;text-transform:uppercase}
  .stats-bar{background:#FAF8F3;border-bottom:1px solid #E8E0CC}
  .stats-inner{max-width:1100px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:repeat(3,1fr)}
  .stat{padding:28px 20px}
  .stat:not(:last-child){border-right:1px solid #E8E0CC}
  .stat-num{font-family:Georgia,serif;font-size:30px;color:#0D1B2A;margin-bottom:4px}
  .stat-label{font-family:Arial,sans-serif;font-size:10px;color:#999;letter-spacing:.08em;text-transform:uppercase}
  .section{padding:72px 24px}
  .section-inner{max-width:1100px;margin:0 auto}
  .eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:12px}
  .eyebrow-line{width:24px;height:1px;background:#C9A84C;flex-shrink:0}
  .eyebrow-text{font-family:Arial,sans-serif;font-size:10px;color:#C9A84C;letter-spacing:.16em;text-transform:uppercase}
  .section-h2{font-family:Georgia,serif;font-size:32px;color:#0D1B2A;font-weight:400;margin-bottom:8px}
  .section-h2-white{font-family:Georgia,serif;font-size:32px;color:#FAF8F3;font-weight:400;margin-bottom:8px}
  .section-sub{font-family:Arial,sans-serif;font-size:13px;color:#888;line-height:1.8;margin-bottom:40px;max-width:440px}
  .section-sub-white{font-family:Arial,sans-serif;font-size:13px;color:rgba(250,248,243,.4);line-height:1.8;margin-bottom:48px}
  .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#E8E0CC}
  .service{background:#FAF8F3;padding:32px 24px}
  .service-num{font-family:Georgia,serif;font-size:40px;color:#E8E0CC;margin-bottom:16px;line-height:1}
  .service-title{font-family:Georgia,serif;font-size:16px;color:#0D1B2A;margin-bottom:8px;font-style:italic}
  .service-desc{font-family:Arial,sans-serif;font-size:12px;color:#888;line-height:1.75}
  .service-link{display:inline-block;font-family:Arial,sans-serif;font-size:10px;color:#C9A84C;letter-spacing:.1em;text-transform:uppercase;margin-top:16px}
  .process-section{background:#0D1B2A;padding:72px 24px}
  .process-inner{max-width:1100px;margin:0 auto}
  .process-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.08)}
  .process-step{padding:32px}
  .process-step:not(:last-child){border-right:1px solid rgba(255,255,255,.08)}
  .process-step-tag{font-family:Arial,sans-serif;font-size:9px;color:#C9A84C;letter-spacing:.2em;text-transform:uppercase;margin-bottom:20px}
  .process-step-title{font-family:Georgia,serif;font-size:20px;color:#FAF8F3;font-style:italic;margin-bottom:10px}
  .process-step-desc{font-family:Arial,sans-serif;font-size:12px;color:rgba(250,248,243,.4);line-height:1.8}
  .why-section{background:#FAF8F3;padding:72px 24px;border-top:1px solid #E8E0CC}
  .why-inner{max-width:1100px;margin:0 auto}
  .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}
  .why-big{font-family:Georgia,serif;font-size:56px;color:#0D1B2A;line-height:1;margin-bottom:4px}
  .why-big-sub{font-family:Arial,sans-serif;font-size:11px;color:#999;margin-bottom:32px}
  .why-divider{width:100%;height:1px;background:#E8E0CC;margin-bottom:32px}
  .why-points{display:flex;flex-direction:column;gap:22px}
  .why-point{border-left:2px solid #C9A84C;padding-left:18px}
  .why-point-title{font-family:Georgia,serif;font-size:15px;color:#0D1B2A;margin-bottom:4px;font-style:italic}
  .why-point-desc{font-family:Arial,sans-serif;font-size:12px;color:#888;line-height:1.75}
  .manifesto-quote{font-family:Georgia,serif;font-size:26px;color:#0D1B2A;font-style:italic;line-height:1.45;margin-bottom:20px}
  .manifesto-quote em{color:#C9A84C;font-style:italic}
  .manifesto-attr{font-family:Arial,sans-serif;font-size:10px;color:#999;letter-spacing:.12em;text-transform:uppercase}
  .about-section{background:#FAF8F3;padding:72px 24px;border-top:1px solid #E8E0CC}
  .about-inner{max-width:1100px;margin:0 auto}
  .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}
  .about-body{font-family:Arial,sans-serif;font-size:13px;color:#888;line-height:1.85;margin-bottom:16px}
  .about-table{display:flex;flex-direction:column;gap:1px;background:#E8E0CC}
  .about-row{background:#FAF8F3;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;gap:16px}
  .about-row-label{font-family:Arial,sans-serif;font-size:10px;color:#999;letter-spacing:.08em;text-transform:uppercase;flex-shrink:0}
  .about-row-value{font-family:Georgia,serif;font-size:13px;color:#0D1B2A;font-style:italic;text-align:right}
  .testi-section{background:#0D1B2A;padding:72px 24px}
  .testi-inner{max-width:1100px;margin:0 auto}
  .testi-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:rgba(255,255,255,.06)}
  .testi-card{background:#0D1B2A;padding:40px 32px}
  .testi-quote{font-family:Georgia,serif;font-size:14px;color:rgba(250,248,243,.75);line-height:1.8;font-style:italic;margin-bottom:28px}
  .testi-avatar{width:38px;height:38px;background:#C9A84C;display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:13px;color:#0D1B2A;font-weight:700;flex-shrink:0}
  .testi-name{font-family:Arial,sans-serif;font-size:12px;color:#FAF8F3;font-weight:700;margin-bottom:2px}
  .testi-title{font-family:Arial,sans-serif;font-size:10px;color:#C9A84C}
  .testi-location{font-family:Arial,sans-serif;font-size:10px;color:rgba(250,248,243,.3);margin-top:1px}
  .cta-band{background:#C9A84C;padding:52px 24px}
  .cta-band-inner{max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:40px}
  .cta-band-h{font-family:Georgia,serif;font-size:28px;color:#0D1B2A;font-style:italic;margin-bottom:6px}
  .cta-band-sub{font-family:Arial,sans-serif;font-size:13px;color:rgba(13,27,42,.6)}
  .btn-navy{background:#0D1B2A;color:#C9A84C;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:16px 36px;transition:background .2s;white-space:nowrap}
  .btn-navy:hover{background:#1a2f47}
  .contact-section{background:#FAF8F3;padding:72px 24px}
  .contact-inner{max-width:1100px;margin:0 auto}
  .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px}
  .contact-body{font-family:Arial,sans-serif;font-size:13px;color:#888;line-height:1.85;margin-bottom:40px}
  .contact-info{display:flex;flex-direction:column;gap:16px}
  .contact-info-row{display:flex;align-items:center;gap:14px}
  .contact-icon{width:36px;height:36px;background:#F0EBE0;display:flex;align-items:center;justify-content:center;color:#C9A84C;font-size:14px;flex-shrink:0}
  .contact-info-text{font-family:Arial,sans-serif;font-size:13px;color:#0D1B2A}
  .contact-form-wrap{background:#F0EBE0;padding:36px}
  .form-title{font-family:Georgia,serif;font-size:20px;color:#0D1B2A;font-style:italic;margin-bottom:20px}
  .form-group{margin-bottom:16px}
  .form-label{font-family:Arial,sans-serif;font-size:10px;color:#0D1B2A;letter-spacing:.12em;text-transform:uppercase;display:block;margin-bottom:6px}
  .form-input{width:100%;background:#fff;border:1px solid #E0DBD0;padding:11px 14px;font-family:Arial,sans-serif;font-size:13px;color:#0D1B2A;outline:none;transition:border .2s}
  .form-input:focus{border-color:#C9A84C}
  .form-select{width:100%;background:#fff;border:1px solid #E0DBD0;padding:11px 14px;font-family:Arial,sans-serif;font-size:13px;color:#0D1B2A;outline:none;appearance:none}
  .form-textarea{width:100%;background:#fff;border:1px solid #E0DBD0;padding:11px 14px;font-family:Arial,sans-serif;font-size:13px;color:#0D1B2A;outline:none;resize:none;transition:border .2s}
  .form-textarea:focus{border-color:#C9A84C}
  .btn-submit{width:100%;background:#0D1B2A;color:#C9A84C;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:15px;border:none;cursor:pointer;transition:background .2s}
  .btn-submit:hover{background:#1a2f47}
  .btn-submit:disabled{opacity:.6;cursor:not-allowed}
  .success-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;text-align:center}
  .success-icon{width:48px;height:48px;background:#C9A84C;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px}
  .success-title{font-family:Georgia,serif;font-size:22px;color:#0D1B2A;font-style:italic;margin-bottom:10px}
  .success-sub{font-family:Arial,sans-serif;font-size:12px;color:#888;line-height:1.8}
  .footer{background:#080F17;padding:48px 24px 28px}
  .footer-inner{max-width:1100px;margin:0 auto}
  .footer-top{display:grid;grid-template-columns:1fr 2fr;gap:48px;margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.06)}
  .footer-brand-name{font-family:Georgia,serif;font-size:20px;color:#FAF8F3;font-style:italic;margin-bottom:4px}
  .footer-brand-tag{font-family:Arial,sans-serif;font-size:9px;color:#C9A84C;letter-spacing:.2em;text-transform:uppercase}
  .footer-links{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;align-items:start}
  .footer-links a{font-family:Arial,sans-serif;font-size:11px;color:rgba(255,255,255,.3);letter-spacing:.06em;text-transform:uppercase;transition:color .2s}
  .footer-links a:hover{color:#C9A84C}
  .footer-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
  .footer-copy{font-family:Arial,sans-serif;font-size:10px;color:rgba(255,255,255,.2)}
  .footer-email{font-family:Arial,sans-serif;font-size:10px;color:#C9A84C}

  @media(max-width:768px){
    .nav-links{display:none}
.nav-cta{font-family:Arial,sans-serif;font-size:8px;color:#0D1B2A;border:1px solid #0D1B2A;padding:6px 8px;letter-spacing:0;text-transform:uppercase;transition:all .2s;white-space:nowrap}    .hamburger{display:flex}
    .mobile-menu.open{display:flex}
    .hero{padding:88px 20px 0}
    .hero-inner{grid-template-columns:1fr;gap:0}
    .hero-h1{font-size:34px}
    .hero-body{max-width:100%}
    .hero-ctas{padding-bottom:40px}
    .hero-pull{margin-top:32px}
    .hero-pull-quote{font-size:17px}
    .stats-inner{grid-template-columns:1fr;padding:0 20px}
    .stat{border-right:none!important;border-bottom:1px solid #E8E0CC;padding:20px 0}
    .stat:last-child{border-bottom:none}
    .section{padding:52px 20px}
    .services-grid{grid-template-columns:1fr}
    .process-section{padding:52px 20px}
    .process-grid{grid-template-columns:1fr;border-top:none}
    .process-step{border-right:none!important;border-top:1px solid rgba(255,255,255,.08);padding:28px 0}
    .why-section{padding:52px 20px}
    .why-grid{grid-template-columns:1fr;gap:32px}
    .why-big{font-size:40px}
    .about-section{padding:52px 20px}
    .about-grid{grid-template-columns:1fr;gap:32px}
    .testi-section{padding:52px 20px}
    .testi-grid{grid-template-columns:1fr}
    .testi-card{padding:28px 20px}
    .cta-band{padding:40px 20px}
    .cta-band-inner{flex-direction:column;align-items:flex-start;gap:20px}
    .cta-band-h{font-size:22px}
    .btn-navy{width:100%;text-align:center;padding:14px 20px}
    .contact-section{padding:52px 20px}
    .contact-grid{grid-template-columns:1fr;gap:40px}
    .contact-form-wrap{padding:24px 20px}
    .footer{padding:40px 20px 24px}
    .footer-top{grid-template-columns:1fr;gap:28px}
    .footer-links{grid-template-columns:repeat(2,1fr)}
    .section-h2{font-size:26px}
    .section-h2-white{font-size:26px}
    .manifesto-quote{font-size:20px}
  }
`

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="success-wrap">
      <div className="success-icon">✓</div>
      <div className="success-title">Message received.</div>
      <div className="success-sub">We will be in touch within one business day.<br />For faster responses, reach us on WhatsApp.</div>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-navy" style={{ marginTop: 24, display: 'inline-block', textAlign: 'center' }}>
        Open WhatsApp
      </a>
    </div>
  )

  return (
    <form onSubmit={submit}>
      <div className="form-title">Send us a message</div>
      <div className="form-group">
        <label className="form-label">Your Name</label>
        <input name="name" type="text" required placeholder="Muhammad Ali" className="form-input" value={form.name} onChange={handle} />
      </div>
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input name="email" type="email" required placeholder="you@company.com" className="form-input" value={form.email} onChange={handle} />
      </div>
      <div className="form-group">
        <label className="form-label">Company</label>
        <input name="company" type="text" placeholder="Your Company" className="form-input" value={form.company} onChange={handle} />
      </div>
      <div className="form-group">
        <label className="form-label">What are you looking for?</label>
        <select name="service" className="form-select" onChange={handle}>
          <option value="">Select a service</option>
          <option value="lead-gen">B2B Lead Generation</option>
          <option value="strategy">Growth Strategy</option>
          <option value="bd-partnership">BD Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea name="message" required rows={4} placeholder="Tell us about your business and what you want to achieve..." className="form-textarea" value={form.message} onChange={handle} />
      </div>
      <button type="submit" disabled={loading} className="btn-submit">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <style>{css}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div>
            <div className="nav-logo-word">Scipioform</div>
            <div className="nav-logo-sub">Growth Consulting</div>
          </div>
          <div className="nav-links">
            {['Services', 'Process', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </div>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta">Book a Call</a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {['Services', 'Process', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center', padding: '12px 20px' }}>Book a Call</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">Growth Consulting for Executives</span>
            </div>
            <h1 className="hero-h1">
              We build the pipelines<br />
              that make businesses<br />
              <em>actually grow.</em>
            </h1>
            <p className="hero-body">
              Scipioform partners with CEOs and senior leadership to design and execute the outreach, strategy, and business development that produces real commercial results.
            </p>
            <div className="hero-ctas">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Start a Conversation</a>
              <a href="#services" className="btn-ghost">See how we work</a>
            </div>
          </div>
          <div className="hero-pull">
            <div className="hero-pull-quote">"Most consultants hand you a deck. We hand you clients."</div>
            <div className="hero-pull-attr">Scipioform — Core Principle</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '150+', label: 'Corporate Engagements' },
            { num: 'PKR 0', label: 'Upfront on Performance Deals' },
            { num: 'All Pakistan', label: 'Outreach Scope' },
          ].map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section" style={{ background: '#FAF8F3' }}>
        <div className="section-inner">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">What we offer</span></div>
          <h2 className="section-h2">Three ways we grow your business</h2>
          <p className="section-sub">Every engagement is structured around one outcome — revenue.</p>
          <div className="services-grid">
            {[
              { num: '01', title: 'B2B Lead Generation', desc: 'Structured outreach to qualified prospects. We identify the right companies, engage the right people, and hand warm leads to your team ready to close.' },
              { num: '02', title: 'Growth Strategy', desc: 'Market positioning, competitor analysis, and a clear plan of action. We help leadership teams concentrate effort where it compounds.' },
              { num: '03', title: 'BD Partnerships', desc: 'A dedicated business development partner on a performance basis. No retainer. No overhead. We earn when you earn.' },
            ].map(s => (
              <div key={s.num} className="service">
                <div className="service-num">{s.num}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="service-link">Discuss this</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process-section">
        <div className="process-inner">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">How it works</span></div>
          <h2 className="section-h2-white">Our process</h2>
          <p className="section-sub-white">Three steps. No complexity for its own sake.</p>
          <div className="process-grid">
            {[
              { tag: 'Step 01', title: 'Clarify', desc: 'We audit your position, map the market opportunity, and define exactly who to target and with what message.' },
              { tag: 'Step 02', title: 'Execute', desc: 'We build and run the outreach. Research, engagement, follow-up, and pipeline management, all handled by us.' },
              { tag: 'Step 03', title: 'Grow', desc: 'Qualified leads handed to your team. Recurring accounts built. Revenue that compounds month over month.' },
            ].map(step => (
              <div key={step.tag} className="process-step">
                <div className="process-step-tag">{step.tag}</div>
                <div className="process-step-title">{step.title}</div>
                <div className="process-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section">
        <div className="why-inner">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Our position</span></div>
          <div className="why-grid">
            <div>
              <div className="manifesto-quote">"Most consultants hand you a deck. We hand you <em>clients.</em>"</div>
              <div className="manifesto-attr">Scipioform — What sets us apart</div>
              <div style={{ marginTop: 32 }}>
                <div className="why-big">PKR 0</div>
                <div className="why-big-sub">upfront on performance partnerships</div>
                <div className="why-divider" />
                <div className="why-big" style={{ fontSize: 36 }}>All Pakistan</div>
                <div className="why-big-sub">outreach scope</div>
              </div>
            </div>
            <div className="why-points">
              {[
                { title: 'Zero fixed cost', desc: 'No retainer. No salary. No overhead. We are compensated entirely from the revenue we generate for you.' },
                { title: 'Decision maker access', desc: 'We reach procurement heads and operations leaders directly, not gatekeepers or general inboxes.' },
                { title: 'Compounding value', desc: 'Every client we bring becomes a recurring account. Value grows month over month.' },
                { title: 'All Pakistan scope', desc: 'Our outreach is not limited to one city. We operate nationally, across every major industrial corridor.' },
              ].map(p => (
                <div key={p.title} className="why-point">
                  <div className="why-point-title">{p.title}</div>
                  <div className="why-point-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">About Scipioform</span></div>
          <div className="about-grid">
            <div>
              <h2 className="section-h2" style={{ marginBottom: 20 }}>A firm built around <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>one outcome.</em></h2>
              <p className="about-body">Scipioform was founded on a simple observation: most businesses do not have a growth problem. They have an execution problem. The strategy exists. The product is ready. What is missing is a disciplined, professional effort to take it to the right people.</p>
              <p className="about-body">We exist to close that gap. Scipioform works as a dedicated growth partner for companies that are serious about expanding their client base, entering new markets, and building revenue that compounds over time.</p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', marginTop: 16 }}>Work With Us</a>
            </div>
            <div className="about-table">
              {[
                { label: 'Founded', value: '2024' },
                { label: 'Headquarters', value: 'Lahore, Pakistan' },
                { label: 'Scope', value: 'All Pakistan' },
                { label: 'Model', value: 'Performance Based' },
                { label: 'Specialisation', value: 'B2B Growth and BD Partnerships' },
                { label: 'Contact', value: 'growth@scipioform.com' },
              ].map(item => (
                <div key={item.label} className="about-row">
                  <span className="about-row-label">{item.label}</span>
                  <span className="about-row-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-section">
        <div className="testi-inner">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Client Perspectives</span></div>
          <h2 className="section-h2-white" style={{ marginBottom: 48 }}>What our partners say</h2>
          <div className="testi-grid">
            {[
              { quote: 'Scipioform brought us three qualified enterprise accounts within the first six weeks. The outreach was precise and the handoffs were clean. We have been using their BD partnership model ever since.', name: 'David R. Holloway', title: 'VP of Business Development', company: 'Meridian Supply Co.', location: 'Houston, TX' },
              { quote: 'What impressed us most was the quality of leads, not the quantity. Every prospect they sent us already understood our value proposition. That kind of pre-qualification is rare.', name: 'Sarah M. Caldwell', title: 'Chief Operating Officer', company: 'Brentwood Industrial Group', location: 'Chicago, IL' },
              { quote: 'We had tried two other BD agencies before Scipioform. The difference is that they operate like an extension of your team, not a vendor. They understand your business before they make a single call.', name: 'James T. Whitfield', title: 'Director of Procurement', company: 'Cornerstone Energy Partners', location: 'Dallas, TX' },
              { quote: 'The pipeline they built for us in Q3 became our strongest revenue quarter in four years. I would not hesitate to recommend them to any executive looking for serious growth.', name: 'Patricia L. Monroe', title: 'Chief Executive Officer', company: 'Atlas Commercial Services', location: 'Atlanta, GA' },
            ].map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-quote">"{t.quote}"</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className="testi-avatar">{t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-title">{t.title}, {t.company}</div>
                    <div className="testi-location">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div>
            <div className="cta-band-h">Ready to build your pipeline?</div>
            <div className="cta-band-sub">Let us have a direct conversation about what Scipioform can do for your business.</div>
          </div>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-navy">Book a Call</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Get in touch</span></div>
          <div className="contact-grid">
            <div>
              <h2 className="section-h2" style={{ marginBottom: 16 }}>Let us talk</h2>
              <p className="contact-body">Whether you are looking for a dedicated BD partner, a growth strategy, or just want to understand how Scipioform works, we are happy to have a straightforward conversation.</p>
              <div className="contact-info">
                {[
                  { icon: '✉', label: 'growth@scipioform.com', href: 'mailto:growth@scipioform.com' },
                  { icon: '☎', label: '+92 300 897 6015', href: WA_LINK },
                  { icon: '◎', label: 'Lahore, Pakistan', href: '#' },
                ].map(c => (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-info-row">
                    <div className="contact-icon">{c.icon}</div>
                    <span className="contact-info-text">{c.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">Scipioform</div>
              <div className="footer-brand-tag">Clarify. Execute. Grow.</div>
            </div>
            <div className="footer-links">
              {['Services', 'Process', 'About', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">2026 Scipioform. All rights reserved.</span>
            <a href="mailto:growth@scipioform.com" className="footer-email">growth@scipioform.com</a>
          </div>
        </div>
      </footer>
    </main>
  )
}