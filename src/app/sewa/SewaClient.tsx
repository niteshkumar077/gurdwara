"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { BookOpen, HandHeart, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function SewaClient() {
  const { t } = useLanguage();

  const SERVICES = [
    {
      title: t("sewa.service.path.title"),
      desc: t("sewa.service.path.desc"),
      image: "/assets/sri akhand path sewa pic 1 (1).webp"
    },
    {
      title: t("sewa.service.sukhmani.title"),
      desc: t("sewa.service.sukhmani.desc"),
      image: "/assets/sri sukhmani sahib (1).webp"
    },
    {
       title: t("sewa.service.samagam.title"),
       desc: t("sewa.service.samagam.desc"),
       image: "/assets/samagam sewa pic 1 (1).webp"
    },
    {
      title: t("sewa.service.langar.title"),
      desc: t("sewa.service.langar.desc"),
      image: "/assets/langar sewa pic 1 (1).webp"
    },
    {
      title: t("sewa.service.class.title"),
      desc: t("sewa.service.class.desc"),
      image: "/assets/gurmat-school pic 1.webp"
    },
    {
       title: t("sewa.service.camp.title"),
       desc: t("sewa.service.camp.desc"),
       image: "/assets/gurmat camp sewa pic 1 (1).webp"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* 1. Header */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Solid background to prevent transparency seams */}
          <div className="absolute inset-0 bg-background dark:bg-[#001224] z-0"></div>

          <div className="absolute inset-0 z-[1] opacity-20 dark:opacity-30">
            <Image
              src="/assets/granth sahib inside gurdwara zoomed picture.webp"
              alt="Sri Guru Granth Sahib Ji"
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
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black text-foreground mb-8">
              {t("sewa.header.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-12 italic max-w-3xl mx-auto">
               {t("sewa.header.quote")}
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full shadow-lg shadow-primary/20"></div>
          </m.div>
        </div>
      </section>
      {/* External Glow Bridge - Physically overlaps the seam with a wide, bright glow */}
      <div className="relative z-30 -mt-12 h-6 w-full bg-gradient-to-r from-transparent via-white/50 dark:via-accent/5 to-transparent shadow-[0_0_80px_30px_rgba(255,255,255,0.6)] dark:shadow-none blur-[1px] pointer-events-none"></div>


      {/* 2. Services Grid */}
      <section className="py-20 bg-background -mt-[1px] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {SERVICES.map((service, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group flex flex-col rounded-[2rem] overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6 md:p-8 lg:p-10 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-playfair font-black text-foreground group-hover:text-primary transition-colors mb-4 md:mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-foreground/60 font-medium leading-relaxed mb-6 md:mb-8 flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-primary/10">
                    <Link 
                      href="/about#contact" 
                      className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[0.7rem] hover:gap-4 transition-all group-hover:text-foreground"
                    >
                      <span>{t("common.inquire")}</span>
                      <span className="text-base">→</span>
                    </Link>
                  </div>
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
              src="/assets/langar sewa pic 2 (1).webp"
              alt="Langar Service at Gurdwara"
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

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-4xl md:text-6xl font-playfair font-black text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
              {t("sewa.cta.title")}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto font-light leading-relaxed drop-shadow">
              {t("sewa.cta.desc")}
            </p>
            <Link
              href="/about#contact"
              className="px-12 py-4 bg-primary hover:bg-secondary text-[#001224] font-black text-lg rounded-2xl transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:shadow-[0_20px_60px_rgba(234,179,8,0.5)] hover:scale-105 active:scale-95 inline-block"
            >
              {t("common.volunteer")}
            </Link>
          </m.div>
        </div>
      </section>
    </div>
  );
}
