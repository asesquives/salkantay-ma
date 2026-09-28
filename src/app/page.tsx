"use client"

import { motion, Variants } from "framer-motion"
import { ArrowRight, Linkedin } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

/* ---------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#070D1A] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/Mountain.jpg"
          alt="Salkantay Mountain"
          fill
          className="object-cover opacity-80 mix-blend-soft-light"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D1A]/10 via-[#070D1A]/40 to-[#070D1A]" />
        <div
          className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, #92722A 0%, #7A5E1A 25%, #1a1206 60%, transparent 75%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <span className="text-white/40 text-[11px] tracking-[0.25em] uppercase font-medium">
              Corporate Finance &amp; Advisory - M&amp;A
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(42px,8vw,96px)] font-light text-white leading-[1.02] tracking-[-0.02em] mb-8"
          >
            An Investor's<br />
            <span className="font-semibold">Experience</span><br />
            <span className="font-light">Inside Your Next Transaction</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/50 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light"
          >
            We advise owners and management teams of mid-market companies across Peru and the
            Andean region, from the first strategic conversation to the closing of the transaction.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-24">
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-3 bg-white text-[#070D1A] px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule a Conversation
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-3 border border-white/25 text-white/70 px-8 py-4 text-xs font-medium tracking-[0.15em] uppercase hover:border-white/50 hover:text-white transition-all duration-200"
            >
              Explore Our Services
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-t border-white/10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-20 max-w-2xl"
          >
            {[
              { title: "AI-Enabled", label: "Weeks of analysis, delivered in days" },
              { title: "Investor-Built", label: "We have been the buyer" },
              { title: "Andean Region", label: "Local execution, global standards" },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-xl md:text-2xl font-semibold text-white mb-1">{item.title}</div>
                <div className="text-white/35 text-[11px] tracking-[0.18em] uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070D1A] to-transparent pointer-events-none" />
    </section>
  )
}

/* ------------------------------------------------------------ Services */

type Service = { name: string; description: string }
type Stage = { number: string; title: string; timeline: string; tagline: string; services: Service[] }

const stages: Stage[] = [
  {
    number: "01",
    title: "Understand and Formulate",
    timeline: "3 to 6 months",
    tagline:
      "We get to know the company from the inside: its numbers, what it is worth and what it actually needs, before defining the route ahead",
    services: [
      {
        name: "M&A Coach",
        description:
          "We work alongside you to read the numbers, size the opportunity and define a path across growth, capital and exit.",
      },
      {
        name: "M&A Oversight",
        description:
          "We value the company, set the plan and coordinate with the counterparty, while your team runs the day to day of the process.",
      },
    ],
  },
  {
    number: "02",
    title: "Path Forward",
    timeline: "1 to 2 years",
    tagline:
      "Once the direction is set, we stay in the room: preparing the company for its next transaction, a sale or a capital raise, and running the process end to end.",
    services: [
      {
        name: "Plan for Exit",
        description:
          "A seat on the board for one to two years, shaping the value creation plan and the route to a sale or capital raise before the process begins.",
      },
      {
        name: "M&A Engagement",
        description:
          "We value the company, set up the data room and lead the execution team of lawyers, consultants and advisors through negotiation to closing.",
      },
    ],
  },
]

function Services() {
  return (
    <section id="services" className="bg-white py-32 md:py-44 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-24"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#0B1F3B]" />
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                What We Do
              </span>
            </div>
            <h2 className="text-[clamp(36px,5.5vw,64px)] font-light text-[#0B1F3B] leading-[1.05] tracking-[-0.02em]">
              Two moments,<br />
              <span className="font-semibold">four ways to work together.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed font-light md:text-right">
            Each engagement is scoped to where the company stands today, not to a fixed product.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {stages.map((stage) => (
            <motion.div
              key={stage.number}
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-12 gap-12 md:gap-20"
            >
              <div className="md:col-span-5">
                <div className="text-[12px] font-medium text-[#0B1F3B]/40 tracking-[0.22em] uppercase mb-8">
                  Stage {stage.number} - {stage.timeline}
                </div>
                <h3 className="text-4xl md:text-[52px] font-light leading-[1.05] tracking-tight text-[#0B1F3B] mb-8">
                  {stage.title}
                </h3>
                <div className="w-16 h-px bg-[#C9A84C] mb-8" />
                <p className="text-gray-500 text-lg leading-relaxed font-light max-w-md">
                  {stage.tagline}
                </p>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 self-start">
                {stage.services.map((service) => (
                  <div
                    key={service.name}
                    className="bg-white p-7 md:p-9 hover:bg-[#EEF2F7] transition-colors duration-300"
                  >
                    <h4 className="text-xl font-semibold text-[#0B1F3B] mb-4">{service.name}</h4>
                    <p className="text-gray-500 text-[1.12rem] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ Approach */

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We read the business, its numbers and its market to frame the real decision behind the transaction.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Financial model, valuation and data room built to withstand a counterparty's scrutiny.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Buyer or investor outreach under confidentiality, negotiation and coordination of the full execution team.",
  },
  {
    number: "04",
    title: "Close",
    description: "Final terms, closing documentation and the transition into the new ownership or capital structure.",
  },
]

function Approach() {
  return (
    <section id="approach" className="bg-[#0B1F3B] text-white py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-white/40 text-[11px] tracking-[0.22em] uppercase font-medium">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl md:text-[56px] font-light leading-[1.05] tracking-tight mb-6">
            A process built<br />
            <span className="font-semibold">around the decision.</span>
          </h2>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10">
          {steps.map((step) => (
            <div key={step.number} className="bg-[#0B1F3B] p-8 md:p-10">
              <div className="text-[#C9A84C] text-[11px] tracking-[0.22em] uppercase font-medium mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-light mb-4">{step.title}</h3>
              <p className="text-white/50 text-[1.12rem] leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- Why Us */

const reasons = [
  {
    number: "01",
    title: "Senior-Led",
    description:
      "A partner runs the mandate end to end. The diagnosis, the valuation sign-off and the room where terms are negotiated are never delegated.",
  },
  {
    number: "02",
    title: "We've Been the Buyer",
    description:
      "We invest, sit on boards and exit companies ourselves, so we know what a buyer will test long before they test it.",
  },
  {
    number: "03",
    title: "Direct Access",
    description:
      "The partners open the doors themselves. Your company does not get emailed to a list, it gets introduced by someone the other side already trusts.",
  },
]

const partners = [
  {
    name: "Martín Aspillaga",
    role: "Partner",
    bio: "20+ years in private equity and venture capital. Former fund manager at Enfoca (US$350M AUM). Co-founder of Salkantay Ventures and Blum.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1761670210643.png?width=8000&height=8000&resize=contain",
    linkedin: "https://pe.linkedin.com/in/martinaspillaga",
    position: "object-[center_30%]",
  },
  {
    name: "Guillermo Miró Quesada",
    role: "Partner",
    bio: "20+ years in private equity, venture capitaland banking. Co-founder of Salkantay Ventures and Blum.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1761668998133.png?width=8000&height=8000&resize=contain",
    linkedin: "https://pe.linkedin.com/in/guillermomiroquesada",
    position: "object-[center_30%]",
  },
]

function WhyUsMA() {
  return (
    <section id="why" className="bg-[#F7F9FC] py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#0B1F3B]" />
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                Why Us
              </span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-light text-[#0B1F3B] leading-[1.05] tracking-tight">
              An investor<br />
              <span className="font-semibold">on your side of the table.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-gray-500 text-base leading-relaxed font-light max-w-md">
              Two decades investing in, building and selling companies in Latin America. That experience is what we bring to your transaction.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mb-20">
          {reasons.map((reason) => (
            <div key={reason.number} className="bg-[#F7F9FC] p-8 md:p-10">
              <div className="text-[#0B1F3B]/30 text-[11px] tracking-[0.22em] uppercase font-medium mb-6">
                {reason.number}
              </div>
              <h3 className="text-2xl font-light text-[#0B1F3B] mb-4">{reason.title}</h3>
              <p className="text-gray-500 text-[1.12rem] leading-relaxed font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 max-w-3xl mx-auto"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {partners.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="bg-white group hover:bg-[#EEF2F7] transition-colors duration-300"
            >
              <div className="relative h-80 overflow-hidden bg-gray-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={90}
                  className={`object-cover ${member.position} group-hover:scale-105 transition-transform duration-500`}
                />
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-[#0B1F3B] mb-1">{member.name}</h3>
                    <div className="text-[11px] text-[#0B1F3B]/40 uppercase tracking-[0.15em]">
                      {member.role}
                    </div>
                  </div>
                  {member.linkedin !== "#" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0B1F3B]/30 hover:text-[#0B1F3B] transition-colors mt-1"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="w-8 h-px bg-[#C9A84C] mb-4" />
                <p className="text-gray-500 text-[1.12rem] leading-relaxed font-light">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Page */

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Approach />
      <WhyUsMA />
      <Footer />
    </div>
  )
}
