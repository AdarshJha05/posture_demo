import { 
  ArrowRight,
  Camera,
  CheckCircle2,
  Shield,
  Activity,
  ShoppingBag,
  Stethoscope,
  Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-200 to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="inline-flex items-center space-x-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-bold text-teal-700 ring-1 ring-inset ring-teal-600/20">
                <Activity className="w-4 h-4"/> <span>Clinically Guided Posture Care</span>
              </span>
            </div>
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-[1.1]">
              Medical-grade posture correction, <span className="text-teal-600 relative whitespace-nowrap">
                <span className="relative z-10">tailored for you.</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 font-medium">
              Posture combines low-friction retail with clinically-guided custom orders. Choose a ready-made support, or take our AI camera assessment for a custom-built solution reviewed by certified doctors.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link to="/signup" className="w-full sm:w-auto rounded-xl bg-teal-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-600/30 hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
                <Camera className="w-5 h-5"/> Start AI Assessment
              </Link>
              <a href="#paths" className="w-full sm:w-auto text-base font-bold leading-6 text-slate-900 flex items-center justify-center gap-2 hover:text-teal-600 transition-all p-4">
                Explore Options <ArrowRight className="w-5 h-5"/>
              </a>
            </div>
            <div className="mt-10 flex items-center gap-x-6 text-sm text-slate-500 font-medium">
               <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600"/> Doctor Approved</div>
               <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600"/> AI Powered</div>
            </div>
          </div>
          
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="relative w-full max-w-[400px] h-[550px] bg-white rounded-3xl p-3 border border-slate-200 shadow-2xl mx-auto">
               <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-200 rounded-full z-20"></div>
               <div className="w-full h-full bg-slate-900 rounded-2xl overflow-hidden relative flex flex-col group">
                  
                  {/* Simulated Camera Feed Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop" 
                    alt="Posture Scan Demo" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  
                  {/* UI Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/90"></div>
                  
                  <div className="relative z-10 p-5 flex items-center justify-between">
                    <span className="font-semibold text-sm text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                      <Camera className="w-3.5 h-3.5"/> Scan Active
                    </span>
                    <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                  </div>
                  
                  <div className="flex-1 relative z-10">
                     {/* Scanning Grid & Skeleton overlay simulation */}
                     <div className="absolute inset-x-8 top-1/4 bottom-1/3 border-2 border-dashed border-teal-400/60 rounded-xl">
                        <div className="absolute top-0 w-full h-0.5 bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,1)] animate-[scan_2.5s_ease-in-out_infinite]"></div>
                     </div>
                     <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        <div className="w-0.5 h-24 bg-teal-400/50"></div>
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                     </div>
                  </div>
                  
                  <div className="relative z-10 p-6 text-center">
                    <h3 className="font-bold text-white text-lg mb-1">Align your shoulders</h3>
                    <p className="text-sm text-slate-300 mb-5">Stand straight within the frame. Our AI is capturing 12 key posture metrics.</p>
                    <button className="w-full bg-teal-500 text-white rounded-xl py-3.5 text-sm font-bold shadow-lg hover:bg-teal-400 transition-colors">
                      Complete Scan
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Path Section */}
      <div id="paths" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4">Two ways to better health</h2>
            <p className="text-lg text-slate-600">Choose the path that works best for your needs, whether you want immediate support or a clinically tailored solution.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Custom Path */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="h-48 sm:h-64 w-full relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173ff9e5944?q=80&w=1000&auto=format&fit=crop" 
                  alt="Doctor reviewing tablet" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-teal-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full mb-2 inline-block">Recommended</span>
                  <h3 className="text-2xl font-bold text-white">Custom Clinical Order</h3>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col text-left">
                <p className="text-slate-600 mb-6 font-medium">For chronic pain and precise anatomical alignment. Requires our 2-minute AI camera scan.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3"><Stethoscope className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"/> <span className="text-slate-700 font-medium">Doctor review & clinical report included</span></li>
                  <li className="flex items-start gap-3"><Camera className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"/> <span className="text-slate-700 font-medium">AI camera-based posture capture</span></li>
                  <li className="flex items-start gap-3"><Activity className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"/> <span className="text-slate-700 font-medium">Bespoke corrector manufacturing</span></li>
                </ul>
                <Link to="/signup" className="w-full bg-slate-900 text-white rounded-xl py-3.5 font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  Start Assessment <ArrowRight className="w-5 h-5"/>
                </Link>
              </div>
            </div>

            {/* Ready Made Path */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="h-48 sm:h-64 w-full relative overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1608248593801-789a87d605c1?q=80&w=1000&auto=format&fit=crop" 
                  alt="Premium package box" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white border border-white/30 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full mb-2 inline-block">Fastest</span>
                  <h3 className="text-2xl font-bold text-white">Ready-Made Retail</h3>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col text-left">
                <p className="text-slate-600 mb-6 font-medium">High-quality ergonomic support in standard sizes. Perfect for general fatigue and daily wear.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3"><Truck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"/> <span className="text-slate-700 font-medium">Immediate next-day dispatch</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"/> <span className="text-slate-700 font-medium">Standardized ergonomic sizing</span></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"/> <span className="text-slate-700 font-medium">30-day money-back guarantee</span></li>
                </ul>
                <button className="w-full bg-white border-2 border-slate-200 text-slate-900 rounded-xl py-3 font-bold hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                  Browse Catalog <ShoppingBag className="w-5 h-5"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Data background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Engineered for Clinical Safety</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Our platform combines cutting-edge AI with strict medical oversight to ensure your custom product is perfectly suited to your body.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <Shield className="w-10 h-10 text-teal-400 mx-auto mb-6" />
              <h4 className="text-white text-xl font-bold mb-3">Medically Informed</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Every custom order is reviewed, vetted, and explicitly approved by a certified professional before manufacturing begins.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <Activity className="w-10 h-10 text-teal-400 mx-auto mb-6" />
              <h4 className="text-white text-xl font-bold mb-3">Data-Driven Design</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Our proprietary AI scans 12 distinct structural alignment points to recommend the perfect fit parameters for your brace.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors">
              <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto mb-6" />
              <h4 className="text-white text-xl font-bold mb-3">Full Audit Oversight</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Strict quality assurance and role-based workflows ensure clinical safety across patient, doctor, and warehouse interactions.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
