import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Globe, 
  Shield, 
  Database, 
  Bell, 
  Key, 
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface">Account Architecture</h1>
        <p className="text-on-surface-variant mt-2">Manage your professional identity and dossier sovereignty.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Navigation */}
        <nav className="space-y-1">
          {[
            { label: 'Professional Identity', icon: User, active: true },
            { label: 'Live Dossier Sync', icon: Database },
            { label: 'Editorial Templates', icon: Globe },
            { label: 'Dossier Sovereignty', icon: Shield },
            { label: 'Notifications', icon: Bell },
            { label: 'Security & Keys', icon: Key },
          ].map(item => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all text-sm font-medium",
                item.active 
                  ? "bg-surface-container-high text-primary shadow-lg" 
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
              {item.active && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="md:col-span-2 space-y-8">
          <section className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 space-y-8">
            <h3 className="text-lg font-bold text-on-surface">Professional Identity</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                <input type="text" defaultValue="Alex" className="w-full bg-surface-container-low border border-outline-variant/10 rounded-lg px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                <input type="text" defaultValue="Sterling" className="w-full bg-surface-container-low border border-outline-variant/10 rounded-lg px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary/50" />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Institutional Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                  <input type="email" defaultValue="alex@sterling.io" className="w-full bg-surface-container-low border border-outline-variant/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary/50" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant/10 flex justify-end">
              <button className="bronze-ember text-on-primary px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/10">
                Update Identity
              </button>
            </div>
          </section>

          <section className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-on-surface">Dossier Sync</h3>
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[8px] font-bold uppercase tracking-widest rounded">Active</span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Your dossier is currently synchronized with <span className="text-on-surface font-bold">Outlook</span> and <span className="text-on-surface font-bold">LinkedIn</span>. New applications will be detected automatically.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-bold">Outlook Integration</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-secondary" />
              </div>
            </div>
          </section>

          <section className="bg-error-container/10 p-8 rounded-2xl border border-error/20 space-y-4">
            <div className="flex items-center gap-3 text-error">
              <AlertCircle className="w-5 h-5" />
              <h3 className="text-lg font-bold">Danger Zone</h3>
            </div>
            <p className="text-sm text-on-surface-variant">
              Permanently delete your entire professional dossier and all historical trajectory data. This action is irreversible.
            </p>
            <button className="text-error text-xs font-bold uppercase tracking-widest hover:underline">
              Terminate Dossier
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
