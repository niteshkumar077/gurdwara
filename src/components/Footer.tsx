"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, Info } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const PakistanFlag = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 300 200" 
    className="inline-block w-[13px] h-[8px] ml-1 mb-0.5 rounded-[1px] shadow-sm opacity-90"
    aria-hidden="true"
  >
    <rect width="300" height="200" fill="#01411C"/>
    <rect width="75" height="200" fill="#F5F5F5"/>
    <circle cx="187.5" cy="100" r="60" fill="#F5F5F5"/>
    <circle cx="202.5" cy="85" r="60" fill="#01411C"/>
    <polygon points="187.5,60 193.5,78 211.5,78 197,89 202.5,107 187.5,96 172.5,107 178,89 163.5,78 181.5,78" fill="#F5F5F5"/>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000814] dark:bg-[#000814] text-[#F5F5DC] border-t-4 border-primary">

      {/* ─── MOBILE-ONLY Compact Footer ─── */}
      <div className="md:hidden px-6 py-6 flex flex-col items-center gap-4 text-center">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0">
            <Image src="/assets/gurdwara sahib switzerland logo.webp" alt="Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col font-playfair font-bold text-left leading-tight">
            <span className="text-base text-primary">Gurdwara Sahib</span>
            <span className="text-[9px] tracking-widest text-secondary">SWITZERLAND</span>
          </div>
        </Link>

        {/* Address */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/40">
          <MapPin size={11} className="text-primary shrink-0" />
          <span>Dennliweg 31A, 4900 Langenthal, Switzerland</span>
        </div>

        {/* All phone numbers */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-white/60">
          {["+41 62 293 13 13", "+41 78 908 13 15", "+41 78 702 33 33", "+41 78 912 96 96"].map((num) => (
            <a key={num} href={`tel:${num.replace(/\s/g, "")}`} className="flex items-center gap-1 justify-center hover:text-primary transition-colors">
              <Phone size={10} className="text-primary shrink-0" /> {num}
            </a>
          ))}
        </div>

        {/* Email */}
        <a href="mailto:info@gurdwarasahib.com" className="flex items-center gap-1 text-xs text-white/60 hover:text-primary transition-colors">
          <Mail size={12} className="text-primary" /> info@gurdwarasahib.com
        </a>

        {/* Social Icons + About - All in one row */}
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/Gurdwarasahibswitzerland" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 hover:bg-primary rounded-full transition-colors text-primary hover:text-[#000814]" aria-label="Visit our Facebook page">
            <Facebook size={16} aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/gurudwarasahibswitzerland/" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 hover:bg-primary rounded-full transition-colors text-primary hover:text-[#000814]" aria-label="Visit our Instagram profile">
            <Instagram size={16} aria-hidden="true" />
          </a>
          <Link href="/about" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-xs tracking-wide hover:bg-primary hover:text-[#000814] transition-all duration-300 active:scale-95" aria-label="Read more about Gurdwara Sahib Switzerland">
            <Info size={13} aria-hidden="true" />
            {t("nav.about")}
          </Link>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-[9px] text-white/30 tracking-widest uppercase">© {currentYear} Gurdwara Sahib Switzerland</p>
          <p className="text-[10px] text-white/40">
            Developed by sewadar{" "}
            <a 
              href="https://wa.me/923327167222" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Nitesh Bhatia
            </a>{" "}
            with ❤️ from Pakistan <PakistanFlag />
          </p>
        </div>
      </div>

      {/* ─── DESKTOP Full Footer ─── */}
      <div className="hidden md:block pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand & About */}
            <div className="space-y-4">
              <a href="/" className="flex items-center gap-3">
                <div className="relative w-24 h-24">
                  <Image src="/assets/gurdwara sahib switzerland logo.webp" alt="Gurdwara Sahib Switzerland Logo" fill sizes="96px" className="object-contain" />
                </div>
                <div className="flex flex-col font-playfair font-bold">
                  <span className="text-xl text-primary">Gurdwara Sahib</span>
                  <span className="text-sm tracking-widest text-secondary">SWITZERLAND</span>
                </div>
              </a>
              <p className="text-white/70 text-sm leading-relaxed font-light">{t("footer.desc")}</p>
              <div className="flex items-center gap-4 pt-4">
                <a href="https://www.facebook.com/Gurdwarasahibswitzerland" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-primary rounded-full transition-colors text-white hover:text-[#000814]" aria-label="Visit our Facebook page"><Facebook size={20} aria-hidden="true" /></a>
                <a href="https://www.instagram.com/gurudwarasahibswitzerland/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-primary rounded-full transition-colors text-white hover:text-[#000814]" aria-label="Visit our Instagram profile"><Instagram size={20} aria-hidden="true" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-bold text-primary">{t("footer.links.title")}</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/schedule" prefetch={false} className="hover:text-primary transition-colors">{t("nav.schedule")}</Link></li>
                <li><Link href="/sewa" className="hover:text-primary transition-colors">{t("nav.sewa")}</Link></li>
                <li><Link href="/education" className="hover:text-primary transition-colors">{t("nav.education")}</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-bold text-primary">{t("footer.contact.title")}</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3"><MapPin size={20} className="shrink-0 text-primary" /><span>Dennliweg 31A,<br />4900 Langenthal, Switzerland</span></li>
                <li className="flex items-center gap-3"><Phone size={20} className="shrink-0 text-primary" />
                  <div className="flex flex-col">
                    <span>+41 62 293 13 13</span>
                    <span>+41 78 908 13 15</span>
                    <span>+41 78 702 33 33</span>
                    <span>+41 78 912 96 96</span>
                  </div>
                </li>
                <li className="flex items-center gap-3"><Mail size={20} className="shrink-0 text-primary" /><span>info@gurdwarasahib.com</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {currentYear} Gurdwara Sahib Switzerland. {t("footer.rights")}</p>
            <p>
              Developed by sewadar{" "}
              <a 
                href="https://wa.me/923327167222" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium transition-all"
              >
                Nitesh Bhatia
              </a>{" "}
              with ❤️ from Pakistan <PakistanFlag />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
