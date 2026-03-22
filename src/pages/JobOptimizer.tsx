import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Zap, 
  Brain, 
  Radar, 
  AlertTriangle, 
  CheckCircle2, 
  Download, 
  Edit3, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  Info
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function JobOptimizer() {
  const [matchScore, setMatchScore] = useState(82);

  return (
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <section className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Job Optimization</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Refine your professional dossier against industry-specific machine logic.
          </p>
        </motion.div>
      </section>

      {/* Input Section */}
      <section className="bg-surface-container rounded-2xl p-8 border border-outline-variant/10 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Job Context</label>
            <textarea 
              className="w-full h-48 bg-surface-container-low border border-outline-variant/10 rounded-xl p-4 text-sm font-body text-on-surface focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/30 outline-none resize-none"
              placeholder="Paste full job description or enter key requirements..."
            />
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Select Dossier</label>
              <div className="relative">
                <select className="w-full bg-surface-container-low border border-outline-variant/10 rounded-xl p-4 text-sm font-body text-on-surface appearance-none focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                  <option>Principal Software Engineer (Master).pdf</option>
                  <option>Fintech Lead Strategist.docx</option>
                  <option>Cloud Infrastructure Architect.pdf</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
              </div>
            </div>
            <button className="w-full bronze-ember text-on-primary font-bold px-8 py-4 rounded-xl text-sm flex items-center justify-center gap-3 shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Brain className="w-5 h-5" />
              Analyze Alignment
            </button>
          </div>
        </div>
      </section>

      {/* Analysis Bento Grid */}
      <section className="grid grid-cols-12 gap-6">
        {/* Match Score Gauge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 bg-surface-container rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group border border-outline-variant/5 shadow-lg"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Radar className="w-24 h-24" />
          </div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-8">Match Probability</label>
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8" />
              <motion.circle 
                initial={{ strokeDashoffset: 552.92 }}
                whileInView={{ strokeDashoffset: 552.92 * (1 - matchScore / 100) }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-primary" 
                cx="96" 
                cy="96" 
                fill="transparent" 
                r="88" 
                stroke="currentColor" 
                strokeDasharray="552.92" 
                strokeLinecap="round" 
                strokeWidth="8" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-on-surface">{matchScore}<span className="text-xl text-primary">%</span></span>
              <span className="text-[10px] font-bold text-on-secondary-container mt-2 bg-secondary-container/30 px-3 py-1 rounded-full uppercase tracking-widest">Optimal Range</span>
            </div>
          </div>
        </motion.div>

        {/* Competency Gaps & Warnings */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Missing Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container rounded-2xl p-8 border border-outline-variant/5 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Zap className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-on-surface">Competency Gaps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Kubernetes', 'GoLang', 'gRPC', 'Event-Driven Arch'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-surface-container-low text-on-surface-variant text-[11px] font-bold rounded-lg border border-outline-variant/10 uppercase tracking-widest">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8 p-4 bg-surface-container-low rounded-xl border-l-2 border-secondary/30">
              <p className="text-xs text-on-surface-variant leading-relaxed italic">
                AI Recommendation: Integrate specific instances where you utilized container orchestration in high-traffic environments.
              </p>
            </div>
          </motion.div>

          {/* Warnings */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container rounded-2xl p-8 border border-outline-variant/5 border-l-4 border-error/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-error/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-error" />
              </div>
              <h3 className="text-lg font-bold text-on-surface">Dossier Warnings</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0" />
                <p className="text-xs text-on-surface leading-relaxed">Irrelevant projects detected for Fintech focus (e.g., "Social Media Analytics").</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5 shrink-0" />
                <p className="text-xs text-on-surface leading-relaxed">Quantifiable metrics missing in professional history block 2.</p>
              </li>
            </ul>
          </motion.div>

          {/* Project Relevance Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-surface-container rounded-2xl p-8 border border-outline-variant/5 shadow-lg"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Radar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-on-surface">Project Relevance Map</h3>
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">Structural Alignment</span>
            </div>
            <div className="space-y-6">
              {[
                { name: 'E-Commerce Engine Redesign', impact: 'High Impact', value: 92, color: 'bg-secondary' },
                { name: 'Internal Tooling Dashboard', impact: 'Low Impact', value: 25, color: 'bg-on-surface-variant/40' },
              ].map(project => (
                <div key={project.name} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold text-on-surface">{project.name}</span>
                    <span className={cn("text-[10px] font-bold uppercase tracking-widest", project.impact === 'High Impact' ? "text-secondary" : "text-on-surface-variant")}>
                      {project.impact}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={cn("h-full rounded-full", project.color)} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Optimized Output Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-on-surface">Optimized Output</h2>
          <div className="flex gap-3">
            <button className="bg-surface-container hover:bg-surface-container-high text-on-surface text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-xl border border-outline-variant/10 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
            <button className="bg-surface-container hover:bg-surface-container-high text-on-surface text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-xl border border-outline-variant/10 transition-all flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              Refine AI Prompt
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Preview Canvas */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-12 rounded-2xl shadow-2xl border border-outline-variant/5">
            <div className="max-w-2xl mx-auto space-y-10 font-body text-slate-900">
              <div className="border-b-2 border-slate-900 pb-8">
                <h3 className="text-3xl font-black tracking-tighter uppercase mb-2">Alexander Vance</h3>
                <p className="text-lg font-bold text-primary uppercase tracking-widest">Principal Software Engineer | Fintech Solutions</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Executive Summary</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 font-medium">
                  Strategic engineering leader with 10+ years of experience in architecting high-frequency trading platforms and distributed ledger technologies. Proven track record in optimizing <span className="bg-secondary/10 text-secondary px-1.5 py-0.5 rounded font-bold">Kubernetes ecosystems</span> and implementing <span className="bg-secondary/10 text-secondary px-1.5 py-0.5 rounded font-bold">gRPC-based microservices</span> to achieve 40% reduction in latency.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Key Impact Projects</h4>
                </div>
                <div className="relative pl-8 border-l border-slate-200 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-white border-2 border-slate-900" />
                    <div className="flex justify-between items-baseline mb-2">
                      <h5 className="text-base font-bold">Global Ledger Migration</h5>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">2021 – 2023</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Fintech Corp · London, UK</p>
                    <p className="text-sm leading-relaxed text-slate-700">
                      Spearheaded the migration of legacy mainframe systems to a <span className="italic font-bold text-slate-900">cloud-native architecture</span>, resulting in a 25% increase in transactional throughput and $1.2M annual infrastructure savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Feedback Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8 border border-outline-variant/10 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-on-surface">Machine Reasoning</h3>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-8">
                "The dossier has been restructured to prioritize high-frequency trading architecture. I have automatically substituted generic 'Cloud' terms with 'AWS EKS' and 'Serverless Architectures' to bypass Fintech-specific ATS filters."
              </p>
              <div className="pt-8 border-t border-outline-variant/10 space-y-4">
                <p className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">Suggested Tone Adjustments</p>
                <div className="flex flex-col gap-2">
                  {['More Technical & Concise', 'More Leadership Focused', 'Maintain Academic Authority'].map((tone, i) => (
                    <button 
                      key={tone}
                      className={cn(
                        "text-left px-4 py-3 rounded-xl text-[11px] font-bold transition-all border",
                        i === 2 ? "bg-primary/10 border-primary/30 text-primary" : "bg-surface-container border-outline-variant/10 text-on-surface-variant hover:bg-surface-container-high"
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-high rounded-2xl p-8 overflow-hidden relative shadow-xl"
            >
              <div className="absolute -right-6 -bottom-6 opacity-5">
                <CheckCircle2 className="w-32 h-32" />
              </div>
              <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">ATS Score Projection</h4>
              <div className="text-5xl font-black text-on-surface mb-2">94<span className="text-xl text-on-surface-variant">/100</span></div>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.2em]">Highly Competitive Portfolio</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
