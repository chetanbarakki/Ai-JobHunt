import React from 'react';
import { motion } from 'motion/react';
import { 
  Upload, 
  Plus, 
  Zap, 
  TrendingUp, 
  Edit3, 
  Download, 
  Lock,
  Search,
  Bell,
  History,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const resumes = [
  {
    title: 'Master General Resume',
    date: 'Modified Oct 24, 2023',
    tags: ['Full Stack', 'Leadership', 'Cloud Ops'],
    status: 'ready'
  },
  {
    title: 'Quantitative Finance',
    date: 'Modified Nov 12, 2023',
    tags: ['C++', 'Risk Modeling', 'Kafka'],
    status: 'ready',
    badge: 'Optimized for FinTech'
  },
  {
    title: 'AI/ML Engineering',
    date: 'Modified Today',
    tags: ['PyTorch', 'NLP'],
    status: 'drafting'
  }
];

export default function ResumeTool() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="flex justify-between items-end">
        <div className="space-y-2">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Resume Dossier</span>
          <h2 className="text-5xl font-extrabold text-on-surface tracking-tighter">Specialized Resumes</h2>
        </div>
        <div className="flex gap-4">
          <Link to="/resume-builder" className="px-6 py-3 rounded-md border border-outline-variant/30 text-on-surface text-sm font-semibold hover:bg-surface-container transition-all flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload Resume
          </Link>
          <Link to="/resume-builder" className="bronze-ember px-8 py-3 rounded-md text-on-primary text-sm font-bold tracking-tight hover:opacity-90 transition-all shadow-xl shadow-primary/10 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create New
          </Link>
        </div>
      </section>

      {/* AI Suggestions / Top Bento */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-8 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[240px]">
          <div className="z-10 max-w-md">
            <div className="flex items-center gap-2 text-secondary mb-4">
              <Zap className="w-5 h-5 fill-secondary" />
              <span className="text-[10px] font-bold uppercase tracking-widest">AI Optimization Suggestions</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-4 leading-tight">We found a mismatch in your AIML profile.</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Your current General resume lacks specific PyTorch and CUDA benchmarks found in your GitHub. Would you like to generate a specialized AI/ML variant?
            </p>
          </div>
          <div className="z-10">
            <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full text-xs font-bold hover:brightness-110 transition-all">
              Generate AIML Variant
            </button>
          </div>
          
          {/* Abstract Decorative Element */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          <TrendingUp className="absolute right-12 top-12 w-32 h-32 text-secondary/10" />
        </div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container p-8 rounded-xl flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-4 text-primary">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-on-surface">Profile Strength</h4>
          <div className="mt-4 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="w-[85%] h-full bronze-ember" />
          </div>
          <p className="text-[10px] text-on-surface-variant mt-4 uppercase tracking-widest">Top 15% of Candidates</p>
        </div>
      </div>

      {/* Resume Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {resumes.map((resume, i) => (
          <motion.div
            key={resume.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-surface-container rounded-md overflow-hidden hover:bg-surface-container-high transition-all duration-300 relative border border-transparent hover:border-outline-variant/10"
          >
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden relative">
              {resume.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary/10 text-primary border border-primary/20 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                    {resume.badge}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60" />
              
              {/* Resume Preview Placeholder */}
              <div className="p-6 opacity-30 select-none">
                <div className="h-4 w-1/2 bg-on-surface-variant/20 mb-4" />
                <div className="h-2 w-full bg-on-surface-variant/10 mb-2" />
                <div className="h-2 w-full bg-on-surface-variant/10 mb-2" />
                <div className="h-2 w-2/3 bg-on-surface-variant/10 mb-8" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-on-surface-variant/5" />
                  <div className="h-20 bg-on-surface-variant/5" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                {resume.status === 'drafting' ? (
                  <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-4">
                    <Lock className="w-10 h-10 text-on-surface-variant" />
                    <p className="text-xs font-bold text-on-surface-variant">Drafting in Progress</p>
                  </div>
                ) : (
                  <button className="bg-surface/90 backdrop-blur px-6 py-2 rounded-md text-xs font-bold text-on-surface shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    Preview Full Document
                  </button>
                )}
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-bold text-on-surface">{resume.title}</h4>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{resume.date}</p>
                </div>
                <div className="flex gap-1">
                  <Link to="/resume-builder" className="p-2 hover:text-primary transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </Link>
                  {resume.status === 'ready' && (
                    <button className="p-2 hover:text-primary transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {resume.tags.map(tag => (
                  <span key={tag} className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-medium",
                    resume.badge ? "bg-secondary-container/30 text-secondary" : "bg-surface-container-highest text-on-surface-variant"
                  )}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full py-2.5 bg-primary/10 text-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2 group/btn">
                <Sparkles className="w-3.5 h-3.5 group-hover/btn:animate-pulse" />
                Quick Optimize
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Stats Footer */}
      <footer className="mt-20 border-t border-outline-variant/10 pt-8 flex justify-between items-center opacity-50">
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
            <span>AI Engine Online</span>
          </div>
          <div className="flex items-center gap-2">
            <span>3 Total Versions</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Last Synced 2m ago</span>
          </div>
        </div>
        <div className="text-[10px] font-medium text-on-surface-variant italic">
          Architectural Precision Tooling v2.4.0
        </div>
      </footer>
    </div>
  );
}
