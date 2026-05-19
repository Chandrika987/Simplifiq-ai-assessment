"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight, BarChart3, Zap, Search } from "lucide-react";
import LeadForm from "./LeadForm";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303] flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 blur-[120px] rounded-full mix-blend-screen" />
      </div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_10%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:px-8 w-full flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Next-Gen AI Prospecting Engine</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-8">
            Turn Raw Data Into <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
              Qualified Pipeline.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Automate deep company research, generate highly-personalized AI audits, 
            and deploy outbound campaigns that consistently convert.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-medium transition-all hover:bg-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Start Free Trial
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </button>
            <button className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md">
              Book a Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Feature Highlights - Glassmorphism floating cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" as const }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {[
            {
              icon: <Search className="w-5 h-5 text-indigo-400" />,
              title: "Deep Company Research",
              desc: "Instantly gather technographics, recent news, and key personnel data."
            },
            {
              icon: <BarChart3 className="w-5 h-5 text-purple-400" />,
              title: "AI-Powered Audits",
              desc: "Generate bespoke business audits tailored to each prospect's unique challenges."
            },
            {
              icon: <Zap className="w-5 h-5 text-emerald-400" />,
              title: "Automated Outreach",
              desc: "Craft hyper-personalized sequences that cut through the noise."
            }
          ].map((feature, i) => (
            <div key={i} className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl p-6 rounded-xl border border-white/5 transition-colors group-hover:border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Interactive LeadForm Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" as const }}
          className="mt-24 w-full flex justify-center pb-24"
          id="audit-form"
        >
          <div className="relative w-full max-w-3xl">
            {/* Glow behind the form */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl opacity-50 -z-10 rounded-[3rem]" />
            <LeadForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
