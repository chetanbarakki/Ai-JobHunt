import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Globe, 
  Calendar, 
  Building2, 
  MapPin, 
  Zap, 
  BookmarkPlus,
  CheckCircle2,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const jobs = [
  {
    company: 'Stripe',
    role: 'Senior Solutions Architect',
    location: 'Remote (Global)',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnbOpxu558bFDzXFC9E_mhgcIPLrqjKfK2RiSIzWIrm8Bp8Px8gnY6OiYaySN7B_LrhjjWOdaU2NoiwBPkFejxrIy7-BlRZ4-y6xfqn6xIrVcu-V4QWZIymu6tPiXcLgZHpoIxVM6WPEa8DPvI8YjiHz70NR9e2H6bLGiH2nTg_trewVXNW09r6b08Chzew5bFw0ahZKmF16xYCRqVSd1zjoB0pu9EJk5xfGHECcOWsRgJ4z172Pb5kFOCqZfPpGDnithtcWHmqcM',
    match: 94,
    platform: 'LinkedIn',
    tags: ['Cloud Infrastructure', 'Node.js Specialist', 'FinTech Experience']
  },
  {
    company: 'Linear',
    role: 'Principal Product Engineer',
    location: 'San Francisco, CA',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4CsEjakMQeixrcMy-7Cydiv8yMB0qblomh4Z-wSKh2xshNhcuycS_T4Nz32rAMoGn2jdkU4Mq36wVq8bZiwAKZvdd205FZ_YhbvAyZM3v08IRjw6gHCmD2rDR7Y7s3GCNSbl55h-qAJQpN0Ux3VkrH4QYLK3uLV0XSkb0OAEr6H1_6S3RH1O7IB3rTcV6zq38qBaBYVFl9dVE-RQiUBW2EP5jhGZhZuPtrzOekW0OW1lE3_t1LnTd7g3PFp_EkWW6fvrQ_My8S-E',
    match: 88,
    platform: 'Indeed',
    tags: ['Systems Architecture', 'React / Next.js', 'Design Systems']
  }
];

export default function JobSearch() {
  return (
    <div className="space-y-12">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Market Opportunities</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Curated high-impact roles aligned with your technical architect profile and experience level.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/15">
            <Filter className="w-4 h-4 text-on-surface-variant" />
            <select className="bg-transparent border-none text-xs font-semibold text-on-surface focus:ring-0 p-0 cursor-pointer">
              <option>All Roles</option>
              <option>Frontend Architect</option>
              <option>Senior Engineering Manager</option>
            </select>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/15">
            <Globe className="w-4 h-4 text-on-surface-variant" />
            <select className="bg-transparent border-none text-xs font-semibold text-on-surface focus:ring-0 p-0 cursor-pointer">
              <option>Platform</option>
              <option>LinkedIn</option>
              <option>Indeed</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/15 text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors">
            <Calendar className="w-4 h-4" />
            Past 7 Days
          </button>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {jobs.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container p-8 rounded-xl border border-transparent hover:border-primary/10 transition-all duration-300 group shadow-lg shadow-black/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="flex items-center gap-2 bg-secondary-container/30 px-3 py-1 rounded-full border border-on-secondary-container/10">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="text-[10px] font-bold text-on-secondary-container uppercase tracking-wider">{job.platform}</span>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/15 overflow-hidden">
                <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-1 leading-none">{job.role}</h3>
                <p className="text-on-surface-variant font-medium text-sm">{job.company} · {job.location}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Match Score</span>
                  <span className="text-primary font-bold text-sm">{job.match}% Match</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
                  <div className="h-full bronze-ember" style={{ width: `${job.match}%` }} />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <span key={tag} className="bg-surface-container-high px-3 py-1 rounded-full text-[11px] font-medium text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-6 flex items-center gap-3">
                <Link 
                  to="/job-optimizer"
                  className="flex-1 bronze-ember text-on-primary py-2.5 rounded-lg font-bold text-xs active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  Optimize Resume
                </Link>
                <button className="px-6 py-2.5 rounded-lg border border-primary/20 text-primary font-bold text-xs hover:bg-primary/5 transition-colors">
                  Apply
                </button>
                <button className="p-2.5 rounded-lg border border-on-secondary-container/20 text-on-secondary-container hover:bg-secondary-container/20 transition-colors">
                  <BookmarkPlus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Toast Notification */}
      <div className="fixed bottom-10 right-10 z-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-high border border-outline-variant/20 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4"
        >
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Analysis Complete</p>
            <p className="text-xs text-on-surface-variant">Stripe resume alignment at 94%.</p>
          </div>
          <button className="ml-4 text-on-surface-variant hover:text-on-surface">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
