"use client";

import { motion, Variants } from "framer-motion";
import { UserPlus, Globe, Sparkles, FileText, Send } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Lead Submission",
    description: "A prospect enters their basic details into the high-converting widget.",
    icon: <UserPlus className="w-5 h-5 text-white" />,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Website Analysis",
    description: "Our crawlers instantly scan their domain for core business metrics and data.",
    icon: <Globe className="w-5 h-5 text-white" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 3,
    title: "AI Enrichment",
    description: "LLMs deeply analyze the gathered data to identify pain points and value opportunities.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    id: 4,
    title: "PDF Report Generation",
    description: "A beautifully branded, personalized audit is dynamically generated as a PDF.",
    icon: <FileText className="w-5 h-5 text-white" />,
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    id: 5,
    title: "Automated Email Delivery",
    description: "The bespoke audit is sent directly to their inbox, primed to close the deal.",
    icon: <Send className="w-5 h-5 text-white" />,
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function WorkflowTimeline() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-6">
              A Zero-Touch Automation Pipeline
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
              Watch as raw prospects are automatically converted into highly qualified meetings through our seamless AI workflow.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/20 via-purple-500/20 to-pink-500/20 md:-translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/20 via-purple-500/20 to-pink-500/20 md:hidden" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-0`}
              >
                {/* Center Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-1 md:mt-0 z-10 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-[0_0_20px_rgba(255,255,255,0.1)] border-4 border-[#030303] ring-1 ring-white/10`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className={`w-full md:w-[90%] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 relative group overflow-hidden`}>
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-br ${step.gradient} font-mono font-bold text-xl`}>
                          0{step.id}
                        </span>
                        <h3 className="text-xl font-medium text-white tracking-tight">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
