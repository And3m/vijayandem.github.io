# Vercel Environment Variables Setup

To make the contact form work properly on Vercel, you need to configure the following environment variables:

## Required Environment Variables

1. **SMTP_EMAIL** - Your Gmail address
2. **SMTP_PASSWORD** - Gmail App Password (NOT your regular password)
3. **CONTACT_EMAIL** - Email where contact form submissions will be sent (optional, defaults to SMTP_EMAIL)

## Setting up Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to "Security" → "App passwords"
4. Generate a new App Password for "Mail"
5. Use this App Password (16 characters) as SMTP_PASSWORD

## Adding Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add the following variables:

```
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-16-character-app-password
CONTACT_EMAIL=your-email@gmail.com
```

4. Deploy your project after adding these variables

## Testing

After setting up the environment variables and deploying:
1. Visit your contact form
2. Fill out and submit the form
3. Check your email for the contact form submission

## Troubleshooting

- If you get "Email service is not configured" error, check that all environment variables are set in Vercel
- If you get "SMTP server verification failed", verify your Gmail App Password is correct
- If emails aren't being received, check your spam folder
- For debugging, check Vercel function logs in the dashboard