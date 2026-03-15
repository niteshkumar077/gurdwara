"use client";

import Image from "next/image";
import Link from "next/link";
import { m, Variants } from "framer-motion";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function EducationClient() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-32">
      {/* Header Section */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Solid background to prevent transparency seams */}
          <div className="absolute inset-0 bg-background dark:bg-[#001224] z-0"></div>

          <div className="absolute inset-0 z-[1] opacity-40 dark:opacity-50">
            <Image
              src="/assets/gurmat-school pic 1.webp"
              alt="Gurmat School students learning at Gurdwara Sahib Switzerland"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-[2]"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent z-[1]"></div>
          {/* Bottom color sync layer - forces container edge to match page bg */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-background z-[3]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <m.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black text-foreground mb-8 tracking-tight"
            >
              {t("edu.header.title")}
            </m.h1>
            <m.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-primary font-medium mb-12 max-w-2xl mx-auto italic"
            >
              {t("edu.header.subtitle")}
            </m.p>
            <m.div 
              variants={itemVariants}
              className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-lg shadow-primary/20"
            ></m.div>
          </m.div>
        </div>
      </section>
      {/* External Glow Bridge - Physically overlaps the seam with a wide, bright glow */}
      <div className="relative z-30 -mt-12 h-6 w-full bg-gradient-to-r from-transparent via-white/50 dark:via-accent/5 to-transparent shadow-[0_0_80px_30px_rgba(255,255,255,0.6)] dark:shadow-none blur-[1px] pointer-events-none"></div>


      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 -mt-[1px] relative z-20">

        {/* Weekend Classes */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <m.div variants={itemVariants} className="flex items-center gap-4 text-primary">
              <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                <BookOpen size={28} />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{t("edu.weekend.label")}</span>
            </m.div>
            
            <m.h2 variants={itemVariants} className="text-3xl md:text-5xl font-playfair font-black text-foreground leading-tight">
              {t("edu.weekend.title")}
            </m.h2>
            
            <m.div variants={itemVariants} className="w-20 h-1.5 bg-primary rounded-full shadow-lg shadow-primary/20"></m.div>
            
            <m.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed font-light">
              {t("edu.weekend.desc")}
            </m.p>
            
            <m.ul variants={itemVariants} className="space-y-4">
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.weekend.item1")}
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.weekend.item2")}
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.weekend.item3")}
              </li>
            </m.ul>

            <m.div variants={itemVariants} className="pt-4">
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-secondary text-[#001224] font-black text-lg rounded-2xl transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
              >
                {t("edu.weekend.btn")}
                <ArrowRight size={20} />
              </Link>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/20 group bg-foreground/5 shadow-primary/5"
          >
            <Image
              src="/assets/gurmat-school pic 2 (1).webp"
              alt="Inside view of Gurdwara Gurmat School during a Punjabi class session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </m.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Annual Gurmat Camps */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <m.div variants={itemVariants} className="flex items-center gap-4 text-primary">
              <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                <Calendar size={28} />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{t("edu.annual.label")}</span>
            </m.div>
            
            <m.h2 variants={itemVariants} className="text-3xl md:text-5xl font-playfair font-black text-foreground leading-tight">
              {t("edu.annual.title")}
            </m.h2>
            
            <m.div variants={itemVariants} className="w-20 h-1.5 bg-primary rounded-full shadow-lg shadow-primary/20"></m.div>
            
            <m.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed font-light">
              {t("edu.annual.desc")}
            </m.p>
            
            <m.ul variants={itemVariants} className="space-y-4">
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.annual.item1")}
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.annual.item2")}
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.annual.item3")}
              </li>
            </m.ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/20 group bg-foreground/5 shadow-primary/5"
          >
            <Image
              src="/assets/gurmat camp sewa pic 1 (1).webp"
              alt="Group of students and kids outside Gurdwara Sahib Switzerland during a Gurmat Camp"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </m.div>
        </div>

      </section>


      <section className="relative py-20 overflow-hidden flex items-center justify-center -mt-[1px] z-20">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Solid background to prevent transparency seams */}
          <div className="absolute inset-0 bg-background dark:bg-[#001224] z-0"></div>
          
          <div className="absolute inset-0 z-[1] top-[1px]">
            <Image
              src="/assets/gurmat camp sewa pic 1 (1).webp"
              alt="Gurmat Camp at Gurdwara"
              fill
              className="object-cover brightness-[0.35] opacity-70"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-[2]" />
          
          {/* Top blend layer - tight clean dissolve */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent dark:from-[#001224] dark:to-transparent z-[3]"></div>
          {/* Top color sync layer */}
          <div className="absolute top-0 left-0 w-full h-4 bg-background dark:bg-[#001224] z-[4]"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <m.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
          >
            <m.h3 variants={itemVariants} className="text-4xl md:text-6xl font-playfair font-black text-white mb-8 leading-[1.1] tracking-tighter drop-shadow-2xl">
              {t("edu.cta.title")}
            </m.h3>
            <m.p variants={itemVariants} className="text-xl text-white/80 mb-12 max-w-xl mx-auto font-light leading-relaxed drop-shadow-md">
              {t("edu.cta.desc")}
            </m.p>
            <m.div variants={itemVariants}>
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary hover:bg-secondary text-[#001224] font-black text-lg rounded-2xl transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:shadow-[0_20px_60px_rgba(234,179,8,0.5)] hover:scale-105 active:scale-95"
              >
                {t("edu.cta.btn")}
                <ArrowRight size={20} />
              </Link>
            </m.div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
