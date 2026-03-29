export interface ScheduleFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  consultMethod: string;
  preferredDate?: string;
  message: string;
}

export interface ScheduleApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const PROJECT_TYPES = [
  '랜딩페이지 / 소규모',
  '웹 서비스 / 중규모',
  '스타트업 MVP / 대규모',
  '기타',
] as const;

export const BUDGET_OPTIONS = [
  '₩150만 ~ ₩250만',
  '₩300만 ~ ₩800만',
  '₩1,000만+',
  '미정',
] as const;

export const TIMELINE_OPTIONS = [
  '즉시 시작',
  '1개월 이내',
  '3개월 이내',
  '미정',
] as const;

export const CONSULT_METHODS = [
  '화상 미팅 (Google Meet)',
  '전화 통화',
  '카카오톡',
] as const;
