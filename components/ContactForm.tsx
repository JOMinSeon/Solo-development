'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactIntentSelector, ContactFAQ, type ContactIntent } from './ContactIntentSelector';

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [intent, setIntent] = useState<ContactIntent>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '유효한 이메일 주소를 입력해주세요';
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '메시지는 최소 10자 이상이어야 합니다';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          inquiryType: intent || 'other',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '문제가 발생했습니다.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : '문제가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleIntentSelect = (selectedIntent: ContactIntent) => {
    setIntent(selectedIntent);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 md:p-8 text-center">
        <CheckCircle size={48} className="mx-auto mb-4 text-[var(--color-success)]" />
        <h3 className="text-xl font-semibold mb-2">메시지가 성공적으로 전송되었습니다!</h3>
        <p className="text-[var(--color-muted-foreground)]">
          확인 후 빠른 시일 내에 답변드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ContactIntentSelector selectedIntent={intent} onSelect={handleIntentSelect} />

      {intent && (
        <div className="mb-6">
          <ContactFAQ intent={intent} />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            이름 <span className="text-[var(--color-error)]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors ${
              errors.name
                ? 'border-[var(--color-error)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-muted-foreground)]'
            }`}
            placeholder="홍길동"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-[var(--color-error)] flex items-center gap-1" role="alert">
              <AlertCircle size={12} /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            이메일 <span className="text-[var(--color-error)]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors ${
              errors.email
                ? 'border-[var(--color-error)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-muted-foreground)]'
            }`}
            placeholder="fjkg33@gmail.com"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-[var(--color-error)] flex items-center gap-1" role="alert">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            메시지 <span className="text-[var(--color-error)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors resize-none ${
              errors.message
                ? 'border-[var(--color-error)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-muted-foreground)]'
            }`}
            placeholder="메시지를 입력하세요"
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-[var(--color-error)] flex items-center gap-1" role="alert">
              <AlertCircle size={12} /> {errors.message}
            </p>
          )}
        </div>

        {submitError && (
          <p className="text-sm text-[var(--color-error)] flex items-center gap-1" role="alert">
            <AlertCircle size={14} /> {submitError}
          </p>
        )}

        <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
          {isSubmitting ? (
            '전송 중...'
          ) : (
            <>
              메시지 보내기
              <Send size={16} />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
