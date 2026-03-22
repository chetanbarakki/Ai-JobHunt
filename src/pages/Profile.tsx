import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, Globe, Shield, MapPin, Link as LinkIcon, Camera } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="flex items-center gap-8">
        <div className="relative group">
          <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-surface-container-high shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKsdA30PhBhbghXFhZIxU5J6Qi0HxZlcISQ3zmkmqeKFcxasnUfCKhtLD0eUG63HMDFMEr-ek_A2gzyHpogQvH7BVe2nxEMwam75MR4v-cAyw1lnf49T0DQFjX5e9gnDrsyp3DzJqVFZ9vZRczwhaGdYSugu8H43roxpRwAdfBB1LDcIRUn-nsix6y_7-Ug0KUjGtpSUlqBLBqaUW3k5_1FyOQ1S76-8-TgYOn8uhq0JzmcpdoSkOeSrkgChXQAhdNjfrdd8jwoTg"
              alt="User Avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="absolute -bottom-2 -right-2 p-3 bronze-ember rounded-xl text-on-primary shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface">Alex Sterling</h1>
          <p className="text-on-surface-variant mt-1 font-medium">Senior Systems Architect · San Francisco, CA</p>
          <div className="flex gap-4 mt-4">
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">12+ Years Exp</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest">Open to Opportunities</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 space-y-6">
          <h3 className="text-lg font-bold text-on-surface">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Email</p>
                <p className="text-sm font-medium">alex@sterling.io</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant">
                <LinkIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Portfolio</p>
                <p className="text-sm font-medium">sterling.io</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 space-y-6">
          <h3 className="text-lg font-bold text-on-surface">Technical Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['Rust', 'Go', 'Kubernetes', 'Distributed Systems', 'CUDA', 'React', 'TypeScript', 'PostgreSQL'].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface-variant border border-outline-variant/5">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
