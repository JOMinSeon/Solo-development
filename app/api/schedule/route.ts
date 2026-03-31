import { NextResponse } from 'next/server';
import type { ScheduleFormData } from '@/types/schedule';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body: ScheduleFormData = await request.json();
    const { name, email, phone, projectType, budget, timeline, consultMethod, preferredDate, message } = body;

    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { success: false, error: '이름, 이메일, 프로젝트 유형, 예산, 메시제는 필수입니다.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: '유효한 이메일 주소가 아닙니다.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.EMAIL_USER;
    const fromName = process.env.EMAIL_FROM_NAME || '홈페이지管理员';
    const fromEmail = process.env.EMAIL_USER;

    try {
      await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: toEmail,
        subject: `[홈페이지 상담 신청] ${name}님 - ${projectType}`,
        html: `
          <h2>홈페이지 상담 예약 신청</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">이름</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">이메일</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">전화번호</td><td style="padding: 8px; border: 1px solid #ddd;">${phone || '미입력'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">프로젝트 유형</td><td style="padding: 8px; border: 1px solid #ddd;">${projectType}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">예산</td><td style="padding: 8px; border: 1px solid #ddd;">${budget}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">일정</td><td style="padding: 8px; border: 1px solid #ddd;">${timeline || '미입력'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">상담 방식</td><td style="padding: 8px; border: 1px solid #ddd;">${consultMethod || '미입력'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">희망 날짜</td><td style="padding: 8px; border: 1px solid #ddd;">${preferredDate || '미입력'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">메시지</td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">신청 시간</td><td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</td></tr>
          </table>
        `,
      });
    } catch (emailError) {
      console.error('Email send failed:', emailError instanceof Error ? emailError.message : emailError);
    }

    console.log('Schedule Form Submission:', {
      name,
      email,
      phone,
      projectType,
      budget,
      timeline,
      consultMethod,
      preferredDate,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: '상담 예약이 성공적으로 신청되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Schedule form error:', errorMessage);

    if (errorMessage.includes('Invalid login') || errorMessage.includes('Authentication') || errorMessage.includes('auth')) {
      return NextResponse.json(
        { success: false, error: '이메일 발송 설정 오류입니다. 관리자에게 문의해주세요.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: false, error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}


