import { Link, useLocation } from 'react-router-dom';
import { 
  Activity, 
  User, 
  Stethoscope, 
  Package, 
  ShieldCheck,
  Menu
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Posture</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/customer" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${location.pathname.startsWith('/customer') ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}>
              <User className="w-4 h-4"/> Customer Portal
            </Link>
            <Link to="/doctor" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${location.pathname.startsWith('/doctor') ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}>
              <Stethoscope className="w-4 h-4"/> Clinical Review
            </Link>
            <Link to="/manager" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${location.pathname.startsWith('/manager') ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}>
              <Package className="w-4 h-4"/> Fulfillment
            </Link>
            <Link to="/admin" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${location.pathname.startsWith('/admin') ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}>
              <ShieldCheck className="w-4 h-4"/> Admin
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button className="text-slate-500 hover:text-slate-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
