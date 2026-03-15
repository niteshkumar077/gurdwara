"use client";

import { m } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function VideoSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#000814] relative overflow-hidden" style={{ colorScheme: 'dark' }}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            {t("home.video.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:w-4/5 mx-auto"
        >
          {/* Majestic Video Frame */}
          <div className="relative p-2 md:p-4 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-primary/30 to-secondary/30 shadow-2xl overflow-hidden aspect-video group">

              <m.div
                className="absolute inset-0 w-full h-full border-none z-0 rounded-[1.5rem] md:rounded-[2.5rem]"
              >
                <iframe
                  src="https://www.youtube-nocookie.com/embed/mKt9ruMZgeg?si=aCguFVUlZAy3UmKp"
                  className="w-full h-full border-none rounded-[1.5rem] md:rounded-[2.5rem]"
                  allowFullScreen={true}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  title="Gurdwara Sahib Switzerland Official Video"
                ></iframe>
              </m.div>

            {/* Decorative Corner Overlays */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-primary/50 rounded-tl-2xl pointer-events-none z-20" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-primary/50 rounded-br-2xl pointer-events-none z-20" />
          </div>
        </m.div>

        <p className="mt-12 text-lg font-playfair italic max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
          {t("home.video.desc")}
        </p>
      </div>
    </section>
  );
}
