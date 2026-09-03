import { Link, useLocation } from 'react-router-dom';
import { 
  Activity, 
  User, 
  Stethoscope, 
  Package, 
  ShieldCheck,
  Menu,
  ChevronDown
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="bg-gradient-to-tr from-teal-600 to-teal-500 p-2 rounded-xl shadow-sm group-hover:shadow transition-all">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">Posture</span>
            </Link>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/customer" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${location.pathname.startsWith('/customer') ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}>
              <User className="w-4 h-4"/> Customer Portal
            </Link>
            
            {/* Workspaces Dropdown Simulation */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors py-2">
                Internal Workspaces <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-transform group-hover:-rotate-180 duration-300"/>
              </div>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 flex flex-col gap-1">
                   <Link to="/doctor" className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                     <div className="bg-blue-50 text-blue-600 p-2 rounded-lg shrink-0"><Stethoscope className="w-4 h-4"/></div>
                     <div>
                       <p className="text-sm font-semibold text-slate-900">Clinical Review</p>
                       <p className="text-xs text-slate-500 mt-0.5">Doctor case queue</p>
                     </div>
                   </Link>
                   <Link to="/manager" className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                     <div className="bg-amber-50 text-amber-600 p-2 rounded-lg shrink-0"><Package className="w-4 h-4"/></div>
                     <div>
                       <p className="text-sm font-semibold text-slate-900">Fulfillment</p>
                       <p className="text-xs text-slate-500 mt-0.5">Warehouse management</p>
                     </div>
                   </Link>
                   <Link to="/admin" className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                     <div className="bg-purple-50 text-purple-600 p-2 rounded-lg shrink-0"><ShieldCheck className="w-4 h-4"/></div>
                     <div>
                       <p className="text-sm font-semibold text-slate-900">Super Admin</p>
                       <p className="text-xs text-slate-500 mt-0.5">System overview</p>
                     </div>
                   </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side CTA */}
          <div className="hidden md:flex items-center space-x-4">
             <Link to="/customer" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Sign In</Link>
             <Link to="/customer" className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2.5 px-5 rounded-full shadow-sm transition-all">Get Started</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button className="text-slate-500 hover:text-slate-900 p-2 rounded-md hover:bg-slate-50">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
