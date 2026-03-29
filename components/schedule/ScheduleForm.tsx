'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import { AlertCircle, Calendar, Phone, Video, MessageSquare } from 'lucide-react';
import type { ScheduleFormData } from '@/types/schedule';
import {
  PROJECT_TYPES,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  CONSULT_METHODS,
} from '@/types/schedule';

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

const consultMethodIcons: Record<string, React.ReactNode> = {
  '화상 미팅 (Google Meet)': <Video size={16} />,
  '전화 통화': <Phone size={16} />,
  '카카오톡': <MessageSquare size={16} />,
};

export default function ScheduleForm() {
  const [formData, setFormData] = useState<ScheduleFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    consultMethod: '',
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    if (!formData.projectType) {
      newErrors.projectType = '프로젝트 유형을 선택해주세요';
    }

    if (!formData.budget) {
      newErrors.budget = '예산 범위를 선택해주세요';
    }

    if (!formData.message.trim()) {
      newErrors.message = '프로젝트 설명을 입력해주세요';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = '프로젝트 설명은 최소 20자 이상이어야 합니다';
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
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || '문제가 발생했습니다.');
      }

      window.location.href = '/schedule?success=true';
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : '문제가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRadioSelect = (name: keyof ScheduleFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          />
          {errors.name && (
            <p className="mt-1 text-xs text-[var(--color-error)] flex items-center gap-1">
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
          />
          {errors.email && (
            <p className="mt-1 text-xs text-[var(--color-error)] flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          연락처 <span className="text-[var(--color-muted-foreground)]">(선택)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-muted-foreground)] rounded-lg text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          placeholder="010-1234-5678"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium mb-2">
            프로젝트 유형 <span className="text-[var(--color-error)]">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors appearance-none ${
              errors.projectType
                ? 'border-[var(--color-error)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-muted-foreground)]'
            }`}
            aria-required="true"
          >
            <option value="">선택하세요</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1 text-xs text-[var(--color-error)] flex items-center gap-1">
              <AlertCircle size={12} /> {errors.projectType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-2">
            예산 범위 <span className="text-[var(--color-error)]">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors appearance-none ${
              errors.budget
                ? 'border-[var(--color-error)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-muted-foreground)]'
            }`}
            aria-required="true"
          >
            <option value="">선택하세요</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="mt-1 text-xs text-[var(--color-error)] flex items-center gap-1">
              <AlertCircle size={12} /> {errors.budget}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium mb-2">
            희망 시작 시기 <span className="text-[var(--color-muted-foreground)]">(선택)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-muted-foreground)] rounded-lg text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors appearance-none"
          >
            <option value="">선택하세요</option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
            희망 상담 날짜 <span className="text-[var(--color-muted-foreground)]">(선택)</span>
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-muted-foreground)] rounded-lg text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">
          상담 방법 <span className="text-[var(--color-muted-foreground)]">(선택)</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {CONSULT_METHODS.map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => handleRadioSelect('consultMethod', method)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                formData.consultMethod === method
                  ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                  : 'bg-[var(--color-subtle)] text-[var(--color-subtle-foreground)] hover:bg-[var(--color-surface-hover)]'
              }`}
            >
              {consultMethodIcons[method]}
              {method}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          프로젝트 설명 <span className="text-[var(--color-error)]">*</span>
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
          placeholder="프로젝트에 대해 설명해주세요.무엇을 만들고 싶은지, 필요로 하는 기능, 기대하는 결과 등을 알려주시면 상담에 큰 도움이 됩니다."
          aria-required="true"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[var(--color-error)] flex items-center gap-1">
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
          '신청 중...'
        ) : (
          <>
            <Calendar size={16} />
            상담 예약 신청
          </>
        )}
      </Button>
    </form>
  );
}
