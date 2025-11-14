# Hopewell UMC Website Design Guide

**Version**: 1.0
**Last Updated**: November 14, 2025
**Purpose**: Comprehensive design guidelines for Hopewell United Methodist Church website

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Current Design Review](#current-design-review)
3. [Design System](#design-system)
4. [Navigation Structure](#navigation-structure)
5. [Page Templates](#page-templates)
6. [Component Library](#component-library)
7. [Responsive Design](#responsive-design)
8. [Accessibility Guidelines](#accessibility-guidelines)
9. [Content Strategy](#content-strategy)
10. [Integration Guidelines](#integration-guidelines)

---

## Design Philosophy

### Mission-Driven Design
Every design decision should support the church's mission:
> "To Grow in the Lord and Show Him to the World"

### Core Values Reflected in Design
1. **Welcoming**: Warm, inviting, inclusive visual language
2. **Clarity**: Information is easy to find and understand
3. **Engagement**: Encourages participation and connection
4. **Accessibility**: Usable by all people, regardless of ability
5. **Authenticity**: Real photos, genuine stories, honest communication

### Target Audience
**Multi-generational Community**:
- Young families with children
- Youth and young adults
- Middle-aged adults
- Senior adults
- First-time visitors
- Long-time members

**Design Implications**:
- Large, readable text
- Intuitive navigation (no tech expertise required)
- Clear CTAs (calls-to-action)
- Multiple contact methods
- Print-friendly options

---

## Current Design Review

### Strengths to Preserve

#### 1. Color Identity
**Teal Brand Color**: `#0b5a7f`
- Strong, recognizable
- Professional yet warm
- Good contrast with white
- **Recommendation**: Keep as primary brand color

#### 2. Component-Based Architecture
- Modular, reusable components
- Consistent patterns (ContentBlock, Hero, etc.)
- **Recommendation**: Maintain and expand

#### 3. Clean, Modern Aesthetic
- Ample whitespace
- Clear typography hierarchy
- Minimal clutter
- **Recommendation**: Continue this approach

#### 4. Mobile-First Approach
- Responsive breakpoints
- Touch-optimized
- **Recommendation**: Enhance further

### Areas for Improvement

#### 1. Navigation Clarity ⚠️ HIGH PRIORITY
**Current Issues**:
- Too many top-level nav items
- Unclear hierarchy
- Duplicate pages (multiple "About Us")

**Solutions**:
- Implement new 5-item header: Give, About, Connect, Prayer, Ministries
- Clear dropdown menus for subsections
- Breadcrumb navigation on interior pages

#### 2. Visual Hierarchy ⚠️ MEDIUM PRIORITY
**Current Issues**:
- Some pages lack clear focal point
- CTAs don't always stand out

**Solutions**:
- Stronger hero sections
- More prominent CTAs
- Better use of color to guide attention

#### 3. Content Engagement ⚠️ HIGH PRIORITY
**Current Issues**:
- Limited interactive elements
- Sermons not prominently featured
- Calendar not visible enough

**Solutions**:
- Featured sermon section on homepage
- Calendar widget on homepage
- More visual storytelling (photos, videos)
- Clear next steps on every page

#### 4. Mobile Experience ⚠️ HIGH PRIORITY
**Current Issues**:
- Some tap targets could be larger
- Long pages on mobile

**Solutions**:
- Minimum 44px tap targets
- Collapsible sections on mobile
- Sticky mobile navigation
- Faster load times

---

## Design System

### Color Palette

#### Primary Colors
```css
/* Teal - Primary Brand */
--primary: #0b5a7f;
--primary-hover: #094e6d;
--primary-light: #0d6a91;
--primary-dark: #074159;

/* White - Background */
--background: #ffffff;
--surface: #ffffff;

/* Dark - Text */
--foreground: #262626;
--text-primary: #262626;
--text-secondary: #525252;
--text-muted: #737373;
```

#### Secondary Colors
```css
/* Warm Accent (for special occasions, CTAs) */
--accent-warm: #d97706;
--accent-warm-light: #f59e0b;

/* Success (for positive messages, praise) */
--success: #059669;
--success-light: #10b981;

/* Error (for warnings, critical info) */
--error: #dc2626;
--error-light: #ef4444;

/* Neutral Grays */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

#### Usage Guidelines
- **Primary Teal**: Buttons, links, headers, navigation highlights
- **Warm Accent**: Secondary CTAs, "Give" button, special events
- **Success Green**: Praise reports, confirmations, success messages
- **Error Red**: Required fields, error states, urgent notices
- **Grays**: Borders, backgrounds, disabled states

### Typography

#### Font Families
```css
/* Primary Font - Sans Serif for body and UI */
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif;

/* Headings Font - Same for consistency */
--font-headings: var(--font-primary);
```

**Rationale**: System fonts for fast loading and familiarity across devices

#### Font Sizes (Mobile-First)

**Mobile (default)**:
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px - minimum for body */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

**Desktop (md and up)**:
- Scale up headings by 1.2x
- Keep body text at 16px minimum
- Increase line height for readability

#### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

#### Line Heights
```css
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

**Usage**:
- Headings: `leading-tight` to `leading-snug`
- Body text: `leading-relaxed` (1.625)
- Captions: `leading-normal`

### Spacing Scale

Use Tailwind's default spacing scale (4px base):
```css
0: 0
1: 0.25rem  /* 4px */
2: 0.5rem   /* 8px */
3: 0.75rem  /* 12px */
4: 1rem     /* 16px */
5: 1.25rem  /* 20px */
6: 1.5rem   /* 24px */
8: 2rem     /* 32px */
10: 2.5rem  /* 40px */
12: 3rem    /* 48px */
16: 4rem    /* 64px */
20: 5rem    /* 80px */
24: 6rem    /* 96px */
32: 8rem    /* 128px */
```

**Section Spacing**:
- Mobile: `py-12` (48px)
- Desktop: `py-16` or `py-20` (64px or 80px)

### Borders & Shadows

#### Border Radius
```css
--radius-sm: 0.125rem;   /* 2px */
--radius: 0.5rem;        /* 8px - default */
--radius-md: 0.75rem;    /* 12px */
--radius-lg: 1rem;       /* 16px */
--radius-xl: 1.5rem;     /* 24px */
--radius-2xl: 2rem;      /* 32px */
--radius-full: 9999px;   /* Fully rounded */
```

**Usage**:
- Buttons: `radius` (8px)
- Cards: `radius-lg` (16px)
- Images: `radius-md` (12px)
- Badges/pills: `radius-full`

#### Box Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

**Usage**:
- Cards: `shadow-md`
- Modals: `shadow-xl`
- Dropdowns: `shadow-lg`
- Buttons (hover): `shadow-md`

---

## Navigation Structure

### Header Navigation

#### Desktop Header
```
┌────────────────────────────────────────────────────────────┐
│  [LOGO]                Give  About  Connect  Prayer  Ministries  │
└────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Height: 80px
- Background: White with subtle shadow on scroll
- Logo: Left-aligned, max 200px width
- Nav items: Right-aligned, 16px font, 600 weight
- Hover: Teal underline (3px), smooth transition
- Active: Teal text color
- Sticky on scroll

#### Dropdown Menus

**About Dropdown**:
```
About Us
What to Expect
Our Beliefs
FAQ
Contact
```

**Connect Dropdown**:
```
Staff Directory
Get Involved
Volunteer Opportunities
Contact Us
```

**Ministries Dropdown**:
```
All Ministries
────────────────
Children
Youth
Adults
Missions
[Top 4-5 ministries]
```

**Dropdown Styling**:
- Width: 200px minimum
- Background: White
- Shadow: `shadow-lg`
- Border-radius: `radius-md`
- Padding: 8px
- Item padding: 12px 16px
- Item hover: Light gray background
- Transition: 200ms ease

#### Mobile Header

**Closed State**:
```
┌────────────────────────────────────┐
│  [LOGO]              [HAMBURGER]   │
└────────────────────────────────────┘
```

**Open State** (Slide-out drawer):
```
┌────────────────────────────────────┐
│  [X]                               │
│                                    │
│  Home                              │
│  Give                              │
│  > About                           │
│  > Connect                         │
│  Prayer                            │
│  > Ministries                      │
│  Calendar                          │
│  Contact                           │
│                                    │
│  [SOCIAL ICONS]                    │
└────────────────────────────────────┘
```

**Mobile Menu Specifications**:
- Full-screen overlay
- Slide from right
- Background: White
- Close button: Top right, large (48px tap target)
- Items: 20px font, 16px padding
- Expandable sections: Chevron icon
- Transition: 300ms ease-in-out

### Breadcrumb Navigation

**Display on all interior pages**:
```
Home > Ministries > Youth Ministries
```

**Specifications**:
- Position: Below hero, above main content
- Text: 14px, gray-600
- Separator: "/" or ">"
- Links: Teal on hover
- Current page: Gray-900, not linked

### Footer Navigation

**Layout**: 4-column grid (desktop), stacked (mobile)

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  QUICK LINKS │  MINISTRIES  │   CONNECT    │   RESOURCES  │
├──────────────┼──────────────┼──────────────┼──────────────┤
│  Home        │  Children's  │  Staff       │  Sermons     │
│  Give        │  Youth       │  Prayer      │  Calendar    │
│  About       │  Adults      │  Get Involved│  FAQ         │
│  Contact     │  Missions    │  Visit Us    │  Privacy     │
│              │  All Ministries              │              │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────────────────────────────────────────────────┐
│  CONTACT BAR                                              │
│  1420 Neely Ferry Rd, Simpsonville, SC 29680             │
│  (864) 967-8181  |  office@hopewell... | [FB] [YT]       │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  © 2025 Hopewell United Methodist Church                  │
│  "To Grow in the Lord and Show Him to the World"         │
└──────────────────────────────────────────────────────────┘
```

**Specifications**:
- Background: Gray-900 (dark)
- Text: Gray-300 (light)
- Links: White, teal on hover
- Padding: 64px vertical
- Column gap: 32px

---

## Page Templates

### 1. Homepage Template

**Purpose**: Welcome visitors, showcase key information, encourage action

**Sections** (in order):

#### A. Hero Section
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│         WELCOME TO HOPEWELL UMC                     │
│         To Grow in the Lord and                     │
│         Show Him to the World                       │
│                                                     │
│         [PLAN YOUR VISIT]  [WATCH SERMON]           │
│                                                     │
│         Background: Large hero image               │
└─────────────────────────────────────────────────────┘
```

**Specifications**:
- Height: 600px (desktop), 400px (mobile)
- Background: High-quality photo with overlay
- Overlay: Dark gradient (0.4 opacity)
- Title: 4xl (mobile) to 6xl (desktop), white, bold
- Subtitle: xl (mobile) to 2xl (desktop), white
- CTAs: Two buttons, prominent
- Image: Ministry activity, welcoming scene

#### B. Service Times Card
```
┌─────────────────────────────────────────────────────┐
│  JOIN US THIS SUNDAY                                │
│  ────────────────────────────────────────────       │
│  Sunday School: 9:15 AM                             │
│  Worship Service: 10:30 AM                          │
│                                                     │
│  Countdown: 2 days, 15 hours until next service    │
│  [GET DIRECTIONS]                                   │
└─────────────────────────────────────────────────────┘
```

**Specifications**:
- Background: Teal
- Text: White
- Centered content
- Countdown timer (JavaScript)
- Padding: 48px vertical

#### C. Mission Statement
```
┌─────────────────────────────────────────────────────┐
│  OUR MISSION                                        │
│                                                     │
│  "Whether you're just having a look, or searching   │
│  for a place to worship, we're delighted to have    │
│  you here."                                         │
│                                                     │
│  [Grid of 4 Core Values]                           │
│  - Christ Proclaimed                                │
│  - Every Person Cherished                           │
│  - Purposeful Relationships                         │
│  - Global Mission                                   │
└─────────────────────────────────────────────────────┘
```

#### D. Featured Sermon
```
┌─────────────────────────────────────────────────────┐
│  LATEST SERMON                                      │
│  ────────────────────────                           │
│  [VIDEO THUMBNAIL with PLAY BUTTON]                │
│                                                     │
│  "Sermon Title"                                     │
│  Rev. Don Brown  |  Nov 10, 2025                   │
│  Scripture: John 3:16-17                            │
│                                                     │
│  [WATCH NOW]  [VIEW ALL SERMONS]                   │
└─────────────────────────────────────────────────────┘
```

**Specifications**:
- Video: YouTube embed (lazy load)
- Thumbnail: Custom with play overlay
- Auto-update: Pull latest from YouTube API
- Max-width: 800px

#### E. Upcoming Events (Calendar Widget)
```
┌─────────────────────────────────────────────────────┐
│  UPCOMING EVENTS                                    │
│  ────────────────────────                           │
│  [Google Calendar Embed or Custom Widget]          │
│                                                     │
│  Next 3-5 events listed                            │
│  [VIEW FULL CALENDAR]                              │
└─────────────────────────────────────────────────────┘
```

#### F. Ministries Showcase
```
┌─────────────────────────────────────────────────────┐
│  GET INVOLVED                                       │
│  ────────────────────────                           │
│  [3-4 Ministry Cards in Grid]                      │
│                                                     │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │ KIDS   │  │ YOUTH  │  │ ADULTS │  │MISSIONS│   │
│  │ [IMG]  │  │ [IMG]  │  │ [IMG]  │  │ [IMG]  │   │
│  │ Learn  │  │ Learn  │  │ Learn  │  │ Learn  │   │
│  │ More   │  │ More   │  │ More   │  │ More   │   │
│  └────────┘  └────────┘  └────────┘  └────────┘   │
│                                                     │
│  [VIEW ALL MINISTRIES]                             │
└─────────────────────────────────────────────────────┘
```

**Card Specifications**:
- Image: 16:9 aspect ratio
- Overlay: Dark gradient on hover
- Title: Centered, white, semibold
- Hover: Scale 1.05, show CTA
- Border-radius: radius-lg

#### G. Prayer Request CTA
```
┌─────────────────────────────────────────────────────┐
│  HOW CAN WE PRAY FOR YOU?                          │
│                                                     │
│  "We all need a helping hand from time to time."   │
│                                                     │
│  [SUBMIT PRAYER REQUEST]                           │
└─────────────────────────────────────────────────────┘
```

**Specifications**:
- Background: Light gray or white
- Centered text
- Large CTA button
- Padding: 64px vertical

#### H. Newsletter Signup
```
┌─────────────────────────────────────────────────────┐
│  STAY CONNECTED                                     │
│  ────────────────────────                           │
│  Get weekly updates, prayer requests, and news      │
│                                                     │
│  [EMAIL INPUT] [SUBSCRIBE BUTTON]                  │
│                                                     │
│  ☐ Receive text message updates                    │
└─────────────────────────────────────────────────────┘
```

---

### 2. Give Page Template

**Purpose**: Facilitate online giving, explain giving options

**Sections**:

#### A. Hero
```
GIVE

Supporting God's work through Hopewell UMC

[GIVE NOW]
```

#### B. Giving Options
```
┌─────────────────────────────────────────────────────┐
│  WAYS TO GIVE                                       │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │  Online  │  │ In-Person│  │   Mail   │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
│  Online Giving (Realm)                             │
│  [GIVE NOW BUTTON] ← Opens Realm modal            │
│                                                     │
│  In-Person                                          │
│  Offering plates during Sunday service              │
│                                                     │
│  Mail                                               │
│  1420 Neely Ferry Rd, Simpsonville, SC 29680       │
└─────────────────────────────────────────────────────┘
```

#### C. Enter In Campaign (if active)
```
ENTER IN CAMPAIGN

[Campaign details, progress bar, goals]

[GIVE TO CAMPAIGN]
```

#### D. Generosity Resources
```
GENEROSITY RESOURCES

- Giving Pathway Video Series
- Generosity Booklet (PDF download)
- FAQ about giving
```

**Realm Integration**:
```jsx
// Give Now Button Handler
<Button onClick={openGivingModal}>
  Give Now
</Button>

// Modal Component
<Dialog open={givingModalOpen} onClose={closeGivingModal}>
  <DialogContent className="max-w-4xl h-[600px]">
    <iframe
      src="https://onrealm.org/hopewellumcsimpsonville/give/now"
      className="w-full h-full border-0"
      title="Online Giving"
    />
  </DialogContent>
</Dialog>
```

---

### 3. About Page Template

**Purpose**: Introduce church, share mission, provide visitor info

**Sections**:

#### A. Hero
```
ABOUT HOPEWELL UMC

Learn more about our church family

Background: Church building photo
```

#### B. Mission, Vision, Values
```
OUR MISSION
"To Grow in the Lord and Show Him to the World"

OUR VISION
Called by God to transform community and world by:
• Welcoming all persons
• Growing relationships with each other and Christ
• Nurturing, equipping, and sending disciples

OUR CORE VALUES
[4-column grid]
1. Christ Proclaimed
2. Every Person Cherished
3. Purposeful Relationships
4. Global Mission
```

#### C. Quick Links to Subsections
```
┌───────────┐  ┌───────────┐  ┌───────────┐
│   VISIT   │  │  BELIEFS  │  │    FAQ    │
└───────────┘  └───────────┘  └───────────┘
```

#### D. Our Story
```
OUR STORY

[Church history, photos, timeline if available]
```

#### E. What Makes Us Different
```
WHAT TO EXPECT

[Pull from What to Expect subpage]
```

---

### 4. What to Expect (About Subpage)

**Purpose**: Help first-time visitors know what to expect

**Sections**:

#### A. Hero
```
PLAN YOUR FIRST VISIT

We're excited to welcome you!
```

#### B. Service Times
```
WHEN WE MEET

Sunday School: 9:15 AM
Worship Service: 10:30 AM

[GET DIRECTIONS]
```

#### C. What to Wear
```
WHAT TO WEAR

Come as you are! You'll see everything from jeans to
suits. We care more about your heart than your outfit.
```

#### D. Where to Park
```
WHERE TO PARK

[Map or photo of parking area]
Free parking available in our lot.
Accessible parking near main entrance.
```

#### E. What to Expect During Service
```
WHAT HAPPENS DURING WORSHIP

1. Welcome & Announcements (5 min)
2. Worship Music (20 min)
3. Prayer Time (5 min)
4. Sermon (30 min)
5. Closing & Blessing (5 min)

Typical service: 60-70 minutes
```

#### F. Children & Youth
```
FOR FAMILIES

Children's Church: Available during worship for ages 4-13
Nursery: Available for infants and toddlers
Youth Group: Sundays at 6:30 PM
```

#### G. Next Steps
```
AFTER YOUR VISIT

Interested in learning more?

[ATTEND NEWCOMER LUNCH] [MEET WITH PASTOR] [JOIN SMALL GROUP]
```

---

### 5. Our Beliefs (About Subpage)

**Purpose**: Explain theological beliefs, denominational affiliation

**Content to Develop**:
- United Methodist identity
- Core Christian beliefs (Apostles' Creed)
- Statement on grace, salvation, discipleship
- Wesleyan heritage
- Inclusive welcome statement

---

### 6. Connect Page Template

**Purpose**: Help people connect with staff and get involved

**Sections**:

#### A. Hero
```
CONNECT WITH US

Meet our staff and find your place
```

#### B. Staff Directory
```
OUR STAFF

[Staff grid - 3-4 columns on desktop]

┌──────────────┐
│  [PHOTO]     │
│  Rev. Don    │
│  Brown       │
│  Pastor      │
│              │
│  [EMAIL]     │
│  [PHONE]     │
└──────────────┘

[Repeat for all 11 staff members]
```

**Staff Card Specifications**:
- Photo: Square (1:1), 300x300px
- Border-radius: radius-lg or full (circle)
- Name: text-xl, semibold
- Title: text-sm, gray-600
- Contact: Icons with links
- Hover: Subtle lift effect

#### C. Get Involved
```
GET INVOLVED

[Grid of ways to connect]

┌────────────┐  ┌────────────┐  ┌────────────┐
│ VOLUNTEER  │  │ SMALL GROUP│  │  WORSHIP   │
└────────────┘  └────────────┘  └────────────┘
```

#### D. Contact Form
```
HAVE A QUESTION?

[Name] [Email] [Phone]
[Subject]
[Message]

[SEND MESSAGE]
```

---

### 7. Prayer Page Template

**Purpose**: Submit and view prayer requests

**Sections**:

#### A. Hero
```
PRAYER REQUESTS

"We all need a helping hand from time to time."

[SUBMIT REQUEST]
```

#### B. Submit Prayer Request Form
```
SUBMIT A PRAYER REQUEST

Name: [____________________]
Email: [____________________]
Request Title: [____________________]

Category: [Dropdown]
☐ Health/Hospital
☐ Praise
☐ Grief
☐ Travel
☐ Other...

Prayer Request Details:
[_________________________
 _________________________
 _________________________]

Display Preference:
◉ Public (visible to all)
○ Private (prayer team only)

[SUBMIT REQUEST]
```

**Form Specifications**:
- Max-width: 600px
- Labels: Bold, above fields
- Required fields: Asterisk (*)
- Validation: Real-time
- Submit: Prominent teal button
- Success: Green confirmation message
- Error: Red validation messages

#### C. Current Prayer Requests
```
CURRENT PRAYER REQUESTS

Filter: [All] [Health] [Praise] [Grief] [Other]

┌────────────────────────────────────────────────┐
│ Pete Lattig                   Health/Hospital  │
│ Hip replacement scheduled for November 17th    │
│ Submitted by: Mary S.         Nov 12, 2025    │
└────────────────────────────────────────────────┘

[Repeat for all public requests]

[LOAD MORE]
```

**Request Card Specifications**:
- Background: White or light gray
- Border: 1px solid gray-200
- Border-radius: radius-md
- Padding: 20px
- Shadow: shadow-sm
- Hover: shadow-md
- Category badge: Small, colored tag

#### D. Prayer Ministry Info
```
ABOUT OUR PRAYER MINISTRY

Our prayer team meets every [day] to pray for
submitted requests...

[JOIN PRAYER TEAM]
```

---

### 8. Ministries Overview Template

**Purpose**: Directory of all ministries with navigation

**Sections**:

#### A. Hero
```
MINISTRIES

Find your place to serve and grow

[Filter by: All | Children | Youth | Adults | Missions]
```

#### B. Ministry Grid
```
┌────────────┐  ┌────────────┐  ┌────────────┐
│ [IMAGE]    │  │ [IMAGE]    │  │ [IMAGE]    │
│            │  │            │  │            │
│ CHILDREN'S │  │   YOUTH    │  │   ADULT    │
│ MINISTRIES │  │ MINISTRIES │  │ MINISTRIES │
│            │  │            │  │            │
│ Ages 4-13  │  │ Middle &   │  │ Bible      │
│ Sunday     │  │ High School│  │ Studies &  │
│ School,    │  │            │  │ Groups     │
│ VBS, Choir │  │ Sunday 6:30│  │            │
│            │  │            │  │            │
│ [LEARN MORE│  │ [LEARN MORE│  │ [LEARN MORE│
└────────────┘  └────────────┘  └────────────┘

[Repeat for all 17 ministries in category groups]
```

**Ministry Card Specifications**:
- Image: 16:9 aspect ratio, 400x225px
- Overlay: Gradient on hover
- Title: text-xl, bold, white (on overlay)
- Description: Brief (2-3 lines)
- CTA: "Learn More" button
- Hover: Scale 1.02, show full overlay

#### C. Category Navigation
```
EXPLORE BY CATEGORY

[Children] [Youth] [Adults] [Missions] [Worship] [All]
```

---

### 9. Ministry Detail Template

**Purpose**: Detailed information about a specific ministry

**Use this template for all 17 ministry pages**

**Sections**:

#### A. Hero with Ministry Identity
```
┌─────────────────────────────────────────────────────┐
│                  [MINISTRY IMAGE]                   │
│                                                     │
│               YOUTH MINISTRIES                      │
│            Growing Together in Christ               │
└─────────────────────────────────────────────────────┘
```

#### B. Quick Info Bar
```
┌─────────────────────────────────────────────────────┐
│ 👤 Lera Jackson   📅 Sundays 6:30 PM   📍 Youth Room│
│ ✉️ lera@hopewell...   📞 (864) 360-4910             │
└─────────────────────────────────────────────────────┘
```

**Specifications**:
- Background: Light gray
- Icons: Consistent size (20px)
- Text: 14px, balanced spacing
- Click-to-call, click-to-email

#### C. About This Ministry
```
ABOUT YOUTH MINISTRIES

[2-3 paragraph description]
Our youth ministry provides a safe space for middle
and high school students to explore faith, build
friendships, and serve their community...

[Photo gallery - 3-4 images]
```

#### D. Programs & Schedule
```
PROGRAMS & SCHEDULE

Weekly Gatherings
Sundays at 6:30 PM

Small Groups
Wednesdays at 7:00 PM

Special Events
- Salkehatchie Summer Service (June 20-27)
- Youth Retreat (TBA)
- Mission Trip (TBA)

[VIEW CALENDAR]
```

#### E. Current Activities/Events
```
UPCOMING EVENTS

┌───────────────────────────────────────────┐
│ Service Project at James Monroe Mission  │
│ Sunday, October 3 at 6:00 PM             │
│ [REGISTER]                               │
└───────────────────────────────────────────┘
```

#### F. Ways to Get Involved
```
GET INVOLVED

[3 options as cards]

┌──────────┐  ┌──────────┐  ┌──────────┐
│  ATTEND  │  │VOLUNTEER │  │  DONATE  │
│  WEEKLY  │  │  AS A    │  │  TO      │
│ MEETINGS │  │  LEADER  │  │ SUPPORT  │
└──────────┘  └──────────┘  └──────────┘
```

#### G. Contact Ministry Leader
```
QUESTIONS?

Contact Lera Jackson, Director of Youth Ministries

[SEND MESSAGE]
```

#### H. Related Ministries
```
RELATED MINISTRIES

Children's Ministries  |  Young Adults  |  Missions
```

---

### 10. Calendar Page Template

**Purpose**: Display all church events

**Option 1: Google Calendar Embed**
```jsx
<iframe
  src="https://calendar.google.com/calendar/embed?src=..."
  style={{ border: 0, width: '100%', height: '600px' }}
  frameBorder="0"
  scrolling="no"
/>
```

**Option 2: Custom Calendar View**
```
[Month View with events]

Filter: [All Events] [Ministries] [Services] [Special]

[Events listed by date]
```

---

## Component Library

### Button Components

#### Primary Button
```jsx
<button className="
  bg-primary hover:bg-primary-hover
  text-white
  font-semibold
  px-6 py-3
  rounded-lg
  shadow-md hover:shadow-lg
  transition-all duration-200
  min-h-[44px]
">
  Button Text
</button>
```

#### Secondary Button (Outline)
```jsx
<button className="
  border-2 border-primary
  text-primary hover:bg-primary hover:text-white
  font-semibold
  px-6 py-3
  rounded-lg
  transition-all duration-200
  min-h-[44px]
">
  Button Text
</button>
```

#### Ghost Button
```jsx
<button className="
  text-primary hover:bg-primary/10
  font-semibold
  px-6 py-3
  rounded-lg
  transition-all duration-200
  min-h-[44px]
">
  Button Text
</button>
```

### Card Component
```jsx
<div className="
  bg-white
  rounded-lg
  shadow-md hover:shadow-lg
  overflow-hidden
  transition-shadow duration-200
">
  <img src="..." className="w-full aspect-video object-cover" />
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p className="text-gray-600 mb-4">Card description...</p>
    <a href="..." className="text-primary font-semibold hover:underline">
      Learn More →
    </a>
  </div>
</div>
```

### Form Input
```jsx
<div className="mb-4">
  <label className="block text-sm font-semibold mb-2" htmlFor="name">
    Name <span className="text-error">*</span>
  </label>
  <input
    type="text"
    id="name"
    className="
      w-full
      px-4 py-3
      border border-gray-300
      rounded-lg
      focus:outline-none focus:ring-2 focus:ring-primary
      transition-all
      text-base
    "
    placeholder="Your name"
    required
  />
</div>
```

### Section Container
```jsx
<section className="py-16 md:py-20">
  <div className="container max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      Section Title
    </h2>
    {/* Section content */}
  </div>
</section>
```

### Hero Component
```jsx
<section className="relative h-[400px] md:h-[600px] flex items-center justify-center">
  <div className="absolute inset-0">
    <img src="..." className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
  </div>
  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Hero Title</h1>
    <p className="text-xl md:text-2xl mb-8">Hero subtitle</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button>Primary CTA</Button>
      <Button variant="secondary">Secondary CTA</Button>
    </div>
  </div>
</section>
```

---

## Responsive Design

### Breakpoints
```css
/* Mobile First */
default: 0px      /* Mobile */
sm: 640px         /* Large mobile */
md: 768px         /* Tablet */
lg: 1024px        /* Desktop */
xl: 1280px        /* Large desktop */
2xl: 1536px       /* Extra large */
```

### Grid Layouts

**Ministry Cards**:
- Mobile: 1 column
- Tablet (md): 2 columns
- Desktop (lg): 3 columns
- Large (xl): 4 columns

**Staff Cards**:
- Mobile: 1 column
- Tablet (md): 2 columns
- Desktop (lg): 3 columns

**Content Blocks**:
- Mobile: Stack vertically
- Tablet (md): 2 columns (image + text)
- Desktop: Alternate left/right

### Touch Targets

**Minimum sizes**:
- Buttons: 44px x 44px
- Links: 44px tap area
- Form inputs: 44px height
- Icon buttons: 48px x 48px

### Typography Scaling

**Headings** scale up on larger screens:
```jsx
<h1 className="text-3xl md:text-5xl lg:text-6xl">
<h2 className="text-2xl md:text-4xl lg:text-5xl">
<h3 className="text-xl md:text-2xl lg:text-3xl">
```

**Body text** stays 16px minimum:
```jsx
<p className="text-base md:text-lg">
```

---

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal text**: 4.5:1 minimum
- **Large text** (18px+): 3:1 minimum
- **UI components**: 3:1 minimum

**Primary teal** (#0b5a7f) on white: ✅ 6.3:1 (passes)

#### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators (outline)
- Logical tab order
- Skip links for main content

#### Screen Readers
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels for icons
- Alt text for all images
- Form labels associated with inputs
- Heading hierarchy (h1, h2, h3 in order)

#### Forms
- Labels for all inputs
- Required field indicators
- Error messages associated with fields
- Success/error notifications announced

#### Images
- Decorative images: `alt=""`
- Meaningful images: Descriptive alt text
- Complex images: Long descriptions

#### Video/Audio
- Captions for all videos
- Transcripts available
- Audio descriptions (if needed)

---

## Content Strategy

### Voice & Tone

**Welcoming**: "We're delighted to have you here"
**Clear**: Simple language, avoid jargon
**Warm**: Personal, friendly, inviting
**Authentic**: Real stories, genuine photos
**Action-oriented**: Clear next steps

### Content Guidelines

**Headings**:
- Use sentence case
- Be specific and descriptive
- Include keywords for SEO

**Body Text**:
- Short paragraphs (3-4 sentences max)
- Bullet points for lists
- Active voice
- Second person ("you") for engagement

**CTAs**:
- Action verbs (Join, Connect, Give, Learn, Discover)
- Specific (not just "Click Here")
- Create urgency when appropriate

### Image Guidelines

**Quality**:
- High-resolution (at least 1920px wide for hero images)
- Well-lit, in focus
- Professional or high-quality amateur

**Content**:
- Real church members (with permissions)
- Diverse representation
- Candid moments preferred over staged
- Show activity, engagement, community

**Technical**:
- WebP format with JPG fallback
- Optimized file sizes (<200KB when possible)
- Descriptive filenames
- Alt text for all

---

## Integration Guidelines

### Google Calendar
```jsx
// Embed on Calendar page
<iframe
  src={`https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}`}
  width="100%"
  height="600"
  frameBorder="0"
/>

// Or use API for custom view
import { google } from 'googleapis'

const calendar = google.calendar('v3')
const events = await calendar.events.list({
  calendarId: process.env.GOOGLE_CALENDAR_ID,
  timeMin: new Date().toISOString(),
  maxResults: 5,
  singleEvents: true,
  orderBy: 'startTime'
})
```

### YouTube Integration
```jsx
// Embedded player
<iframe
  width="100%"
  height="400"
  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

// Or use YouTube API
import { youtube } from 'googleapis'

const yt = youtube('v3')
const videos = await yt.search.list({
  part: 'snippet',
  channelId: process.env.YOUTUBE_CHANNEL_ID,
  maxResults: 10,
  order: 'date'
})
```

### Gmail Integration
```jsx
// For contact forms, prayer requests
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: 'prayer@hopewellumc.org',
  subject: 'New Prayer Request',
  html: emailTemplate
})
```

### Realm Giving Modal
```jsx
'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useState } from 'react'

export function GivingButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Give Now</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl h-[600px] p-0">
          <iframe
            src="https://onrealm.org/hopewellumcsimpsonville/give/now"
            className="w-full h-full border-0 rounded-lg"
            title="Online Giving"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
```

---

## Performance Guidelines

### Image Optimization
- Use Next.js Image component
- Lazy load below-the-fold images
- Responsive images (srcset)
- Modern formats (WebP, AVIF)

### Code Splitting
- Dynamic imports for heavy components
- Lazy load modals, calendars
- Split routes by page

### Caching
- Static pages cached at CDN
- API responses cached when appropriate
- Service worker for offline (optional)

---

## SEO Guidelines

### Meta Tags
```jsx
export const metadata = {
  title: 'Page Title | Hopewell UMC',
  description: 'Page description (150-160 characters)',
  keywords: 'church, Simpsonville, United Methodist, worship',
  openGraph: {
    title: 'Page Title',
    description: 'Description',
    images: ['/og-image.jpg']
  }
}
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Church",
  "name": "Hopewell United Methodist Church",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1420 Neely Ferry Rd",
    "addressLocality": "Simpsonville",
    "addressRegion": "SC",
    "postalCode": "29680"
  },
  "telephone": "(864) 967-8181"
}
```

---

## File Naming Conventions

### Components
- PascalCase: `PrayerRequestForm.tsx`
- One component per file
- Index files for barrel exports

### Pages
- Lowercase with hyphens: `about-us.tsx`
- Nested folders for routes: `about/beliefs.tsx`

### Images
- Descriptive, lowercase with hyphens
- Include dimensions: `hero-sanctuary-1920x600.jpg`
- Version numbers: `logo-v2.svg`

### Utilities
- camelCase: `formatDate.ts`
- Grouped by purpose: `lib/validation/`

---

## Version History

**v1.0** - November 14, 2025
- Initial design guide
- Navigation structure defined
- Page templates created
- Component library documented
- Integration guidelines added

---

## Maintenance

This design guide should be:
- Reviewed quarterly
- Updated with new components
- Revised based on user feedback
- Referenced for all new development

---

*For questions about this design guide, contact the development team.*
