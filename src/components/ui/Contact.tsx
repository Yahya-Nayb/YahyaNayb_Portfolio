'use client';
import React, { useRef, useState } from 'react';
import { CheckCircle, Mail, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<null | 'idle' | 'sending' | 'ok' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        params.append(key, value);
      }
    });

    const body = params.toString();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (response.ok) {
        setStatus('ok');
        e.currentTarget.reset();
        setTimeout(() => {
          setStatus(null);
        }, 60000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(null), 60000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 60000);
    }
  };
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      // Animate left side elements (Heading & Contact Info)
      tl.from(leftColRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      })
        // Animate right side form card slightly sliding in from the right
        .from(
          rightColRef.current,
          {
            x: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.7',
        );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} id="contact" className="min-h-screen w-full bg-[#050505] flex items-center justify-center p-6 md:p-24 overflow-hidden">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text & Info */}
        <div ref={leftColRef} className="flex flex-col space-y-10">
          <h2 className="text-[clamp(3.5rem,8vw,6rem)] font-bold text-white leading-[1.1] tracking-tight">
            Let&apos;s build <br />
            something <br />
            legendary.
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-neutral-500 group">
              <div className="p-2 border border-white/5 rounded-lg group-hover:border-white/20 transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-sm font-medium transition-colors group-hover:text-neutral-300">yahyanayb08@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-neutral-500 group">
              <div className="p-2 border border-white/5 rounded-lg group-hover:border-white/20 transition-colors">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-medium transition-colors group-hover:text-neutral-300">Remote (Based in Morocco)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Form Card */}
        <div ref={rightColRef} className="flex justify-end">
          <div className="w-full max-w-[480px] bg-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-12 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8">Send a message</h3>

            <form className="space-y-6" name="contact" method="POST" onSubmit={handleSubmit} data-netlify-honeypot="bot-field">
              {/* Name Input */}
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-white rounded-xl py-4 px-6 text-black outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white rounded-xl py-4 px-6 text-black outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white rounded-xl py-4 px-6 text-black outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button - Orange Glow */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`text-black w-full font-bold py-5 rounded-full flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg 
                  ${status === 'sending' ? 'bg-neutral-200 cursor-not-allowed' : 'bg-white cursor-pointer hover:scale-[1.02] shadow-orange-900/20'}
              `}>
                {' '}
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={18} fill="currentColor" />
              </button>

              {status === 'ok' && (
                <p className="text-green-500 text-center font-medium mt-4 flex items-center justify-center gap-2">
                  <CheckCircle size={18} /> Message sent successfully!
                </p>
              )}

              {status === 'error' && <p className="text-red-500 text-center font-medium mt-4">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
