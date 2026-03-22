import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  Zap, 
  Search, 
  Plus, 
  Upload, 
  MoreVertical,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ResumeEditor from './ResumeEditor';
import { cn } from '@/src/lib/utils';

const resumes = [
  { id: 1, title: 'Master General Resume', date: 'Oct 24, 2023', status: 'ready' },
  { id: 2, title: 'Quantitative Finance', date: 'Nov 12, 2023', status: 'ready' },
  { id: 3, title: 'AI/ML Engineering', date: 'Today', status: 'drafting' }
];

export default function ResumeBuilder() {
  const [selectedResumeId, setSelectedResumeId] = useState(1);

  return (
    <div className="h-screen flex flex-col bg-surface overflow-hidden">
      {/* Top Navigation */}
      <header className="h-14 border-b border-outline-variant/15 flex items-center justify-between px-6 bg-surface-container/50 backdrop-blur-xl z-50">
        <div className="flex items-center gap-4">
          <Link to="/resume-tool" className="p-2 hover:bg-surface-container rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="h-6 w-[1px] bg-outline-variant/20" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary fill-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Dossier Builder</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center overflow-hidden">
                <img src={`https://picsum.photos/seed/${i+10}/32/32`} alt="avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">3 Collaborators</span>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Resume Tool (List & Stats) */}
        <aside className="w-[400px] border-r border-outline-variant/15 bg-surface-container-low flex flex-col z-40">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tighter text-on-surface">Your Dossier</h2>
              <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search variants..." 
                className="w-full bg-surface-container border border-outline-variant/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary/50 transition-all"
              />
            </div>

            <div className="space-y-3">
              {resumes.map((resume, i) => (
                <motion.div
                  key={resume.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  layoutId={`resume-${resume.id}`}
                  onClick={() => setSelectedResumeId(resume.id)}
                  className={cn(
                    "p-4 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden",
                    selectedResumeId === resume.id 
                      ? "bg-surface-container-high border-primary/30 shadow-lg" 
                      : "bg-surface-container border-outline-variant/5 hover:border-outline-variant/20"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">{resume.title}</h4>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">{resume.date}</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <button className="flex-1 py-2 bg-primary/10 text-primary rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-1.5 group/btn">
                      <Sparkles className="w-3 h-3 group-hover/btn:animate-pulse" />
                      Quick Optimize
                    </button>
                  </div>

                  {selectedResumeId === resume.id && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-auto p-6 border-t border-outline-variant/10 bg-surface-container/30">
            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Zap className="w-4 h-4 fill-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">AI Insight</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Your "Quantitative Finance" variant is missing <span className="text-on-surface font-bold">Risk Management</span> keywords found in 80% of target roles.
              </p>
              <button className="mt-3 text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                Fix Now <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </aside>

        {/* Right Side: Resume Editor */}
        <main className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedResumeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <ResumeEditor isEmbedded={true} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
