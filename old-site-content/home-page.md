# Homepage Content

**URL**: https://www.hopewellumcsimpsonville.com/
**Page Type**: Landing Page / Home

---

## Welcome Message

"Whether you're just having a look, or are searching for a place to worship, we're delighted to have you here."

The church describes itself as having "a place and ministry for every age and every level of maturity."

---

## Primary Purpose

To be the body of Christ present in the Simpsonville community, existing to grow in relationship with Christ and God's people.

---

## Core Values

1. **Christ Proclaimed** - Christ proclaimed as the Son of God
2. **Every Person Cherished** - Every person cherished as a child of God
3. **Purposeful Relationships** - Purposeful relationship building while growing in Christ
4. **Global Mission** - Sharing Christ's good news globally

---

## Mission Statement

**"To Grow in the Lord and Show Him to the World"**

---

## Vision Statement

Called by God to transform community and world by:
- Welcoming all persons
- Growing relationships with each other and Christ
- Nurturing, equipping, and sending disciples

---

## Service Times & Hours

### Sunday Schedule
- **Sunday School**: 9:15 AM
- **Worship Service**: 10:30 AM

### Office Hours
**Monday - Thursday**: 9:00 AM - 2:00 PM

---

## Contact Information

**Church Name**: Hopewell United Methodist Church

**Address**:
1420 Neely Ferry Rd
Simpsonville, South Carolina 29680

**Phone**: (864) 967-8181

**Google Maps**: [View Location](https://www.google.com/maps/place/1420+Neely+Ferry+Rd,+Simpsonville,+SC+29680)

---

## Interactive Features on Homepage

### 1. Prayer Request Form

**Purpose**: Submit prayer requests to the church

**Fields**:
- Name (required)
- Title/Subject (required)
- Prayer Request Details (required)
- Email Address
- Category Selection:
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
- Display Preference: Public or Private

**Security**: CSRF token validation enabled

---

### 2. Newsletter/Prayer Updates Signup

**Purpose**: Subscribe to church newsletter and prayer updates

**Fields**:
- Name
- Email Address
- Mobile Number (optional)
- SMS Opt-in checkbox

**Format**: Phone number with masked input (XXX) XXX-XXXX

---

### 3. Calendar Widget

**Features**:
- Monthly view (currently showing November 2025)
- Previous/Next month navigation buttons
- Day selection capability
- Link to full calendar view (`/full_calendar`)

---

### 4. Countdown Timer

**Display**: "Join Us on Sunday"
**Target**: November 16, 2025, 10:30 AM
**Format**: Days, Hours, Minutes, Seconds remaining

---

## Images

### Banner/Hero Images
The homepage features a rotating slideshow with approximately 150+ images including:
- Church building exterior and interior shots
- Community and congregation photos
- Ministry activities
- Worship services
- Youth and children's programs

**Image Hosting**: AWS S3 (s3.amazonaws.com/mychurchwebsite/)
**Template**: Classic/Family_2 design

### Featured Images
1. Countdown timer background image
2. Custom module image
3. HSS (Hands of Healing Service) dated April 10, 2023

---

## Social Media

- **Facebook**: [Hopewell United Methodist Church Simpsonville](https://www.facebook.com/HopewellUnitedMethodistChurchSimpsonville/)
- **Online Giving**: [Realm Online Giving](https://onrealm.org/hopewellumcsimpsonville/give/now)

---

## Footer Information

### Footer Links
- Site Map
- Admin
- Privacy Policy

### Attribution
"Powered by Church Website Builder by mychurchwebsite.net"

---

## Notes for Migration

1. **Prayer Request Form** - Will need to be rebuilt with proper backend handling
2. **Newsletter Signup** - Needs email service integration
3. **Calendar** - Calendar system needs to be implemented or integrated
4. **Countdown Timer** - Dynamic countdown component needed
5. **Image Carousel** - ~150 slideshow images will need to be downloaded and optimized
6. **Social Media Integration** - Facebook link should be maintained
7. **Online Giving** - Currently uses Realm platform (external)
8. **Contact Form** - May want to add if not present elsewhere
9. **Map Integration** - Google Maps embed should be added

---

## Design Elements to Preserve

- Welcome message tone (warm and inviting)
- Clear display of service times
- Mission/Vision/Values hierarchy
- Easy access to prayer requests
- Prominent calendar display
- Countdown to next service feature
- Contact information visibility
- Social media connectivity
