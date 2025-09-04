# EmailJS Setup Instructions

To enable email functionality in the contact form, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this sample template structure:

```
Subject: New Inquiry from {{from_name}}

Hello {{to_name}},

You have received a new inquiry through your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

Best regards,
Website Contact Form
```

4. Save the template and note down the **Template ID**

## 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Update Environment Variables
Update the `.env.local` file with your actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Contact Form
1. Start your development server: `pnpm dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email to confirm it's working

## Notes
- EmailJS free plan allows 200 emails per month
- All environment variables must start with `NEXT_PUBLIC_` to be accessible in the browser
- Keep your keys secure and don't commit them to public repositories
