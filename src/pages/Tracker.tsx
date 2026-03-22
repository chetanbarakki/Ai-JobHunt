import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Flag, 
  FileText, 
  Zap, 
  AlertCircle, 
  Info,
  Mail,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const applications = [
  {
    company: 'Stripe',
    role: 'Senior Systems Engineer',
    location: 'San Francisco, CA',
    date: 'Applied Oct 12, 2023',
    status: 2, // 0: Applied, 1: OA, 2: Interviewing, 3: Result
    file: 'Architect_V4_Stripe.pdf',
    tag: 'Priority Pursuit',
    insights: [
      { type: 'warning', text: 'Low keyword match (Distributed Systems)' },
      { type: 'info', text: 'No relevant projects in Rust' }
    ],
    notes: 'Follow-up scheduled with hiring manager Sarah on Thursday. Emphasize performance tuning experience at ScaleAI.'
  },
  {
    company: 'OpenAI',
    role: 'ML Infrastructure Engineer',
    location: 'Remote',
    date: 'Applied Oct 05, 2023',
    status: 1,
    file: 'ML_Engineer_Core_V2.pdf',
    tag: 'Cold Apply',
    insights: [
      { type: 'success', text: 'Strong alignment: LLM Deployment' },
      { type: 'success', text: 'Key projects matched: Triton, CUDA' }
    ],
    notes: 'Expect high rigor on system design. Brush up on distributed training kernels.'
  }
];

const timelineSteps = ['Applied', 'Online Assessment', 'Interviewing', 'Result'];

export default function Tracker() {
  return (
    <div className="space-y-12">
      {/* Email Sync Banner */}
      <section className="bg-secondary-container/20 p-6 rounded-xl border border-on-secondary-container/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <Mail className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-secondary">Status updates detected via n8n integration</h2>
            <p className="text-xs text-on-surface-variant/80">3 new application updates found in your inbox from 'NVIDIA' and 'Anthropic'.</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-md hover:bg-secondary-container/80 transition-colors">
          Review Updates
        </button>
      </section>

      {/* Page Title */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface">Application Tracker</h1>
          <p className="text-on-surface-variant mt-2 max-w-md text-sm leading-relaxed">
            Centralized architectural dossier for your active career pursuits. High-fidelity tracking of your professional trajectory.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant">Active Pursuits</span>
            <span className="text-2xl font-bold text-primary">24</span>
          </div>
          <div className="text-right border-l border-outline-variant/20 pl-4">
            <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant">Interview Rate</span>
            <span className="text-2xl font-bold text-secondary">18%</span>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-6">
        {applications.map((app, i) => (
          <motion.article
            key={app.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-all hover:bg-surface-container-high group"
          >
            <div className="p-8 flex flex-col lg:flex-row gap-8">
              {/* Company & Role */}
              <div className="lg:w-1/4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center border border-outline-variant/10">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors">{app.company}</h3>
                    <p className="text-xs text-on-surface-variant">{app.location}</p>
                  </div>
                </div>
                <p className="text-sm font-medium mb-1">{app.role}</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{app.date}</p>
              </div>

              {/* Status Timeline */}
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-6">Status Timeline</p>
                <div className="relative flex justify-between">
                  <div className="absolute top-4 left-0 w-full h-[2px] bg-surface-container-highest z-0" />
                  <div 
                    className="absolute top-4 left-0 h-[2px] bg-secondary z-0 transition-all duration-1000" 
                    style={{ width: `${(app.status / (timelineSteps.length - 1)) * 100}%` }}
                  />
                  
                  {timelineSteps.map((step, idx) => {
                    const isCompleted = idx < app.status;
                    const isCurrent = idx === app.status;
                    const isFuture = idx > app.status;

                    return (
                      <div key={step} className={cn(
                        "relative z-10 flex flex-col items-center gap-2",
                        isFuture && "opacity-30"
                      )}>
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-surface-container transition-all",
                          isCompleted ? "bg-secondary" : isCurrent ? "bg-secondary-container border border-secondary" : "bg-surface-container-highest"
                        )}>
                          {isCompleted ? <CheckCircle2 className="w-4 h-4 text-on-secondary" /> : 
                           isCurrent ? <Clock className="w-4 h-4 text-secondary" /> : 
                           <Flag className="w-4 h-4 text-on-surface-variant" />}
                        </div>
                        <span className={cn(
                          "text-[9px] font-bold uppercase tracking-tighter",
                          isFuture ? "text-on-surface-variant" : "text-secondary"
                        )}>{step}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Metadata & Resume */}
              <div className="lg:w-1/5 flex flex-col justify-between border-l border-outline-variant/10 pl-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-3">Dossier File</p>
                  <div className="flex items-center gap-2 p-2 bg-surface-container-low rounded border border-outline-variant/5">
                    <FileText className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-medium truncate">{app.file}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest",
                    app.tag === 'Priority Pursuit' ? "bg-secondary-container text-on-secondary-container" : "bg-surface-container-highest text-on-surface-variant"
                  )}>
                    {app.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* AI Insights & Notes */}
            <div className="bg-surface-container-low/50 border-t border-outline-variant/5 p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-3">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                  <Zap className="w-3 h-3 text-secondary fill-secondary" />
                  AI Strategy Insights
                </p>
                <div className="flex flex-wrap gap-2">
                  {app.insights.map((insight, idx) => (
                    <span key={idx} className={cn(
                      "px-3 py-1 rounded-full text-[10px] flex items-center gap-1.5 font-medium",
                      insight.type === 'warning' ? "bg-error-container/20 text-error" : 
                      insight.type === 'success' ? "bg-on-secondary-container/20 text-secondary" : "bg-surface-container-highest text-on-surface-variant"
                    )}>
                      {insight.type === 'warning' && <AlertCircle className="w-3 h-3" />}
                      {insight.type === 'info' && <Info className="w-3 h-3" />}
                      {insight.type === 'success' && <CheckCircle2 className="w-3 h-3" />}
                      {insight.text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Internal Notes</p>
                <p className="text-xs text-on-surface-variant leading-relaxed italic">"{app.notes}"</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest">Pipeline Throughput</h3>
          <div className="h-48 flex items-end justify-between gap-4">
            {[40, 70, 85, 60, 45].map((h, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 rounded-t-sm relative group transition-colors",
                  i === 2 ? "bg-primary" : "bg-surface-container-highest hover:bg-primary"
                )}
                style={{ height: `${h}%` }}
              >
                <span className={cn(
                  "absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold transition-opacity",
                  i === 2 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}>{Math.round(h / 3)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-on-surface-variant uppercase font-medium">
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
          </div>
        </div>

        <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Resume Efficiency</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>Core Architect V4</span>
                  <span className="text-secondary">72% Success</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-[72%] h-full bg-secondary"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>ML Specialist V2</span>
                  <span className="text-primary">45% Success</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full py-3 border border-outline-variant/20 rounded-md text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-high transition-colors mt-8">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
