import React from 'react';
import { NavLink } from 'react-router-dom';

interface DashboardLayoutProps {
  title: string;
  role: string;
  sidebarLinks: { icon: React.ElementType; label: string; path: string }[];
  children: React.ReactNode;
}

const DashboardLayout = ({ title, role, sidebarLinks, children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-1 overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">{role}</h2>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Workspace</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-teal-50 text-teal-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 py-4 px-6 sm:px-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <div className="flex items-center gap-4">
             <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">
                {role.charAt(0)}
             </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
