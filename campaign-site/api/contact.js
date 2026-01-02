// Simple contact form API endpoint
// This is a local-only placeholder that logs form submissions

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // TODO: Wire up to a real email provider
  // Options:
  // 1. SendGrid: https://sendgrid.com/
  // 2. Mailgun: https://www.mailgun.com/
  // 3. AWS SES: https://aws.amazon.com/ses/
  // 4. Postmark: https://postmarkapp.com/
  //
  // Example with SendGrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: 'campaign@example.com',
  //   from: 'noreply@example.com',
  //   subject: `Contact Form: ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  // });

  console.log('Contact form submission received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);
  console.log('---');

  // Return success response
  res.status(200).json({
    success: true,
    message: 'Form submitted successfully (local mode)',
  });
}
