## Summary
This PR enables public access to the participant list and top 5 community posts before users sign in, encouraging engagement and allowing visitors to preview the active community.

## Changes Made

### 1. Code Changes
- **Added `subscribeToTopPosts()` function** in `src/lib/firestore-service.ts` to fetch top 5 posts for unauthenticated users
- **Modified posts subscription** in `src/contexts/fasting-context.tsx`:
  - Unauthenticated users see top 5 posts
  - Authenticated users see up to 50 posts (existing behavior)
- **Modified participants subscription** in `src/contexts/fasting-context.tsx`:
  - All users (authenticated and unauthenticated) can now view the participant list

### 2. Firestore Security Rules
- **Created `firestore.rules`** with public read access for posts and users collections
- **Created `firebase.json`** for Firebase configuration
- **Created `FIRESTORE_RULES_DEPLOYMENT.md`** with deployment instructions

## Security Rules Summary

### Public Read Access
- ✅ Posts collection: Anyone can read posts
- ✅ Users collection: Anyone can read user profiles

### Protected Write Access
- 🔒 Posts: Only authenticated users can create
- 🔒 Posts: Only owner or admin can update/delete
- 🔒 Users: Users can only update their own profile
- 🔒 Users: Only admins can delete users

### Private Data (Owner-Only Access)
- 🔐 Journal entries
- 🔐 Fasting sessions
- 🔐 Weight entries
- 🔐 Weight goals

## Deployment Required

**IMPORTANT**: After merging this PR, you must deploy the Firestore security rules:

```bash
# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy the rules
firebase deploy --only firestore:rules
```

Alternatively, copy the rules from `firestore.rules` into the Firebase Console (Firestore Database → Rules → Publish).

## Testing

### Before Deployment (Current State)
- ❌ Unauthenticated users see "No posts yet" and empty participant list

### After Deployment (Expected State)
- ✅ Unauthenticated users can see participant list
- ✅ Unauthenticated users can see top 5 community posts
- ✅ Interactive features (like, comment, create post) remain disabled for unauthenticated users
- ✅ Private data (journals, sessions, weight tracking) remains secure

## UI Behavior

Existing UI components already handle unauthenticated state correctly:
- Like/comment buttons are disabled for unauthenticated users
- "Add comment" form is hidden for unauthenticated users
- New post button is disabled for unauthenticated users
- Delete post button only shows for post owners and admins
- Call-to-action prompts unauthenticated users to sign in

## Build Status
✅ Build completed successfully
✅ Type checks passed
✅ No linting errors

See `FIRESTORE_RULES_DEPLOYMENT.md` for complete deployment instructions.
