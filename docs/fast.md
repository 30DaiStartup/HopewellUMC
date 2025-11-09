# Church Fasting App Documentation

## Overview

A comprehensive web application for the church congregation's group fasting event (November 11-16, 2025). The app provides personal tracking, community support, and spiritual resources in a single platform.

**Live URL**: `/fast`

**Navigation**: Added to mobile menu → Column 2 → Last item

---

## Product Requirements Document (PRD)

### 1.1 Purpose
This PRD defines the Minimum Viable Product (MVP) for a web-based fasting application specifically designed for a single church congregation to support a group fasting event. The app enables personal fasting tracking, community interactions, and access to spiritual resources focused on faith-based fasting. It is engineered for quick deployment to align with the upcoming event, commencing on Tuesday, November 11, 2025, and concluding at noon EST on Sunday, November 16, 2025.

### 1.2 Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 18 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **State Management**: React Context + localStorage
- **Authentication**: Mock implementation (ready for Firebase/Supabase)
- **Build Tools**: Turbopack, Biome, ESLint

### 1.3 Scope

**In Scope (MVP)**:
- User authentication (Google OAuth mock + email/password)
- Personal fasting timer and tracker
- Social feed with posts, likes, threaded comments
- Rich text posts with media uploads (images/videos)
- Participant list showing all fasting members
- Event countdown timer
- Curated Bible scriptures (10+ verses)
- Fasting tips and spiritual guidance
- Private journal with mood tracking
- Optional journal sharing to feed
- Mobile-responsive design
- localStorage persistence

**Out of Scope (MVP)**:
- Multiple churches/events support
- Advanced analytics/dashboards
- Monetization features
- External integrations (wearables, payment gateways)
- Native mobile apps
- Real-time sync across devices
- Push notifications
- Video calls/live streaming
- Email notifications
- Admin moderation dashboard

### 1.4 Success Metrics
- 70%+ sign-up rate among congregation
- 50%+ daily active users
- Average 3+ interactions (posts/likes/comments) per user daily
- <5% error rate in media uploads
- Positive user feedback on community support

---

## Design Specification

### Design Philosophy: Radical Simplicity

**Core Principles**:
- Every screen answers: "What does the user need right now?"
- Spiritual aesthetic with serene color palette
- Mobile-first, PWA-ready
- Subtle, purposeful animations
- High accessibility (WCAG AA+)

### Color Palette
- **Primary Background**: Dove Gray (#F3F4F6)
- **Primary Accent**: Deep Indigo (#4F46E5 - symbolizing faith's depth)
- **Secondary Accent**: Warm Beige (#D2B48C - earthly humility)
- **Error**: Red (#EF4444)
- **Success**: Green (#10B981)

### Typography
- **Base**: System sans-serif (-apple-system, Inter)
- **Size**: 16px base, scales to 32px for timers
- **Headings**: Slightly serif touch for scripture (Playfair Display consideration)

### Theme Colors by Scripture Type
- **Sacrifice**: Amber (#F59E0B)
- **Discipline**: Indigo (#4F46E5)
- **Faith**: Green (#10B981)
- **Prayer**: Blue (#3B82F6)

---

## Implementation Details

### File Structure

```
src/
├── app/
│   └── fast/
│       └── page.tsx              # Main fasting app page
├── components/
│   └── fasting/
│       ├── auth-modal.tsx        # Login/signup modal
│       ├── countdown-timer.tsx   # Event countdown
│       ├── fasting-tracker.tsx   # Personal timer & journal
│       ├── new-post-dialog.tsx   # Create post modal
│       ├── onboarding-modal.tsx  # Welcome flow
│       ├── participant-list.tsx  # Member sidebar
│       ├── post-card.tsx         # Social post component
│       └── scriptures-section.tsx # Bible verses & tips
├── contexts/
│   └── fasting-context.tsx       # Global state management
└── lib/
    ├── fasting-data.ts           # Scriptures, tips, event config
    └── fasting-types.ts          # TypeScript interfaces
```

### Key Components

#### 1. FastingContext (State Management)
- Provides global state via React Context
- localStorage for data persistence
- Mock authentication functions
- CRUD operations for posts, comments, journal entries
- Session management for fasting timers

**Key Functions**:
- `login()`, `signup()`, `loginWithGoogle()`, `logout()`
- `joinFast()` - Adds user to participant list
- `addPost()`, `likePost()`, `addComment()`, `deletePost()`
- `startFasting()`, `endFasting()` - Timer controls
- `addJournalEntry()` - Private journaling

#### 2. CountdownTimer
- Real-time countdown to event start/end
- Updates every second via `setInterval`
- Three states: before, during, after
- EST timezone handling
- Displays days:hours:minutes:seconds

#### 3. PostCard
- Social post with avatar, timestamp, content
- Like button (heart icon, toggles filled/unfilled)
- Comment thread with nested replies
- Admin/owner delete functionality
- Relative time formatting (e.g., "2h ago")
- Media display (images/videos)

#### 4. FastingTracker
- Personal timer with start/end controls
- Progress bar visualization
- Daily scripture and tip display
- Private journal with:
  - Mood selection (joyful, peaceful, struggling, hopeful)
  - Rich text entry
  - Optional sharing to community feed
- Recent journal entries list

#### 5. ScripturesSection
- 10 Bible verses focused on fasting
- Search functionality
- Copy to clipboard feature
- Theme-based color coding
- Expandable fasting tips (accordion)

#### 6. Authentication
- Dual login: Google OAuth (mock) + email/password
- Signup with display name
- Session persistence via localStorage
- Error handling and validation

### Data Models

```typescript
interface User {
  id: string;
  email: string;
  displayName: string;
  avatar?: string;
  isAdmin?: boolean;
  joinedAt: Date;
  isFasting: boolean;
}

interface Post {
  id: string;
  userId: string;
  userName: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  createdAt: Date;
  likes: string[];
  comments: Comment[];
}

interface FastingSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  isActive: boolean;
  duration: number;
}

interface JournalEntry {
  id: string;
  userId: string;
  content: string;
  mood?: 'joyful' | 'peaceful' | 'struggling' | 'hopeful';
  createdAt: Date;
  sharedToFeed: boolean;
}
```

### Event Configuration

```typescript
FASTING_EVENT = {
  startDate: new Date('2025-11-11T00:00:00-05:00'),
  endDate: new Date('2025-11-16T12:00:00-05:00'),
  name: 'Church Group Fast',
  description: 'Join our congregation in a spiritual journey...'
}
```

### Scripture Library

10 curated verses on themes:
- Matthew 6:16-18 (discipline)
- Isaiah 58:6-7 (sacrifice)
- Joel 2:12 (faith)
- Acts 13:2-3 (prayer)
- Psalm 35:13 (prayer)
- Daniel 10:3 (discipline)
- Matthew 4:1-2 (faith)
- Nehemiah 1:4 (prayer)
- Ezra 8:23 (prayer)
- Luke 2:37 (faith)

### Fasting Tips

10 spiritual guidance tips:
1. Start with Prayer
2. Stay Hydrated
3. Embrace the Quiet
4. Journal Your Journey
5. Read Scripture Daily
6. Find Community
7. Listen for God
8. Be Gentle with Yourself
9. Break Your Fast Mindfully
10. Reflect on Growth

---

## Backlog & Future Enhancements

### High Priority (Next Iteration)

**Backend Integration**
- [ ] Real authentication (Firebase Auth or Supabase Auth)
- [ ] Database for posts/comments (Firestore or Supabase)
- [ ] Cloud storage for media uploads (AWS S3, Cloudinary)
- [ ] Real-time sync across devices
- [ ] API rate limiting and security

**User Experience**
- [ ] Rich text editor (Quill.js or TipTap)
- [ ] GIF integration (Giphy API)
- [ ] @mentions with autocomplete
- [ ] Emoji picker in posts
- [ ] Image compression before upload
- [ ] Video length validation (15s max)
- [ ] Drag-and-drop media upload

**Moderation**
- [ ] Admin dashboard for content moderation
- [ ] Report post/comment functionality
- [ ] Spam detection
- [ ] Content filters

### Medium Priority

**Features**
- [ ] PWA manifest for mobile installation
- [ ] Push notifications (browser API)
- [ ] Email notifications (new comments, milestones)
- [ ] User profiles with bio/avatar upload
- [ ] Fasting streaks and badges
- [ ] Milestone celebrations (confetti animations)
- [ ] Export journal as PDF
- [ ] Prayer request board
- [ ] Group prayer times

**Social**
- [ ] Hashtags for posts
- [ ] Post bookmarking/saving
- [ ] Share posts externally
- [ ] Reactions beyond likes (pray, amen, encourage)
- [ ] Direct messaging between participants

**Analytics**
- [ ] User engagement metrics
- [ ] Popular posts/scriptures
- [ ] Participation rates over time
- [ ] Export data for church records

---

## Advanced Tracker Features (My Tracker Section)

### Health Metrics & Biometric Tracking

**Core Metrics**
- [ ] Weight tracking with trend graphs and goal setting
- [ ] Body fat percentage monitoring
- [ ] BMI calculator and tracking
- [ ] Waist circumference measurements
- [ ] Body composition tracking (muscle mass, body fat, water weight)

**Metabolic Markers**
- [ ] Blood glucose tracking (manual entry + CGM sync)
- [ ] Blood ketone levels tracking (manual entry + meter sync)
- [ ] Breath ketone tracking (Biosense integration)
- [ ] Insulin sensitivity estimates
- [ ] HbA1c tracking for long-term glucose control

**Vitals Monitoring**
- [ ] Heart rate tracking and correlation with fasting
- [ ] Blood pressure logging
- [ ] Resting heart rate trends
- [ ] Heart rate variability (HRV) tracking
- [ ] Sleep quality tracking and correlation with fasting
- [ ] Energy level self-assessment (1-10 scale)

**Hydration & Nutrition**
- [ ] Water intake tracking with reminders
- [ ] Electrolyte balance monitoring
- [ ] Daily hydration goals and progress
- [ ] Macro nutrient tracking (protein, carbs, fat)
- [ ] Calorie counter for eating windows
- [ ] Meal logging with timestamps

### Fasting Zones & Metabolic States

**Visual Fasting Zones Timeline**
- [ ] Real-time fasting zone indicator (Anabolic → Catabolic → Fat Burning → Ketosis → Deep Ketosis → Autophagy)
- [ ] Hour-by-hour body status visualization
- [ ] Glycogen depletion timeline (12-16 hrs)
- [ ] Fat burning initiation indicator (16-18 hrs)
- [ ] Ketosis zone entry notification (18-24 hrs)
- [ ] Deep ketosis zone (24-72 hrs)
- [ ] Autophagy zone activation (24+ hrs, peak at 48-72 hrs)
- [ ] Personalized zone timing based on metabolic profile

**Metabolic State Predictions**
- [ ] Real-time metabolic state calculator
- [ ] Fat-burning mode with live tips and guidance
- [ ] Ketosis probability estimator based on fast duration
- [ ] Autophagy activation likelihood indicator
- [ ] Body fuel source visualization (glucose vs fat vs ketones)
- [ ] Estimated time to next metabolic milestone

**Autophagy Tracking**
- [ ] Autophagy stage timeline (early, active, peak, deep)
- [ ] Visual autophagy progress indicator
- [ ] Cellular repair benefits tracker
- [ ] Autophagy-optimized fasting plans (24hr, 48hr, 72hr)
- [ ] Autophagy benefits education (cellular cleanup, anti-aging, disease prevention)
- [ ] Science-backed autophagy insights

### Advanced Analytics & Insights

**Correlation Charts**
- [ ] Fast duration vs weight loss correlation
- [ ] Ketone levels vs glucose levels scatter plots
- [ ] Mood vs fasting duration correlation
- [ ] Sleep quality vs fasting patterns
- [ ] Energy levels vs metabolic state
- [ ] Custom metric correlations (any metric vs any metric)
- [ ] Multi-variable comparison charts

**Trends & Forecasting**
- [ ] Weight loss trend lines with forecasting
- [ ] Average fasting duration over time
- [ ] Ketone level trends and patterns
- [ ] Glucose stability improvements
- [ ] Fasting success rate patterns
- [ ] Weekly/monthly progress reports
- [ ] Goal achievement probability calculator
- [ ] Predictive insights based on historical data

**Personal Dashboards**
- [ ] Customizable health metrics dashboard
- [ ] Drag-and-drop widget system
- [ ] Choose which metrics to display
- [ ] Custom date range filtering
- [ ] Export charts as images/PDFs
- [ ] Share progress with accountability partner
- [ ] Compare current vs previous periods

### Wearables & Integration

**Device Sync**
- [ ] Apple Health integration (weight, heart rate, sleep, activity)
- [ ] Fitbit integration (steps, heart rate, sleep, weight)
- [ ] Oura Ring integration (sleep, HRV, readiness, activity)
- [ ] Google Fit integration (activity, weight, nutrition)
- [ ] Garmin integration (activity, vitals)
- [ ] Withings scale integration (weight, body composition)
- [ ] Continuous Glucose Monitor (CGM) sync (Dexcom, FreeStyle Libre)
- [ ] Blood ketone meter sync (KETO-MOJO, Precision Xtra)
- [ ] Biosense breath ketone analyzer integration

**Auto-Sync Features**
- [ ] Automatic metric updates from connected devices
- [ ] Real-time data synchronization
- [ ] Historical data import from wearables
- [ ] Conflict resolution for duplicate entries
- [ ] Device battery and connectivity status
- [ ] Data source attribution (manual vs device)

### Enhanced Fasting Protocols

**Preset Fasting Plans**
- [ ] 16:8 (Leangains protocol)
- [ ] 18:6 (Modified Leangains)
- [ ] 20:4 (Warrior Diet)
- [ ] OMAD (One Meal A Day)
- [ ] 5:2 (5 days normal, 2 days 500-600 cal)
- [ ] Alternate Day Fasting (ADF)
- [ ] Extended fasts (24hr, 36hr, 48hr, 72hr+)
- [ ] Autophagy-optimized plans (48hr, 72hr cycles)
- [ ] Circadian rhythm fasting (eating window aligned with daylight)
- [ ] Custom fasting schedules (user-defined windows)

**Adaptive Fasting**
- [ ] AI-powered fasting recommendations based on progress
- [ ] Difficulty adjustment (beginner → intermediate → advanced)
- [ ] Personalized eating window suggestions
- [ ] Fasting protocol switching based on goals
- [ ] Weekend vs weekday schedules
- [ ] Event-based fasting adjustments
- [ ] Menstrual cycle-aware fasting for women
- [ ] Performance-based protocol optimization

**Fasting History**
- [ ] Complete fasting log with all sessions
- [ ] Longest fast achieved (personal record)
- [ ] Total fasting hours (lifetime)
- [ ] Average fasting duration (weekly/monthly)
- [ ] Success rate tracking (completed vs broken fasts)
- [ ] Fasting consistency score
- [ ] Calendar view with fasting history
- [ ] Export fasting data (CSV, PDF)

### Nutrition & Meal Planning

**Recipe Database**
- [ ] 400+ healthy recipes for breaking fasts
- [ ] Keto-friendly recipes
- [ ] Low-glycemic meal options
- [ ] Portion-controlled serving suggestions
- [ ] Macro breakdown for each recipe
- [ ] Recipe search and filtering
- [ ] Favorite recipes collection
- [ ] Meal prep planning tools

**Eating Window Optimization**
- [ ] Meal timing recommendations
- [ ] Pre-fast meal suggestions (low-glycemic, high-protein)
- [ ] Breaking fast meal suggestions (gentle refeeding)
- [ ] Nutrient timing for workouts
- [ ] Hydration schedule during fasting
- [ ] Supplement recommendations (electrolytes, vitamins)
- [ ] Food sensitivity tracking
- [ ] Eating window meal planner

**Food Logging**
- [ ] Detailed food diary during eating windows
- [ ] Barcode scanner for packaged foods
- [ ] Calorie tracking
- [ ] Macro nutrient breakdown (protein, carbs, fat, fiber)
- [ ] Micro nutrient tracking (vitamins, minerals)
- [ ] Meal photos and notes
- [ ] Restaurant meal database
- [ ] Custom food creation

### Educational Content

**Fasting Science**
- [ ] Interactive fasting timeline (what happens hour-by-hour)
- [ ] Autophagy education center with videos and articles
- [ ] Ketosis explained with visual diagrams
- [ ] Metabolic switching science
- [ ] Hormonal changes during fasting (insulin, ghrelin, leptin, HGH)
- [ ] Mitochondrial health benefits
- [ ] Inflammation reduction science
- [ ] Longevity research and studies

**Stage-Based Tips**
- [ ] Real-time tips based on current fasting stage
- [ ] "What's happening in your body right now" updates
- [ ] Common symptoms and how to handle them
- [ ] When to stop a fast (safety guidelines)
- [ ] Electrolyte management education
- [ ] Exercise during fasting guidelines
- [ ] Mental clarity optimization tips

**Resource Library**
- [ ] Video tutorials on fasting techniques
- [ ] Podcast library on fasting and health
- [ ] Scientific studies database
- [ ] Expert interviews and Q&As
- [ ] Success stories from other users
- [ ] FAQ section with searchable questions
- [ ] Glossary of fasting terms

### Gamification & Motivation

**Achievement System**
- [ ] Fasting streaks (consecutive days with successful fasts)
- [ ] Progressive badges (First 16hr, First 24hr, 7-Day Streak, 30-Day Streak, Autophagy Master)
- [ ] Level-up system (Beginner → Intermediate → Advanced → Expert → Master)
- [ ] Personal records tracking (longest fast, most hours in a month)
- [ ] Milestone celebrations with confetti animations
- [ ] Unlock new features as you progress
- [ ] Achievement showcase on profile
- [ ] Share achievements to social feed

**Challenges**
- [ ] Weekly fasting challenges
- [ ] Monthly autophagy challenges
- [ ] Group challenges with other users
- [ ] Personal goal challenges (lose 10 lbs, fast 100 hrs this month)
- [ ] Seasonal challenges (summer shred, winter wellness)
- [ ] Challenge leaderboards
- [ ] Reward system for challenge completion

**Motivation Tools**
- [ ] Daily motivational quotes
- [ ] Progress photos (before/after comparisons)
- [ ] Measurement tracking (photos + metrics over time)
- [ ] Goal visualization (progress bars, charts)
- [ ] Reminder notifications with encouraging messages
- [ ] "Why I'm fasting" personal statement
- [ ] Vision board integration
- [ ] Accountability partner matching

### Low Priority

**Advanced Features**
- [ ] Multiple fasting events support
- [ ] Recurring events (annual fasts)
- [ ] Different fasting types (food, media, etc.)
- [ ] Fasting partners/accountability groups
- [ ] Integration with church calendar
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Accessibility improvements (screen reader)
- [ ] Guided fasting meditation audio
- [ ] Daily devotional videos

**Technical Debt**
- [ ] Unit tests (Jest, React Testing Library)
- [ ] E2E tests (Playwright)
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Error boundary components
- [ ] Loading states and skeletons
- [ ] Offline support (service workers)
- [ ] CI/CD pipeline
- [ ] Monitoring and error tracking (Sentry)

---

## Known Limitations (MVP)

1. **No Real Database**: Uses localStorage - data doesn't sync across devices
2. **Mock Authentication**: No actual OAuth - users can enter any credentials
3. **No Media Storage**: Uploaded files stored as base64 in localStorage (size limits)
4. **No Validation**: Limited input validation on forms
5. **No Admin Tools**: Admins can delete but no moderation dashboard
6. **Single Event**: Hardcoded for Nov 11-16, 2025
7. **No Search**: Posts/participants not searchable
8. **No Pagination**: All posts load at once (performance issue with 100+ posts)
9. **No Edit**: Posts/comments can't be edited after creation
10. **Client-Side Only**: No server-side rendering for dynamic content

---

## Setup Instructions

### Prerequisites
- Node.js 20+
- npm or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Accessing the App

1. Navigate to `http://localhost:3000/fast`
2. Click "Sign In" button
3. Use Google login (mock) or create account with email
4. Join the fast via onboarding modal
5. Start exploring!

---

## Testing Checklist

### Authentication
- [ ] Sign up with email/password
- [ ] Sign in with existing credentials
- [ ] Google login (mock)
- [ ] Logout and sign back in
- [ ] Session persistence after refresh

### Social Features
- [ ] Create text post
- [ ] Create post with image
- [ ] Create post with video
- [ ] Like/unlike posts
- [ ] Add comments to posts
- [ ] Like comments
- [ ] Delete own posts
- [ ] Admin delete any post
- [ ] View participant list

### Fasting Tracker
- [ ] Join the fast
- [ ] Start fasting timer
- [ ] Timer updates in real-time
- [ ] Stop timer
- [ ] Create journal entry
- [ ] Select mood
- [ ] Share journal to feed
- [ ] View previous journal entries

### Resources
- [ ] Browse scriptures
- [ ] Search scriptures
- [ ] Copy scripture to clipboard
- [ ] Expand fasting tips
- [ ] View daily content

### UI/UX
- [ ] Countdown timer updates
- [ ] Mobile responsive layout
- [ ] Tab navigation works
- [ ] Modals open/close properly
- [ ] Relative time displays correctly
- [ ] Empty states show appropriately

### Edge Cases
- [ ] Non-fasting user sees limited features
- [ ] Not logged in redirects/prompts login
- [ ] Large posts display properly
- [ ] Long comments thread properly
- [ ] 100+ posts performance
- [ ] Media file size limits enforced

---

## Troubleshooting

### localStorage Full
If users see errors about storage quota:
1. Clear browser data for the site
2. Limit media uploads
3. Implement backend storage (future)

### Countdown Timer Wrong Time
- Verify browser timezone settings
- Check event dates in `fasting-data.ts`
- EST hardcoded, may need adjustment for other timezones

### Posts Not Appearing
- Check browser console for errors
- Verify localStorage has data: `localStorage.getItem('fasting_posts')`
- Clear cache and refresh

### Authentication Issues
- Mock auth accepts any credentials
- Clear `localStorage.getItem('fasting_user')` to reset
- Refresh page after login

---

## Deployment Notes

### Environment Variables (Future)
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_GIPHY_API_KEY=
```

### Production Checklist
- [ ] Configure real authentication provider
- [ ] Set up database (Firebase/Supabase)
- [ ] Configure media storage
- [ ] Add error monitoring (Sentry)
- [ ] Enable HTTPS
- [ ] Set up domain/subdomain
- [ ] Test on multiple devices
- [ ] Add analytics (GA4)
- [ ] Create privacy policy
- [ ] Test with congregation beta group

---

## Support & Maintenance

**Contact**: Church IT Team
**Documentation**: This file
**Code Location**: `src/app/fast/`, `src/components/fasting/`, `src/contexts/fasting-context.tsx`

**Common Updates**:
- Event dates: Edit `src/lib/fasting-data.ts` → `FASTING_EVENT`
- Scriptures: Edit `SCRIPTURES` array in `fasting-data.ts`
- Tips: Edit `FASTING_TIPS` array in `fasting-data.ts`
- Branding colors: Edit Tailwind classes (search for `indigo-`)

---

*Last Updated: November 9, 2025*
*Version: 1.0 MVP*
