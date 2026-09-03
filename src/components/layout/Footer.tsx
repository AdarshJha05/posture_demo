import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Mission */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Posture</span>
            </Link>
            <p className="text-sm leading-6 text-slate-600 max-w-xs">
              Medically informed posture correction, combining low-friction retail with clinically-guided custom orders for your long-term health.
            </p>
            <div className="flex space-x-6">
              <a href="https://posture-demo-delta.vercel.app/#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">X</span>
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="https://posture-demo-delta.vercel.app/#" className="text-slate-400 hover:text-pink-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://posture-demo-delta.vercel.app/#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://posture-demo-delta.vercel.app/#" className="text-slate-400 hover:text-blue-700 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Ready-Made Store</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Custom Clinical Order</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Camera Assessment</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Enterprise Clinics</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/customer/support" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Help Center</Link></li>
                  <li><Link to="/customer/tracking" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Track Order</Link></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Returns & Exchanges</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Doctor Network</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">About Us</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Careers</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Press</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Partners</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/admin/legal" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Privacy Policy</Link></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Terms of Service</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">HIPAA Compliance</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-teal-600">Medical Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs leading-5 text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Posture, Inc. All rights reserved. Not a replacement for professional medical diagnosis.
          </p>
          <p className="text-xs leading-5 text-slate-500 mt-4 md:mt-0">
            Designed by <a href="https://rytfulmedia.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-500 underline decoration-teal-600/30 underline-offset-2 transition-all">RytfulMedia</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
