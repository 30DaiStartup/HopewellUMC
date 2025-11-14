# Hopewell UMC - Old Site Content Extraction

**Extraction Date**: November 14, 2025
**Old Site URL**: https://www.hopewellumcsimpsonville.com
**New Site Path**: C:\Users\zach1\Development\hopewellumc

---

## 📋 Overview

This directory contains a comprehensive extraction of all content, functionality, and media from the old Hopewell United Methodist Church website. This documentation will guide the content migration and inform design decisions for the new Next.js-based website.

---

## 📁 Directory Structure

```
old-site-content/
├── README.md (this file)
├── site-map.md                      # Complete site structure & URLs
├── functionality-inventory.md       # All interactive features
├── home-page.md                     # Homepage content
├── staff.md                         # Staff directory
├── prayer.md                        # Prayer page
├── faq.md                          # Frequently asked questions
├── resources.md                     # Downloadable resources
├── about/
│   ├── about-us.md
│   ├── what-to-expect.md
│   └── our-beliefs.md
├── ministries/
│   ├── overview.md
│   ├── youth-ministries.md
│   ├── childrens-ministries.md
│   ├── adult-ministries.md
│   └── missions.md
├── images/
│   └── image-inventory.md           # All images & photos
└── media/
    └── media-inventory.md           # Videos & audio
```

---

## 🗺️ Site Statistics

### Pages Extracted
- **Total Pages**: ~46 pages
  - Main Navigation: 12 pages
  - Staff Pages: 11 pages
  - Ministry Pages: 16 pages
  - About Pages: 3 pages
  - Utility Pages: 4 pages

### Content Documented
- ✅ Homepage content
- ✅ Site navigation structure
- ✅ Staff directory (11 members)
- ✅ Ministry overviews (17 ministries)
- ✅ Sample ministry pages (4 detailed)
- ✅ About section pages (3)
- ✅ Prayer request functionality
- ✅ FAQ content
- ✅ Resources library
- ✅ Complete functionality inventory
- ✅ Image inventory
- ✅ Media/video inventory

---

## 🔑 Key Documents

### 1. [site-map.md](./site-map.md)
Complete sitemap with all 46+ pages and their URLs. Use this to:
- Understand site hierarchy
- Plan URL structure for new site
- Identify all pages needing migration

### 2. [functionality-inventory.md](./functionality-inventory.md) ⭐ CRITICAL
Comprehensive catalog of all interactive features including:
- Prayer request form
- Newsletter signup
- Calendar system
- Event registration
- Online giving integration
- Video players
- Social media integration
- And 15+ other features

**Feature Priority Matrix** included to guide development phases.

### 3. [images/image-inventory.md](./images/image-inventory.md)
Complete catalog of all images:
- 10 staff photos (URLs provided)
- 150+ carousel images
- Banner/hero images
- Ministry photos
- Migration checklist

### 4. [media/media-inventory.md](./media/media-inventory.md)
Video and audio content:
- Giving Pathway series (4 videos)
- Sermon videos
- Vimeo integration details
- Platform recommendations

---

## 🎯 Content Migration Priorities

### Phase 1: Critical Content (Week 1-2)
**Goal**: Match basic content parity

1. **Homepage**
   - Welcome message
   - Mission/Vision/Values
   - Service times
   - Contact information
   - Basic navigation

2. **About Section**
   - About Us overview
   - What to Expect (needs development)
   - Our Beliefs (needs development)

3. **Staff Directory**
   - All 11 staff members
   - Photos (download from S3)
   - Contact information

4. **Basic Ministry Pages**
   - Overview/directory
   - Top 5 ministries (Youth, Children's, Missions, Adult, Worship)

### Phase 2: Interactive Features (Week 3-4)
**Goal**: Enable community engagement

1. **Prayer Request System**
   - Form submission
   - Display system
   - Email notifications
   - Moderation capability

2. **Calendar**
   - Event creation
   - Monthly view
   - Event details
   - Integration with pages

3. **Contact/Communication**
   - Newsletter signup
   - General contact form

### Phase 3: Full Ministry Content (Week 5-6)
**Goal**: Complete ministry presence

1. **All 17 Ministry Pages**
   - Detailed content for each
   - Photos and media
   - Contact information
   - Registration forms

2. **Resources Library**
   - Download PDFs
   - Video integration
   - Organized categories

### Phase 4: Advanced Features (Week 7-8)
**Goal**: Enhanced functionality

1. **Event Registration**
   - Online signups
   - Payment integration
   - Confirmation emails

2. **Online Giving** (External integration)
   - Choose platform
   - Integrate with site
   - Test thoroughly

3. **Media Library**
   - Sermon archive
   - Video player
   - Search/filter

---

## 📊 Content Gaps Identified

### High Priority Gaps (Needs Development)

1. **What to Expect Page**
   - Service times and format
   - Dress code guidance
   - Parking and entrance info
   - Children's program info during service
   - First-time visitor FAQs

2. **Our Beliefs Page**
   - Statement of faith
   - United Methodist affiliation
   - Theological positions
   - Welcoming statement

3. **Adult Ministries Page**
   - Bible study groups
   - Small group descriptions
   - Schedule and meeting times
   - Leadership details

4. **General FAQ**
   - Current FAQ is building-campaign specific
   - Need general church FAQs
   - Visitor questions
   - Membership process

### Medium Priority Gaps

1. **Individual Staff Bios**
   - Extended biographies
   - Educational background
   - Ministry experience
   - Personal information

2. **Ministry Detail Pages**
   - Many ministry pages need full content
   - Photos and imagery
   - Schedules and calendars
   - Registration forms

3. **Event Calendar**
   - Comprehensive event listing
   - Detailed event pages
   - Registration integration

---

## 🚀 Technical Requirements

### External Services to Set Up

1. **Online Giving** (Critical Decision)
   - Options: Realm (current), Tithe.ly, Pushpay, Givelify
   - Requirements: Recurring donations, fund designation, receipts

2. **Event Registration**
   - Options: Realm (current), Eventbrite, custom
   - Requirements: Payment processing, attendee tracking, emails

3. **Email Marketing**
   - Options: Mailchimp, ConvertKit, SendGrid
   - Requirements: Newsletter, prayer updates, SMS option

4. **Video Hosting**
   - Options: Vimeo (current), YouTube, self-hosted
   - Requirements: Embed, playlists, analytics

5. **Calendar System**
   - Options: Custom, Google Calendar integration, plugin
   - Requirements: Events, recurring events, iCal export

### Development Features Needed

See [functionality-inventory.md](./functionality-inventory.md) for complete list.

**Top 5 Critical Features**:
1. Prayer request system (form + display + moderation)
2. Calendar system
3. Online giving integration
4. Event registration
5. Newsletter signup

---

## 🎨 Design Considerations

### Current New Site Design Elements
From exploration of existing new site:
- **Color**: Teal (#0b5a7f) primary brand color
- **Typography**: Bold headings, clean sans-serif
- **Components**: Modern, component-based (React)
- **Layout**: Max-width containers, ample whitespace
- **Mobile**: Mobile-first responsive design
- **Tech Stack**: Next.js 15, React 18, Tailwind CSS, Firebase

### Elements to Preserve from Old Site
1. **Welcome Message Tone**: Warm, inviting, inclusive
2. **Mission/Vision/Values**: Clear hierarchy
3. **Service Times Prominence**: Easy to find
4. **Prayer Request Access**: Central to ministry
5. **Calendar Visibility**: Events front and center
6. **Contact Info**: Multiple touchpoints

### Recommended New Site Enhancements
1. **Better Ministry Navigation**: Categorized, filterable
2. **Visual Hierarchy**: Clear content prioritization
3. **Imagery**: More ministry photos, lifestyle imagery
4. **Mobile Experience**: Optimized for mobile users
5. **Accessibility**: WCAG 2.1 AA compliance
6. **Performance**: Fast load times, optimized images

---

## 👥 Church Information

### Identity
**Name**: Hopewell United Methodist Church
**Location**: 1420 Neely Ferry Rd, Simpsonville, SC 29680
**Phone**: (864) 967-8181
**Mission Hotline**: (864) 531-0409
**Denomination**: United Methodist Church

### Mission & Vision
**Mission**: "To Grow in the Lord and Show Him to the World"

**Vision**: Called by God to transform community and world by:
- Welcoming all persons
- Growing relationships with each other and Christ
- Nurturing, equipping, and sending disciples

### Service Times
- **Sunday School**: 9:15 AM
- **Worship Service**: 10:30 AM
- **Office Hours**: Monday-Thursday, 9:00 AM - 2:00 PM

### Core Values
1. Christ proclaimed as the Son of God
2. Every person cherished as a child of God
3. Purposeful relationship building while growing in Christ
4. Sharing Christ's good news globally

---

## 📸 Media Assets

### Images to Download
- **10 staff photos** (URLs in image-inventory.md)
- **150+ carousel images** (bulk download needed)
- **Banner images**
- **Church logo** (if available)
- **Ministry photos** (comprehensive audit needed)

### Videos to Catalog
- **5 videos** identified (Vimeo)
- Full video library needs access to Vimeo account
- Decision needed on video platform

### PDFs to Download
- Vision for Growth Presentation
- Generosity Pathway Booklet
- Enter In Journal v5

---

## ✅ Next Steps

### Immediate (This Week)
1. ✅ Review all extracted content documentation
2. ⬜ Download all staff photos
3. ⬜ Download PDF resources
4. ⬜ Access Vimeo account for full video catalog
5. ⬜ Identify remaining ministry pages to extract

### Short-Term (1-2 Weeks)
1. ⬜ Complete content extraction for all 46+ pages
2. ⬜ Download carousel images (150+)
3. ⬜ Create content templates for missing pages
4. ⬜ Make platform decisions (giving, registration, email)
5. ⬜ Begin Phase 1 content migration

### Medium-Term (3-4 Weeks)
1. ⬜ Develop prayer request system
2. ⬜ Implement calendar functionality
3. ⬜ Integrate online giving platform
4. ⬜ Build ministry page templates
5. ⬜ Migrate all ministry content

### Long-Term (1-2 Months)
1. ⬜ Complete all content migration
2. ⬜ Implement all interactive features
3. ⬜ Full testing and QA
4. ⬜ Soft launch
5. ⬜ Training for staff on new CMS
6. ⬜ Public launch

---

## 📝 Content Writing Tasks

### Pages Needing New Content

1. **What to Expect** - Write from scratch
2. **Our Beliefs** - Develop theological statement
3. **Adult Ministries** - Expand with programs and schedules
4. **Many Ministry Pages** - Need full content development
5. **General FAQ** - Create comprehensive visitor FAQ

### Content to Update

1. **Dates** - Many references to 2024, need 2025+ updates
2. **Photos** - Verify current staff, update as needed
3. **Event Info** - Update all event dates and details
4. **Statistics** - Update giving campaign numbers if ongoing

---

## 🔒 Privacy & Security Considerations

1. **Prayer Requests**: GDPR compliance, data retention policy
2. **Contact Forms**: CSRF protection, spam prevention
3. **Personal Info**: Staff and member privacy
4. **Photo Releases**: Ensure permissions for all photos
5. **Payment Processing**: PCI compliance for online giving
6. **SSL Certificate**: HTTPS for entire site

---

## 📞 Key Contacts

### Staff (from extracted content)
- **Pastor**: Rev. Don Brown - (864) 630-0164
- **Admin**: Jessica Collins - (864) 967-8181
- **Christian Education**: Sarah Erskine - (651) 357-3668
- **Youth Ministries**: Lera Jackson - (864) 360-4910
- **Marketing**: Stacy Black - (561) 213-3426
- **Missions**: Brenda Rau - (336) 416-6181

---

## 📚 Additional Resources

### External Links
- **Facebook**: https://www.facebook.com/HopewellUnitedMethodistChurchSimpsonville/
- **Online Giving**: https://onrealm.org/hopewellumcsimpsonville/give/now
- **Google Maps**: https://www.google.com/maps/place/1420+Neely+Ferry+Rd,+Simpsonville,+SC+29680

### Current Platform
- **Website Builder**: mychurchwebsite.net
- **Image Hosting**: AWS S3
- **Video Hosting**: Vimeo
- **Giving/Registration**: Realm
- **Forms**: Google Forms (marketing requests)

---

## 🎯 Success Metrics

### Content Completeness
- [ ] All 46+ pages extracted
- [ ] All images cataloged and downloaded
- [ ] All videos cataloged
- [ ] All functionality documented
- [ ] All staff info collected
- [ ] All ministry info collected

### Migration Readiness
- [ ] Content templates created
- [ ] Platform decisions made
- [ ] Technical requirements documented
- [ ] Design guidelines established
- [ ] Content writing tasks assigned
- [ ] Timeline established

---

## ⚠️ Important Notes

1. **Building Campaign**: Old site heavily features building/capital campaign from 2024. Determine if this is still active or needs updating.

2. **Commitment Sunday**: Referenced as October 20, 2024. Update or remove references.

3. **Dates**: Many events and dates reference 2024. All need updating to current year.

4. **Realm Integration**: Church heavily uses Realm for giving and registration. Decide if continuing or switching platforms.

5. **Staff Changes**: Verify all staff are still current. Update photos and bios as needed.

6. **Ministry Activities**: Verify all ministries are still active and information is current.

7. **COVID Policies**: Check if any COVID-related content needs updating or removing.

---

## 📖 Document Conventions

### Status Indicators
- ✅ Complete
- ⬜ Not started
- 🔄 In progress
- ⭐ High priority
- 🔴 Critical
- 🟡 High
- 🟢 Medium
- 🔵 Low

### File Naming
- Use lowercase with hyphens
- Descriptive names
- Group by category in folders

---

## 🤝 Contributing

When adding new extracted content:
1. Follow existing markdown format
2. Include URL and page type at top
3. Organize content with clear headings
4. Note any action items or decisions needed
5. Update this README with new files

---

## 📅 Last Updated

**Date**: November 14, 2025
**By**: Content extraction process
**Status**: Initial extraction complete, ongoing refinement needed

---

## Questions or Issues?

For questions about this documentation or the content migration process, contact the development team.

---

*This extraction represents a snapshot of the old website as of November 14, 2025. Some content may have changed since then. Always verify critical information with church staff.*
