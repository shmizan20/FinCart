import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, 
  Zap, 
  Star, 
  Wifi, 
  CreditCard, 
  ShieldCheck, 
  Home, 
  Banknote, 
  Briefcase, 
  PiggyBank,
  TrendingUp,
  Shield
} from 'lucide-react';

const GOALS = [
  { title: "Education", desc: "Plan a dedicated savings path for education expenses.", bg: "/Package Image/bg_education.png" },
  { title: "Marriage fund", desc: "Build a practical monthly saving plan with suitable bank products.", bg: "/Package Image/bg_marriage.png" },
  { title: "Hajj or Umrah", desc: "Plan a goal-based savings path with deposit options.", bg: "/Package Image/bg_hajj-umrah.png" },
  { title: "House", desc: "Save steadily toward a home or property purchase.", bg: "/Package Image/bg_home.png" },
  { title: "Old age savings", desc: "Compare longer-term savings and deposit products.", bg: "/Package Image/bg_oldage.png" },
  { title: "Emergency fund", desc: "Find safer savings options for money you may need quickly.", bg: "/Package Image/bg_emergency-fund.png" },
];

const TOP_PICKS_DATA = {
  'Loans': [
    { title: 'BRAC Bank Personal Loan', bank: 'BRAC Bank Limited', rate: '8.5%', type: 'Interest Rate', icon: Landmark, color: 'from-orange-50 to-orange-100', iconColor: 'text-orange-500' },
    { title: 'EBL AnyPurpose Loan', bank: 'Eastern Bank PLC', rate: '8.9%', type: 'Interest Rate', icon: Zap, color: 'from-teal-50 to-teal-100', iconColor: 'text-teal-500' },
    { title: 'City Bank Auto Loan', bank: 'City Bank Limited', rate: '9.0%', type: 'Interest Rate', icon: ShieldCheck, color: 'from-slate-100 to-slate-200', iconColor: 'text-slate-600' }
  ],
  'Credit Cards': [
    { title: 'City Alo Visa Platinum', bank: 'City Bank Limited', rate: '৳ 2,500', type: 'Annual Fee', icon: CreditCard, color: 'from-slate-100 to-slate-200', iconColor: 'text-slate-700' },
    { title: 'EBL Aqua Mastercard', bank: 'Eastern Bank PLC', rate: '৳ 1,500', type: 'Annual Fee', icon: CreditCard, color: 'from-blue-50 to-blue-100', iconColor: 'text-blue-500' },
    { title: 'SCB Signature Card', bank: 'Standard Chartered', rate: '৳ 10,000', type: 'Annual Fee', icon: CreditCard, color: 'from-emerald-50 to-emerald-100', iconColor: 'text-emerald-600' }
  ],
  'Investing': [
    { title: 'IDLC Balanced Fund', bank: 'IDLC Assets', rate: '12%', type: 'Return', icon: TrendingUp, color: 'from-purple-50 to-purple-100', iconColor: 'text-purple-500' },
    { title: 'Poribar Sanchaypatra', bank: 'Bangladesh Bank', rate: '11.5%', type: 'Interest', icon: Shield, color: 'from-emerald-50 to-emerald-100', iconColor: 'text-emerald-600' },
    { title: 'Brokerage Account', bank: 'City Brokerage', rate: '৳ 450', type: 'BO Fee', icon: Zap, color: 'from-cyan-50 to-cyan-100', iconColor: 'text-cyan-500' }
  ]
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex flex-col cursor-pointer select-none">
          <div className="flex items-center gap-1">
            <div className="flex flex-col gap-[3px] transform -skew-x-[24deg] pt-1 mr-0.5">
              <div className="w-5 h-[5px] bg-[#8B5CF6] rounded-sm translate-x-[6px]"></div>
              <div className="w-5 h-[5px] bg-[#3B82F6] rounded-sm translate-x-[3px]"></div>
              <div className="w-5 h-[5px] bg-[#10B981] rounded-sm"></div>
            </div>
            <span className="text-[26px] font-black tracking-tight text-[#2B3CA0] leading-none uppercase">finKart</span>
          </div>
          <div className="flex items-center justify-end w-full pr-1 mt-[3px]">
            <span className="text-[10px] font-extrabold text-[#2B3CA0] mr-1 leading-none uppercase tracking-tighter">by sslcommerz</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
          <a href="#products" className="hover:text-[#3582BC] transition-colors">Products</a>
          <a href="#compare" className="hover:text-[#3582BC] transition-colors">Compare</a>
          <a href="#how-it-works" className="hover:text-[#3582BC] transition-colors">How it Works</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-slate-600 font-bold hover:text-slate-900 transition-colors">Log In</button>
          <button className="btn-gradient text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg transition-all">Apply Now</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-24 lg:pt-32 pb-0 flex flex-col items-center bg-[#FAFAFC] overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false }}
      transition={{ duration: 0.6 }} 
      className="max-w-3xl mx-auto px-6 text-center relative z-20 mb-10"
    >
      <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#1F2937] leading-[1.15] mb-6">
        Manage Your Finances <br className="hidden md:block" /> Easier Than Ever
      </h1>
      <p className="text-[15px] md:text-base text-slate-500 mb-8 max-w-2xl mx-auto">
        Compare credit cards, personal loans, and high-yield savings from top Bangladeshi banks. 100% Digital & Paperless.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="btn-gradient text-white px-10 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-purple-500/20">Get started</button>
        <button className="bg-white text-slate-700 px-10 py-3.5 rounded-full text-sm font-semibold border border-gray-100 shadow-sm">Learn more</button>
      </div>
    </motion.div>
    <div className="relative w-full max-w-[1100px] mx-auto h-[260px] md:h-[350px] flex justify-center items-end">
      <div className="absolute bottom-[-100px] left-[10%] w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[110px] opacity-80 z-0"></div>
      <div className="absolute bottom-[-100px] right-[10%] w-[500px] h-[500px] bg-[#FF00FF] rounded-full blur-[110px] opacity-75 z-0"></div>
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.8 }} 
        className="hidden md:flex absolute bottom-[-45px] left-[5%] w-[400px] h-[250px] bg-gradient-to-br from-[#A5D8FF]/90 to-[#74C0FC]/80 backdrop-blur-md border border-white/80 rounded-[2rem] z-10 p-8 flex-col justify-between shadow-xl"
      >
        <div className="text-white font-bold text-xl uppercase tracking-tighter flex items-center gap-2"><Landmark /> BRAC Bank</div>
        <div className="flex justify-end"><Zap className="text-white/60 w-10 h-10" /></div>
      </motion.div>
      <motion.div 
        initial={{ x: 50, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.8 }} 
        className="hidden md:flex absolute bottom-[-45px] right-[5%] w-[400px] h-[250px] bg-gradient-to-br from-[#F8B4F8]/90 to-[#E879F9]/80 backdrop-blur-md border border-white/80 rounded-[2rem] z-10 p-8 flex-col justify-between shadow-xl"
      >
        <div className="text-white font-bold text-xl uppercase tracking-tighter text-right flex items-center justify-end gap-2">Eastern Bank <Landmark /></div>
        <div className="flex justify-start"><Zap className="text-white/60 w-10 h-10" /></div>
      </motion.div>
      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 0.8 }} 
        className="relative bottom-[-25px] w-[360px] md:w-[480px] h-[260px] md:h-[310px] bg-white rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] z-30 p-10 flex flex-col justify-between"
      >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-2xl tracking-tighter"><Star className="fill-slate-800 w-6 h-6" /> City Bank</div>
            <Wifi className="text-slate-300 w-8 h-8 rotate-90" />
          </div>
        <div className="flex justify-between items-end">
          <div className="space-y-1.5">
            <div className="text-[13px] font-bold text-slate-600 uppercase tracking-widest">MD. RAHIM ISLAM</div>
            <div className="flex gap-2 text-slate-300 text-[12px] tracking-[4px]"><span>••••</span><span>••••</span><span>••••</span><span>••••</span></div>
          </div>
          <div className="text-[13px] font-bold text-slate-600">06/24</div>
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full bg-slate-700/90 border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-slate-400/90 mix-blend-multiply border-2 border-white"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Partners = () => {
  const partners = [
    { name: "City Bank", logo: "/Bank Logo/City Bank.png" },
    { name: "BRAC Bank", logo: "/Bank Logo/Brac Bank.png" },
    { name: "EBL PLC.", logo: "/Bank Logo/Ebl Bank.png" },
    { name: "MTB Bank", logo: "/Bank Logo/MTB Bank.png" },
    { name: "SCB", logo: "/Bank Logo/SCB Bank.png" },
    { name: "Dhaka Bank", logo: "/Bank Logo/Dhaka Bank.png" },
  ];
  return (
    <section className="py-12 border-y border-gray-100 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Partnering with Leading Banks</div>
      <div className="flex w-max animate-marquee py-4">
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
            {partners.map((p, i) => (
              <img key={`${setIndex}-${i}`} src={p.logo} alt={p.name} className="h-12 md:h-16 object-contain" />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const PlanningSection = () => (
  <section id="planning" className="py-24 bg-[#FAFBFF]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-[#6366F1] font-bold text-[10px] uppercase tracking-[4px] mb-4">YOUR GOALS</p>
        <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#111827] mb-6 tracking-tight">What are you planning for?</h2>
        <p className="text-slate-500 text-[15px] md:text-lg">Choose your goal and get one clear recommendation.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {GOALS.map((goal, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8, shadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] border border-slate-100 h-[260px] p-8 flex flex-col justify-between group cursor-pointer"
          >
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img 
                    src={goal.bg} 
                    alt="" 
                    className="w-full h-full object-cover object-right-bottom group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
            </div>
            <div className="relative z-10">
                <h3 className="text-xl font-extrabold text-[#1F2937] mb-2">{goal.title}</h3>
                <p className="text-[#6B7280] text-[13px] leading-relaxed max-w-[190px] font-medium opacity-90">{goal.desc}</p>
            </div>
            <div className="relative z-10 flex items-center justify-between">
                <button className="bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white px-7 py-2.5 rounded-xl text-[13px] font-extrabold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all active:scale-95">Start</button>
                
                {/* Decorative Grid of Dots as seen in reference */}
                <div className="opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TopPicks = () => {
  const [activeTab, setActiveTab] = useState('Loans');
  return (
    <section className="py-24 bg-[#FAFAFC] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6"
        >
          <div><h2 className="text-3xl font-extrabold mb-4">Top picks for you</h2><p className="text-slate-500">Hand-picked financial products with high value.</p></div>
          <div className="inline-flex bg-slate-100 p-1 rounded-2xl border border-gray-200">
            {['Loans', 'Credit Cards', 'Investing'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-3 rounded-xl transition-all ${activeTab === tab ? 'bg-white shadow-sm text-slate-900 font-bold' : 'text-slate-500 font-semibold'}`}>{tab}</button>
            ))}
          </div>
        </motion.div>
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-4">
              {TOP_PICKS_DATA[activeTab].map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-blue-200 hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-center gap-6 w-full md:w-auto">
                      <div className={`w-20 h-20 bg-gradient-to-br ${p.color} rounded-[20px] flex items-center justify-center shadow-inner`}><Icon className={`${p.iconColor} w-10 h-10`} /></div>
                      <div><h3 className="text-xl font-bold text-slate-800">{p.title}</h3><p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{p.bank}</p></div>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto gap-12 border-t md:border-t-0 pt-6 md:pt-0 border-gray-50">
                      <div className="text-right"><p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">{p.type}</p><p className="text-3xl font-black text-slate-900">{p.rate}</p></div>
                      <button className="btn-gradient text-white px-10 py-3.5 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all">Apply Now</button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="text-center mt-12"><button className="text-[#3582BC] font-bold border border-blue-100 bg-white px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-sm">View all options</button></div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-gray-50 pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div>
        <div className="flex flex-col mb-6">
          <div className="flex items-center gap-1">
            <div className="flex flex-col gap-[3px] transform -skew-x-[24deg] pt-1 mr-0.5"><div className="w-4 h-[4px] bg-[#8B5CF6] rounded-sm translate-x-[5px]"></div><div className="w-4 h-[4px] bg-[#3B82F6] rounded-sm translate-x-[3px]"></div><div className="w-4 h-[4px] bg-[#10B981] rounded-sm"></div></div>
            <span className="text-2xl font-black tracking-tight text-[#2B3CA0] leading-none uppercase">finKart</span>
          </div>
          <div className="flex items-center justify-end w-full pr-1 mt-1"><span className="text-[8px] font-extrabold text-[#2B3CA0] mr-1 uppercase">by sslcommerz</span></div>
        </div>
        <p className="text-slate-400 text-sm font-medium">The most trusted financial marketplace in Bangladesh.</p>
      </div>
      {['Products', 'Company', 'Legal'].map((title, idx) => (
        <div key={idx}>
          <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-widest text-[10px]">{title}</h4>
          <ul className="text-slate-500 space-y-3 text-sm font-semibold">
            {title === 'Products' && <><li>Credit Cards</li><li>Personal Loans</li><li>Fixed Deposits</li></>}
            {title === 'Company' && <><li>About Us</li><li>Partner with us</li><li>Contact</li></>}
            {title === 'Legal' && <><li>Privacy Policy</li><li>Terms</li><li>FAQ</li></>}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gray-50 text-xs text-slate-400 font-bold uppercase tracking-widest">&copy; 2026 FinCart by SSL Wireless. All rights reserved.</div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <PlanningSection />
      <TopPicks />
      <Footer />
    </div>
  );
}
