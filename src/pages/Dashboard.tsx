import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  Flame, 
  ArrowRight,
  Zap,
  AlertTriangle,
  Inbox
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Total Apps', value: '128', trend: '+4.2%', color: 'primary' },
  { label: 'Active', value: '24', trend: null, color: 'secondary' },
  { label: 'Rejected', value: '82', trend: null, color: 'on-surface' },
  { label: 'Interviews', value: '12', trend: null, color: 'primary' },
  { label: 'Weekly Streak', value: '5', trend: 'flame', color: 'primary' },
];

const actions = [
  { 
    type: 'Optimization', 
    title: 'Optimize for Stripe Role', 
    desc: 'Your match score is 94%. Refine your dossier for the final interview.',
    color: 'primary',
    href: '/job-optimizer'
  },
  { 
    type: 'Strategy', 
    title: 'Update Skills Matrix', 
    desc: 'Add "Distributed Systems" to increase alignment for Senior roles.',
    color: 'secondary',
    href: '/resume-builder'
  },
  { 
    type: 'Alert', 
    title: 'Missing Quantifiable Metrics', 
    desc: 'Add metrics to your ScaleAI experience to boost ATS score.',
    color: 'error',
    href: '/resume-builder'
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">Overview</h2>
          <p className="text-on-surface-variant mt-2 max-w-md">
            Your recruitment trajectory is performing at <span className="text-primary font-semibold">12% higher</span> than last quarter. Keep the momentum.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-widest uppercase">
            AI Enabled
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "bg-surface-container p-6 rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors group",
              stat.trend === 'flame' && "border-t-2 border-primary/20"
            )}
          >
            <span className="text-on-surface-variant text-xs font-semibold tracking-wide uppercase">{stat.label}</span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className={cn(
                "text-3xl font-headline font-bold",
                stat.color === 'primary' ? "text-on-surface" : "text-secondary"
              )}>{stat.value}</span>
              {stat.trend && stat.trend !== 'flame' && (
                <span className="text-[10px] text-primary">{stat.trend}</span>
              )}
              {stat.trend === 'flame' && (
                <Flame className="w-5 h-5 text-primary fill-primary" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Application Velocity Chart */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-surface-container rounded-xl p-8"
        >
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-lg font-bold text-on-surface">Application Velocity</h3>
              <p className="text-on-surface-variant text-sm">Volume of submissions over the last 8 weeks</p>
            </div>
            <div className="flex gap-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary"></span> Submissions</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span> Goal</span>
            </div>
          </div>
          
          <div className="relative h-48 w-full flex items-end justify-between gap-2 border-b border-outline-variant/20 pb-4">
            {[40, 65, 45, 80, 95, 60, 30, 50].map((height, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.05), duration: 0.5 }}
                className={cn(
                  "flex-1 rounded-t-sm transition-all hover:bg-primary/40 cursor-help",
                  i === 4 ? "bg-primary/20 border-t-2 border-primary" : "bg-surface-container-high"
                )}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
            {['WK 01', 'WK 02', 'WK 03', 'WK 04', 'WK 05', 'WK 06', 'WK 07', 'WK 08'].map(wk => (
              <span key={wk}>{wk}</span>
            ))}
          </div>
        </motion.div>

        {/* Next Best Action */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-surface-container-high rounded-xl p-8 border border-primary/10 shadow-xl"
        >
          <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary fill-primary" />
            Next Best Action
          </h3>
          <p className="text-on-surface-variant text-sm mt-1">Recommended by your AI career coach</p>
          
          <div className="mt-8 space-y-4">
            {actions.map((action, i) => (
              <Link 
                key={i}
                to={action.href}
                className={cn(
                  "block p-4 bg-surface-container rounded-lg border-l-2 hover:bg-surface-bright transition-colors cursor-pointer group",
                  action.color === 'primary' ? "border-primary" : 
                  action.color === 'secondary' ? "border-secondary" : "border-error/50"
                )}
              >
                <div className="flex justify-between items-start">
                  <span className={cn(
                    "font-bold text-xs uppercase tracking-tighter",
                    action.color === 'primary' ? "text-primary" : 
                    action.color === 'secondary' ? "text-secondary" : "text-error"
                  )}>{action.type}</span>
                  <ArrowRight className="w-4 h-4 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-on-surface mt-2 font-medium">{action.title}</p>
                <p className="text-on-surface-variant text-xs mt-1">{action.desc}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Status Distribution */}
        <div className="bg-surface-container rounded-xl p-8">
          <h3 className="text-lg font-bold text-on-surface mb-8">Status Distribution</h3>
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" r="80" fill="transparent" stroke="#282a2e" strokeWidth="24" />
              <circle cx="96" cy="96" r="80" fill="transparent" stroke="#fbba65" strokeWidth="24" strokeDasharray="502" strokeDashoffset="150" />
              <circle cx="96" cy="96" r="80" fill="transparent" stroke="#8acefd" strokeWidth="24" strokeDasharray="502" strokeDashoffset="400" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-on-surface">128</span>
              <span className="text-[8px] uppercase tracking-widest text-on-surface-variant font-bold">Total</span>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {[
              { label: 'Active', value: '45%', color: 'bg-primary' },
              { label: 'Interviewing', value: '18%', color: 'bg-secondary' },
              { label: 'Closed', value: '37%', color: 'bg-surface-container-high' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={cn("w-2.5 h-2.5 rounded-full", item.color)}></span>
                  <span className="text-sm text-on-surface-variant">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-on-surface">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-surface-container rounded-xl p-8 flex flex-col">
          <h3 className="text-lg font-bold text-on-surface mb-8">Recent Activity</h3>
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
              <Inbox className="w-8 h-8 text-outline/30" />
            </div>
            <h4 className="text-on-surface font-bold">No recent activity</h4>
            <p className="text-on-surface-variant text-sm mt-2 max-w-xs">
              New events like interview requests or feedback will appear here in real-time.
            </p>
            
            {/* Skeleton placeholders */}
            <div className="mt-12 w-full space-y-4 opacity-10">
              {[1, 2].map(i => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-on-surface"></div>
                  <div className="space-y-2 flex-1 text-left">
                    <div className="h-3 w-1/3 bg-on-surface rounded"></div>
                    <div className="h-2 w-1/2 bg-on-surface rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="pt-12 border-t border-outline-variant/10 flex justify-between items-center text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] opacity-40">
        <span>Executive Portfolio Dashboard v2.4.0</span>
        <span>© 2024 Architectural Dossier System</span>
      </footer>
    </div>
  );
}
