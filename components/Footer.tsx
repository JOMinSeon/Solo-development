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
        </div>
      </div>
    </footer>
  );
}
