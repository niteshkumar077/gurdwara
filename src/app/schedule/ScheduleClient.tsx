"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function ScheduleClient() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* 1. Hero */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Solid background to prevent transparency seams */}
          <div className="absolute inset-0 bg-background dark:bg-[#001224] z-0"></div>
          
          <div className="absolute inset-0 z-[1] opacity-40 dark:opacity-50">
            <Image
              src="/assets/schedule-hero.webp"
              alt="Interior of Gurdwara Sahib"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              fetchPriority="high"
              unoptimized
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-[2]"></div>
          {/* Bottom color sync layer - forces container edge to match page bg */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent z-[1]"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-background z-[3]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black text-foreground mb-8 tracking-tight">
              {t("schedule.header.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-12 italic max-w-3xl mx-auto drop-shadow-sm">
              {t("schedule.header.quote")}
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full shadow-lg shadow-primary/20"></div>
          </m.div>
        </div>
      </section>
      {/* External Glow Bridge - Physically overlaps the seam with a wide, bright glow */}
      <div className="relative z-30 -mt-12 h-6 w-full bg-gradient-to-r from-transparent via-white/50 dark:via-accent/5 to-transparent shadow-[0_0_80px_30px_rgba(255,255,255,0.6)] dark:shadow-none blur-[1px] pointer-events-none"></div>


      {/* 2. Visual Schedule Grid */}
      <section className="py-24 bg-background -mt-[1px] relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              {t("schedule.showcase.label")}
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-foreground mb-6">
              {t("schedule.showcase.title")}
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-light">
              {t("schedule.showcase.desc")}
            </p>
          </m.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {[
              { src: "/assets/Daily Diwan Schedule  Gurdwara Sahib in english (1).webp", label: t("schedule.showcase.en") },
              { src: "/assets/Daily Diwan Schedule  Gurdwara Sahib in panjabi (1).webp", label: t("schedule.showcase.pa") }
            ].map((schedule, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                <div className="relative aspect-[1/1.4] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-primary/20 bg-foreground/5 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/20 group-hover:-translate-y-2">
                  <Image
                    src={schedule.src}
                    alt={schedule.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4 md:p-8 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40">{schedule.label}</span>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-20 flex items-center justify-center overflow-hidden -mt-[1px] z-20">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Solid background to prevent transparency seams */}
          <div className="absolute inset-0 bg-background z-0"></div>
          
          <div className="absolute inset-0 z-[1] top-[1px]">
            <Image
              src="/assets/gurdwara front 3.webp"
              alt="Gurdwara Sahib Exterior"
              fill
              className="object-cover brightness-[0.35] opacity-70"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-[2]" />
          
          {/* Top blend layer - tight clean dissolve */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-[3]"></div>
          {/* Top color sync layer */}
          <div className="absolute top-0 left-0 w-full h-4 bg-background z-[4]"></div>
        </div>
        {/* Text directly on image */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-playfair font-black text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
              {t("schedule.cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto font-light leading-relaxed drop-shadow">
              {t("schedule.cta.desc")}
            </p>
            <Link
              href="/about#contact"
              className="px-12 py-4 bg-primary hover:bg-secondary text-[#001224] font-black text-lg rounded-2xl transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:shadow-[0_20px_60px_rgba(234,179,8,0.5)] hover:scale-105 active:scale-95 inline-block"
            >
              {t("schedule.cta.btn")}
            </Link>
          </m.div>
        </div>
      </section>
    </div>
  );
}
