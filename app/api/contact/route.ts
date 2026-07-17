import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const DEFAULT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'manivasgam15@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body || {}

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Please complete all fields before sending.' },
        { status: 400 },
      )
    }

    const recipientEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL
    const host = process.env.SMTP_HOST || process.env.EMAIL_HOST
    const port = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT || 587)
    const user = process.env.SMTP_USER || process.env.EMAIL_USER
    const pass = String(process.env.SMTP_PASS || process.env.EMAIL_PASS || '').replace(/\s+/g, '')
    const fromEmail = process.env.SMTP_FROM || process.env.EMAIL_FROM || user || 'no-reply@rotaractlia.org'

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      })

      await transporter.sendMail({
        from: fromEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `Contact form: ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br />${message.replace(/\n/g, '<br />')}</p>
        `,
      })

      return NextResponse.json({
        success: true,
        message: `Your message was sent to ${recipientEmail}.`,
      })
    }

    console.log('[contact-form] SMTP not configured; message not sent', {
      to: recipientEmail,
      subject,
      from: email,
      message,
    })

    return NextResponse.json({
      success: true,
      message: 'Message received! (Note: SMTP not configured, so no actual email was sent)',
    })
  } catch (error) {
    console.error('[contact-form] Failed to send message', error)

    const message = error instanceof Error ? error.message : 'Unknown error'

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 },
    )
  }
}
