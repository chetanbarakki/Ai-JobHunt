import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Save, 
  Eye, 
  Zap, 
  Plus, 
  ChevronLeft, 
  Layout, 
  Type, 
  Briefcase, 
  GraduationCap, 
  Wrench,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface ResumeEditorProps {
  isEmbedded?: boolean;
}

export default function ResumeEditor({ isEmbedded = false }: ResumeEditorProps) {
  const [activeTab, setActiveTab] = useState('header');

  return (
    <div className={cn(
      "flex flex-col bg-surface overflow-hidden",
      isEmbedded ? "h-full" : "h-screen"
    )}>
      {/* Editor Header - Only show if not embedded */}
      {!isEmbedded && (
        <header className="h-16 border-b border-outline-variant/15 flex items-center justify-between px-6 bg-surface-container/50 backdrop-blur-xl z-50">
          <div className="flex items-center gap-4">
            <Link to="/resume-tool" className="p-2 hover:bg-surface-container rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div className="h-8 w-[1px] bg-outline-variant/20" />
            <div>
              <h1 className="text-sm font-bold text-on-surface">Master General Resume</h1>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Editing v4.2 · Last saved 2m ago</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button className="bronze-ember text-on-primary px-6 py-2 rounded-lg text-xs font-bold shadow-lg shadow-primary/10 flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </header>
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Controls */}
        <aside className={cn(
          "border-r border-outline-variant/15 bg-surface-container-low flex flex-col transition-all",
          isEmbedded ? "w-72" : "w-80"
        )}>
          <div className="p-4 grid grid-cols-4 gap-2 border-b border-outline-variant/10">
            {[
              { id: 'header', icon: Type },
              { id: 'experience', icon: Briefcase },
              { id: 'education', icon: GraduationCap },
              { id: 'skills', icon: Wrench },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "p-3 rounded-lg flex items-center justify-center transition-all",
                  activeTab === tab.id ? "bg-primary text-on-primary shadow-lg" : "text-on-surface-variant hover:bg-surface-container"
                )}
              >
                <tab.icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <AnimatePresence mode="wait">
              {activeTab === 'header' && (
                <motion.div 
                  key="header"
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <div className="bg-surface-container p-4 rounded-xl space-y-4 border border-outline-variant/5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Name</label>
                        <input type="text" defaultValue="Alex Sterling" className="w-full bg-surface-container-low border-none rounded-lg text-xs p-2.5 text-on-surface focus:ring-1 focus:ring-primary/30 outline-none" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Title</label>
                        <input type="text" defaultValue="Software Engineer" className="w-full bg-surface-container-low border-none rounded-lg text-xs p-2.5 text-on-surface focus:ring-1 focus:ring-primary/30 outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center bg-surface-container-low px-3 rounded-lg border border-outline-variant/5">
                        <Sparkles className="w-3 h-3 text-on-surface-variant mr-2" />
                        <input className="bg-transparent border-none text-[10px] w-full py-2.5 outline-none" type="text" defaultValue="github.com/asterling"/>
                      </div>
                      <div className="flex items-center bg-surface-container-low px-3 rounded-lg border border-outline-variant/5">
                        <Zap className="w-3 h-3 text-on-surface-variant mr-2" />
                        <input className="bg-transparent border-none text-[10px] w-full py-2.5 outline-none" type="text" defaultValue="leetcode.com/asterling"/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div 
                  key="experience"
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <div className="p-4 bg-surface-container rounded-xl border border-outline-variant/10 relative group">
                    <h4 className="text-xs font-bold text-on-surface">Senior Architect @ ScaleAI</h4>
                    <p className="text-[10px] text-on-surface-variant uppercase">2021 — Present</p>
                    <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-error">
                      <AlertCircle className="w-3 h-3" />
                    </button>
                  </div>
                  <button className="w-full py-3 border border-dashed border-outline-variant/30 rounded-xl text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Experience
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </aside>

        {/* Center: Preview Canvas */}
        <main className="flex-1 bg-surface-container-lowest overflow-y-auto p-8 lg:p-12 flex flex-col items-center relative">
          {/* Floating Toolbar */}
          <div className="sticky top-0 mb-8 bg-surface-container/80 backdrop-blur-md p-3 rounded-xl flex items-center gap-6 z-10 shadow-lg border border-outline-variant/5">
            <div className="flex items-center gap-2 border-r border-outline-variant/20 pr-6">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Template</p>
              <select className="bg-surface-container-high border-none text-[10px] font-medium rounded py-1 pl-2 pr-8 text-primary focus:ring-0 cursor-pointer">
                <option>ATS Modernist</option>
                <option>Executive Serif</option>
                <option>Minimalist Grid</option>
              </select>
            </div>
            <div className="flex items-center gap-4 border-r border-outline-variant/20 pr-6">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-7 h-4 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-secondary-container"></div>
                <span className="ml-2 text-[10px] font-medium text-on-surface-variant">One-Page Fit</span>
              </label>
            </div>
            <button className="flex items-center text-[10px] font-bold text-on-surface hover:text-primary transition-colors gap-2">
              <Download className="w-4 h-4" /> Export PDF
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "bg-white shadow-2xl min-h-[1100px] p-12 lg:p-16 text-slate-900 transition-all origin-top",
              isEmbedded ? "w-full max-w-[700px]" : "w-[800px]"
            )}
          >
            <header className="border-b-2 border-slate-900 pb-8 mb-8">
              <h1 className="text-4xl font-bold tracking-tighter uppercase">Alex Sterling</h1>
              <p className="text-lg font-medium text-slate-600">Senior Systems Architect</p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-500 font-medium">
                <span>San Francisco, CA</span>
                <span>•</span>
                <span>alex@sterling.io</span>
                <span>•</span>
                <span>linkedin.com/in/asterling</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 border-b border-slate-200 pb-2">Professional Experience</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-lg">Senior Systems Architect</h3>
                    <span className="text-sm font-bold text-slate-400">2021 — PRESENT</span>
                  </div>
                  <p className="font-bold text-slate-700 mb-3 uppercase text-xs tracking-wide">ScaleAI · San Francisco, CA</p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed text-slate-600">
                    <li>Architected and deployed a distributed training infrastructure handling 10B+ tokens daily using Kubernetes and custom CUDA kernels.</li>
                    <li>Reduced inference latency by 45% through aggressive model quantization and performance tuning on NVIDIA A100 clusters.</li>
                    <li>Led a team of 12 engineers in building a real-time data labeling pipeline with 99.99% availability.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 border-b border-slate-200 pb-2">Technical Architecture</h2>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <p className="font-bold text-slate-800 mb-2 uppercase text-[10px]">Infrastructure</p>
                  <p className="text-slate-600">Kubernetes, Terraform, AWS, GCP, Docker, Prometheus, Grafana</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800 mb-2 uppercase text-[10px]">Languages & Frameworks</p>
                  <p className="text-slate-600">Rust, Go, Python, PyTorch, C++, React, Node.js</p>
                </div>
              </div>
            </section>
          </motion.div>
        </main>

        {/* Right Sidebar: AI Strategist */}
        <aside className={cn(
          "border-l border-outline-variant/15 bg-surface-container-low p-6 flex flex-col gap-6 transition-all",
          isEmbedded ? "w-72" : "w-80"
        )}>
          <div className="flex items-center gap-2 text-primary">
            <Zap className="w-5 h-5 fill-primary" />
            <h3 className="text-sm font-bold uppercase tracking-widest">AI Strategist</h3>
          </div>

          <div className="bg-surface-container rounded-xl p-5 border border-primary/10">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">ATS Score</span>
              <span className="text-2xl font-black text-primary">84%</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "84%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bronze-ember" 
              />
            </div>
            <p className="text-[10px] text-on-surface-variant mt-3 leading-relaxed">
              Strong alignment for <span className="text-on-surface font-bold">Systems Architect</span> roles. 
              Missing <span className="text-secondary font-bold">Distributed Systems</span> keywords.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Optimization Tasks</h4>
            <div className="space-y-2">
              {[
                { text: 'Add "Redis" to Skills', type: 'missing' },
                { text: 'Quantify ScaleAI impact', type: 'weak' },
                { text: 'Verify LinkedIn link', type: 'check' },
              ].map((task, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-3 bg-surface-container rounded-lg group cursor-pointer hover:bg-surface-container-high transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {task.type === 'missing' && <AlertCircle className="w-4 h-4 text-error" />}
                    {task.type === 'weak' && <Sparkles className="w-4 h-4 text-primary" />}
                    {task.type === 'check' && <CheckCircle2 className="w-4 h-4 text-secondary" />}
                    <span className="text-xs text-on-surface">{task.text}</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <div className="p-4 bg-secondary-container/10 rounded-xl border border-secondary/20">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">Pro Tip</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                "Using action verbs like 'Architected' instead of 'Responsible for' increased your score by 12%."
              </p>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 py-3 bg-surface-container-highest border border-outline-variant/20 hover:border-primary/50 text-on-surface text-xs font-bold rounded-xl transition-all">
              <span>Ask AI Copilot</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

