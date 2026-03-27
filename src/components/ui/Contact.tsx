"use client";
import React from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen w-full bg-[#050505] flex items-center justify-center p-6 md:p-12">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text & Info */}
        <div className="flex flex-col space-y-10">
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
              <span className="text-sm font-medium transition-colors group-hover:text-neutral-300">
                yahyanayb08@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 text-neutral-500 group">
              <div className="p-2 border border-white/5 rounded-lg group-hover:border-white/20 transition-colors">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-medium transition-colors group-hover:text-neutral-300">
                Remote (Based in Morocco)
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Form Card */}
        <div className="flex justify-end">
          <div className="w-full max-w-[480px] bg-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-12 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8">Send a message</h3>
            
            <form className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white rounded-xl py-4 px-6 text-black outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white rounded-xl py-4 px-6 text-black outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white rounded-xl py-4 px-6 text-black outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button - Orange Glow */}
              <button className="w-full bg-white text-black font-bold py-5 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-900/20">
                Send Message
                <Send size={18} fill="currentColor" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;