import Link from 'next/link';
import { Star, GitFork, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  language?: string;
  languageColor?: string;
  stars?: number;
  forks?: number;
  tags?: string[];
  href?: string;
  variant?: 'open-source' | 'product' | 'side-project' | 'featured';
  status?: 'active' | 'completed' | 'archived';
}

export default function ProjectCard({
  title,
  description,
  language,
  languageColor,
  stars,
  forks,
  tags = [],
  href = '#',
  variant = 'open-source',
  status,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`group block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 md:p-6 transition-all duration-200 hover:bg-[var(--color-surface-hover)] hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        variant === 'featured' ? 'border-l-4 border-l-[var(--color-accent)]' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {language && (
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: languageColor || '#6b7280' }}
            />
          )}
          <span className="text-sm text-[var(--color-muted-foreground)] font-mono">
            {language}
          </span>
        </div>
        {status && (
          <span
            className={`text-xs px-2 py-0.5 rounded ${
              status === 'active'
                ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]'
                : status === 'completed'
                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                : 'bg-[var(--color-muted-foreground)]/10 text-[var(--color-muted-foreground)]'
            }`}
          >
            {status === 'active' ? '진행중' : status === 'completed' ? '완료' : '보관됨'}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
        {title}
      </h3>

      <p className="text-sm text-[var(--color-muted-foreground)] mb-4 line-clamp-2">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-[var(--color-subtle)] text-[var(--color-subtle-foreground)] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {(stars !== undefined || forks !== undefined) && (
        <div className="flex items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
          {stars !== undefined && (
            <span className="flex items-center gap-1">
              <Star size={14} />
              {stars.toLocaleString()}
            </span>
          )}
          {forks !== undefined && (
            <span className="flex items-center gap-1">
              <GitFork size={14} />
              {forks.toLocaleString()}
            </span>
          )}
          <span className="ml-auto flex items-center gap-1 text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
            View <ArrowRight size={14} />
          </span>
        </div>
      )}
    </Link>
  );
}
