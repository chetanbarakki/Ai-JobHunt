import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-surface-container p-10 rounded-3xl border border-outline-variant/10 shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bronze-ember rounded-xl mb-6 shadow-xl shadow-primary/20">
            <Zap className="w-6 h-6 text-on-primary fill-current" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tighter text-on-surface mb-2">
            {isLogin ? 'Institutional Access' : 'Create Dossier'}
          </h1>
          <p className="text-on-surface-variant text-sm">
            {isLogin 
              ? 'Enter your credentials to access your professional trajectory.' 
              : 'Join the elite network of architectural engineers.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">
              Institutional Email
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
              <input
                type="email"
                required
                placeholder="alex@institutional.com"
                className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl pl-12 pr-4 py-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Access Key
              </label>
              {isLogin && (
                <button type="button" className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
                  Lost Key?
                </button>
              )}
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl pl-12 pr-4 py-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bronze-ember text-on-primary py-4 rounded-xl font-bold text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            {isLogin ? 'Grant Access' : 'Initialize Dossier'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
          <p className="text-sm text-on-surface-variant mb-6">
            {isLogin ? "Don't have a dossier yet?" : "Already have access?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary font-bold hover:underline"
            >
              {isLogin ? 'Request Access' : 'Sign In'}
            </button>
          </p>

          <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3" />
              <span className="text-[8px] font-bold uppercase tracking-widest">Encrypted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3 h-3" />
              <span className="text-[8px] font-bold uppercase tracking-widest">Global Sync</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20">
        <Zap className="w-4 h-4 text-on-surface fill-current" />
        <span className="text-xs font-bold tracking-tighter uppercase">Architectural Dossier System</span>
      </div>
    </div>
  );
}
