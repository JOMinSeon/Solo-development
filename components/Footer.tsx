import Link from 'next/link';
import Logo from './Logo';

const NaverBlogIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.5 4.5h-15A1.5 1.5 0 003 6v12a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5zm-15 12V6h15v10.5H4.5z"/>
    <text x="12" y="15" fontSize="8" fontWeight="bold" textAnchor="middle" fill="white">N</text>
  </svg>
);

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
          
          <a
            href="https://blog.naver.com/taxai1004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="네이버 블로그"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#03C75A] hover:bg-[#02b34c] text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              <text x="12" y="14" fontSize="10" fontWeight="bold" textAnchor="middle" fill="white">블로그</text>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
