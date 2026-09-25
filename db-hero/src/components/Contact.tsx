import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, ArrowRight, Check } from 'lucide-react';
import { contact } from '../site.config';
import { waLink, telLink, mailLink } from '../lib/links';
import { Reveal } from './ui/Reveal';

const needsOptions = [
  'Customer App', 'Ordering Website', 'Multi-Branch System', 'Admin Dashboard',
  'Kitchen System', 'Delivery System', 'Payment Integration', 'Custom Software',
];

interface FormState {
  name: string; restaurant: string; mobile: string; email: string;
  branches: string; currentSystem: string; needs: string[]; message: string;
}

const empty: FormState = {
  name: '', restaurant: '', mobile: '', email: '', branches: '1',
  currentSystem: '', needs: [], message: '',
};

export const Contact: React.FC = () => {
  const [f, setF] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (k: keyof FormState, v: string | string[]) => setF((s) => ({ ...s, [k]: v }));

  const toggleNeed = (n: string) =>
    setF((s) => ({ ...s, needs: s.needs.includes(n) ? s.needs.filter((x) => x !== n) : [...s.needs, n] }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!f.name.trim()) e.name = 'Please enter your name';
    if (!f.restaurant.trim()) e.restaurant = 'Please enter your restaurant name';
    if (!/^[+\d][\d\s-]{6,}$/.test(f.mobile.trim())) e.mobile = 'Enter a valid mobile number';
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Enter a valid email';
    if (f.needs.length === 0) e.needs = 'Select at least one option';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    // If a form endpoint is configured, POST there. Otherwise fall back to a
    // pre-filled mailto so the lead is never lost.
    if (contact.formEndpoint) {
      try {
        const res = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(f),
        });
        setStatus(res.ok ? 'sent' : 'error');
      } catch {
        setStatus('error');
      }
    } else {
      const body = [
        `Name: ${f.name}`, `Restaurant: ${f.restaurant}`, `Mobile: ${f.mobile}`,
        `Email: ${f.email}`, `Branches: ${f.branches}`, `Current system: ${f.currentSystem}`,
        `Needs: ${f.needs.join(', ')}`, ``, f.message,
      ].join('\n');
      window.location.href = `${mailLink('Demo request — ' + f.restaurant)}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <span className="eyebrow"><span className="dot" /> Contact</span>
          <h2 className="h2" style={{ marginTop: 14 }}>Let's Build Your Restaurant's Digital Platform</h2>
          <p className="lede">Tell us about your restaurant, branches and requirements. We'll show you what your digital platform could look like.</p>

          <div className="contact__direct">
            <a className="btn btn--whatsapp" href={waLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a className="btn btn--ghost" href={telLink()}>
              <Phone size={17} /> Call
            </a>
            <a className="btn btn--ghost" href={mailLink()}>
              <Mail size={17} /> Email
            </a>
          </div>
          <p className="contact__hint muted">Prefer WhatsApp? Tap the button — it opens a pre-filled message.</p>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={100}>
          {status === 'sent' ? (
            <div className="contact__success" role="status">
              <div className="contact__success-ic"><Check size={30} /></div>
              <h3>Thank you!</h3>
              <p>Your request has been prepared. We'll be in touch shortly. You can also reach us directly on WhatsApp.</p>
              <a className="btn btn--whatsapp" href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Message on WhatsApp</a>
            </div>
          ) : (
            <form className="contact__form" onSubmit={onSubmit} noValidate>
              <div className="field-row">
                <label className="field">
                  <span>Full Name *</span>
                  <input value={f.name} onChange={(e) => set('name', e.target.value)} aria-invalid={!!errors.name} placeholder="Your name" />
                  {errors.name && <em>{errors.name}</em>}
                </label>
                <label className="field">
                  <span>Restaurant Name *</span>
                  <input value={f.restaurant} onChange={(e) => set('restaurant', e.target.value)} aria-invalid={!!errors.restaurant} placeholder="Restaurant name" />
                  {errors.restaurant && <em>{errors.restaurant}</em>}
                </label>
              </div>

              <div className="field-row">
                <label className="field">
                  <span>Mobile Number *</span>
                  <input value={f.mobile} onChange={(e) => set('mobile', e.target.value)} inputMode="tel" aria-invalid={!!errors.mobile} placeholder="+966 5X XXX XXXX" />
                  {errors.mobile && <em>{errors.mobile}</em>}
                </label>
                <label className="field">
                  <span>Email</span>
                  <input value={f.email} onChange={(e) => set('email', e.target.value)} inputMode="email" aria-invalid={!!errors.email} placeholder="you@restaurant.com" />
                  {errors.email && <em>{errors.email}</em>}
                </label>
              </div>

              <div className="field-row">
                <label className="field">
                  <span>Number of Branches</span>
                  <select value={f.branches} onChange={(e) => set('branches', e.target.value)}>
                    {['1', '2-3', '4-6', '7-10', '10+'].map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </label>
                <label className="field">
                  <span>Current System</span>
                  <input value={f.currentSystem} onChange={(e) => set('currentSystem', e.target.value)} placeholder="None / marketplace / other" />
                </label>
              </div>

              <fieldset className="field">
                <span className="field__legend">Required Solution *</span>
                <div className="needs">
                  {needsOptions.map((n) => (
                    <button type="button" key={n} className={`need ${f.needs.includes(n) ? 'is-on' : ''}`} onClick={() => toggleNeed(n)} aria-pressed={f.needs.includes(n)}>
                      {f.needs.includes(n) && <Check size={14} />} {n}
                    </button>
                  ))}
                </div>
                {errors.needs && <em>{errors.needs}</em>}
              </fieldset>

              <label className="field">
                <span>Message</span>
                <textarea value={f.message} onChange={(e) => set('message', e.target.value)} rows={4} placeholder="Tell us about your restaurant and what you're looking for…" />
              </label>

              {status === 'error' && <p className="form-error">Something went wrong. Please try WhatsApp or email instead.</p>}

              <button className="btn btn--primary btn--block" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Request a Demo <ArrowRight size={17} /></>}
              </button>
              <p className="contact__consent muted">By submitting, you agree to be contacted about your enquiry. We never share your details.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
