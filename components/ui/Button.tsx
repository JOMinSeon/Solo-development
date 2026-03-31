import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 ease-in rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-highlight)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
      secondary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)]',
      ghost: 'bg-transparent text-[var(--color-secondary)] hover:bg-[var(--color-surface)]',
      outline: 'bg-transparent border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white',
    };
    
    const sizes = {
      sm: 'h-9 px-3 text-sm md:h-9 md:px-3 md:text-sm',
      md: 'h-10 px-4 text-sm md:h-11 md:px-5 md:text-[0.9375rem]',
      lg: 'h-11 px-5 text-[0.875rem] md:h-12 md:px-6 md:text-[0.9375rem]',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
