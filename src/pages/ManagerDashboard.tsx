import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { PackageSearch, Archive, Truck, CornerUpLeft } from 'lucide-react';

const ManagerDashboard = () => {
  const links = [
    { icon: PackageSearch, label: 'Fulfillment Queue', path: '/manager' },
    { icon: Archive, label: 'Stock & Inventory', path: '/manager/stock' },
    { icon: Truck, label: 'Dispatch', path: '/manager/dispatch' },
    { icon: CornerUpLeft, label: 'Returns', path: '/manager/returns' },
  ];

  const stats = [
    { label: 'To Pack (Custom)', value: '14', color: 'text-indigo-600' },
    { label: 'To Pack (Ready)', value: '42', color: 'text-slate-900' },
    { label: 'Ready for Dispatch', value: '8', color: 'text-teal-600' },
    { label: 'Pending Returns', value: '2', color: 'text-amber-600' },
  ];

  return (
    <DashboardLayout title="Fulfillment Center" role="Manager" sidebarLinks={links}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <p className="text-sm font-medium text-slate-500 mb-2">{stat.label}</p>
            <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900">Priority Pick-and-Pack Queue</h3>
          <button className="text-sm font-medium text-teal-600 hover:text-teal-700">View All</button>
        </div>
        <div className="p-0">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">SLA Time</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { id: '#ORD-9921', type: 'Custom', items: '1x Custom Pro (Size L)', sla: '2 hrs left', slaColor: 'text-red-600' },
                { id: '#ORD-9922', type: 'Custom', items: '1x Custom Basic (Size M)', sla: '4 hrs left', slaColor: 'text-amber-600' },
                { id: '#ORD-9923', type: 'Ready-Made', items: '2x Standard Brace (Size S)', sla: '24 hrs left', slaColor: 'text-green-600' },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">{order.id}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${order.type === 'Custom' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700'}`}>
                      {order.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">{order.items}</td>
                  <td className={`px-6 py-4 font-medium ${order.slaColor}`}>{order.sla}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800">
                      Start Packing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManagerDashboard;
