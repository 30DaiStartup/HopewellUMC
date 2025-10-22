# Trimmed and Deferred Features from Brooklake Design
**Purpose**: Track features from Brooklake design that are not included in Hopewell's initial build
**Date**: October 22, 2025

---

## FEATURES TRIMMED (Not implementing)

### 1. Rotating Badge Animation
**Brooklake Feature**: "Join us on Sundays" circular badge with 30-second rotation animation
**Reason for Trimming**:
- Adds complexity without critical value
- Hopewell content doesn't require this specific element
- Can achieve same messaging with simpler design
**Alternative**: Static text or simple graphic element

---

### 2. Ken Burns Effect on Hero Images
**Brooklake Feature**: Subtle zoom effect (scale 1.0 to 1.1) on carousel images
**Reason for Trimming**:
- Performance consideration
- Not essential to user experience
- Can add visual complexity
**Alternative**: Static images with crossfade transition only
**Note**: Can revisit if performance is good

---

### 3. Horizontal Scrolling Image Carousel (Secondary)
**Brooklake Feature**: Multiple-image horizontal carousel showing 3-4 images simultaneously
**Reason for Trimming**:
- Adds development complexity
- Hopewell may not have enough curated photos initially
- Similar impact can be achieved with simpler grid layout
**Alternative**: Responsive image grid (3 columns on desktop, 1-2 on mobile)
**Note**: Can add later when more photography is available

---

### 4. Grain Texture Overlay
**Brooklake Feature**: Subtle grain texture (5-10% opacity) for tactile quality
**Reason for Trimming**:
- Purely aesthetic
- Minimal impact on user experience
- Adds file weight
**Alternative**: Clean backgrounds without texture
**Note**: Very low priority for future addition

---

### 5. Advanced Scroll-Triggered Animations
**Brooklake Feature**: Complex staggered fade-in animations with Intersection Observer
**Reason for Trimming**:
- Can impact performance on older devices
- Adds JavaScript complexity
- Basic fade-ins provide similar benefit
**Alternative**: Simple fade-in animations or CSS-only transitions
**Note**: Can enhance later if desired

---

### 6. Moody Worship Experience Section
**Brooklake Feature**: Full-width section with dramatic worship lighting, dark moody aesthetic
**Reason for Trimming**:
- Hopewell may not have appropriate photography yet
- Requires specific lighting conditions and professional photography
- Can create different worship section with available photos
**Alternative**: Traditional worship section with available imagery
**Note**: **REQUIRES DECISION** - Do we want to schedule a photo shoot to capture this type of imagery?

---

### 7. Complex Hover Effects on Images
**Brooklake Feature**: Scale transforms, opacity changes, overlay effects on hover
**Reason for Trimming**:
- Not applicable on mobile (majority of users)
- Can feel dated or gimmicky if overused
- Adds CSS complexity
**Alternative**: Simple hover states (subtle darkening or border)
**Note**: Can add selectively to key CTAs only

---

### 8. Multiple Font Weights and Advanced Typography
**Brooklake Feature**: Extensive use of 400, 500, 600, 700 font weights with precise letter spacing
**Reason for Trimming**:
- Multiple font weights increase page load time
- Diminishing returns on subtle weight differences
**Alternative**: Limit to 2-3 font weights (400, 600, 700)
**Note**: Still maintaining strong typography hierarchy

---

## FEATURES DEFERRED (Build later)

### 1. Sermon/Media Archive
**Brooklake Feature**: Not explicitly in Brooklake, but in Hopewell content inventory
**Reason for Deferring**:
- Hopewell doesn't currently have sermon archive mentioned
- Requires ongoing content management
- Need to determine if Pastor Don wants this feature
**Implementation Timeline**: Phase 2 (3-6 months post-launch)
**Requirements**:
- Audio/video hosting decision
- Archive of past sermons
- Categorization system

---

### 2. Events Calendar System
**Brooklake Feature**: Not detailed in Brooklake design
**Reason for Deferring**:
- Requires integration with Realm or separate calendar system
- Ongoing maintenance required
- Can start with simple "Upcoming Events" list
**Alternative (Initial)**: Static upcoming events section
**Implementation Timeline**: Phase 2 (1-3 months post-launch)
**Requirements**:
- Realm integration investigation
- Calendar management workflow

---

### 3. Blog/Devotional Content
**Hopewell Content**: Suggested in content inventory but not currently active
**Reason for Deferring**:
- Requires ongoing content creation
- Need to confirm Pastor Don's commitment to regular posting
- Can add later if desired
**Alternative (Initial)**: Announcements page serves similar purpose
**Implementation Timeline**: Phase 3 (6+ months post-launch)

---

### 4. Member Portal / Password-Protected Area
**Hopewell Content**: Mentioned for directory integration
**Reason for Deferring**:
- Complex security and authentication requirements
- Realm may already provide this functionality
- Not critical for public-facing site
**Alternative (Initial)**: Link to Realm portal
**Implementation Timeline**: Phase 3 (6+ months post-launch)
**Requirements**:
- Security audit
- User management system
- Integration planning

---

### 5. Advanced Forms (Event Registration, etc.)
**Reason for Deferring**:
- Start with basic contact forms
- Advanced registration can be handled through Realm
- Reduces initial complexity
**Alternative (Initial)**:
- Contact form
- Prayer request form
- Simple inquiry forms
- Link to Realm for complex registrations
**Implementation Timeline**: Phase 2-3 (as needed per event)

---

### 6. Social Media Feed Display
**Reason for Deferring**:
- Requires API integration
- Social media feeds can be unreliable/change frequently
- Not critical for launch
**Alternative (Initial)**: Social media icon links only
**Implementation Timeline**: Phase 2 (if desired, 3-6 months)

---

### 7. Learning Center Detailed Sub-Site
**Hopewell Content**: Parent handbook, brochure, pricing
**Reason for Deferring**:
- Need to obtain actual documents first
- May require separate enrollment system
- Can start with basic info page and PDF downloads
**Alternative (Initial)**: Single page with overview + downloadable PDFs
**Implementation Timeline**: Phase 2 (2-4 months)
**Requirements**:
- Collect all Learning Center materials
- Determine enrollment process
- Contact form for inquiries

---

## FEATURES SIMPLIFIED (Different approach than Brooklake)

### 1. Navigation Structure
**Brooklake**: Clean, minimal navigation
**Hopewell**: More menu items due to specific ministries
**Simplification**:
- Use dropdown/mega-menu for Ministries
- Keep primary navigation to 6-7 items max
- Mobile: Collapsible sections in hamburger menu

---

### 2. Hero Carousel
**Brooklake**: 6+ images with auto-rotation
**Hopewell**: Start with 4-6 images (based on available photography)
**Simplification**:
- Simpler transition (crossfade only)
- Manual controls more prominent than auto-advance
- Longer display time per image (8-10 seconds vs 5-7)

---

### 3. Color Palette
**Brooklake**: Neutral (white, charcoal, subtle red accent)
**Hopewell**: May need to incorporate UMC branding or church colors
**Simplification**:
- Start with neutral base like Brooklake
- Add Hopewell/UMC accent colors as needed
- **REQUIRES DECISION** from user

---

### 4. Animation System
**Brooklake**: Complex scroll-triggered animations with stagger
**Hopewell**: Basic CSS animations
**Simplification**:
- Simple fade-in on page load
- Respect prefers-reduced-motion
- Minimal JavaScript dependencies

---

## FEATURES ADDED (Not in Brooklake but needed for Hopewell)

### 1. Denomination Information
**Hopewell Specific**: UMC affiliation, Greenville District, SC Conference
**Implementation**: Footer or About page section

---

### 2. Capital Campaign Section
**Hopewell Specific**: $500,000 sanctuary campaign
**Implementation**: Dedicated section on Giving page with progress indicator

---

### 3. Learning Center Information
**Hopewell Specific**: Early childhood education program
**Implementation**: Dedicated ministry page

---

### 4. Multiple Giving Options
**Hopewell Specific**: Realm, online, mail, ACH, capital campaign
**Implementation**: Comprehensive giving page with multiple CTAs

---

### 5. Office Hours Prominence
**Hopewell Specific**: Limited office hours (Mon-Thu, 9am-2pm)
**Implementation**: Display prominently in header/footer and contact page

---

## PRIORITY LEVELS FOR FUTURE ADDITIONS

### High Priority (Add within 3 months)
- [ ] Events calendar (even if basic)
- [ ] Remaining ministry page details
- [ ] Complete staff directory with photos
- [ ] Learning Center detailed page

### Medium Priority (Add within 6 months)
- [ ] Sermon archive (if Pastor Don commits to it)
- [ ] Advanced event registration forms
- [ ] Member testimony/stories section
- [ ] History/timeline page

### Low Priority (Add if desired, 6+ months)
- [ ] Blog/devotional section
- [ ] Social media feed display
- [ ] Advanced animations and effects
- [ ] Member portal
- [ ] Mobile app integration

---

## DECISION TRACKER

Features marked **REQUIRES DECISION** need user input:

1. **Moody worship photography** - Schedule professional photo shoot?
2. **Color palette** - Use neutral Brooklake colors or incorporate Hopewell/UMC branding?
3. **Sermon archive** - Does Pastor Don want this feature? Timeline?
4. **Blog/devotionals** - Commitment to ongoing content?
5. **Calendar system** - Realm integration vs separate calendar vs simple list?
6. **Social media presence** - Which platforms? URLs?

---

**SUMMARY**:
- **8 features trimmed** (not implementing)
- **7 features deferred** (build later in phases)
- **4 features simplified** (different approach)
- **5 features added** (Hopewell-specific needs)
- **6 decisions required** from user

This approach keeps the initial build focused, manageable, and achievable while preserving the quality and aesthetic of the Brooklake design. Features can be added incrementally based on need, resources, and user feedback.
