import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, source } = body;

        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL || 'info@rerabypooja.com';
        const senderName = process.env.BREVO_SENDER_NAME || 'RERA Consultants Website';
        const adminEmail = process.env.ADMIN_EMAIL_PRIMARY || 'info.admin@rerabypooja.com';
        const adminCc = process.env.ADMIN_EMAIL_CC || 'poojagowda@rerabypooja.com';

        // Debug logging (Remove in production)
        console.log('API Key present:', !!apiKey);
        if (apiKey) {
            console.log('API Key length:', apiKey.length);
            console.log('API Key prefix:', apiKey.substring(0, 8));
        }

        if (!apiKey) {
            console.error('BREVO_API_KEY is not configured');
            return NextResponse.json({ error: 'Email service configuration missing' }, { status: 500 });
        }

        const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': apiKey,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: { name: senderName, email: senderEmail },
                to: [{ email: adminEmail, name: 'Admin' }],
                cc: [{ email: adminCc, name: 'Pooja Gowda M' }],
                subject: `New Inquiry from ${name} [${source || 'Website'}]`,
                htmlContent: `
                    <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
                        <h2 style="color: #064e3b; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Website Inquiry</h2>
                        <p>You have received a new inquiry from the <strong>${source || 'Contact Form'}</strong>.</p>
                        
                        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                            <tr>
                                <td style="padding: 10px; border: 1px solid #eee; background: #f9f9f9; font-weight: bold; width: 30%;">Name</td>
                                <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #eee; background: #f9f9f9; font-weight: bold;">Email</td>
                                <td style="padding: 10px; border: 1px solid #eee;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #eee; background: #f9f9f9; font-weight: bold;">Phone</td>
                                <td style="padding: 10px; border: 1px solid #eee;">${phone}</td>
                            </tr>
                            ${message ? `
                            <tr>
                                <td style="padding: 10px; border: 1px solid #eee; background: #f9f9f9; font-weight: bold;">Message</td>
                                <td style="padding: 10px; border: 1px solid #eee;">${message}</td>
                            </tr>` : ''}
                        </table>
                        
                        <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
                            This is an automated notification from RERA Consultants Website.
                        </p>
                    </div>
                `
            })
        });

        if (!brevoResponse.ok) {
            const errorText = await brevoResponse.text();
            console.error('Brevo API Error:', errorText);
            return NextResponse.json({ error: 'Failed to send email via Brevo' }, { status: brevoResponse.status });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
