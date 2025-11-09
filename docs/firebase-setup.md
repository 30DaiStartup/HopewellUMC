# Firebase Setup Guide for Fasting Tracker

This guide will walk you through setting up Firebase for the HopewellUMC fasting tracker application.

## Prerequisites

- A Google account
- Node.js and npm installed

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter your project name (e.g., "hopewell-umc-fasting")
4. Follow the setup wizard:
   - Enable/disable Google Analytics (optional)
   - Select your Google Analytics account if enabled
5. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project, click the web icon (`</>`) to add a web app
2. Register the app with a nickname (e.g., "Hopewell UMC Fasting Tracker")
3. Don't check "Firebase Hosting" unless you plan to use it
4. Click "Register app"
5. Copy the Firebase configuration object - you'll need these values

## Step 3: Configure Environment Variables

1. In your project root, create a `.env.local` file (it's gitignored by default)
2. Copy the contents from `.env.local.example`
3. Fill in the values from your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 4: Enable Authentication

1. In the Firebase Console, go to **Build** > **Authentication**
2. Click "Get started"
3. Enable the following sign-in methods:
   - **Email/Password**: Click "Email/Password", toggle "Enable", click "Save"
   - **Google**: Click "Google", toggle "Enable", add a support email, click "Save"

## Step 5: Set Up Firestore Database

1. In the Firebase Console, go to **Build** > **Firestore Database**
2. Click "Create database"
3. Choose a location for your database (select one close to your users)
4. Start in **production mode** or **test mode**:
   - **Production mode**: Denies all reads/writes by default (recommended)
   - **Test mode**: Allows all reads/writes for 30 days (only for development)

### Firestore Security Rules

After creating your database, update the security rules:

1. Go to **Firestore Database** > **Rules**
2. Replace with the following rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check if user is authenticated
    function isSignedIn() {
      return request.auth != null;
    }

    // Helper function to check if user owns the resource
    function isOwner(userId) {
      return isSignedIn() && request.auth.uid == userId;
    }

    // Helper function to check if user is admin
    function isAdmin() {
      return isSignedIn() &&
             get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }

    // Users collection
    match /users/{userId} {
      // Anyone authenticated can read users
      allow read: if isSignedIn();
      // Users can create their own document
      allow create: if isSignedIn() && request.auth.uid == userId;
      // Users can update their own document
      allow update: if isOwner(userId);
      // Only admins can delete
      allow delete: if isAdmin();
    }

    // Posts collection
    match /posts/{postId} {
      // Anyone authenticated can read posts
      allow read: if isSignedIn();
      // Anyone authenticated can create posts
      allow create: if isSignedIn();
      // Users can update their own posts
      allow update: if isSignedIn();
      // Users can delete their own posts, admins can delete any
      allow delete: if isOwner(resource.data.userId) || isAdmin();
    }

    // Fasting sessions collection
    match /fasting_sessions/{sessionId} {
      // Users can only read their own sessions
      allow read: if isOwner(resource.data.userId);
      // Users can create their own sessions
      allow create: if isSignedIn() && request.auth.uid == request.resource.data.userId;
      // Users can update their own sessions
      allow update: if isOwner(resource.data.userId);
      // Users can delete their own sessions
      allow delete: if isOwner(resource.data.userId);
    }

    // Journal entries collection
    match /journal_entries/{entryId} {
      // Users can only read their own entries
      allow read: if isOwner(resource.data.userId);
      // Users can create their own entries
      allow create: if isSignedIn() && request.auth.uid == request.resource.data.userId;
      // Users can update their own entries
      allow update: if isOwner(resource.data.userId);
      // Users can delete their own entries
      allow delete: if isOwner(resource.data.userId);
    }
  }
}
```

3. Click "Publish"

## Step 6: Set Up Firestore Indexes (Optional but Recommended)

Some queries require composite indexes. If you get errors about missing indexes when using the app, Firebase will provide a direct link to create them. Alternatively, you can create them manually:

1. Go to **Firestore Database** > **Indexes**
2. Click "Create index"
3. Create the following indexes:

### Users Index
- Collection: `users`
- Fields:
  - `isFasting` (Ascending)
  - `joinedAt` (Descending)

### Posts Index
- Collection: `posts`
- Fields:
  - `createdAt` (Descending)

### Fasting Sessions Index
- Collection: `fasting_sessions`
- Fields:
  - `userId` (Ascending)
  - `startTime` (Descending)

### Journal Entries Index
- Collection: `journal_entries`
- Fields:
  - `userId` (Ascending)
  - `createdAt` (Descending)

## Step 7: (Optional) Set Up Firebase Storage

If you want to support image/video uploads:

1. In the Firebase Console, go to **Build** > **Storage**
2. Click "Get started"
3. Choose security rules (start in production mode)
4. Select a location
5. Click "Done"

### Storage Security Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /posts/{userId}/{allPaths=**} {
      // Allow authenticated users to upload files
      allow write: if request.auth != null && request.auth.uid == userId;
      // Allow anyone authenticated to read
      allow read: if request.auth != null;
    }
  }
}
```

## Step 8: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/fast` in your browser
3. Try signing up with email/password or Google
4. Test creating posts, journal entries, and starting a fasting session

## Firestore Data Structure

The application uses the following Firestore collections:

### `users`
```javascript
{
  id: string (document ID matches Firebase Auth UID),
  email: string,
  displayName: string,
  avatar?: string,
  isAdmin: boolean,
  joinedAt: Timestamp,
  isFasting: boolean
}
```

### `posts`
```javascript
{
  id: string (auto-generated),
  userId: string,
  userName: string,
  userAvatar?: string,
  content: string,
  mediaUrl?: string,
  mediaType?: 'image' | 'video',
  createdAt: Timestamp,
  likes: string[], // array of user IDs
  comments: [
    {
      id: string,
      userId: string,
      userName: string,
      userAvatar?: string,
      content: string,
      createdAt: Timestamp,
      likes: string[]
    }
  ]
}
```

### `fasting_sessions`
```javascript
{
  id: string (auto-generated),
  userId: string,
  startTime: Timestamp,
  endTime?: Timestamp,
  isActive: boolean,
  duration: number // in milliseconds
}
```

### `journal_entries`
```javascript
{
  id: string (auto-generated),
  userId: string,
  content: string,
  mood?: 'joyful' | 'peaceful' | 'struggling' | 'hopeful',
  createdAt: Timestamp,
  sharedToFeed: boolean
}
```

## Troubleshooting

### Error: Missing or insufficient permissions
- Check your Firestore security rules
- Make sure the user is authenticated
- Verify the user has the correct permissions for the operation

### Error: The query requires an index
- Click the link in the error message to create the index automatically
- Or manually create the index as described in Step 6

### Authentication not working
- Verify your environment variables are set correctly
- Check that authentication methods are enabled in Firebase Console
- For Google Sign-In, ensure you've added authorized domains

### Data not syncing in real-time
- Check browser console for errors
- Verify Firestore rules allow read access
- Ensure real-time listeners are properly set up

## Production Deployment

Before deploying to production:

1. Review and tighten Firestore security rules
2. Set up proper indexes for all queries
3. Configure Firebase App Check for abuse prevention
4. Set up Firebase monitoring and alerts
5. Enable Firebase Authentication email verification
6. Consider setting up Firebase Functions for server-side operations

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Next.js with Firebase](https://firebase.google.com/docs/web/setup)
