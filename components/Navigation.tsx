'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/about', label: '소개' },
  { href: '/products', label: '제품' },
  { href: '/freelance', label: '외주' },
  { href: '/contact', label: '연락처' },
];

const STORAGE_KEY = 'corenext-dark-mode';

function getInitialDarkState(): boolean {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) {
    return stored === 'true';
  }
  return document.documentElement.classList.contains('dark');
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(getInitialDarkState);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      const isDarkMode = stored === 'true';
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY) === null) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        setIsDark(e.matches);
      }
    };

    darkQuery.addEventListener('change', handleChange);
    return () => darkQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDark = useCallback(() => {
    const newIsDark = !isDark;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(STORAGE_KEY, String(newIsDark));
    setIsDark(newIsDark);
  }, [isDark]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const newIsOpen = !prev;
      if (newIsOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return newIsOpen;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        메인 콘텐츠로 건너뛰기
      </a>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
<span className="hidden sm:inline">코어넥스트</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-opacity duration-150 hover:opacity-70 ${
                  pathname === link.href
                    ? 'text-[var(--color-foreground)] font-semibold border-b-2 border-[var(--color-accent)] pb-1'
                    : 'text-[var(--color-foreground)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDark}
              aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
              className="p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors duration-150"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors duration-150"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[var(--color-background)] pt-16"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <nav id="mobile-menu" className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`px-6 py-4 text-lg font-medium border-b border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-colors ${
                  pathname === link.href
                    ? 'text-[var(--color-primary)] bg-[var(--color-surface)]'
                    : 'text-[var(--color-foreground)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4 px-6 py-4 border-t border-[var(--color-border)]">
            <button
              onClick={toggleDark}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[var(--color-surface-hover)]"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm">{isDark ? '라이트' : '다크'}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
