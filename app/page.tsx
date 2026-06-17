'use client'

import { useState, useEffect } from 'react'

const WA_LINK = 'https://wa.me/923008976015'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 320, textAlign: 'center' }}>
      <div style={{ width: 48, height: 48, background: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 20 }}>✓</div>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#0D1B2A', fontStyle: 'italic', marginBottom: 10 }}>Message received.</div>
      <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#888', lineHeight: 1.8 }}>We will be in touch within one business day.<br />For faster responses, reach us on WhatsApp.</div>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        style={{ marginTop: 24, background: '#0D1B2A', color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '12px 24px', textDecoration: 'none' }}>
        Open WhatsApp
      </a>
    </div>
  )

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#0D1B2A', fontStyle: 'italic', marginBottom: 8 }}>Send us a message</div>
      {[
        { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Muhammad Ali' },
        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@company.com' },
        { label: 'Company', name: 'company', type: 'text', placeholder: 'Your Company Name' },
      ].map(f => (
        <div key={f.name}>
          <label style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#0D1B2A', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{f.label}</label>
          <input
            type={f.type}
            name={f.name}
            required
            placeholder={f.placeholder}
            value={form[f.name as keyof typeof form]}
            onChange={handle}
            style={{ width: '100%', background: '#fff', border: '1px solid #E0DBD0', padding: '10px 14px', fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#0D1B2A', outline: 'none' }}
          />
        </div>
      ))}
      <div>
        <label style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#0D1B2A', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>What are you looking for?</label>
        <select name="service" onChange={handle}
          style={{ width: '100%', background: '#fff', border: '1px solid #E0DBD0', padding: '10px 14px', fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#0D1B2A', outline: 'none' }}>
          <option value="">Select a service</option>
          <option value="lead-gen">B2B Lead Generation</option>
          <option value="strategy">Growth Strategy</option>
          <option value="bd-partnership">BD Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#0D1B2A', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Message</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your business and what you want to achieve..."
          value={form.message}
          onChange={handle}
          style={{ width: '100%', background: '#fff', border: '1px solid #E0DBD0', padding: '10px 14px', fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#0D1B2A', outline: 'none', resize: 'none' }}
        />
      </div>
      <button type="submit" disabled={loading}
        style={{ background: '#0D1B2A', color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px', border: 'none', cursor: 'pointer', opacity: loading ? 0.7 : 1 }}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#FAF8F3' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: '#FAF8F3',
        borderBottom: scrolled ? '1px solid #E8E0CC' : '1px solid #E8E0CC',
        transition: 'all 0.3s'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#0D1B2A', fontStyle: 'italic', letterSpacing: '0.04em' }}>Scipioform</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 9, color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 1 }}>Growth Consulting</div>
          </div>
          <div style={{ display: 'flex', gap: 32, fontFamily: 'Arial, sans-serif' }} className="nav-links-desktop">
            {['Services', 'Process', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: 11, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#0D1B2A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888')}>
                {item}
              </a>
            ))}
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#0D1B2A', border: '1px solid #0D1B2A', padding: '9px 20px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Book a Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#0D1B2A', paddingTop: 120, paddingBottom: 0, paddingLeft: 40, paddingRight: 40 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
          <div style={{ paddingBottom: 72 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Growth Consulting for Executives</span>
            </div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 46, color: '#FAF8F3', lineHeight: 1.1, fontWeight: 400, marginBottom: 20 }}>
              We build the pipelines<br />
              that make businesses<br />
              <em style={{ color: '#C9A84C' }}>actually grow.</em>
            </h1>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: 'rgba(250,248,243,0.5)', lineHeight: 1.85, marginBottom: 36, maxWidth: 380 }}>
              Scipioform partners with CEOs and senior leadership to design and execute the outreach, strategy, and business development that produces real commercial results.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                style={{ background: '#C9A84C', color: '#0D1B2A', fontFamily: 'Arial, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
                Start a Conversation
              </a>
              <a href="#services"
                style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: 'rgba(250,248,243,0.45)', letterSpacing: '0.06em', borderBottom: '1px solid rgba(250,248,243,0.2)', paddingBottom: 2, textDecoration: 'none' }}>
                See how we work
              </a>
            </div>
          </div>
          <div style={{ alignSelf: 'flex-end' }}>
            <div style={{ background: '#C9A84C', padding: '40px 36px' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#0D1B2A', fontStyle: 'italic', lineHeight: 1.45, marginBottom: 14 }}>
                "Most consultants hand you a deck. We hand you clients."
              </div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: 'rgba(13,27,42,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Scipioform — Core Principle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: '#FAF8F3', borderBottom: '1px solid #E8E0CC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[
            { num: '150+', label: 'Corporate Engagements' },
            { num: 'PKR 0', label: 'Upfront on Performance Deals' },
            { num: 'All Pakistan', label: 'Outreach Scope' },
          ].map((s, i) => (
            <div key={s.num} style={{ padding: '28px 20px', borderRight: i < 2 ? '1px solid #E8E0CC' : 'none' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#0D1B2A', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '80px 40px', background: '#FAF8F3' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, background: '#C9A84C' }} />
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase' }}>What we offer</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 34, color: '#0D1B2A', fontWeight: 400, marginBottom: 8 }}>Three ways we grow your business</h2>
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#888', lineHeight: 1.8, marginBottom: 44, maxWidth: 440 }}>
            Every engagement is structured around one outcome — revenue.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#E8E0CC' }}>
            {[
              { num: '01', title: 'B2B Lead Generation', desc: 'Structured outreach to qualified prospects. We identify the right companies, engage the right people, and hand warm leads to your team ready to close.' },
              { num: '02', title: 'Growth Strategy', desc: 'Market positioning, competitor analysis, and a clear plan of action. We help leadership teams concentrate effort where it compounds.' },
              { num: '03', title: 'BD Partnerships', desc: 'A dedicated business development partner on a performance basis. No retainer. No overhead. We earn when you earn.' },
            ].map(s => (
              <div key={s.num} style={{ background: '#FAF8F3', padding: '36px 28px' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 40, color: '#E8E0CC', marginBottom: 18, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 17, color: '#0D1B2A', marginBottom: 10, fontStyle: 'italic' }}>{s.title}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#888', lineHeight: 1.75 }}>{s.desc}</div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 20, textDecoration: 'none' }}>
                  Discuss this
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: '#0D1B2A', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, background: '#C9A84C' }} />
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase' }}>How it works</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 34, color: '#FAF8F3', fontWeight: 400, marginBottom: 48 }}>Our process</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { tag: 'Step 01', title: 'Clarify', desc: 'We audit your position, map the market opportunity, and define exactly who to target and with what message.' },
              { tag: 'Step 02', title: 'Execute', desc: 'We build and run the outreach. Research, engagement, follow-up, and pipeline management, all handled by us.' },
              { tag: 'Step 03', title: 'Grow', desc: 'Qualified leads handed to your team. Recurring accounts built. Revenue that compounds month over month.' },
            ].map((step, i) => (
              <div key={step.tag} style={{ padding: '36px 32px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 9, color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>{step.tag}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#FAF8F3', fontStyle: 'italic', marginBottom: 12 }}>{step.title}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: 'rgba(250,248,243,0.4)', lineHeight: 1.8 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: '#FAF8F3', padding: '80px 40px', borderTop: '1px solid #E8E0CC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 24, height: 1, background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Our position</span>
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#0D1B2A', fontStyle: 'italic', lineHeight: 1.45, marginBottom: 20 }}>
              "Most consultants hand you a deck. We hand you <span style={{ color: '#C9A84C' }}>clients.</span>"
            </div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#999', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Scipioform — What sets us apart
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { title: 'Zero fixed cost', desc: 'No retainer. No salary. No overhead. We are compensated entirely from the revenue we generate for you.' },
              { title: 'Decision maker access', desc: 'We reach procurement heads and operations leaders directly, not gatekeepers or general inboxes.' },
              { title: 'Compounding value', desc: 'Every client we bring becomes a recurring account. Value grows month over month.' },
              { title: 'All Pakistan scope', desc: 'Our outreach is not limited to one city. We operate nationally, across every major industrial corridor.' },
            ].map(p => (
              <div key={p.title} style={{ borderLeft: '2px solid #C9A84C', paddingLeft: 18 }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: '#0D1B2A', marginBottom: 5, fontStyle: 'italic' }}>{p.title}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#888', lineHeight: 1.75 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ABOUT */}
      <section id="about" style={{ background: '#FAF8F3', padding: '80px 40px', borderTop: '1px solid #E8E0CC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 24, height: 1, background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase' }}>About Scipioform</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 34, color: '#0D1B2A', fontWeight: 400, marginBottom: 20 }}>
              A firm built around <em style={{ color: '#C9A84C' }}>one outcome.</em>
            </h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#888', lineHeight: 1.85, marginBottom: 16 }}>
              Scipioform was founded on a simple observation: most businesses do not have a growth problem. They have an execution problem. The strategy exists. The product is ready. What is missing is a disciplined, professional effort to take it to the right people.
            </p>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#888', lineHeight: 1.85, marginBottom: 32 }}>
              We exist to close that gap. Scipioform works as a dedicated growth partner for companies that are serious about expanding their client base, entering new markets, and building revenue that compounds over time.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#0D1B2A', color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none' }}>
              Work With Us
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#E8E0CC' }}>
            {[
              { label: 'Founded', value: '2024' },
              { label: 'Headquarters', value: 'Lahore, Pakistan' },
              { label: 'Scope', value: 'All Pakistan' },
              { label: 'Model', value: 'Performance Based' },
              { label: 'Specialisation', value: 'B2B Growth and BD Partnerships' },
              { label: 'Contact', value: 'growth@scipioform.com' },
            ].map(item => (
              <div key={item.label} style={{ background: '#FAF8F3', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.label}</span>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: '#0D1B2A', fontStyle: 'italic' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: '#0D1B2A', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, background: '#C9A84C' }} />
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Client Perspectives</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 34, color: '#FAF8F3', fontWeight: 400, marginBottom: 48 }}>What our partners say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
            {[
              {
                quote: 'Scipioform brought us three qualified enterprise accounts within the first six weeks. The outreach was precise and the handoffs were clean. We have been using their BD partnership model ever since.',
                name: 'David R. Holloway',
                title: 'VP of Business Development',
                company: 'Meridian Supply Co.',
                location: 'Houston, TX',
              },
              {
                quote: 'What impressed us most was the quality of leads, not the quantity. Every prospect they sent us already understood our value proposition. That kind of pre-qualification is rare.',
                name: 'Sarah M. Caldwell',
                title: 'Chief Operating Officer',
                company: 'Brentwood Industrial Group',
                location: 'Chicago, IL',
              },
              {
                quote: 'We had tried two other BD agencies before Scipioform. The difference is that they operate like an extension of your team, not a vendor. They understand your business before they make a single call.',
                name: 'James T. Whitfield',
                title: 'Director of Procurement',
                company: 'Cornerstone Energy Partners',
                location: 'Dallas, TX',
              },
              {
                quote: 'The pipeline they built for us in Q3 became our strongest revenue quarter in four years. I would not hesitate to recommend them to any executive looking for serious growth.',
                name: 'Patricia L. Monroe',
                title: 'Chief Executive Officer',
                company: 'Atlas Commercial Services',
                location: 'Atlanta, GA',
              },
            ].map((t, i) => (
              <div key={i} style={{ background: '#0D1B2A', padding: '40px 36px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: 'rgba(250,248,243,0.75)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 28 }}>
                  "{t.quote}"
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 38, height: 38, background: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 14, color: '#0D1B2A', fontWeight: 700, flexShrink: 0 }}>
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#FAF8F3', fontWeight: 700, marginBottom: 2 }}>{t.name}</div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.04em' }}>{t.title}, {t.company}</div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: 'rgba(250,248,243,0.3)', marginTop: 1 }}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: '#C9A84C', padding: '56px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40 }}>
          <div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#0D1B2A', fontStyle: 'italic', marginBottom: 8 }}>Ready to build your pipeline?</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: 'rgba(13,27,42,0.6)' }}>Let us have a direct conversation about what Scipioform can do for your business.</div>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ background: '#0D1B2A', color: '#C9A84C', fontFamily: 'Arial, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Book a Call
          </a>
        </div>
      </section>

{/* CONTACT */}
      <section id="contact" style={{ background: '#FAF8F3', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 24, height: 1, background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Get in touch</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 34, color: '#0D1B2A', fontWeight: 400, marginBottom: 16 }}>Let us talk</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#888', lineHeight: 1.85, marginBottom: 40 }}>
              Whether you are looking for a dedicated BD partner, a growth strategy, or just want to understand how Scipioform works, we are happy to have a straightforward conversation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '✉', label: 'growth@scipioform.com' },
                { icon: '☎', label: '+92 300 897 6015' },
                { icon: '◎', label: 'Lahore, Pakistan' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 36, height: 36, background: '#F0EBE0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C', fontSize: 14, flexShrink: 0 }}>{c.icon}</div>
                  <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#0D1B2A' }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#F0EBE0', padding: 40 }}>
            <ContactForm />
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer style={{ background: '#080F17', padding: '48px 40px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#FAF8F3', fontStyle: 'italic', marginBottom: 4 }}>Scipioform</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 9, color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Clarify. Execute. Grow.</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, alignItems: 'start' }}>
              {['Services', 'Process', 'About', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>2026 Scipioform. All rights reserved.</div>
            <a href="mailto:growth@scipioform.com" style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#C9A84C', textDecoration: 'none' }}>growth@scipioform.com</a>
          </div>
        </div>
      </footer>

    </main>
  )
}