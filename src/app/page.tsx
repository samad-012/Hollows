"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { ShieldCheck, Eye, Search, Lock, Database, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  { title: "Relationship & Infidelity", desc: "Discreet verification to provide the clarity you deserve.", icon: <Eye />, color: "from-amber-400 to-yellow-500", span: 2 },
  { title: "Pre-Marriage Screening", desc: "Comprehensive background checks for a secure future.", icon: <ShieldCheck />, color: "from-indigo-400 to-blue-500", span: 1 },
  { title: "Child Monitoring", desc: "Ensuring safety and peace of mind for your family.", icon: <Lock />, color: "from-pink-400 to-rose-500", span: 1 },
  { title: "Corporate Investigation", desc: "Protecting business integrity and employee vetting.", icon: <Briefcase />, color: "from-green-400 to-teal-500", span: 2 },
  { title: "Cyber & Digital", desc: "Tracing digital footprints and securing online assets.", icon: <Search />, color: "from-purple-400 to-indigo-500", span: 1 },
  { title: "Financial Auditing", desc: "Asset tracing and verified financial auditing.", icon: <Database />, color: "from-orange-400 to-red-500", span: 1 },
];

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#080808] text-zinc-900 dark:text-zinc-100 selection:bg-amber-500/30">

      {/* Hero Section */}
      <Hero />

      {/* Stats Ribbon */}
      <section className="relative z-40 -mt-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 rounded-3xl shadow-lg divide-x divide-zinc-200 dark:divide-white/10 overflow-hidden">
          {[
            { label: "Integrity", value: "100%" },
            { label: "Active Agents", value: "24/7" },
            { label: "Cases Closed", value: "1.2k" },
            { label: "Retention", value: "96%" },
          ].map((stat, i) => (
            <div key={i} className="py-8 px-4 text-center transition-transform hover:scale-105">
              <span className="block text-2xl font-bold tracking-tighter dark:text-amber-500">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-20 space-y-4 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-amber-600 dark:text-amber-500 font-semibold tracking-[0.2em] uppercase text-xs"
          >
            Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            We provide answers <br /> <span className="text-zinc-400 dark:text-zinc-600">where others find walls.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative overflow-hidden p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-${service.color}/20`}
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-2xl shadow-md bg-gradient-to-br ${service.color} text-white`}>
                  {service.icon}
                </div>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 dark:text-zinc-300" />
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-[280px]">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-40 bg-zinc-50 dark:bg-zinc-900/20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-6 space-y-8"
        >
          <div className="w-16 h-[1px] bg-amber-500 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight">
            "HOLLOWS was built on the principle that <span className="text-amber-600 italic">uncertainty is the greatest luxury</span>, and we aim to strip it away."
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">— Internal Protocol 01</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-black mb-6">HOLLOWS</h3>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Professional Intelligence and Private Investigation services. Operating with absolute discretion and legal integrity since inception.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-zinc-400">Direct Contact</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="tel:+918712571184" className="hover:text-amber-500 transition-colors">+91 8712571184</a>
              <a href="mailto:contact@hollows.in" className="hover:text-amber-500 transition-colors">contact@hollows.in</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-zinc-400">Protocol</h4>
            <p className="text-zinc-500 text-sm">24/7 Response Time<br />Verified Discretion</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-900 text-[10px] text-zinc-400 uppercase tracking-widest text-center md:text-left">
          &copy; {new Date().getFullYear()} HOLLOWS Intelligence Agency.
        </div>
      </footer>
    </main>
  );
}