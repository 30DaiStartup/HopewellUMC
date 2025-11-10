# Deploying Firestore Security Rules

## Issue
Unauthenticated users cannot view the participant list and top 5 community posts because Firestore security rules are blocking the reads.

## Solution
Deploy the updated Firestore security rules that allow public read access to the `posts` and `users` collections while maintaining write protection.

## Deployment Options

### Option 1: Using Firebase CLI (Recommended)

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase** (if not already initialized):
   ```bash
   firebase init
   ```
   - Select "Firestore" when prompted
   - Use the existing `firestore.rules` file
   - Press Enter to accept defaults

4. **Deploy the security rules**:
   ```bash
   firebase deploy --only firestore:rules
   ```

5. **Verify deployment**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Navigate to Firestore Database → Rules
   - Verify the rules match the content in `firestore.rules`

### Option 2: Using Firebase Console (Manual)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Firestore Database** → **Rules**
4. Copy the entire content of `firestore.rules` file
5. Paste it into the rules editor
6. Click **Publish**

## What Changed in the Rules

### Posts Collection
- **Before**: Likely required authentication for reads
- **After**: `allow read: if true;` - Anyone can read posts (needed for top 5 posts preview)
- **Write access**: Still requires authentication

### Users Collection
- **Before**: Likely required authentication for reads
- **After**: `allow read: if true;` - Anyone can read user profiles (needed for participant list)
- **Write access**: Users can only update their own profile, only admins can delete

### Other Collections
- Journal entries, fasting sessions, weight entries, and weight goals remain private
- Only the owner can read/write their own data

## Security Notes

The new rules are secure because:
1. **Public reads are intentional** - Users need to see community content before signing up
2. **All writes require authentication** - Only logged-in users can create/update/delete data
3. **Private data stays private** - Journal entries, fasting sessions, and weight data are only accessible to the owner
4. **Ownership validation** - Users can only modify their own data (except admins for posts)

## Testing After Deployment

1. **Test unauthenticated access**:
   - Open the app in an incognito/private browser window
   - Verify you can see the participant list
   - Verify you can see the top 5 community posts
   - Verify you cannot create posts, like, or comment

2. **Test authenticated access**:
   - Sign in with a regular user account
   - Verify you can see all posts (up to 50)
   - Verify you can create posts, like, and comment
   - Verify you can only delete your own posts

3. **Test admin access** (if applicable):
   - Sign in with an admin account
   - Verify you can delete any post

## Troubleshooting

If unauthenticated users still cannot see data after deployment:

1. **Clear browser cache** and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. **Check Firebase Console** to ensure rules were deployed correctly
3. **Check browser console** for any error messages
4. **Verify Firebase configuration** in `.env.local` is correct
5. **Check Firestore indexes** - The app queries with `orderBy` which may require indexes

## Firebase Project Setup

If you haven't connected this project to Firebase yet:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
   - Select Firestore
   - Choose your existing Firebase project
   - Accept the default files (firestore.rules, firebase.json)
4. Deploy: `firebase deploy --only firestore:rules`
