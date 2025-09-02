import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend('you_wont_see_mmy_api_key_xd');

export async function POST(request: NextRequest) {
  try {
    const { name, surname, email, description } = await request.json();

    if (!name || !surname || !email || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
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