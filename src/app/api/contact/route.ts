import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, subject, message, projectType } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
            console.error('Missing email configuration environment variables');
            return NextResponse.json(
                { 
                    error: 'Email service is not configured. Please contact the site administrator.',
                    details: 'SMTP credentials not found'
                },
                { status: 500 }
            );
        }

        console.log('Attempting to send email with configuration:', {
            smtpEmail: process.env.SMTP_EMAIL ? 'Set' : 'Not set',
            smtpPassword: process.env.SMTP_PASSWORD ? 'Set' : 'Not set',
            contactEmail: process.env.CONTACT_EMAIL ? 'Set' : 'Not set'
        });

        // Create transporter based on service
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_EMAIL,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                        ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
                    </div>
                    
                    <div style="background: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Subject</h3>
                        <p>${subject}</p>
                        
                        <h3 style="color: #333;">Message</h3>
                        <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                        <p>This email was sent from your portfolio contact form.</p>
                        <p>Reply directly to this email to respond to ${name} at ${email}</p>
                    </div>
                </div>
            `,
            replyTo: email,
        };

        // Verify transporter configuration
        try {
            await transporter.verify();
            console.log('SMTP server connection verified');
        } catch (verifyError) {
            console.error('SMTP verification failed:', verifyError);
            return NextResponse.json(
                { 
                    error: 'Email service configuration error. Please contact the site administrator.',
                    details: 'SMTP server verification failed'
                },
                { status: 500 }
            );
        }

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email sending error:', error);
        
        // Log more detailed error information for debugging
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        
        return NextResponse.json(
            { error: 'Failed to send email. Please try again or contact directly via email.' },
            { status: 500 }
        );
    }
}