"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import {
  ChevronRight,
  Calendar,
  BookOpen,
  HeartHandshake,
  MapPin,
  Users,
  Music,
  CalendarDays
} from "lucide-react";

const DynamicAnimatedCounter = dynamic(() => import("@/components/AnimatedCounter"), {
  ssr: false,
  loading: () => <span className="opacity-0">0</span>
});

const DynamicVideoSection = dynamic(() => import("@/components/VideoSection"), {
  ssr: false,
  loading: () => <div className="py-24 bg-[#000814] h-[600px] w-full flex items-center justify-center"><div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" /></div>
});

const STATS = [
  { label: "home.stats.kirtan", value: 85, icon: <Music size={24} />, suffix: "+" },
  { label: "home.stats.sewadar", value: 46, icon: <Users size={24} />, suffix: "k" },
  { label: "home.stats.activities", value: 23, icon: <CalendarDays size={24} />, suffix: "" },
  { label: "home.stats.school", value: 10, icon: <BookOpen size={24} />, suffix: "+" },
];

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Majestic Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] landscape:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1a2a3a]">
        <div className="absolute inset-0 z-0" style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/assets/hero-front.webp"
            alt="Majestic exterior view of Gurdwara Sahib Switzerland at sunrise"
            fill
            sizes="100vw"
            quality={85}
            className="!object-cover !object-top"
            style={{ objectFit: "cover", objectPosition: "top", width: "100%", height: "100%" }}
            priority
            fetchPriority="high"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-background/40 flex items-center justify-center"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full flex flex-col items-center landscape:pt-32 landscape:pb-12">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2, delayChildren: 0.1 }}
            style={{ willChange: "opacity" }}
            className="space-y-6 flex flex-col items-center"
          >
            {/* Elegant Welcome Text */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-sm md:text-base tracking-[0.3em] uppercase text-white/80 font-light">{t("home.welcome")}</span>
            </m.div>

            {/* Majestic Title - slow cinematic reveal */}
            <m.h1
              initial={{ opacity: 1, scale: 0.93, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "transform, filter" }}
              className="text-4xl md:text-5xl lg:text-7xl font-playfair font-black leading-tight drop-shadow-2xl gold-gradient-text tracking-widest uppercase py-2"
            >
              {t("home.title")}
            </m.h1>

            {/* Profound Subtitle */}
            <m.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "opacity, transform" }}
              className="text-lg md:text-2xl font-light max-w-2xl mx-auto text-white/90 font-playfair italic px-4 mt-2"
            >
              {t("home.subtitle")}
            </m.p>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center justify-center gap-6 pt-8 flex-wrap">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/about"
                  className="px-10 py-4 bg-primary text-[#000814] font-black text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(214,158,46,0.3)] hover:bg-primary/90 hover:shadow-[0_15px_40px_rgba(214,158,46,0.5)] inline-block"
                >
                  {t("home.discover")}
                </Link>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  willChange: "transform, opacity",
                  transformStyle: "preserve-3d",
                  isolation: "isolate"
                }}
              >
                <Link
                  href="/schedule"
                  className="px-10 py-4 bg-white/15 backdrop-blur-2xl text-white border border-white/20 font-black text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:border-white/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] block"
                >
                  {t("home.viewSchedule")}
                </Link>
              </m.div>
            </div>
          </m.div>
        </div>

        {/* Decorative Bottom Fade - Minimal */}
        <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-background/20 to-transparent z-10" />
      </section>

      {/* 2. Authentic Hukamnama Section (Static, Framed) */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none" style={{ backgroundImage: "url('/assets/granth sahib inside gurdwara zoomed picture.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">{t("home.hukamnama.subtitle")}</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">{t("home.hukamnama.title")}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl overflow-hidden p-1"
          >
            <div className="border border-primary/30 rounded-3xl p-8 md:p-14 text-center relative bg-background/50">
              {/* Ornate Corner Elements (CSS styling) */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/60" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/60" />

              <h4 className="font-bold text-primary mb-8 font-sans tracking-widest uppercase">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </h4>

              <div className="space-y-8">
                {/* Gurmukhi representation */}
                <p className="text-2xl md:text-4xl font-playfair text-foreground leading-relaxed text-balance">
                  ਸੋਰਠਿ ਮਹਲਾ ੫ ॥
                  ਪ੍ਰਭ ਕੀ ਸਰਣਿ ਸਗਲ ਭੈ ਲਾਥੇ ਦੁਖ ਬਿਨਸੇ ਸੁਖੁ ਪਾਇਆ ॥<br />
                  ਦਇਆਲੁ ਹੋਆ ਪਾਰਬ੍ਰਹਮੁ ਸੁਆਮੀ ਪੂਰਾ ਸਤਿਗੁਰੁ ਧਿਆਇਆ ॥੧॥
                </p>

                <div className="w-16 h-px bg-primary/40 mx-auto" />

                {/* English Translation */}
                <p className="text-lg md:text-xl font-light text-foreground/80 leading-relaxed max-w-3xl mx-auto italic">
                  "Sorat'h, Fifth Mehl: <br />
                  Seeking the Sanctuary of God, all fears are dispelled, suffering is destroyed, and peace is found.<br />
                  The Supreme Lord Master has become merciful; I meditate on the Perfect True Guru. ||1||"
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* 3. Majestic Impact & Stats - Redesigned for True Full-Width */}
      <section className="relative py-24 overflow-hidden border-y border-primary/10 bg-foreground/[0.03] dark:bg-[#000814]">
        {/* Subtle Silk Background Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "url('/assets/hero-front.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />

        <div className="max-w-[1800px] mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {STATS.map((stat, index) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary/20">
                    {stat.icon}
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-5xl md:text-6xl font-playfair font-black text-foreground tracking-tighter">
                      <DynamicAnimatedCounter end={stat.value} duration={3} />
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-primary ml-1">{stat.suffix}</span>
                  </div>
                </div>
                <div className="h-0.5 w-12 bg-primary/30 mb-4 group-hover:w-24 transition-all duration-500" />
                <p className="text-xl font-playfair font-bold text-foreground transition-colors group-hover:text-primary">
                  {t(stat.label)}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Intro Section */}
      <section className="py-24 bg-foreground/5 dark:bg-foreground/10 text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-foreground/60 dark:text-secondary tracking-widest uppercase font-bold text-sm mb-4">{t("home.intro.label")}</h2>
              <h3 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-8 leading-tight">
                {t("home.intro.title")}
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed font-light mb-10">
                {t("home.intro.desc")}
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group">
                {t("nav.about")}
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden border border-primary/20 shadow-xl"
            >
              <Image
                src="/assets/gurdwara front 3.webp"
                alt="Majestic front view of Gurdwara Sahib Switzerland in Langenthal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </m.div>
          </div>
        </div>
      </section>

      {/* 4. Pillars of Sikhi (Services Preview Cards) */}
      <section className="py-32 bg-background relative border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">{t("home.services.label")}</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">{t("home.services.title")}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "sewa.service.langar.title", titleGurmukhi: "ਲੰਗਰ ਸੇਵਾ", image: "/assets/langar sewa pic 1 (1).webp", desc: "sewa.service.langar.desc" },
              { title: "sewa.service.path.title", titleGurmukhi: "ਅਖੰਡ ਪਾਠ", image: "/assets/sri akhand path sewa pic 1 (1).webp", desc: "sewa.service.path.desc" },
              { title: "sewa.service.samagam.title", titleGurmukhi: "ਸਮਾਗਮ", image: "/assets/samagam sewa pic 1 (1).webp", desc: "sewa.service.samagam.desc" }
            ].map((card, idx) => (
              <m.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group cursor-pointer rounded-2xl overflow-hidden glass-card flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
              >
                <Link href="/sewa" className="block relative h-64 w-full overflow-hidden" aria-label={`Learn more about ${t(card.title)}`}>
                  <Image
                    src={card.image}
                    alt={`${t(card.title)} - ${card.titleGurmukhi}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent aria-hidden" />
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                    <h4 className="text-2xl font-playfair font-bold text-white">{t(card.title)}</h4>
                    <span className="text-primary font-bold">{card.titleGurmukhi}</span>
                  </div>
                </Link>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-foreground/70 mb-6">{t(card.desc)}</p>
                  <Link
                    href="/sewa"
                    className="text-primary font-bold flex items-center gap-2 hover:underline w-max"
                  >
                    <span aria-hidden="true">{t("common.learnMore")}</span>
                    <span className="sr-only">{t("common.learnMore")} about {t(card.title)}</span>
                    <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Official Video Showcase (Dynamic) */}
      <DynamicVideoSection />

      {/* 6. Education Teaser */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/5 dark:bg-foreground/10 border-y border-primary/20">
        <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-10">
          <Image
            src="/assets/gurmat-school pic 1.webp"
            alt="Children participating in Gurmat School activities"
            fill
            sizes="100vw"
            loading="eager"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-foreground">
          <BookOpen size={40} className="md:size-[48px] text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 md:mb-6">
            {t("home.edu.title")}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-light mb-8 md:mb-10 leading-relaxed">
            {t("home.edu.desc")}
          </p>
          <Link href="/education" className="inline-block px-6 py-3 md:px-10 md:py-4 bg-primary text-white dark:text-[#001224] font-bold text-base md:text-lg rounded-full hover:bg-secondary transition-colors shadow-md hover:shadow-lg">
            {t("home.edu.btn")}
          </Link>
        </div>
      </section>

    </div>
  );
}
