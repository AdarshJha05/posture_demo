import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Activity, 
  ShoppingCart, 
  Stethoscope, 
  Package, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Camera
} from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 tracking-tight">Posture</span>
          </Link>
        </div>
        <div className="hidden sm:flex items-center space-x-6">
          <Link to="/customer" className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm font-medium"><ShoppingCart className="w-4 h-4"/> Customer</Link>
          <Link to="/doctor" className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm font-medium"><Stethoscope className="w-4 h-4"/> Doctor</Link>
          <Link to="/manager" className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm font-medium"><Package className="w-4 h-4"/> Manager</Link>
          <Link to="/admin" className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm font-medium"><ShieldCheck className="w-4 h-4"/> Super Admin</Link>
        </div>
      </div>
    </div>
  </nav>
);

const LandingPage = () => (
  <div className="bg-white">
    {/* Hero Section */}
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-50/20">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 items-center">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Better posture, built just for you.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Posture offers clinically-backed posture correctors. Choose our fast ready-made option or complete a guided camera assessment for a custom-built product reviewed by certified doctors.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 flex items-center gap-2">
              Start Custom Assessment <Camera className="w-4 h-4"/>
            </button>
            <button className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-primary-600">
              Buy Ready-Made <ArrowRight className="w-4 h-4"/>
            </button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none relative bg-gray-100 rounded-xl p-8 border border-gray-200 shadow-xl">
             <div className="w-[300px] h-[400px] bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center justify-center text-center">
                <Camera className="w-16 h-16 text-primary-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Posture Scan Active</h3>
                <p className="text-sm text-gray-500">Stand straight and face your camera to begin your clinical assessment.</p>
             </div>
          </div>
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Clinically Guided</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need for better health</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              { name: 'Custom Camera Assessment', desc: 'Submit posture data and a lifestyle questionnaire in minutes.' },
              { name: 'Doctor Reviewed', desc: 'A real doctor reviews your submission and approves your custom order.' },
              { name: 'Trusted Fulfillment', desc: 'Orders are expertly crafted, tracked, and delivered to your door.' },
            ].map((feature) => (
              <div key={feature.name} className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircle2 className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.desc}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const DashboardLayout = ({ title, role, children, icon: Icon }: any) => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-50 rounded-lg">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              <p className="text-sm text-gray-500">{role} Workspace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </div>
  </div>
);

const CustomerDashboard = () => (
  <DashboardLayout title="My Orders" role="Customer" icon={ShoppingCart}>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-medium border-b pb-4 mb-4">Active Orders</h3>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div>
              <p className="font-medium text-gray-900">Custom Posture Corrector Pro</p>
              <p className="text-sm text-gray-500">Order #ORD-2938 • Placed Oct 12</p>
            </div>
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Doctor Review
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-6">
         <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-medium border-b pb-4 mb-4">Clinical Report</h3>
          <p className="text-sm text-gray-500 mb-4">Your posture assessment is currently being reviewed by Dr. Sarah Jenkins.</p>
          <button className="w-full rounded bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-400 cursor-not-allowed">
            Download Report (Pending)
          </button>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

const DoctorDashboard = () => (
  <DashboardLayout title="Case Queue" role="Doctor" icon={Stethoscope}>
    <div className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[
            { name: 'John Doe', date: '2 hours ago', risk: 'Medium' },
            { name: 'Alice Smith', date: '5 hours ago', risk: 'High' },
          ].map((patient, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${patient.risk === 'High' ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-800'}`}>
                  {patient.risk}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-primary-600 hover:text-primary-900">Review Scans</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </DashboardLayout>
);

const ManagerDashboard = () => (
  <DashboardLayout title="Fulfillment Center" role="Warehouse Manager" icon={Package}>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {[
        { label: 'To Pack', value: '12' },
        { label: 'Ready to Dispatch', value: '8' },
        { label: 'Out of Stock', value: '2' },
        { label: 'Returns', value: '0' }
      ].map(stat => (
        <div key={stat.label} className="bg-white shadow-sm border border-gray-200 rounded-xl p-6">
          <p className="text-sm font-medium text-gray-500 truncate">{stat.label}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-medium border-b pb-4 mb-4">Pick and Pack Queue</h3>
      <p className="text-sm text-gray-500">No priority custom orders pending dispatch.</p>
    </div>
  </DashboardLayout>
);

const AdminDashboard = () => (
  <DashboardLayout title="System Overview" role="Super Admin" icon={ShieldCheck}>
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
      {[
        { label: 'Total Revenue (30d)', value: '$45,231' },
        { label: 'Custom Orders', value: '342' },
        { label: 'Ready-Made Orders', value: '891' }
      ].map(stat => (
        <div key={stat.label} className="bg-white shadow-sm border border-gray-200 rounded-xl p-6">
          <p className="text-sm font-medium text-gray-500 truncate">{stat.label}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-medium border-b pb-4 mb-4">Rules Engine</h3>
        <ul className="space-y-3">
           <li className="flex justify-between text-sm"><span>Auto-approve low risk scans</span> <span className="text-green-600 font-medium">Active</span></li>
           <li className="flex justify-between text-sm"><span>Route high risk to Dr. Jenkins</span> <span className="text-green-600 font-medium">Active</span></li>
        </ul>
      </div>
      <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-medium border-b pb-4 mb-4">User Management</h3>
        <button className="w-full rounded bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-100">
          Manage Doctors & Staff
        </button>
      </div>
    </div>
  </DashboardLayout>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/customer" element={<CustomerDashboard />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/manager" element={<ManagerDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
