import { 
  ArrowRight,
  Camera,
  CheckCircle2,
  Shield,
  Activity,
  ShoppingBag
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-200 to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="inline-flex items-center space-x-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-600/20">
                <span>Clinically Guided Posture Care</span>
              </span>
            </div>
            <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-tight">
              Medical-grade posture correction, <span className="text-teal-600">tailored for you.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Posture combines low-friction retail with clinically-guided custom orders. Choose a ready-made support, or take our AI camera assessment for a custom-built solution reviewed by certified doctors.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 flex items-center gap-2 transition-all">
                <Camera className="w-5 h-5"/> Start Clinical Assessment
              </button>
              <button className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 hover:text-teal-600 transition-all">
                Shop Ready-Made <ArrowRight className="w-4 h-4"/>
              </button>
            </div>
          </div>
          
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="relative w-[360px] h-[500px] bg-white rounded-2xl p-2 border border-slate-200 shadow-2xl">
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-200 rounded-full"></div>
               <div className="w-full h-full bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex flex-col">
                  <div className="bg-white p-4 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-semibold text-sm">Camera Assessment</span>
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative">
                     <div className="absolute inset-4 border-2 border-dashed border-teal-300 rounded-lg opacity-50"></div>
                     <Camera className="w-12 h-12 text-teal-600 mb-4" />
                     <h3 className="font-bold text-slate-900 mb-2">Align your shoulders</h3>
                     <p className="text-sm text-slate-500">Stand straight within the frame. Our AI is capturing 12 key posture metrics.</p>
                  </div>
                  <div className="bg-white p-4 border-t border-slate-100">
                    <button className="w-full bg-teal-600 text-white rounded-lg py-2.5 text-sm font-semibold">Capture Posture</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Path Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Two ways to better health</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">Choose the path that works best for your needs, whether you want immediate support or a clinically tailored solution.</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Custom Path */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-left relative overflow-hidden group hover:border-teal-300 transition-all">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all transform group-hover:scale-110">
                <Activity className="w-32 h-32 text-teal-600" />
              </div>
              <span className="bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-6 inline-block">Recommended</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Clinical Order</h3>
              <ul className="space-y-4 mb-8 relative z-10">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"/> <span>AI camera-based posture capture</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"/> <span>Detailed lifestyle questionnaire</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"/> <span>Doctor review & clinical report</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"/> <span>Bespoke corrector manufacturing</span></li>
              </ul>
              <button className="w-full bg-slate-900 text-white rounded-xl py-3 font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                Start Assessment <ArrowRight className="w-4 h-4"/>
              </button>
            </div>

            {/* Ready Made Path */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-left shadow-sm hover:shadow-md transition-all">
              <div className="h-6 mb-6"></div> {/* Spacer to align headers */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready-Made Retail</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"/> <span>Standardized ergonomic sizes</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"/> <span>Fast, low-friction checkout</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"/> <span>Immediate next-day dispatch</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"/> <span>30-day money-back guarantee</span></li>
              </ul>
              <button className="w-full bg-white border-2 border-slate-200 text-slate-900 rounded-xl py-3 font-semibold hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                Browse Catalog <ShoppingBag className="w-4 h-4"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-4">
              <Shield className="w-8 h-8 text-teal-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Medically Informed</h4>
              <p className="text-slate-400 text-sm">Every custom order is reviewed and approved by a certified professional.</p>
            </div>
            <div className="p-4">
              <Activity className="w-8 h-8 text-teal-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Data-Driven Design</h4>
              <p className="text-slate-400 text-sm">Our AI analyzes structural alignment to recommend the perfect fit.</p>
            </div>
            <div className="p-4">
              <CheckCircle2 className="w-8 h-8 text-teal-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Full Audit Oversight</h4>
              <p className="text-slate-400 text-sm">Strict QA and role-based workflows ensure clinical safety.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
