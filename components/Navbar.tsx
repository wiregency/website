'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Extract locale from pathname
  const locale = pathname.split('/')[1];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-[34px] md:top-[32px] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href={`/${locale}`} className="text-white font-bold text-xl">
            wiregency
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
            <Link href={`/${locale}`} className="relative overflow-hidden group">
              <div className={`${pathname === `/${locale}` ? 'text-white' : 'text-zinc-400'} group-hover:-translate-y-full transition-transform duration-300`}>
                {t('Nav.home')}
              </div>
              <div className="text-white absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.home')}
              </div>
            </Link>
            <div className="h-4 w-[1px] bg-zinc-700"></div>
            <Link href={`/${locale}/projects`} className="relative overflow-hidden group">
              <div className={`${pathname.includes('/projects') ? 'text-white' : 'text-zinc-400'} group-hover:-translate-y-full transition-transform duration-300`}>
                {t('Nav.projects')}
              </div>
              <div className="text-white absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.projects')}
              </div>
            </Link>
            <div className="h-4 w-[1px] bg-zinc-700"></div>
            <Link href={`/${locale}/pricing`} className="relative overflow-hidden group">
              <div className={`${pathname.includes('/pricing') ? 'text-white' : 'text-zinc-400'} group-hover:-translate-y-full transition-transform duration-300`}>
                {t('Nav.pricing')}
              </div>
              <div className="text-white absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.pricing')}
              </div>
            </Link>
          </div>

          <Link 
            href="https://discord.wiregency.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="hidden md:block bg-white text-black hover:bg-zinc-200 transition-all rounded-full px-4 py-2 group"
          >
            <span className="flex items-center gap-1.5">
              {t('Nav.cta')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-black/95 backdrop-blur-md absolute left-0 right-0 top-full border-t border-zinc-800 transition-all duration-300 origin-top ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col gap-4 p-4">
            <Link 
              href={`/${locale}`}
              className="relative overflow-hidden group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="text-zinc-400 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.home')}
              </div>
              <div className="text-white absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.home')}
              </div>
            </Link>
            <Link 
              href={`/${locale}/projects`}
              className="relative overflow-hidden group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="text-zinc-400 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.projects')}
              </div>
              <div className="text-white absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.projects')}
              </div>
            </Link>
            <Link 
              href={`/${locale}/pricing`}
              className="relative overflow-hidden group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="text-zinc-400 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.pricing')}
              </div>
              <div className="text-white absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {t('Nav.pricing')}
              </div>
            </Link>
            <Link 
              href="https://discord.wiregency.com"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-white text-black hover:bg-zinc-200 transition-all rounded-full px-4 py-2 text-center group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center justify-center gap-1.5">
                {t('Nav.cta')}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}