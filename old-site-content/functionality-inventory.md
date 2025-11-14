# Functionality Inventory

**Old Site**: https://www.hopewellumcsimpsonville.com
**Documentation Date**: November 14, 2025

This document catalogs all interactive features and functionality from the old church website that need to be replicated or reimagined in the new site.

---

## 1. Forms & User Input

### A. Prayer Request Form ⭐ HIGH PRIORITY
**Location**: Homepage and `/prayer`

**Features**:
- Name field (required)
- Email address (required)
- Title/Subject field (required)
- Prayer request details textarea (required)
- Category dropdown with 10 options:
  - Health/Hospital
  - Praise
  - Grief
  - Travel
  - Salvation
  - Missions
  - Nursing Care
  - Military Personnel
  - Persecution
  - Other
- Display preference: Public/Private toggle
- CSRF token validation
- Submitter name tracking

**Backend Requirements**:
- Database storage
- Email notifications to prayer team
- Moderation capability for public requests
- Archive system

---

### B. Newsletter/Prayer Updates Signup ⭐ HIGH PRIORITY
**Location**: Homepage

**Features**:
- Name field
- Email field
- Mobile number field (optional)
- SMS opt-in checkbox
- Phone number masking: (XXX) XXX-XXXX format

**Backend Requirements**:
- Email service integration (e.g., Mailchimp, ConvertKit)
- SMS service integration if text updates desired
- Database storage
- Unsubscribe management

---

### C. Marketing Request Form
**Location**: Staff page (Stacy Black's profile)
**Type**: External (Google Forms)
**URL**: https://docs.google.com/forms/d/e/1FAIpQLScDBAWfzxkvvj9-4ePirUFwiqlMOoiOSetXnKQ89Q4qJRY5JA/viewform?usp=sf_link

**Decision Needed**: Keep as Google Form or bring in-house?

---

## 2. Calendar System ⭐ HIGH PRIORITY

**Location**: Homepage widget, `/full_calendar`

**Features**:
- Monthly view with navigation (prev/next month)
- Current month display
- Event listings by day
- Event details:
  - Title
  - Time
  - Location (when applicable)
- Full calendar page view

**Example Events**:
- Church Office Closed
- Learning Center sessions
- Children's programs
- Kitchen reservations
- Ministry meetings

**Backend Requirements**:
- Calendar database
- Admin interface for adding/editing events
- Recurring event support
- Categories/filtering
- iCal export capability
- Print-friendly view

---

## 3. Event Registration ⭐ HIGH PRIORITY

**Current System**: Realm platform
**Example**: Cookie and Ornament Decorating Event
**URL Pattern**: `https://onrealm.org/hopewellumcsimpsonville/PublicRegistrations/Event?linkString=...`

**Features Needed**:
- Event registration forms
- Attendee tracking
- Meal count tracking
- Payment integration (if needed)
- Confirmation emails
- Waitlist capability
- Age/group restrictions

**Decision Needed**:
- Continue using Realm?
- Build custom solution?
- Use alternative platform (Eventbrite, etc.)?

---

## 4. Online Giving ⭐ HIGH PRIORITY

**Current System**: Realm Online Giving
**URL**: https://onrealm.org/hopewellumcsimpsonville/give/now

**Features**:
- One-time donations
- Recurring donations
- Fund designation:
  - General fund
  - Missions
  - Building fund
  - Specific campaigns
- Payment methods (credit/debit, ACH)
- Donation receipts
- Giving history

**Decision Needed**:
- Continue using Realm?
- Alternative platform (Tithe.ly, Pushpay, Givelify)?
- Custom solution?

---

## 5. Media & Content Display

### A. Image Carousel
**Location**: Homepage banner

**Features**:
- Auto-scrolling (~150+ images)
- Parabolic wave clip-path effect
- AWS S3 image hosting
- Smooth transitions

**Backend Requirements**:
- Image upload/management system
- Carousel order control
- Speed/timing controls
- Mobile optimization

---

### B. Video Player
**Current Host**: Vimeo
**Locations**: Homepage (sermon), Resources page

**Video Content**:
- Sermon series
- Giving pathway series
- Event recaps
- Promotional videos

**Features Needed**:
- Embedded player
- Playlist capability
- Video categories
- Search/filter
- Download option (optional)

---

### C. Countdown Timer
**Location**: Homepage
**Purpose**: "Join Us on Sunday"
**Target**: Next Sunday service at 10:30 AM

**Features**:
- Days, Hours, Minutes, Seconds display
- Auto-updates to next Sunday
- Background image
- Responsive design

---

## 6. Navigation & Structure

### A. Main Navigation
**Type**: Desktop horizontal menu

**Structure**:
- Home
- About Us (dropdown)
  - What to Expect
  - Our Beliefs
- Ministries (dropdown)
  - 17 ministry pages
- Staff
- Prayer
- Give
- Resources
- FAQ
- Info Center

---

### B. Mobile Navigation
**Features**:
- Hamburger menu icon
- Slide-out drawer
- Touch-optimized
- Full menu hierarchy

---

### C. Footer Navigation
**Structure**: Multi-column layout
- Quick links
- Ministry categories
- Legal links
- Social media icons

---

## 7. Search & Discovery

### A. Bible Search
**Location**: Adult Ministries page
**Integration**: BibleGateway.com
**Type**: External link

---

### B. Site Search
**Current Status**: Not evident on old site
**Recommendation**: Add to new site

---

## 8. Social Media Integration

**Facebook Link**: https://www.facebook.com/HopewellUnitedMethodistChurchSimpsonville/

**Features to Add**:
- Social sharing buttons
- Facebook feed embed (optional)
- YouTube channel link (if applicable)
- Instagram feed (if applicable)

---

## 9. Location & Maps

**Google Maps**: https://www.google.com/maps/place/1420+Neely+Ferry+Rd,+Simpsonville,+SC+29680

**Features Needed**:
- Embedded map on Contact/Location page
- Directions link
- Address display
- Parking information overlay

---

## 10. Contact Information Display

**Current Info**:
- Address: 1420 Neely Ferry Rd, Simpsonville, SC 29680
- Phone: (864) 967-8181
- Mission Hotline: (864) 531-0409
- Office Hours: Monday-Thursday, 9:00 AM - 2:00 PM

**Features**:
- Click-to-call phone numbers
- Click-to-email addresses
- Copy address button
- vCard download for staff

---

## 11. PDF/Document Downloads

**Hosting**: files.mychurchwebsite.net

**Documents**:
- Vision for Growth Presentation
- Generosity Pathway Booklet
- Enter In Journal

**Features Needed**:
- Organized document library
- Categories/tags
- Search capability
- Download tracking
- Version control

---

## 12. Accessibility Features

**Current Implementation**:
- Minimum 44px tap targets
- 16px input font size (prevents iOS zoom)
- Semantic HTML
- ARIA labels for icons

**Maintain/Enhance**:
- Keyboard navigation
- Screen reader compatibility
- High contrast mode
- Text resizing
- Alt text for all images
- Video captions

---

## 13. Security Features

**Current**:
- CSRF token validation on forms
- HTTPS

**Maintain/Add**:
- SSL certificate
- Form validation
- SQL injection prevention
- XSS protection
- Rate limiting on forms
- CAPTCHA for public forms (optional)

---

## 14. Mobile Optimization

**Current Features**:
- Responsive design
- Touch-optimized navigation
- Mobile-friendly forms
- Tap target sizing
- Font size prevention of zoom

---

## 15. Admin/Management Features

**Needed for New Site**:
- Content management system
- User roles (admin, editor, viewer)
- Page editor
- Event management
- Prayer request moderation
- Newsletter subscriber management
- File/media library
- Analytics dashboard

---

## Feature Priority Matrix

### 🔴 CRITICAL (Must Have for Launch)
1. Prayer request form and display
2. Calendar system
3. Online giving integration
4. Contact forms
5. Mobile responsive design
6. Staff directory
7. Basic content pages

### 🟡 HIGH PRIORITY (Launch Phase 2)
1. Event registration
2. Newsletter signup
3. Video integration
4. Image galleries
5. Resource library
6. Social media feeds

### 🟢 MEDIUM PRIORITY (Enhancement Phase)
1. Countdown timers
2. Advanced search
3. Document management
4. Sermon archives
5. Member portal

### 🔵 LOW PRIORITY (Future Consideration)
1. Online Bible study tools
2. Community forums
3. Chat support
4. Mobile app

---

## External Service Dependencies

| Service | Purpose | Current Provider |
|---------|---------|------------------|
| Hosting | Website hosting | mychurchwebsite.net |
| Media Storage | Images/videos | AWS S3, Vimeo |
| Online Giving | Donations | Realm |
| Event Registration | Event signups | Realm |
| Email Marketing | Newsletter | Unknown |
| Forms | Marketing requests | Google Forms |
| Video Hosting | Sermons/resources | Vimeo |

---

## Migration Decisions Needed

1. **Online Giving**: Realm vs. alternative vs. custom
2. **Event Registration**: Realm vs. alternative
3. **Video Hosting**: Continue Vimeo vs. YouTube vs. self-host
4. **Email Service**: Choose provider (Mailchimp, ConvertKit, etc.)
5. **Calendar**: Build custom vs. use plugin/service
6. **Image Hosting**: Continue AWS S3 vs. local hosting vs. CDN
7. **Forms**: Keep Google Forms vs. bring in-house
8. **CMS Platform**: WordPress, custom Next.js, other?

---

## Technical Stack Recommendations

Based on current new site (Next.js with Tailwind):
- **Forms**: React Hook Form + Firestore
- **Calendar**: Custom component + Firestore
- **Auth**: NextAuth (for admin)
- **Database**: Firebase/Firestore (already in use)
- **Media**: Next.js Image Optimization + Cloud Storage
- **Email**: Resend or SendGrid
- **Analytics**: Google Analytics or Plausible

---

## Notes

- All form submissions should send confirmation emails
- GDPR/privacy compliance required for all data collection
- Backup strategy needed for all user-generated content
- Consider multilingual support for future growth
