# Google Authentication Setup Guide

This guide will help you set up Google OAuth authentication for the Hopewell UMC fasting app.

## Prerequisites

- A Google account
- Access to the Google Cloud Console
- Your application deployed or running locally

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top and select "New Project"
3. Enter a project name (e.g., "Hopewell UMC Fasting App")
4. Click "Create"

## Step 2: Enable Google+ API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google+ API" (or just use the People API)
3. Click on it and press "Enable"

## Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select "External" as the user type (or "Internal" if using Google Workspace)
3. Click "Create"
4. Fill in the required information:
   - App name: `Hopewell UMC Fasting App`
   - User support email: Your church email
   - Developer contact email: Your email
5. Click "Save and Continue"
6. Skip the "Scopes" section for now (click "Save and Continue")
7. Add test users if needed (click "Save and Continue")
8. Review and click "Back to Dashboard"

## Step 4: Create OAuth Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "+ CREATE CREDENTIALS" at the top
3. Select "OAuth client ID"
4. Choose "Web application" as the application type
5. Configure the OAuth client:
   - **Name**: `Hopewell UMC Web Client`
   - **Authorized JavaScript origins**:
     - For local development: `http://localhost:3000`
     - For production: `https://yourdomain.com`
   - **Authorized redirect URIs**:
     - For local development: `http://localhost:3000/api/auth/callback/google`
     - For production: `https://yourdomain.com/api/auth/callback/google`
6. Click "Create"
7. A dialog will show your **Client ID** and **Client Secret** - keep these safe!

## Step 5: Configure Environment Variables

1. Copy the `.env.local.example` file to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in the values:
   ```env
   GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=your-client-secret-here
   NEXTAUTH_SECRET=your-generated-secret-here
   NEXTAUTH_URL=http://localhost:3000
   ```

3. Generate a secure `NEXTAUTH_SECRET`:
   ```bash
   openssl rand -base64 32
   ```
   Copy the output and paste it as the `NEXTAUTH_SECRET` value.

4. **IMPORTANT**: Never commit `.env.local` to version control. It's already in `.gitignore`.

## Step 6: Update Environment Variables for Production

When deploying to production:

1. Update `NEXTAUTH_URL` to your production domain:
   ```env
   NEXTAUTH_URL=https://yourdomain.com
   ```

2. Add your production domain to the Google Cloud Console OAuth credentials:
   - Authorized JavaScript origins: `https://yourdomain.com`
   - Authorized redirect URIs: `https://yourdomain.com/api/auth/callback/google`

3. Set the environment variables in your hosting platform (Vercel, Netlify, etc.)

## Step 7: Test the Authentication

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/fast`

3. Click "Sign In" and then "Continue with Google"

4. You should be redirected to Google's login page

5. After logging in, you should be redirected back to the app with your Google profile information

## What Information is Fetched from Google

When users log in with Google, the app fetches:
- **Name**: User's full name from their Google profile
- **Email**: User's email address
- **Profile Picture**: User's Google profile photo

This information is displayed on:
- The church's fasting page participant list
- User's avatar in posts and comments
- User's profile in the header

## Troubleshooting

### Error: "redirect_uri_mismatch"
- Make sure the redirect URI in your Google Cloud Console exactly matches your app's URL
- Check for trailing slashes - they must match exactly
- Verify you're using the correct protocol (http vs https)

### Error: "Invalid client secret"
- Double-check that you copied the client secret correctly
- Make sure there are no extra spaces in your `.env.local` file

### Profile picture not showing
- Check that `lh3.googleusercontent.com` is in the `next.config.js` allowed domains
- Verify the image URL in your browser's network tab

### Changes not taking effect
- Restart your development server after changing `.env.local`
- Clear your browser cache and cookies
- Try signing out and signing in again

## Security Notes

1. **Never** commit your `.env.local` file
2. **Never** share your `GOOGLE_CLIENT_SECRET` publicly
3. Keep your `NEXTAUTH_SECRET` secure and unique
4. Use different credentials for development and production
5. Regularly rotate your secrets if you suspect they've been compromised

## Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Google Cloud Console](https://console.cloud.google.com/)
