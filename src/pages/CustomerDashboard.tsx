import DashboardLayout from '../components/layout/DashboardLayout';
import { PackageSearch, FileText, LifeBuoy, MapPin } from 'lucide-react';

const CustomerDashboard = () => {
  const links = [
    { icon: PackageSearch, label: 'My Orders', path: '/customer' },
    { icon: MapPin, label: 'Tracking', path: '/customer/tracking' },
    { icon: FileText, label: 'Clinical Reports', path: '/customer/reports' },
    { icon: LifeBuoy, label: 'Support Tickets', path: '/customer/support' },
  ];

  return (
    <DashboardLayout title="My Orders" role="Customer" sidebarLinks={links}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">Active Orders</h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="mb-4 sm:mb-0">
                  <h4 className="font-bold text-slate-900 text-lg">Custom Posture Corrector Pro</h4>
                  <p className="text-sm text-slate-500 mt-1">Order #ORD-2938 • Placed Oct 12, 2026</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    Doctor Review Pending
                  </span>
                  <button className="mt-3 text-sm text-teal-600 font-medium hover:text-teal-700">View Details</button>
                </div>
              </div>
              
              <div className="mt-8 border-t border-slate-200 pt-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                  <div className="mb-4 sm:mb-0">
                    <h4 className="font-bold text-slate-900 text-lg">Standard Support Brace</h4>
                    <p className="text-sm text-slate-500 mt-1">Order #ORD-1192 • Placed Sep 04, 2026</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      Delivered
                    </span>
                    <button className="mt-3 text-sm text-teal-600 font-medium hover:text-teal-700">Buy Again</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Assessment Status</h3>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="flex-1">
                     <p className="text-sm font-semibold text-slate-900">Posture Capture</p>
                     <p className="text-xs text-slate-500">Completed Oct 12</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="flex-1">
                     <p className="text-sm font-semibold text-slate-900">Doctor Review</p>
                     <p className="text-xs text-slate-500">In Progress...</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 opacity-30">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="flex-1">
                     <p className="text-sm font-semibold text-slate-900">Manufacturing</p>
                     <p className="text-xs text-slate-500">Pending</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
