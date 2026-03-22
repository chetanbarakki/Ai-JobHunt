import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  History, 
  Zap, 
  FileText, 
  User, 
  Settings, 
  HelpCircle,
  Plus,
  ListTodo,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useSidebar } from '../contexts/SidebarContext';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Search, label: 'Job Search', href: '/jobs' },
  { icon: Sparkles, label: 'Job Optimizer', href: '/job-optimizer' },
  { icon: ListTodo, label: 'Tracker', href: '/tracker' },
  { icon: Zap, label: 'Resume Tool', href: '/resume-tool' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const { isOpen, isCollapsed, toggleCollapsed, close } = useSidebar();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={close}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 h-full flex flex-col z-50 border-r border-outline-variant/15 bg-surface-container-low shadow-2xl transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className={cn(
          "p-6 flex items-center justify-between",
          isCollapsed && "px-4 justify-center"
        )}>
          {!isCollapsed && (
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent truncate">
                Executive Portfolio
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mt-1 opacity-60">
                Architectural Dossier
              </p>
            </div>
          )}
          
          <button 
            onClick={close}
            className="lg:hidden p-2 hover:bg-surface-container rounded-lg text-on-surface-variant"
          >
            <X className="w-5 h-5" />
          </button>

          <button 
            onClick={toggleCollapsed}
            className="hidden lg:flex p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              title={isCollapsed ? item.label : undefined}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 active:scale-[0.98] group relative",
                isActive 
                  ? "text-primary bg-surface-container-high" 
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
                isCollapsed && "justify-center"
              )}
            >
              {({ isActive }) => (
                <>
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!isCollapsed && <span className="font-medium text-sm truncate">{item.label}</span>}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={cn(
          "p-4 mt-auto border-t border-outline-variant/10 space-y-4",
          isCollapsed && "px-2"
        )}>
          <div className="space-y-1">
            <NavLink
              to="/profile"
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative",
                isActive ? "text-primary bg-surface-container-high" : "text-on-surface-variant hover:bg-surface-container",
                isCollapsed && "justify-center"
              )}
              title={isCollapsed ? "Profile" : undefined}
            >
              <User className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span className="text-sm truncate">Profile</span>}
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative",
                isActive ? "text-primary bg-surface-container-high" : "text-on-surface-variant hover:bg-surface-container",
                isCollapsed && "justify-center"
              )}
              title={isCollapsed ? "Support" : undefined}
            >
              <HelpCircle className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span className="text-sm truncate">Support</span>}
            </NavLink>
          </div>

          <button className={cn(
            "w-full bronze-ember text-on-primary font-bold text-sm py-3 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2",
            isCollapsed && "p-3"
          )}>
            <Plus className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span className="truncate">New Application</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
