import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Globe, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex items-center justify-between glass-panel border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bronze-ember rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-on-primary fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-on-surface">Executive Portfolio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-on-surface-variant">
          <a href="#features" className="hover:text-primary transition-colors">Architecture</a>
          <a href="#dossier" className="hover:text-primary transition-colors">Dossier</a>
          <a href="#security" className="hover:text-primary transition-colors">Sovereignty</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth" className="text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">Sign In</Link>
          <Link to="/auth" className="bronze-ember text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-primary/10 hover:scale-105 active:scale-95 transition-all">
            Get Access
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-primary/20">
            Professional Evolution Engine
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
            Track. Optimize. Apply.<br />
            <span className="text-primary">— with clarity.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-12">
            An architectural dossier for the modern engineer. Centralize your career trajectory, optimize resumes with AI, and land roles at the world's most innovative institutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth" className="w-full sm:w-auto bronze-ember text-on-primary px-10 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 group shadow-2xl shadow-primary/20">
              Start Your Dossier
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl border border-outline-variant/30 text-on-surface font-bold hover:bg-surface-container transition-all">
              View Architecture
            </button>
          </div>
        </motion.div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "AI Strategist",
              desc: "Real-time resume optimization based on target job descriptions and market benchmarks."
            },
            {
              icon: Layers,
              title: "Dossier Management",
              desc: "Maintain specialized resume variants for different technical domains with version control."
            },
            {
              icon: ShieldCheck,
              title: "Sovereignty",
              desc: "Your data remains yours. Institutional-grade encryption for your professional identity."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof / Institutional Alignment */}
      <section className="py-24 border-y border-outline-variant/10 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant mb-12 opacity-40">
            Institutional Alignment
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold tracking-tighter">STRIPE</span>
            <span className="text-2xl font-bold tracking-tighter">OPENAI</span>
            <span className="text-2xl font-bold tracking-tighter">ANTHROPIC</span>
            <span className="text-2xl font-bold tracking-tighter">LINEAR</span>
            <span className="text-2xl font-bold tracking-tighter">NVIDIA</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 max-w-5xl mx-auto text-center">
        <div className="bg-surface-container p-16 rounded-[40px] border border-outline-variant/10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-6">
              Ready to evolve your professional trajectory?
            </h2>
            <p className="text-on-surface-variant mb-12 max-w-xl mx-auto">
              Join 5,000+ senior engineers using Executive Portfolio to land high-impact roles.
            </p>
            <Link to="/auth" className="inline-flex items-center gap-2 bronze-ember text-on-primary px-12 py-4 rounded-xl text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              Claim Your Access Key
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-outline-variant/10 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bronze-ember rounded flex items-center justify-center">
            <Zap className="w-4 h-4 text-on-primary fill-current" />
          </div>
          <span className="font-bold tracking-tighter text-on-surface">Executive Portfolio</span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant opacity-40">
          © 2024 Architectural Dossier System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
