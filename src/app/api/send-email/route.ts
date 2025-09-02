import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error verifying recaptcha:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, surname, email, description, recaptchaToken } = await request.json();

    if (!name || !surname || !email || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification is required' },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name} ${surname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Description:</strong></p>
      <p>${description.replace(/\n/g, '<br>')}</p>
    `;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ruben.ben111@gmail.com',
      subject: `Contact Form: Question from ${name} ${surname}`,
      html: emailContent
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}