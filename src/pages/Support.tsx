import React from 'react';
import { HelpCircle, MessageSquare, Book, Shield, Mail, ArrowRight } from 'lucide-react';

export default function Support() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface">Architectural Support</h1>
        <p className="text-on-surface-variant mt-2">Resources and assistance for your professional dossier.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: Book, title: 'Documentation', desc: 'Comprehensive guides on dossier management and AI optimization.' },
          { icon: MessageSquare, title: 'Community', desc: 'Connect with other senior engineers in our private network.' },
          { icon: Shield, title: 'Privacy Policy', desc: 'Understand how we protect your professional sovereignty.' },
          { icon: Mail, title: 'Direct Contact', desc: 'Reach out to our architectural support team for specialized help.' },
        ].map((item, i) => (
          <div key={i} className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 hover:bg-surface-container-high transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">{item.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{item.desc}</p>
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
