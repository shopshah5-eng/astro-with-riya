"use client"

import {
  ArrowRight,
  Menu,
  Play,
  Shield,
  Star,
  Sparkles,
  Heart,
  Briefcase,
  House,
  Hash,
  X,
  Quote,
  Loader2
} from "lucide-react"
import { useState } from "react"

const INSTAGRAM_LINK = "https://www.instagram.com/astrowithriya/"

const services = [
  { title: "Kundli Reading", desc: "Detailed analysis of your birth chart", icon: <Sparkles size={28} strokeWidth={1.5} /> },
  { title: "Marriage Matching", desc: "Kundli matching for happy married life", icon: <Heart size={28} strokeWidth={1.5} /> },
  { title: "Name Correction", desc: "Correct your name, change your life", icon: <Star size={28} strokeWidth={1.5} /> },
  { title: "Vastu Consultation", desc: "Bring positive energy into your space", icon: <House size={28} strokeWidth={1.5} /> },
  { title: "Career Guidance", desc: "Find the right path for your success", icon: <Briefcase size={28} strokeWidth={1.5} /> },
  { title: "Numerology", desc: "Discover the power of numbers", icon: <Hash size={28} strokeWidth={1.5} /> },
]

const reels = [
  { topText: "CHANGE YOUR", bottomText: "NAME", views: "18.2K", highlight: "text-red-500" },
  { topText: "Pooja Room", bottomText: "Mistakes", views: "22.1K", highlight: "text-red-500" },
  { topText: "Signs of", bottomText: "Evil Eye", views: "31.4K", highlight: "text-white" },
  { topText: "Zodiac Signs", bottomText: "Anger Issues", views: "16.7K", highlight: "text-yellow-500" },
  { topText: "When will", bottomText: "Money Come?", views: "27.3K", highlight: "text-yellow-500" },
  { topText: "Never Keep These", bottomText: "Things at Home", views: "19.8K", highlight: "text-red-500" },
]

const testimonials = [
  { name: "Neha Sharma", img: "/avatar-neha.png", text: "Diva Pratigya ma'am guided me at the right time. Her predictions were accurate and remedies really changed my life." },
  { name: "Rohit Mehta", img: "/avatar-rohit.png", text: "The name correction suggested by ma'am brought immense positivity and success in my business." },
  { name: "Anjali Verma", img: "/avatar-anjali.png", text: "Best astrology consultation I have ever had. She is professional, kind and truly gifted." },
]

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  // Chat State
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Gemini API Caller
  const askQuestion = async () => {
    if (!question.trim()) return

    setIsLoading(true)
    setAnswer("Consulting the stars...")

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })

      const data = await res.json()

      if (res.ok) {
        setAnswer(data.answer)
      } else {
        setAnswer(data.error || "The stars are clouded. Please try again.")
      }
    } catch (error) {
      setAnswer("A mystical interference occurred. Please check your connection.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="bg-[#050505] text-white overflow-x-hidden font-sans relative">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100svh] flex flex-col bg-[#050505]">
        
        {/* --- LAYER 0: BACKGROUND IMAGE --- */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505] z-10" />
            <img src="/hero-woman.png" className="w-full h-full object-cover object-center opacity-60 mix-blend-lighten" alt="Astro Riya" />
          </div>

          <div className="hidden lg:block absolute top-0 right-0 w-[75%] h-full pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-10" />
            <img src="/hero-woman.png" className="w-full h-full object-cover object-right opacity-80 mix-blend-lighten" alt="Astro Riya" />
          </div>
        </div>

        {/* --- LAYER 10: NAVBAR --- */}
        <nav className="relative z-[50] flex items-center justify-between px-6 lg:px-16 py-6 max-w-[1600px] w-full mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 text-[#d4af37]"><Sparkles size={40} strokeWidth={1} /></div>
            <div>
              <h1 className="text-xl lg:text-2xl text-[#d4af37] font-serif tracking-wide">Astro with Riya</h1>
              <p className="tracking-[0.3em] text-[#b8860b] text-[10px] mt-1 font-medium">ASTROLOGER</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[15px]">
            <a href="#" className="text-[#d4af37] border-b border-[#d4af37] pb-1">Home</a>
            <a href="#about" className="text-gray-300 hover:text-[#d4af37] transition">About</a>
            <a href="#services" className="text-gray-300 hover:text-[#d4af37] transition">Services</a>
            <a href="#tools" className="text-gray-300 hover:text-[#d4af37] transition">Tools</a>
            <a href="#reels" className="text-gray-300 hover:text-[#d4af37] transition">Reels</a>
            <a href="#testimonials" className="text-gray-300 hover:text-[#d4af37] transition">Testimonials</a>
          </div>

          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#4a0d1e] to-[#72122c] border border-yellow-700/40 hover:brightness-110 transition text-sm font-medium shadow-[0_0_15px_rgba(114,18,44,0.4)]">
            Book Consultation <ArrowRight size={16} />
          </a>
        </nav>

        {/* --- AGGRESSIVELY POSITIONED MOBILE MENU BUTTON --- */}
        <button 
          onClick={() => setMenuOpen(true)} 
          className="lg:hidden absolute top-6 right-6 z-[99999] text-[#d4af37] p-2 bg-black/20 rounded-lg backdrop-blur-sm border border-[#d4af37]/20"
        >
          <Menu size={32} className="pointer-events-none" />
        </button>

        {/* --- LAYER 10: HERO TEXT --- */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-16 pb-16 lg:pb-20 max-w-[1600px] w-full mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4 lg:mb-6">
                <div className="h-px w-8 bg-[#d4af37]"></div>
                <p className="uppercase tracking-[0.25em] text-[#d4af37] text-xs lg:text-sm font-semibold">Welcome To A World Of</p>
            </div>

            <h1 className="font-serif leading-[1.05] drop-shadow-2xl">
              <span className="block text-[48px] sm:text-[64px] lg:text-[86px] text-white font-normal">Ancient Wisdom,</span>
              <span className="block text-[#d4af37] text-[48px] sm:text-[64px] lg:text-[86px] mt-2 font-normal">Modern Guidance.</span>
            </h1>

            <p className="mt-6 lg:mt-8 text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg font-light text-shadow-sm">
              Decode your destiny, align your energy and manifest the life you truly desire.
            </p>

            <div className="flex flex-wrap gap-4 lg:gap-5 mt-8 lg:mt-10">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 lg:px-8 lg:py-4 rounded-md bg-gradient-to-r from-[#4a0d1e] to-[#72122c] border border-[#d4af37]/40 flex items-center gap-3 text-sm font-medium hover:brightness-110 transition shadow-[0_0_20px_rgba(114,18,44,0.3)]">
                Book Consultation <ArrowRight size={18} />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 lg:px-8 lg:py-4 rounded-md border border-[#d4af37]/40 flex items-center gap-3 text-sm font-medium text-gray-200 hover:bg-[#d4af37]/10 transition bg-black/30 backdrop-blur-sm">
                <Play size={18} className="text-[#d4af37]" /> Watch Reels
              </a>
            </div>

            <div className="hidden lg:flex flex-wrap items-center gap-8 lg:gap-12 mt-16 text-xs text-gray-300 font-medium">
              {[
                { label: "Trusted by\n5000+ Clients", icon: <Shield className="w-5 h-5 text-[#d4af37]" /> },
                { label: "Accurate\nPredictions", icon: <Sparkles className="w-5 h-5 text-[#d4af37]" /> },
                { label: "Private &\nConfidential", icon: <Shield className="w-5 h-5 text-[#d4af37]" /> },
                { label: "100%\nSatisfied", icon: <Star className="w-5 h-5 text-[#d4af37]" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 border border-[#d4af37]/30 rounded-full bg-black/40 backdrop-blur-md">{item.icon}</div>
                  <p className="whitespace-pre-line leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* --- FULLSCREEN MOBILE MENU OVERLAY --- */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999999] bg-[#050505] flex flex-col items-center justify-center gap-8 text-2xl font-serif">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-[#d4af37] p-4 outline-none" 
          >
            <X size={40} className="pointer-events-none" />
          </button>
          
          <a href="#" onClick={() => setMenuOpen(false)} className="text-[#d4af37] p-2">Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-300 p-2">Services</a>
          <a href="#tools" onClick={() => setMenuOpen(false)} className="text-gray-300 p-2">Tools</a>
          <a href="#reels" onClick={() => setMenuOpen(false)} className="text-gray-300 p-2">Reels</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-gray-300 p-2">Testimonials</a>
        </div>
      )}

      {/* CURVED DIVIDER LINE */}
      <div className="w-full flex justify-center py-8 relative z-20 bg-[#050505]">
        <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent relative">
           <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
        </div>
      </div>
      
      {/* SERVICES */}
      <section id="services" className="px-6 lg:px-16 py-10 lg:py-16 max-w-[1400px] mx-auto relative z-20 bg-[#050505]">
        <div className="text-center">
          <p className="uppercase tracking-[0.25em] text-[#d4af37] text-xs font-semibold">MY SPECIALIZATIONS</p>
          <div className="flex justify-center lg:justify-between items-end mt-4">
             <h2 className="font-serif text-3xl lg:text-4xl text-white">Personalized solutions for every aspect of your life</h2>
             <a href="#services" className="hidden lg:flex items-center gap-2 text-sm border border-[#d4af37]/30 px-5 py-2 rounded-md hover:bg-[#d4af37]/10 transition text-gray-300">
                View All Services <ArrowRight size={14}/>
             </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10 lg:mt-14">
          {services.map((service) => (
            <div key={service.title} className="group bg-[#0a0a0a] border border-[#d4af37]/20 rounded-xl p-6 text-center hover:border-[#d4af37]/60 transition-all">
              <div className="w-14 h-14 mx-auto rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-5 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-serif text-lg text-[#d4af37] mb-2">{service.title}</h3>
              <p className="text-gray-400 text-[13px] mb-5 min-h-[40px]">{service.desc}</p>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider hover:text-white transition">
                Book Now <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ASK AI - UPDATED WITH REAL API CALL */}
      <section id="tools" className="px-6 lg:px-16 py-10 lg:py-16 relative z-20 bg-[#050505]">
        <div className="max-w-[1000px] mx-auto bg-[#0a0a0a] border border-[#d4af37]/20 rounded-2xl p-6 sm:p-8 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
          <div className="relative z-10 text-center">
            <p className="uppercase tracking-[0.2em] text-[#d4af37] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2">
              <Star size={16} /> ASK ASTRO WITH RIYA
            </p>
            <p className="text-gray-300 text-base lg:text-lg mt-4">Get personalized insights to your life's important questions.</p>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-4 mt-8 max-w-3xl mx-auto">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && askQuestion()}
              placeholder="Ask your question to the stars..."
              disabled={isLoading}
              className="flex-1 bg-[#141414] border border-[#d4af37]/30 rounded-lg px-6 py-4 outline-none focus:border-[#d4af37] transition text-sm text-white placeholder:text-gray-500 disabled:opacity-50"
            />
            <button 
              onClick={askQuestion} 
              disabled={isLoading || !question.trim()}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#4a0d1e] to-[#72122c] border border-[#d4af37]/30 flex items-center justify-center gap-2 font-medium hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : "Ask Now"} 
              {!isLoading && <ArrowRight size={16} />}
            </button>
          </div>

          {answer && (
            <div className="relative z-10 mt-8 max-w-3xl mx-auto border border-[#d4af37]/30 rounded-lg p-6 bg-[#141414]">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-[#d4af37] w-5 h-5"/>
                <p className="text-[#d4af37] font-serif text-lg">Astro Riya</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
            </div>
          )}
        </div>
      </section>

      {/* REELS SECTION */}
      <section id="reels" className="px-6 lg:px-16 py-10 lg:py-16 max-w-[1400px] mx-auto relative z-20 bg-[#050505]">
        <div className="flex items-end justify-between text-center lg:text-left">
          <div className="w-full lg:w-auto">
            <p className="uppercase tracking-[0.2em] text-[#d4af37] text-xs font-semibold">TRENDING REELS</p>
            <h2 className="font-serif text-3xl lg:text-4xl mt-3 text-white">Short insights to inspire and guide you</h2>
          </div>
           <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 text-sm border border-[#d4af37]/30 px-5 py-2 rounded-md hover:bg-[#d4af37]/10 transition text-gray-300">
              View All Reels <ArrowRight size={14}/>
           </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-5 mt-10 lg:mt-12">
          {reels.map((reel, idx) => (
            <a key={idx} href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl border border-[#d4af37]/20 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] aspect-[9/16] flex flex-col cursor-pointer block">
              <div className="relative z-10 p-3 sm:p-4 text-center mt-2 sm:mt-4">
                 <p className="text-[9px] sm:text-[10px] font-bold tracking-wider text-white uppercase bg-black/40 inline-block px-2 py-1 rounded">{reel.topText}</p>
                 <p className={`text-base sm:text-lg font-black uppercase mt-1 ${reel.highlight}`}>{reel.bottomText}</p>
              </div>
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                   <Play className="text-white w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="currentColor"/>
                 </div>
              </div>
              <div className="relative z-10 mt-auto p-3 sm:p-4 flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-gray-300 bg-gradient-to-t from-black to-transparent pt-10">
                <Play size={12} className="text-[#d4af37] sm:w-[14px] sm:h-[14px]"/> {reel.views}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 lg:px-16 py-10 lg:py-16 max-w-[1400px] mx-auto relative z-20 bg-[#050505]">
        <div className="text-center">
          <p className="uppercase tracking-[0.2em] text-[#d4af37] text-xs font-semibold">WHAT CLIENTS SAY</p>
          <h2 className="font-serif text-3xl lg:text-4xl mt-3 text-[#d4af37]">Real stories. Real transformations.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10 lg:mt-14">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-[#0a0a0a] border border-[#d4af37]/20 rounded-xl p-6 sm:p-8 relative flex flex-col justify-between hover:border-[#d4af37]/40 transition-colors">
              <div>
                <Quote className="text-[#d4af37]/20 w-8 h-8 sm:w-10 sm:h-10 absolute top-4 sm:top-6 left-4 sm:left-6" />
                <p className="text-gray-300 leading-relaxed text-sm relative z-10 mt-4 sm:mt-6 min-h-[80px]">"{testimonial.text}"</p>
              </div>
              <div className="mt-6 sm:mt-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="fill-[#d4af37] text-[#d4af37] w-3 h-3 sm:w-4 sm:h-4" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-[#d4af37]/30 bg-gray-800"/>
                  <p className="text-sm font-medium text-white">— {testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-16 pb-16 lg:pb-24 pt-6 lg:pt-10 max-w-[1200px] mx-auto relative z-20 bg-[#050505]">
        <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/30 p-8 sm:p-10 lg:p-14 bg-[#0a0a0a]">
          <img src="/cta-bg.png" alt="CTA Background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-80" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="font-serif text-3xl lg:text-5xl text-white">Ready to Transform Your Life?</h2>
              <p className="mt-3 lg:mt-4 text-gray-300 text-sm lg:text-base max-w-md">Book your personal consultation today and take the first step toward clarity and abundance.</p>
            </div>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-[#4a0d1e] to-[#72122c] border border-[#d4af37]/40 flex items-center gap-3 font-medium text-sm hover:scale-105 transition-transform whitespace-nowrap shadow-[0_0_20px_rgba(114,18,44,0.3)]">
              Book Consultation Now <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d4af37]/20 px-6 lg:px-16 py-8 lg:py-10 bg-[#050505] max-w-[1400px] mx-auto relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { title: "100% Privacy", sub: "Confidential Consultations" },
            { title: "Secure Payments", sub: "100% Safe & Secure" },
            { title: "Expert Guidance", sub: "From Experience" },
            { title: "Lifetime Support", sub: "Always Here For You" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 lg:gap-4">
              <div className="p-2 lg:p-3 border border-[#d4af37]/20 rounded-md bg-[#0a0a0a]">
                 <Shield className="text-[#d4af37] w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div>
                <p className="text-xs lg:text-sm font-semibold text-white">{item.title}</p>
                <p className="text-[10px] lg:text-xs text-gray-500 mt-0.5 lg:mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </footer>

    </main>
  )
}