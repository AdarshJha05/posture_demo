import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Settings, Users, BookOpen, BarChart3, Database } from 'lucide-react';

const AdminDashboard = () => {
  const links = [
    { icon: BarChart3, label: 'Analytics Overview', path: '/admin' },
    { icon: Users, label: 'Users & Roles', path: '/admin/users' },
    { icon: BookOpen, label: 'Product Catalog', path: '/admin/catalog' },
    { icon: Settings, label: 'Rules Engine', path: '/admin/rules' },
    { icon: Database, label: 'Legal & Consent', path: '/admin/legal' },
  ];

  return (
    <DashboardLayout title="System Administrator" role="Super Admin" sidebarLinks={links}>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white shadow-lg">
          <p className="text-slate-300 text-sm font-medium mb-1">Total Revenue (30d)</p>
          <h2 className="text-4xl font-bold mb-4">$142,590.00</h2>
          <div className="flex items-center text-sm font-medium text-emerald-400">
             ↑ 12.5% from last month
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <p className="text-slate-500 text-sm font-medium mb-1">Custom Orders</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">1,204</h2>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1">
            <div className="bg-indigo-500 h-1.5 rounded-full w-[65%]"></div>
          </div>
          <p className="text-xs text-slate-500">65% of total volume</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <p className="text-slate-500 text-sm font-medium mb-1">Ready-Made Orders</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">648</h2>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1">
            <div className="bg-teal-500 h-1.5 rounded-full w-[35%]"></div>
          </div>
          <p className="text-xs text-slate-500">35% of total volume</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Active Rules Engine</h3>
            <p className="text-sm text-slate-500 mt-1">Automated workflow routing criteria.</p>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              { rule: 'Auto-approve low-risk scans', status: 'Active', color: 'text-green-600 bg-green-50' },
              { rule: 'Route high-risk to Senior Orthopedic', status: 'Active', color: 'text-green-600 bg-green-50' },
              { rule: 'Flag missing questionnaire data', status: 'Active', color: 'text-green-600 bg-green-50' },
              { rule: 'Halt production on payment failure', status: 'Paused', color: 'text-amber-600 bg-amber-50' },
            ].map((item, i) => (
              <li key={i} className="p-4 flex items-center justify-between hover:bg-slate-50">
                <span className="text-sm font-medium text-slate-700">{item.rule}</span>
                <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${item.color}`}>{item.status}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Recent Audit Logs</h3>
            <p className="text-sm text-slate-500 mt-1">System-wide role actions.</p>
          </div>
          <div className="p-0">
             <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                   <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-900 font-medium">Dr. Jenkins</td>
                      <td className="p-4 text-slate-500">Approved Order #9921</td>
                      <td className="p-4 text-slate-400 text-xs">2m ago</td>
                   </tr>
                   <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-900 font-medium">System</td>
                      <td className="p-4 text-slate-500">Routed #9922 to Warehouse</td>
                      <td className="p-4 text-slate-400 text-xs">5m ago</td>
                   </tr>
                   <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-900 font-medium">Admin (You)</td>
                      <td className="p-4 text-slate-500">Updated Pricing Catalog</td>
                      <td className="p-4 text-slate-400 text-xs">1h ago</td>
                   </tr>
                </tbody>
             </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
