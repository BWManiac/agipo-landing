import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { config } from './config';
import { subscribeSchema } from './schema';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = subscribeSchema.parse(body);

    // Create contact in Resend audience
    const { data: contact, error: contactError } = await resend.contacts.create({
      email: validatedData.email,
      firstName: '',
      lastName: '',
      unsubscribed: false,
      audienceId: config.subscribe.audienceId,
    });

    if (contactError) {
      console.error('Contact creation error:', contactError);
      return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
    }

    // Send notification email
    const emailSubject = 'New Email Capture - Agipo Landing';
    const emailContent = `
      <h2 style="color: #000000;">New Email Capture</h2>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Website:</strong> Agipo Landing Page</p>
      <p><strong>Source:</strong> ${validatedData.source}</p>
      <p><strong>Context:</strong> ${validatedData.context || 'No context provided'}</p>
      <p><em>This was a simple email capture submission.</em></p>
    `;

    const { error: emailError } = await resend.emails.send({
      from: 'Agipo <onboarding@resend.dev>',
      to: config.subscribe.email,
      subject: emailSubject,
      html: emailContent,
    });

    if (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json({ error: 'Contact created but email failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true, contactId: contact.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: error.issues }, { status: 400 });
    }
    console.error('Subscribe form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
