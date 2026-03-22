import React from 'react';
import { Search, Bell, Zap, History, Menu } from 'lucide-react';
import { useSidebar } from '../contexts/SidebarContext';

export function TopBar() {
  const { toggleOpen } = useSidebar();

  return (
    <header className="sticky top-0 right-0 z-30 flex items-center justify-between px-4 md:px-8 w-full h-16 border-b border-outline-variant/15 bg-surface/70 backdrop-blur-xl">
      <div className="flex items-center gap-4 md:gap-6 flex-1">
        <button 
          onClick={toggleOpen}
          className="lg:hidden p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
          <input
            type="text"
            placeholder="Search applications, resumes, or jobs..."
            className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>
        <button className="sm:hidden p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors">
          <Search className="w-5 h-5" />
        </button>

        <span className="text-on-surface-variant text-[10px] md:text-xs hidden md:block">
          Last updated: 2 mins ago
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-on-surface-variant">
          <button className="hover:text-on-surface transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="hover:text-on-surface transition-colors">
            <History className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 pl-6 border-l border-outline-variant/15">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-on-surface uppercase tracking-tight">Alex Sterling</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Senior Architect</p>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKsdA30PhBhbghXFhZIxU5J6Qi0HxZlcISQ3zmkmqeKFcxasnUfCKhtLD0eUG63HMDFMEr-ek_A2gzyHpogQvH7BVe2nxEMwam75MR4v-cAyw1lnf49T0DQFjX5e9gnDrsyp3DzJqVFZ9vZRczwhaGdYSugu8H43roxpRwAdfBB1LDcIRUn-nsix6y_7-Ug0KUjGtpSUlqBLBqaUW3k5_1FyOQ1S76-8-TgYOn8uhq0JzmcpdoSkOeSrkgChXQAhdNjfrdd8jwoTg"
              alt="User Avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
