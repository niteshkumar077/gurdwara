"use client";

import { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { Users, Music, CalendarDays, BookOpen, MapPin, Phone, Mail, MapPinned, Info, Watch, CheckCircle2, User2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutClient() {
  const { t } = useLanguage();

  const COMMITTEE = [
    { name: "Sardar Jangsher Singh Switzerland", role: t("about.committee.role.mukh") },
    { name: "Sardar Kanttegh Singh", role: t("about.committee.role.member") },
    { name: "Sardar Jangbaaz Singh", role: t("about.committee.role.member") },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\r\nEmail: ${formData.email}\r\n\r\nMessage:\r\n${formData.message}`
    );
    
    // Check if user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile, mailto: works best to trigger the native Gmail/Mail app
      window.location.href = `mailto:info@gurdwarasahib.com?subject=${subject}&body=${body}`;
    } else {
      // On desktop, the Gmail web link is more reliable than mailto:
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@gurdwarasahib.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-32">
      {/* Header Section */}
      <section className="relative py-32 bg-foreground/5 dark:bg-[#001224] border-b border-primary/20">
        <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-20">
           <Image
            src="/assets/granth sahib inside gurdwara zoomed picture.webp"
            alt="Close-up view of Sri Guru Granth Sahib Ji inside the Gurdwara Darbar Sahib"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-foreground mb-6 drop-shadow-sm">
              {t("about.header.title")}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          </m.div>
        </div>
      </section>

      {/* History Copy */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg dark:prose-invert max-w-none text-center"
        >
          <div className="inline-block p-1 rounded-2xl glass-gold mb-12">
            <p className="px-8 py-6 rounded-xl border border-primary/20 text-xl md:text-3xl text-foreground leading-relaxed font-playfair italic shadow-2xl bg-background/50">
              {t("about.history.foundation")}
            </p>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mt-8 max-w-3xl mx-auto">
            {t("about.history.desc")}
          </p>
        </m.div>
      </section>


      {/* Committee Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">{t("about.committee.label")}</h2>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-12">
              {t("about.committee.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COMMITTEE.map((member, index) => (
                <m.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card rounded-[2rem] p-10 relative overflow-hidden group border border-primary/10 hover:border-primary/40 transition-colors shadow-2xl"
                >
                  {/* Decorative background blur */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-primary/80 text-background rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_10px_30px_rgba(214,158,46,0.4)] border-2 border-white/20 transform group-hover:rotate-6 transition-transform">
                      <User2 size={48} className="text-[#001224]" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">{member.name}</h3>
                    <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">{member.role}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* Contact Section (Merged) */}
      <section id="contact" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-primary/20 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">{t("about.contact.label")}</h2>
          <h3 className="text-3xl md:text-5xl font-playfair font-bold text-foreground">
            {t("about.contact.title")}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
          <p className="text-lg md:text-xl text-foreground/70 font-light mt-6 max-w-2xl mx-auto">
            {t("about.contact.desc")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Contact Info & Form */}
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-10"
          >
            {/* Contact Details Card */}
            <div className="glass-card p-6 sm:p-10 rounded-3xl border-primary/20 shadow-xl">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">
                {t("about.contact.label")}
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 border border-primary/20 text-primary rounded-2xl flex-shrink-0 shadow-inner">
                    <MapPinned size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground font-playfair tracking-wide">{t("about.contact.address")}</h3>
                    <p className="text-foreground/70 mt-1 font-light">Dennliweg 31A, 4900 Langenthal, Switzerland</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 border border-primary/20 text-primary rounded-2xl flex-shrink-0 shadow-inner">
                    <Phone size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground font-playfair tracking-wide">{t("about.contact.phone")}</h3>
                    <p className="text-foreground/70 mt-1 font-light">+41 62 293 13 13</p>
                    <p className="text-foreground/70 font-light">+41 78 908 13 15</p>
                    <p className="text-foreground/70 font-light">+41 78 702 33 33</p>
                    <p className="text-foreground/70 font-light">+41 78 912 96 96</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 border border-primary/20 text-primary rounded-2xl flex-shrink-0 shadow-inner">
                    <Mail size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground font-playfair tracking-wide">{t("about.contact.email")}</h3>
                    <p className="text-foreground/70 mt-1 font-light break-all sm:break-normal">info@gurdwarasahib.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Contact Form */}
            <div className="glass-card p-6 sm:p-10 rounded-3xl border-primary/20 shadow-xl">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">
                {t("about.contact.form.title")}
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold tracking-wider uppercase text-foreground/80 mb-2">{t("about.contact.form.name")}</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-primary/30 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner" 
                    placeholder="John Doe" 
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold tracking-wider uppercase text-foreground/80 mb-2">{t("about.contact.form.email")}</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-primary/30 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner" 
                    placeholder="john@example.com" 
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold tracking-wider uppercase text-foreground/80 mb-2">{t("about.contact.form.message")}</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-primary/30 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner resize-none" 
                    placeholder="How can we help you?"
                    autoComplete="off"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-primary hover:bg-secondary text-[#001224] text-lg font-bold rounded-2xl transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1">
                  {t("about.contact.form.btn")}
                </button>
              </form>
            </div>
          </m.div>

          {/* Right Column: Visitor Guidelines */}
          <m.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="w-full lg:w-1/2 h-full"
          >
            <div className="bg-primary/5 dark:bg-[#001224] p-6 sm:p-10 md:p-14 rounded-3xl shadow-lg border border-primary/30 h-full text-foreground relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-10 text-primary relative z-10">
                <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 inline-flex">
                   <Info size={36} aria-hidden="true" />
                </div>
                <h2 className="text-3xl lg:text-3xl xl:text-4xl font-playfair font-bold text-foreground drop-shadow-sm tracking-wide">
                  {t("about.guidelines.title")}
                </h2>
              </div>
              
              <div className="prose prose-lg prose-invert max-w-none mb-12 relative z-10">
                <p className="font-light text-foreground/80 leading-relaxed text-lg">
                  {t("about.guidelines.desc")}
                </p>
              </div>

              <ul className="space-y-8 relative z-10">
                <li className="flex items-start gap-5">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-foreground font-playfair tracking-wide">{t("about.guidelines.head.title")}</h4>
                    <p className="text-foreground/70 text-base leading-relaxed font-light">{t("about.guidelines.head.desc")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-foreground font-playfair tracking-wide">{t("about.guidelines.shoes.title")}</h4>
                    <p className="text-foreground/70 text-base leading-relaxed font-light">{t("about.guidelines.shoes.desc")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-foreground font-playfair tracking-wide">{t("about.guidelines.dress.title")}</h4>
                    <p className="text-foreground/70 text-base leading-relaxed font-light">{t("about.guidelines.dress.desc")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-foreground font-playfair tracking-wide">{t("about.guidelines.intox.title")}</h4>
                    <p className="text-foreground/70 text-base leading-relaxed font-light">{t("about.guidelines.intox.desc")}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-14 p-8 lg:p-6 xl:p-8 glass-card rounded-2xl flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center sm:justify-between border border-primary/20 relative z-10 shadow-md gap-6 sm:gap-4 lg:gap-6 xl:gap-4 text-center sm:text-right lg:text-left xl:text-right">
                <div className="flex items-center gap-4 text-foreground shrink-0 w-full sm:w-auto justify-center sm:justify-start">
                  <Watch size={32} className="text-primary shrink-0" />
                  <span className="font-bold text-xl font-playfair tracking-wide whitespace-normal sm:whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap text-center sm:text-left">{t("about.hours.title")}</span>
                </div>
                <div className="flex flex-col items-center sm:items-end lg:items-start xl:items-end w-full">
                  <p className="font-medium text-foreground/80">{t("about.hours.days")}</p>
                  <p className="text-primary font-bold text-xl lg:text-lg xl:text-xl tracking-wider whitespace-normal sm:whitespace-nowrap uppercase text-center sm:text-right">5:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </m.div>

        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" className="relative py-24 bg-foreground/5 border-t border-primary/10 overflow-hidden">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/3"
              >
                <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">{t("about.location.title")}</h2>
                <div className="flex items-start gap-4 p-6 glass-card rounded-2xl">
                  <div className="p-4 bg-primary/10 text-primary border border-primary/20 rounded-xl flex-shrink-0 shadow-inner">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground font-playfair">{t("home.title")}</h3>
                    <p className="text-foreground/70 mt-3 leading-relaxed font-light">
                      Dennliweg 31A,<br/>
                      4900 Langenthal,<br/>
                      Switzerland
                    </p>
                  </div>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-2/3 h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.6745029809936!2d7.778268776181035!3d47.203383115734844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47902a6796308123%3A0x17d3efbfc66cac0e!2sGurudwara%20Sahib%20Switzerland!5e0!3m2!1sen!2s!4v1773268588093!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location for Gurdwara Sahib Switzerland"
                ></iframe>
              </m.div>
            </div>
         </div>
      </section>
    </div>
  );
}
