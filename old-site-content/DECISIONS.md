# Platform & Navigation Decisions

**Date**: November 14, 2025
**Status**: Approved

---

## Platform Decisions

### 1. Online Giving ✅ DECIDED
**Decision**: Keep Realm
**Implementation**: Integrate with site or use modal popup
**Requirement**: Must NOT navigate away from website
**Integration Options**:
- Realm embedded iframe in modal
- Realm popup widget
- Deep link that opens in overlay

---

### 2. Event Registration 🔄 BACKLOG
**Decision**: Add to backlog (not immediate priority)
**Future Consideration**: Evaluate options later
**Temporary Solution**: May link to external registration if needed

---

### 3. Google Workspace for Nonprofits ✅ DECIDED

The church has Google Workspace for Nonprofits, so we'll use Google services wherever possible:

#### Email Service
**Platform**: Gmail / Google Workspace
**Use Cases**:
- Newsletter distribution
- Prayer request notifications
- Event confirmations
- Contact form submissions
**Implementation**: Google Groups, Gmail API, or third-party that integrates with Google

#### Video Hosting
**Platform**: YouTube (Nonprofit Program)
**Benefits**:
- Free hosting
- Unlimited storage
- Auto-generated captions
- Better discoverability
- Analytics
- No ads with nonprofit program
**Use Cases**:
- Sermon archive
- Teaching series
- Event videos
- Ministry showcases

#### Calendar
**Platform**: Google Calendar
**Implementation**:
- Embed Google Calendar on website
- Use Google Calendar API for custom views
- iCal integration
- Event management through Google Calendar
**Benefits**:
- Staff already familiar
- Easy sharing
- Mobile apps
- Recurring events

#### Other Google Services to Consider
- **Google Forms**: For surveys, registration, feedback
- **Google Drive**: Document storage and sharing
- **Google Sites**: For simple sub-sites if needed
- **Google Analytics**: Website analytics (if part of nonprofit program)

---

## Navigation Structure

### New Site Header Navigation

Old site had scattered navigation. New consolidated structure:

| New Header Item | Old Site Mapping | Description |
|----------------|------------------|-------------|
| **Give** | Online Giving + Enter In | Combined giving portal |
| **About** | About Us + Info Center | Church information hub |
| **Connect** | Staff | Staff directory and contact |
| **Prayer** | Prayer | Prayer requests and updates |
| **Ministries** | Ministries | Ministry directory |

---

## Detailed Navigation Mapping

### GIVE
**Consolidates**:
- `/give` (Online Giving)
- `/enter_in_a2d303` (Enter In campaign)

**New Structure**:
```
/give
  - Online Giving (Realm modal/integration)
  - Ways to Give
  - Enter In Campaign (if still active)
  - Generosity Resources
  - FAQ
```

---

### ABOUT
**Consolidates**:
- `/about_us` (About Us)
- `/about_us_65037` (About Us alternate)
- `/info_center` (Info Center)
- `/what_to_expect` (What to Expect)
- `/our_beliefs` (Our Beliefs)
- `/faq` (FAQ - general)

**New Structure**:
```
/about
  - About Us (mission, vision, values)
  - What to Expect (visitor info)
  - Our Beliefs (theology)
  - History
  - FAQ
  - Contact
```

---

### CONNECT
**Maps from**: `/staff` (Staff page)

**New Structure**:
```
/connect
  - Staff Directory
  - Get Involved
  - Small Groups (if applicable)
  - Volunteer Opportunities
  - Contact Us
```

---

### PRAYER
**Direct mapping**: `/prayer`

**New Structure**:
```
/prayer
  - Submit Prayer Request
  - Current Prayer Requests
  - Prayer Ministry
  - How to Pray
```

---

### MINISTRIES
**Direct mapping**: `/ministries`

**New Structure**:
```
/ministries
  - Overview
  - Children's Ministries
  - Youth Ministries
  - Adult Ministries
  - Young Adults
  - Men's Ministry
  - Women's Ministries
  - Missions
  - Worship Ministry
  - [Other ministries]
```

---

## Menu Structure

### Desktop Header
```
┌─────────────────────────────────────────────────────────┐
│ [LOGO]    Give  About  Connect  Prayer  Ministries      │
└─────────────────────────────────────────────────────────┘
```

### Dropdown Menus (if needed)

**About Dropdown**:
- About Us
- What to Expect
- Our Beliefs
- FAQ
- Contact

**Connect Dropdown**:
- Staff
- Get Involved
- Volunteer
- Contact Us

**Ministries Dropdown**:
- All Ministries
- Children
- Youth
- Adults
- Missions
- [Quick access to top ministries]

---

## Footer Navigation

Suggested footer structure with expanded links:

**Column 1: Quick Links**
- Home
- Give
- About
- Contact

**Column 2: Ministries**
- Children's
- Youth
- Adults
- Missions
- All Ministries

**Column 3: Connect**
- Staff
- Prayer
- Get Involved
- Visit Us

**Column 4: Resources**
- Sermons
- Calendar
- FAQ
- Privacy Policy

**Contact Bar**:
- Address
- Phone
- Email
- Social Media Icons

---

## Mobile Menu

Hamburger menu with sections:
1. Home
2. Give
3. About (expandable)
4. Connect (expandable)
5. Prayer
6. Ministries (expandable)
7. Calendar
8. Contact

---

## URL Structure Changes

### Mapping Old → New

| Old URL | New URL | Notes |
|---------|---------|-------|
| `/give` | `/give` | Realm integration |
| `/enter_in_a2d303` | `/give/enter-in` | If campaign active |
| `/about_us` | `/about` | Consolidated |
| `/about_us_65037` | `/about` | Remove duplicate |
| `/info_center` | `/about/info` | Or merge into About |
| `/what_to_expect` | `/about/visit` | Better URL |
| `/our_beliefs` | `/about/beliefs` | Cleaner |
| `/staff` | `/connect/staff` | New hierarchy |
| `/prayer` | `/prayer` | Keep same |
| `/ministries` | `/ministries` | Keep same |
| `/faq` | `/about/faq` | Better organization |

### Redirects Needed

All old URLs should redirect to new structure:
- 301 redirects for SEO
- Preserve external links
- Google will re-index

---

## Implementation Priorities

### Phase 1: Navigation Structure
- [ ] Update header component with new nav items
- [ ] Create dropdown menus (if needed)
- [ ] Update footer navigation
- [ ] Update mobile menu
- [ ] Implement URL structure

### Phase 2: Google Integrations
- [ ] Set up YouTube channel integration
- [ ] Embed Google Calendar
- [ ] Configure Gmail for notifications
- [ ] Set up Google Forms (if needed)
- [ ] Configure Google Analytics

### Phase 3: Realm Integration
- [ ] Research Realm modal/embed options
- [ ] Implement giving integration
- [ ] Test user flow
- [ ] Add fallback link if integration fails

---

## Technical Implementation Notes

### Realm Integration Options

**Option 1: Modal with iframe**
```jsx
<Dialog open={givingModalOpen}>
  <iframe
    src="https://onrealm.org/hopewellumcsimpsonville/give/now"
    className="w-full h-[600px]"
  />
</Dialog>
```

**Option 2: Realm Widget** (if available)
- Check if Realm offers embeddable widget
- May provide better integration

**Option 3: Custom Integration**
- Realm API (if available)
- Build custom giving form
- Process through Realm backend

### Google Calendar Integration

**Option 1: Simple Embed**
```html
<iframe src="https://calendar.google.com/calendar/embed?src=..." />
```

**Option 2: Google Calendar API**
```jsx
// Use @google-cloud/calendar or similar
// Fetch events and display in custom component
// More control over styling
```

### YouTube Integration

**Sermon Archive**:
- Embed YouTube videos
- Use YouTube API for playlist
- Display recent sermons on homepage
- Link to full sermon archive

---

## Content Migration Mapping

With new navigation, content needs reorganization:

### Pages to Create/Update

**New Pages**:
- `/give` - Main giving page
- `/give/enter-in` - Campaign page (if active)
- `/about` - Consolidated about page
- `/about/visit` - What to Expect
- `/about/beliefs` - Our Beliefs
- `/about/faq` - General FAQ
- `/connect` - Connect landing page
- `/connect/staff` - Staff directory

**Updated Pages**:
- Homepage - Update navigation
- All ministry pages - Update breadcrumbs
- Prayer page - Update navigation

**Removed/Consolidated**:
- `/info_center` - Merge into About
- `/about_us_65037` - Duplicate, redirect to /about

---

## Google Services Integration Checklist

### YouTube (Nonprofit)
- [ ] Verify nonprofit YouTube account is active
- [ ] Create/organize playlists (Sermons, Teaching Series, Events)
- [ ] Upload existing Vimeo videos to YouTube
- [ ] Set up consistent branding (channel art, thumbnails)
- [ ] Configure auto-captions
- [ ] Embed on website

### Google Calendar
- [ ] Create public church calendar
- [ ] Set up event categories
- [ ] Configure permissions (who can edit)
- [ ] Test embedding on website
- [ ] Create custom view if needed
- [ ] Document calendar management process

### Gmail/Google Workspace
- [ ] Set up email aliases (prayer@, info@, give@)
- [ ] Configure email forwarding
- [ ] Set up automated responses
- [ ] Create email templates
- [ ] Configure spam filters
- [ ] Test form submissions

### Google Analytics
- [ ] Verify nonprofit GA account
- [ ] Install tracking code
- [ ] Set up goals/conversions
- [ ] Configure custom dimensions
- [ ] Create reports/dashboards
- [ ] Train staff on analytics

### Google Forms (Optional)
- [ ] Identify form needs
- [ ] Create forms (if using)
- [ ] Embed on website
- [ ] Configure notifications
- [ ] Set up response tracking

---

## Notes

1. **Realm Modal**: Ensure it's mobile-friendly and accessible
2. **Google Calendar**: May need custom styling to match site design
3. **YouTube**: Check if church already has channel or needs new one
4. **Navigation**: Keep consistent across all pages
5. **Redirects**: Set up 301 redirects for all old URLs
6. **Testing**: Test all navigation paths thoroughly
7. **Analytics**: Track which nav items are most used

---

## Questions for Church

1. Is the "Enter In" campaign still active?
2. Does the church have an existing YouTube channel?
3. What email address(es) should receive prayer requests?
4. Who manages the Google Calendar?
5. What content should go in "Info Center" section?
6. Any other specific navigation preferences?

---

## Updated Timeline with Decisions

### Week 1-2: Navigation & Structure
- Implement new header navigation
- Create page structure
- Set up URL redirects
- Update footer

### Week 3: Google Integrations
- YouTube channel setup
- Google Calendar integration
- Email configuration
- Analytics setup

### Week 4: Realm Integration
- Research and implement giving modal
- Test user experience
- Add fallback options

### Ongoing: Content Migration
- Migrate content to new structure
- Update internal links
- Test all pages

---

## Success Criteria

✅ **Navigation**:
- Users can find information intuitively
- No broken links
- Clear hierarchy
- Mobile-friendly

✅ **Giving**:
- Users can give without leaving site
- Process is smooth and secure
- Mobile-friendly

✅ **Google Integration**:
- Calendar displays events correctly
- Videos play properly
- Analytics tracking works
- Email notifications send

---

*Last Updated: November 14, 2025*
