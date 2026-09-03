import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Users, FileHeart, CheckCircle, Search } from 'lucide-react';

const DoctorDashboard = () => {
  const links = [
    { icon: Users, label: 'Case Queue', path: '/doctor' },
    { icon: FileHeart, label: 'Questionnaire Reviews', path: '/doctor/reviews' },
    { icon: CheckCircle, label: 'Approved Orders', path: '/doctor/approved' },
  ];

  return (
    <DashboardLayout title="Clinical Case Queue" role="Doctor" sidebarLinks={links}>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="relative w-64">
             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
             <input type="text" placeholder="Search patient IDs..." className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50">Filter</button>
            <button className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700">Refresh Queue</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="px-6 py-4">Patient ID</th>
                <th className="px-6 py-4">Submission Time</th>
                <th className="px-6 py-4">AI Risk Level</th>
                <th className="px-6 py-4">Questionnaire</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {[
                { id: 'PT-8829', time: '10 mins ago', risk: 'High', flag: 'Spinal Curvature' },
                { id: 'PT-4102', time: '45 mins ago', risk: 'Medium', flag: 'Ergonomic Pain' },
                { id: 'PT-9931', time: '2 hours ago', risk: 'Low', flag: 'None' },
              ].map((patient, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{patient.id}</td>
                  <td className="px-6 py-4">{patient.time}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold
                      ${patient.risk === 'High' ? 'bg-red-100 text-red-700' : 
                        patient.risk === 'Medium' ? 'bg-amber-100 text-amber-700' : 
                        'bg-green-100 text-green-700'}`}>
                      {patient.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                     <span className="text-slate-500 flex items-center gap-1">
                       {patient.flag !== 'None' && <FileHeart className="w-4 h-4 text-amber-500"/>} {patient.flag}
                     </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-teal-600 font-semibold hover:text-teal-800">Review Case</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">My Shifts</h3>
            <p className="text-sm text-slate-500 mb-4">You have 14 cases pending in your queue today.</p>
            <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
              <div className="bg-teal-600 h-2 rounded-full w-[45%]"></div>
            </div>
            <p className="text-xs text-slate-500 text-right">45% Completion Rate</p>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
