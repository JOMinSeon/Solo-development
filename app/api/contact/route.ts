import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactRequest {
  name: string;
  email: string;
  inquiryType?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();
    const { name, email, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '이름, 이메일, 메시지는 필수입니다.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: '유효한 이메일 주소가 아닙니다.' },
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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: `[홈페이지 문의] ${name}님 - ${inquiryType || '일반 문의'}`,
      html: `
        <h2>홈페이지 문의 도착</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">이름</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">이메일</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">문의 유형</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiryType || '미선택'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">메시지</td><td style="padding: 8px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">접수 시간</td><td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</td></tr>
        </table>
        <br>
        <p><a href="mailto:${email}">${email}로 답변하기</a></p>
      `,
    });

    console.log('Contact Form Submission:', { name, email, inquiryType, message });

    return NextResponse.json(
      { success: true, message: '메시지가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}