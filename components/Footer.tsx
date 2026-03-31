import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
              <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
              <span>코어넥스트 조민성</span>
            </Link>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              사업자등록증: 297-66-00726
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-[var(--color-muted-foreground)]">
            <p>0507-1305-7196</p>
            <p>fjkg33@gmail.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            © {currentYear} 코어넥스트. 모든 권리 보유.
          </p>
          
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/fjkg123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="인스타그램"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-85 text-white transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="https://blog.naver.com/taxai1004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="네이버 블로그"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#03C75A] hover:opacity-85 text-white transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                <text x="12" y="14" fontSize="10" fontWeight="bold" textAnchor="middle" fill="white">블로그</text>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
