-- 상담 예약 스키마
-- Run this in Supabase SQL Editor

-- 1. 상담 예약 테이블 생성
CREATE TABLE IF NOT EXISTS schedule_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT NOT NULL,
  budget TEXT NOT NULL,
  timeline TEXT,
  consult_method TEXT,
  preferred_date DATE,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. RLS (Row Level Security) 활성화
ALTER TABLE schedule_requests ENABLE ROW LEVEL SECURITY;

-- 3. 정책: 누구나 삽입 가능
CREATE POLICY "Anyone can insert schedule_requests"
  ON schedule_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 4. 정책: 인증된 사용자만 조회 가능
CREATE POLICY "Authenticated users can view schedule_requests"
  ON schedule_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- 5. 정책: 인증된 사용자만 삭제 가능
CREATE POLICY "Authenticated users can delete schedule_requests"
  ON schedule_requests
  FOR DELETE
  TO authenticated
  USING (true);

-- 6. updated_at 자동 업데이트 트리거
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_schedule_requests_updated_at
  BEFORE UPDATE ON schedule_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 7. 인덱스 생성
CREATE INDEX idx_schedule_requests_created_at ON schedule_requests(created_at DESC);
CREATE INDEX idx_schedule_requests_email ON schedule_requests(email);

-- 8. 이메일 유효성 검사 제약조건
ALTER TABLE schedule_requests
  ADD CONSTRAINT valid_email
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- 9. project_type 유효값 제약조건
ALTER TABLE schedule_requests
  ADD CONSTRAINT valid_project_type
  CHECK (project_type IN ('랜딩페이지 / 소규모', '웹 서비스 / 중규모', '스타트업 MVP / 대규모', '기타'));

-- 10. budget 유효값 제약조건
ALTER TABLE schedule_requests
  ADD CONSTRAINT valid_budget
  CHECK (budget IN ('₩150만 ~ ₩250만', '₩300만 ~ ₩800만', '₩1,000만+', '미정'));
