"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Globe, ChevronRight, Home, Calendar, Heart, BookOpen, Info } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const NAV_LINKS = [
    { name: t("nav.home"), href: "/", icon: Home },
    { name: t("nav.schedule"), href: "/schedule", icon: Calendar },
    { name: t("nav.sewa"), href: "/sewa", icon: Heart },
    { name: t("nav.education"), href: "/education", icon: BookOpen },
    { name: t("nav.about"), href: "/about", icon: Info },
  ];

  useEffect(() => {
    setMounted(true);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize state immediately
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    if (lang === "EN") setLang("DE");
    else if (lang === "DE") setLang("PA");
    else setLang("EN");
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navLinks = NAV_LINKS;

  const isHomePage = pathname === "/";
  // Only use white text on home page top. All other cases (internal pages or scrolled) use dark text.
  const showWhiteText = isHomePage && !isScrolled;
  // Always show background on internal pages or when scrolled on home page
  const showBackground = !isHomePage || isScrolled;

  // Premium High-End Navigation Styles
  const navContainerStyles = isScrolled
    ? "top-4 px-4 sm:px-6"
    : isHomePage ? "top-0 px-0" : "top-2 px-4";

  const navInnerStyles = showBackground
    ? `bg-background/90 backdrop-blur-3xl border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.15),0_0_20px_rgba(212,175,55,0.05)] ${isScrolled ? 'rounded-[2rem] py-2 max-w-5xl mx-auto' : 'rounded-[1.5rem] py-4 max-w-7xl mx-auto'}`
    : "bg-transparent py-6 max-w-7xl mx-auto border-transparent shadow-none";

  return (
    <>
      <nav
        className={`fixed inset-x-0 z-50 transition-[top,padding,background-color] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${navContainerStyles}`}
        aria-label="Primary Navigation"
      >
        <div className={`transition-[background-color,border-color,box-shadow,backdrop-filter,padding,max-width,border-radius] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${navInnerStyles}`}>
          <div className="px-4 md:px-6 lg:px-10 flex justify-between items-center gap-4 lg:gap-8">

            {/* Logo Section - Majestic Positioning */}
            <a href="/" className="flex items-center gap-2 md:gap-3 lg:gap-4 group">
              <div 
                className="relative !w-12 !h-12 md:!w-10 md:!h-10 lg:!w-16 lg:!h-16 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ width: "48px", height: "48px" }}
              >
                <Image
                  src="/assets/gurdwara sahib switzerland logo.webp"
                  alt="Gurdwara Sahib Switzerland Logo"
                  fill
                  sizes="(max-width: 768px) 56px, 64px"
                  className={`object-contain transition-[filter] duration-700 ${showWhiteText ? "drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]" : "drop-shadow-lg"}`}
                  priority
                  fetchPriority="high"
                  style={{ willChange: "filter, transform" }}
                />
              </div>
              <div className="flex flex-col font-playfair tracking-tight">
                <span className={`text-base md:text-[15px] lg:text-2xl font-black leading-none transition-colors duration-700 ${!showWhiteText ? "text-foreground" : "text-white drop-shadow-md"}`}>
                  {t("home.title").split(" ").slice(0, 2).join(" ")}
                </span>
                <span className={`text-[8px] md:text-[7px] lg:text-xs font-bold tracking-[0.2em] lg:tracking-[0.4em] mt-1 opacity-90 transition-colors duration-700 ${!showWhiteText ? "text-primary" : "text-white/90"}`}>
                  {t("home.title").split(" ").slice(2).join(" ").toUpperCase()}
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Elite Typography */}
            <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-10">
              <div className="relative flex items-center gap-3 lg:gap-5 xl:gap-10">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative font-inter text-[10px] lg:text-[13px] font-bold uppercase tracking-wider lg:tracking-[0.1em] transition-all duration-700 hover:text-primary ${isActive
                          ? (!showWhiteText ? "text-primary" : "text-white")
                          : (!showWhiteText ? "text-foreground/80" : "text-white/80 hover:text-white")
                        }`}
                    >
                      {link.name}
                      <AnimatePresence>
                        {isActive && (
                          <m.span
                            key="underline"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            exit={{ scaleX: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            style={{ originX: 0 }}
                            className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        )}
                      </AnimatePresence>
                    </Link>
                  );
                })}
              </div>

              {/* Desktop Actions - Sophisticated Borders */}
              <div className="flex items-center gap-1 lg:gap-4 pl-3 lg:pl-6 xl:pl-10 border-l border-foreground/10">
                <button
                  onClick={toggleLanguage}
                  className={`group flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-black transition-all border border-transparent hover:border-primary/20 ${!showWhiteText ? "text-foreground hover:bg-primary/10" : "text-white hover:bg-white/10"
                    }`}
                  aria-label={`Switch language from ${lang}`}
                  title={`Switch language from ${lang}`}
                >
                  <Globe size={16} className={`${!showWhiteText ? "text-primary" : "text-white"} group-hover:rotate-12 transition-transform`} aria-hidden="true" />
                  <span className="tracking-widest">{lang}</span>
                </button>

                <button
                  onClick={toggleTheme}
                  className={`p-2.5 flex items-center justify-center rounded-full transition-all border border-transparent ${!showWhiteText
                      ? "text-foreground hover:bg-foreground/5 bg-foreground/5 md:bg-transparent hover:border-foreground/10"
                      : "text-white hover:bg-white/10 bg-white/5 md:bg-transparent hover:border-white/20"
                    }`}
                  aria-label="Toggle Theme"
                >
                  <Sun size={18} className={`hidden dark:block ${!showWhiteText ? "text-primary" : "text-white"}`} />
                  <Moon size={18} className={`block dark:hidden ${!showWhiteText ? "text-primary" : "text-white"}`} />
                </button>
              </div>
            </div>

            {/* Mobile Nav Toggle - Refined UI */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-3 flex items-center justify-center rounded-2xl transition-colors ${!showWhiteText ? "text-foreground bg-foreground/5 hover:bg-foreground/10" : "text-white bg-white/10 hover:bg-white/20"
                  }`}
                aria-label="Toggle Theme"
              >
                <Sun size={20} className={`hidden dark:block ${!showWhiteText ? "text-primary" : "text-white"}`} />
                <Moon size={20} className={`block dark:hidden ${!showWhiteText ? "text-primary" : "text-white"}`} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-3 rounded-2xl transition-all active:scale-90 ${!showWhiteText ? "text-foreground bg-primary/10 hover:bg-primary/20" : "text-white bg-white/20 hover:bg-white/30"
                  }`}
                aria-label="Open Menu"
              >
                <Menu size={20} className={!showWhiteText ? "text-primary" : "text-white"} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
            {/* Drawer */}
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 250 }}
              style={{ willChange: "transform" }}
              className="fixed top-0 right-0 bottom-0 w-[80%] sm:w-[380px] z-[70] bg-background/95 backdrop-blur-3xl shadow-[-10px_0_40px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden border-l border-primary/10"
            >
              {/* Mobile Header - Compact & Clean */}
              <div className="p-6 flex items-center justify-between border-b border-primary/5">
                <div className="flex items-center gap-3">
                  <div 
                    className="relative !w-10 !h-10"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <Image
                      src="/assets/gurdwara sahib switzerland logo.webp"
                      alt="Gurdwara Logo"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-playfair font-black text-foreground text-sm tracking-tight">{t("home.title").split(" ").slice(0, 2).join(" ")}</span>
                    <span className="text-[8px] tracking-[0.3em] text-primary font-bold uppercase" aria-hidden="true">{t("home.title").split(" ").slice(2).join(" ")}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground/40 hover:text-primary transition-colors"
                  aria-label="Close Mobile Menu"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links - Clean Button Style */}
              <div className="flex-1 flex flex-col gap-2 min-[600px]:gap-3 py-4 min-[600px]:py-8 px-6 overflow-y-auto">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mb-2 ml-4">{t("nav.menu")}</p>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <m.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        prefetch={link.href === "/schedule" ? false : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-6 py-4 rounded-2xl w-full transition-all duration-300 font-inter text-base font-bold tracking-wide border ${isActive
                            ? "bg-primary text-background border-transparent shadow-md shadow-primary/20"
                            : "bg-primary/5 text-foreground/80 border-transparent hover:bg-primary/10 hover:border-primary/20"
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <link.icon size={20} className={isActive ? "text-background" : "text-primary"} />
                          <span>{link.name}</span>
                        </div>
                        <ChevronRight size={16} className={isActive ? "text-background" : "text-primary/40"} />
                      </Link>
                    </m.div>
                  );
                })}
              </div>

              {/* Preferences Footer - Simplified */}
              <div className="p-8 border-t border-primary/5 bg-foreground/[0.02]">
                <div className="flex flex-col gap-6">
                  {/* Mininalist Language Selector */}
                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 ml-4">{t("nav.language")}</p>
                    <div className="grid grid-cols-3 gap-2">
                      {(['EN', 'DE', 'PA'] as const).map((l) => {
                        const isCurrent = lang === l;
                        return (
                          <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`py-3 rounded-xl font-bold text-xs transition-all border ${isCurrent
                                ? "bg-primary/10 text-primary border-primary/30"
                                : "bg-background text-foreground/40 border-primary/5 hover:border-primary/20"
                              }`}
                          >
                            {l}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[9px] text-foreground/20 font-bold tracking-[0.3em] uppercase">
                      © {new Date().getFullYear()} {t("home.title")}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
