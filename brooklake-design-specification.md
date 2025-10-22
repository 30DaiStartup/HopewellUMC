# Brooklake Church Website - Comprehensive Design Specification

**Purpose**: Complete design blueprint for recreating Brooklake's website design system
**Target Audience**: AI agents, developers, and designers building a church website
**Date**: October 22, 2025

---

## 1. OVERALL DESIGN PHILOSOPHY

### Design Approach
- **Style**: Modern, warm, and welcoming with emphasis on authentic human connection
- **Primary Focus**: Photography-driven storytelling with minimal text overlay
- **User Experience**: Inviting and accessible, designed to reduce barriers for newcomers
- **Tone**: Casual yet purposeful; approachable rather than institutional

### Key Principles
1. **Human-first imagery**: Real people, genuine moments, diverse age groups
2. **Whitespace utilization**: Generous breathing room between sections
3. **Hierarchy through typography**: Clear information structure without excessive decoration
4. **Progressive disclosure**: Essential information upfront, details on demand

---

## 2. COLOR PALETTE

### Primary Colors
- **Background White**: `#FFFFFF` or `rgb(255, 255, 255)`
  - Used for: Main background, content areas, clean sections
  
- **Deep Charcoal/Black**: `#1A1A1A` to `#2D2D2D` (estimate)
  - Used for: Primary text, headlines, navigation text
  - Provides strong contrast without harsh pure black

### Accent Colors
- **Warm Red/Coral**: Appears in stage lighting photos and subtle accents
  - Estimate: `#D84545` to `#E05555` range
  - Used sparingly for: Visual interest in imagery, possible button hover states

- **Soft Grayscale Palette**:
  - Light Gray: `#F5F5F5` to `#F9F9F9` (section dividers)
  - Mid Gray: `#666666` to `#888888` (secondary text)
  - Dark Gray: `#333333` to `#444444` (body text)

### Photography Treatment
- **Image Overlay**: Subtle dark gradient overlays on hero images (0-40% opacity black)
- **Color Temperature**: Warm, natural tones emphasizing authentic lighting
- **Saturation**: Moderately saturated, not overly vibrant or muted

---

## 3. TYPOGRAPHY SYSTEM

### Font Stack (Estimated - verify via browser inspection)

**Primary Font Family**: Likely a modern sans-serif system
- Options to consider: 
  - Inter, Outfit, or custom sans-serif
  - System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell`

### Type Scale

**Hero Headline** (e.g., "Making Jesus known to Everyone, Everywhere")
- Font Size: 48-72px desktop / 32-40px mobile
- Font Weight: 600-700 (Semi-bold to Bold)
- Line Height: 1.1-1.2 (tight for impact)
- Letter Spacing: -1% to -2% (slight negative tracking)
- Color: White (on dark images) or Dark Charcoal (on light backgrounds)

**Section Headlines** (e.g., "We're People Just Like You")
- Font Size: 36-48px desktop / 28-36px mobile
- Font Weight: 600-700
- Line Height: 1.2-1.3
- Margin Bottom: 20-30px

**Subheadings / Supporting Text**
- Font Size: 18-24px desktop / 16-20px mobile
- Font Weight: 400-500 (Regular to Medium)
- Line Height: 1.5-1.6 (more readable)
- Color: Mid-gray to Dark gray

**Body Text**
- Font Size: 16-18px desktop / 15-16px mobile
- Font Weight: 400 (Regular)
- Line Height: 1.6-1.8 (highly readable)
- Color: `#333333` to `#444444`
- Max Width: 600-700px for optimal readability

**Navigation Text**
- Font Size: 14-16px
- Font Weight: 500-600 (Medium to Semi-bold)
- Text Transform: Potentially uppercase for links
- Letter Spacing: 1-2% positive tracking if uppercase

---

## 4. LAYOUT & GRID SYSTEM

### Container Widths
- **Maximum Content Width**: 1200-1400px
- **Content Padding**: 20-40px left/right on mobile, 60-100px on desktop
- **Section Padding**: 80-120px top/bottom on desktop, 60-80px on mobile

### Grid Structure
- **Base Grid**: 12-column system (standard responsive framework)
- **Gutter Width**: 20-30px between columns
- **Breakpoints**:
  - Mobile: 320-767px
  - Tablet: 768-1024px
  - Desktop: 1025px+
  - Large Desktop: 1400px+

### Spacing System (Consistent vertical rhythm)
- **XS**: 8px
- **SM**: 16px
- **MD**: 24px
- **LG**: 40px
- **XL**: 60px
- **XXL**: 80px
- **XXXL**: 120px

---

## 5. COMPONENT-BY-COMPONENT BREAKDOWN

### 5.1 Navigation Bar

**Structure**:
- Fixed or sticky header that remains visible on scroll
- Horizontal layout on desktop
- Hamburger menu on mobile (slides in from right or expands downward)

**Styling**:
- Background: White with subtle shadow or transparent with backdrop blur
- Height: 70-90px desktop, 60-70px mobile
- Logo: Left-aligned, likely text-based "Brooklake" wordmark
- Navigation Links: Right-aligned
  - Spacing: 30-40px between links
  - Hover State: Underline or color change
- Call-to-Action Button: "Visit Brooklake" or similar
  - Style: Solid button with border-radius: 4-8px
  - Background: Accent color or black
  - Text: White, 14-16px, medium weight
  - Padding: 12px 24px

**Mobile Behavior**:
- Collapse to hamburger icon (3 horizontal lines)
- Menu slides/fades in as full-screen or partial overlay
- Close button (X) in top-right corner

---

### 5.2 Hero Section

**Layout**:
- Full viewport height (100vh) or near-full (80-90vh)
- Image carousel/slider background with automatic rotation
- Content centered vertically and horizontally (or slightly offset)

**Image Carousel**:
- **Image Count**: 6+ rotating images showing diverse congregants
- **Transition**: Smooth crossfade (1-2 second duration)
- **Timing**: 5-7 seconds per image
- **Image Treatment**: 
  - Aspect Ratio: 16:9 or wider
  - Dark overlay: 20-40% opacity black gradient (darker at bottom)
  - Image Position: Center-center
  - Image Behavior: Ken Burns effect (subtle zoom) optional

**Text Content Overlay**:
- **Top Text Block** (Tagline):
  ```
  Everyone is welcome.
  Everyone has a next best step.
  Everyone can make a difference.
  ```
  - Position: Centered, upper-middle of hero
  - Font Size: 20-28px
  - Font Weight: 400-500
  - Line Height: 1.8-2.0 (generous spacing between lines)
  - Color: White
  - Text Shadow: 1px 1px 2px rgba(0,0,0,0.5) for legibility

- **Main Headline**:
  ```
  Welcome to brooklake
  629 S 356th ST, Federal Way, WA 98003
  ```
  - Position: Below tagline, still centered
  - Title Case or Title styling
  - Church name treatment may include subtle graphic element

- **Call-to-Action Button**:
  - Text: "Visit Brooklake" with arrow or similar
  - Position: Below address
  - Size: Larger than nav buttons (16-18px text)
  - Padding: 16px 32px
  - Border Radius: 4-8px
  - Hover Effect: Slight scale (1.05) or background color shift

**Carousel Indicators**:
- Dots or lines at bottom-center
- Active indicator highlighted
- Color: White with 50% opacity, active at 100%

---

### 5.3 Mission Statement Section

**Layout**:
- Full-width section with background color (likely white)
- Content max-width container centered
- Single column on mobile, may have image companion on desktop

**Content Structure**:
```
[Hero Image on Left - 50% width]
[Text Content on Right - 50% width]
```

**Text Block**:
- **Headline**: "Brooklake church" 
  - Font Size: 14-18px
  - Font Weight: 700
  - Text Transform: Uppercase
  - Letter Spacing: 2-3%
  - Color: Accent color or mid-gray
  - Margin Bottom: 12px

- **Main Statement**: "Making Jesus known to Everyone, Everywhere"
  - Font Size: 36-48px desktop
  - Font Weight: 600-700
  - Line Height: 1.2
  - Color: Dark charcoal
  - Margin Bottom: 24px

**Image Treatment**:
- Aspect Ratio: 4:3 or 3:4 portrait
- Border Radius: 8-12px (subtle rounding)
- Image shows authentic moment (hugging, welcoming)
- May have subtle shadow: `0 4px 12px rgba(0,0,0,0.1)`

**Responsive Behavior**:
- Stack vertically on mobile (image above text)
- Image width: 100% on mobile, 45-50% on desktop

---

### 5.4 Image Carousel Section (Secondary)

**Purpose**: Showcase community through rotating photography

**Structure**:
- Horizontal scrolling carousel
- Multiple images visible simultaneously on desktop (3-4 images)
- Single image on mobile with swipe capability
- Infinite loop carousel

**Individual Image Cards**:
- Aspect Ratio: 3:4 portrait or 4:5
- Border Radius: 8-12px
- Spacing Between: 20-30px
- Shadow: `0 2px 8px rgba(0,0,0,0.08)` on hover

**Photography Guidelines**:
- All images should show:
  - Real congregants (diverse ages, ethnicities, family structures)
  - Authentic candid moments
  - Welcoming gestures (hugs, smiles, greetings)
  - Various church settings (worship, fellowship, small groups)
- Consistent editing style across all photos
- Bright, well-lit imagery

**Navigation**:
- Arrow buttons on left/right edges (desktop)
- Dots indicator at bottom (optional)
- Touch/swipe enabled (mobile)
- Auto-advance optional: 5-7 seconds

---

### 5.5 "We're People Just Like You" Section

**Layout**:
- Two-column layout (desktop): Image left, text right
- Single column (mobile): Text above, image below
- Background: White or subtle off-white
- Padding: 80-100px vertical

**Text Column**:
- **Badge/Circular Graphic**: "Join us on Sundays"
  - Positioned absolutely over or near text
  - Rotating animation (slow spin, 20-30 seconds per rotation)
  - CSS: `animation: rotate 30s linear infinite`
  - Diameter: 120-150px
  - May use SVG or PNG with transparency

- **Section Tagline**: "We're People Just Like You" (repeated)
  - Font Size: 18-24px
  - Font Weight: 600
  - Color: Accent color
  - Margin Bottom: 16px

- **Headline**: "Everyone is welcome."
  - Font Size: 36-42px
  - Font Weight: 700
  - Margin Bottom: 20px

- **Body Copy**: 
  ```
  Seriously. Every week at Brooklake, Christians and non-Christians, 
  seekers and skeptics, the fired-up and the burned-out all come 
  together to learn the ins and outs of Jesus' great invitation 
  into a new life.
  ```
  - Font Size: 18-20px
  - Line Height: 1.7
  - Max Width: 500-600px
  - Color: Dark gray
  - Margin Bottom: 30px

- **Subheadline**: "Looking for a life-changing performance?"
  - Font Size: 24-28px
  - Font Weight: 600

- **Supporting Text**:
  - Similar styling to body copy above
  - Maintains conversational, authentic tone

**Image Column**:
- Shows authentic fellowship moment
- Border Radius: 12-16px
- May extend beyond text column bounds slightly
- Shadow for depth

---

### 5.6 Worship Experience Section

**Layout**:
- Full-width or near-full-width image background
- Dark moody aesthetic (worship environment)
- Content overlay positioned strategically

**Image Characteristics**:
- Shows worship moment (silhouette, stage lighting)
- Color palette: Reds, dark tones, dramatic lighting
- Creates emotional atmosphere
- Low-key lighting (underexposed intentionally)

**Overlay Treatment**:
- Gradient overlay to ensure text legibility
- May use colored overlay (subtle red tint) or pure dark gradient
- Opacity: 40-60%

**Text Positioning**:
- Likely centered or left-aligned
- White text for contrast
- Could include quote or statement about worship philosophy
- Maintains generous whitespace

---

### 5.7 Connection/Next Steps Section

**Layout**:
- Split section with textured background element
- Combines imagery with call-to-action content

**Background Treatment**:
- Grain texture overlay (visible in one image reference)
- Adds tactile quality to design
- Opacity: 5-10%
- File: Seamless grain pattern PNG

**Content Structure**:
- **Headline**: Clear action-oriented title
- **Description**: Brief overview of connection opportunities
  ```
  Weekly emails, Meet-Ups, House Churches, 
  next steps, and more.
  ```

**Image Component**:
- Warm, inviting photo (woman with baby, authentic moment)
- Positioned to create visual balance
- Border Radius: 8-12px

**Call-to-Action**:
- Button or link to connect/signup
- Clear contrast with background
- Maintains brand button styling

---

## 6. INTERACTIVE ELEMENTS

### Buttons

**Primary Button Style**:
- Background: Dark charcoal/black or accent color
- Text Color: White
- Font Size: 14-16px
- Font Weight: 600
- Padding: 14px 28px
- Border Radius: 6-8px
- Border: None or 2px solid (outline variant)
- Cursor: Pointer
- Transition: All 0.3s ease

**Hover State**:
- Transform: `translateY(-2px)` (slight lift)
- Box Shadow: `0 4px 12px rgba(0,0,0,0.15)`
- Background: Slightly lighter/darker shade
- Transition duration: 0.3s

**Secondary/Outline Button**:
- Background: Transparent
- Border: 2px solid dark charcoal
- Text Color: Dark charcoal
- Hover: Inverts (filled background, white text)

### Links

**Text Links**:
- Color: Inherit or accent color
- Text Decoration: None default
- Hover: Underline appears
- Transition: 0.2s ease

**Navigation Links**:
- Font Weight: 500-600
- Hover: Underline from center outward (CSS animation)
- Active State: Different color or persistent underline

### Image Hover Effects

**Carousel Images**:
- Hover: Subtle scale `transform: scale(1.05)`
- Transition: 0.4s ease
- Cursor: Pointer (if clickable)
- May add overlay or lighten on hover

---

## 7. RESPONSIVE DESIGN SPECIFICATIONS

### Mobile-First Approach

**Mobile (320-767px)**:
- Single column layout throughout
- Stack all multi-column sections vertically
- Full-width images
- Reduced font sizes (60-80% of desktop)
- Increase line height slightly for mobile readability
- Touch-friendly buttons (minimum 44x44px touch target)
- Hamburger navigation
- Hero height: 70-80vh (allow some scroll context)

**Tablet (768-1024px)**:
- Maintain some two-column layouts where appropriate
- Navigation may remain horizontal or switch to hamburger
- Font sizes: 80-90% of desktop
- Adjust image grid from 1 column to 2 columns

**Desktop (1025px+)**:
- Full multi-column layouts
- Maximum content width enforced
- Hover states active
- Full navigation visible

### Key Mobile Adjustments

**Typography**:
- Hero: 32-36px → 48-72px (mobile → desktop)
- H2: 28-32px → 40-48px
- Body: 16px → 18px
- Reduce letter spacing on mobile

**Spacing**:
- Section padding: 60px → 100px (mobile → desktop)
- Element margins: Reduce by 30-40%

**Navigation**:
- Full-screen mobile menu overlay
- Animated entrance (slide from right or fade in)
- Close button clearly visible
- Menu items stacked with generous touch targets (50-60px height)

**Images**:
- Hero carousel: Single image visible
- Image grids: 1 column mobile, 2 column tablet, 3-4 desktop
- Lazy loading for performance

---

## 8. PHOTOGRAPHY GUIDELINES

### Image Selection Criteria

**Subject Matter**:
- Real congregants (never stock photos)
- Diverse representation:
  - Age: Children, young adults, middle-aged, elderly
  - Ethnicity: Multicultural community
  - Family structures: Singles, couples, families, mixed groups
- Authentic moments: No posed, studio-style photos

**Settings**:
- Sunday services (worship, teaching)
- Fellowship areas (coffee, conversation)
- Small group gatherings (homes, church rooms)
- Community events
- Welcome/greeting moments

**Emotional Tone**:
- Warm, welcoming, joyful
- Genuine smiles and connection
- Physical touch (appropriate hugs, handshakes)
- Eye contact and engagement
- Candid rather than forced

### Technical Specifications

**Resolution**:
- Minimum: 1920x1080px for full-width backgrounds
- Carousel images: 1600x1200px minimum
- Section images: 1200x900px minimum
- Maintain 2x resolution for retina displays

**File Format**:
- Primary: WebP (modern browsers)
- Fallback: JPEG (80-85% quality)
- Use SVG for icons and graphics

**File Size**:
- Hero images: 200-400KB (after optimization)
- Section images: 100-200KB
- Thumbnail images: 30-50KB
- Total page weight target: <2MB initial load

**Editing Style**:
- Exposure: Bright, well-lit (never underexposed except worship)
- Contrast: Moderate (not overly contrasty)
- Saturation: Natural to slightly boosted
- Temperature: Warm (yellow/orange bias, ~5800-6000K)
- Sharpening: Moderate
- Vignette: Subtle or none
- Grain: Minimal to none

**Composition**:
- Rule of thirds for subject placement
- Negative space for text overlay areas
- Safe areas: Keep faces/critical elements in center 60%
- Aspect ratios maintained: Don't crop faces awkwardly

---

## 9. ANIMATION & MOTION

### Page Load Animations

**Hero Section**:
- Fade in hero content (0.8s ease)
- Stagger text elements (0.2s delay between lines)
- Button appears last (1.0s delay, fade + slide up)

**Scroll-Triggered Animations** (Use Intersection Observer API):
- Fade in + slide up (30px movement)
- Trigger: When element enters viewport (100px before)
- Duration: 0.6s
- Easing: Ease-out
- Stagger: 0.1s delay for multiple elements

### Carousel Animations

**Image Transition**:
- Type: Crossfade
- Duration: 1.5s
- Easing: Ease-in-out
- Maintain aspect ratio throughout

**Optional Ken Burns Effect**:
- Slow zoom: Scale from 1.0 to 1.1
- Duration: 5-7s (matches slide duration)
- Easing: Linear

### Micro-Interactions

**Buttons**:
- Hover lift: 2px translateY, 0.3s
- Click: Brief scale down (0.95) then return

**Navigation**:
- Underline animation: Expand from center
- Duration: 0.3s
- Width: 0% → 100%

**Images**:
- Hover scale: 1.0 → 1.05 over 0.4s
- Opacity fade on hover: Optional

**Rotating Badge**:
- Continuous rotation
- Duration: 30s
- Easing: Linear
- Direction: Clockwise

### Performance Considerations

- Use CSS transforms over position changes
- Limit animations to opacity and transform properties
- Use `will-change` sparingly
- Disable animations on mobile (optional for performance)
- Respect `prefers-reduced-motion` media query

---

## 10. ACCESSIBILITY REQUIREMENTS

### Semantic HTML

- Use proper heading hierarchy (H1 → H2 → H3)
- Single H1 per page
- Navigation within `<nav>` elements
- Sections wrapped in `<section>` tags
- Main content in `<main>` tag
- Footer in `<footer>` tag

### ARIA Labels

- Carousel: `role="region"` with `aria-label="Image carousel"`
- Navigation: `aria-label="Main navigation"`
- Buttons: Descriptive `aria-label` when text unclear
- Images: Meaningful alt text (all images)
- Decorative images: `alt=""` (empty)

### Color Contrast

- Text on white: Minimum 4.5:1 contrast ratio
- Large text (18px+): Minimum 3:1 ratio
- White text on dark images: Ensure 4.5:1 with overlay
- Test all text/background combinations

### Keyboard Navigation

- All interactive elements keyboard accessible
- Visible focus indicators (outline or custom style)
- Tab order follows logical visual flow
- Skip to main content link (hidden until focused)
- Escape key closes mobile menu

### Screen Reader Support

- Descriptive alt text: Convey purpose and content
- Form labels properly associated
- Status messages announced
- Hidden navigation accessible but not visible

### Responsive Text

- Allow text zoom to 200% without breaking layout
- Don't use fixed pixel heights for text containers
- Test with browser zoom at 200%

---

## 11. TECHNICAL IMPLEMENTATION NOTES

### Technology Stack (Estimated)

**Platform**: 
- Webflow (indicated by URL structure and class naming)
- Alternative: WordPress with page builder, or custom HTML/CSS/JS

**Framework/Libraries**:
- CSS: Custom CSS or Tailwind-like utility system
- JavaScript: Vanilla JS or lightweight library (jQuery possible)
- Carousel: Swiper.js, Slick, or custom solution
- Animations: GSAP, Intersection Observer, or CSS animations

### CSS Architecture

**Naming Convention**:
- BEM methodology likely: `.block__element--modifier`
- Utility classes for spacing and layout
- Component-based structure

**Key CSS Properties**:
```css
/* Hero Section Example */
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero__image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5));
}

.hero__content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
}

/* Button Example */
.btn-primary {
  display: inline-block;
  padding: 14px 28px;
  background-color: #1A1A1A;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

### JavaScript Functionality

**Required Features**:
1. Image carousel with auto-advance
2. Mobile navigation toggle
3. Smooth scroll to sections (optional)
4. Scroll-triggered animations
5. Lazy loading for images

**Carousel Implementation Pseudocode**:
```javascript
// Initialize carousel
const carousel = {
  currentSlide: 0,
  slides: document.querySelectorAll('.hero__image'),
  interval: 6000, // 6 seconds
  
  init() {
    this.autoAdvance();
    this.setupControls();
  },
  
  showSlide(index) {
    // Hide all slides
    // Fade in target slide
    // Update indicators
  },
  
  autoAdvance() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.showSlide(this.currentSlide);
    }, this.interval);
  }
};
```

### Performance Optimization

**Image Optimization**:
- Use WebP with JPEG fallback
- Implement lazy loading (native or library)
- Responsive images with `srcset`
- Serve scaled images (don't rely on CSS resize)

**Code Splitting**:
- Defer non-critical JavaScript
- Async load carousel library
- Inline critical CSS
- Load fonts asynchronously

**Caching Strategy**:
- Browser caching for static assets
- CDN for images and media
- Service worker (optional PWA features)

---

## 12. CONTENT STRATEGY ALIGNMENT

### Messaging Hierarchy

**Primary Messages** (Hero/Above Fold):
1. Everyone is welcome (inclusivity)
2. Church name and location (basic info)
3. Call to action (visit/connect)

**Secondary Messages** (Below Fold):
1. Mission statement (purpose)
2. Authentic community (social proof via photos)
3. Worship philosophy (what to expect)
4. Connection opportunities (next steps)

### Tone of Voice

**Written Content**:
- Conversational, not formal or religious jargon
- Direct address ("you" and "we")
- Short sentences and paragraphs
- Active voice
- Inclusive language
- Honest about diversity of attendees (believers and skeptics)

**Example Rewrites**:
- ❌ "Join our congregation for worship services"
- ✅ "Everyone is welcome. Seriously."

- ❌ "Brooklake Church provides fellowship opportunities"
- ✅ "We're people just like you"

### User Journey Mapping

**Visitor Path**:
1. Land on hero → Immediate welcome message
2. Scroll to mission → Understand church purpose
3. View photos → See relatable people
4. Read about experience → Reduce first-time anxiety
5. Find CTA → Clear next step (visit, connect, etc.)

---

## 13. DECISION CHECKLIST FOR YOUR CHURCH

Use this checklist to adapt Brooklake's design to your specific needs:

### Branding Decisions

- [ ] **Church Name Treatment**: Text-only logo vs. graphic logo?
- [ ] **Tagline**: What's your equivalent to "Everyone is welcome"?
- [ ] **Color Palette**: Match Brooklake exactly or adapt accent colors?
- [ ] **Typography**: Sans-serif matching Brooklake or serif for tradition?
- [ ] **Formality Level**: Match Brooklake's casualness or adjust for context?

### Content Decisions

- [ ] **Hero Message**: What 3 lines communicate your core values?
- [ ] **Mission Statement**: One-sentence version of your mission
- [ ] **Photography Approach**: 
  - Can you shoot authentic candid photos?
  - Budget for professional photographer?
  - Timeline for gathering images?
- [ ] **Sections to Include**:
  - About/Mission
  - Service times
  - Ministries/Programs
  - Connect/Next steps
  - Give/Donate
  - Staff/Leadership
  - Events
  - Resources (sermons, blog, etc.)

### Technical Decisions

- [ ] **Platform**: Webflow, WordPress, Squarespace, custom build?
- [ ] **Budget**: Design, development, photography, ongoing maintenance?
- [ ] **Timeline**: Phases? Launch date?
- [ ] **Team**: Who creates content, takes photos, manages site?
- [ ] **Domain**: Purchase/transfer domain name
- [ ] **Hosting**: Requirements and provider
- [ ] **Analytics**: Google Analytics, tracking goals?
- [ ] **Forms**: Connect forms (Mailchimp, CCB, Planning Center?)
- [ ] **Calendar Integration**: Events system needs?
- [ ] **Sermon Hosting**: YouTube, Vimeo, podcast?
- [ ] **Mobile App**: Website only or companion app?

### Photography Needs

- [ ] **Hero Carousel**: 6-8 images showing diversity and welcome
- [ ] **Mission Section**: 2-3 images showing authentic moments
- [ ] **Worship Image**: Dramatic worship moment with lighting
- [ ] **Connection Images**: Small groups, fellowship, families
- [ ] **Staff Photos**: If including team page
- [ ] **Facility Photos**: If showcasing building/location

### Required Page Copy

- [ ] Hero tagline (3 lines)
- [ ] Mission statement (1 paragraph)
- [ ] About section (2-3 paragraphs)
- [ ] What to expect (2-3 paragraphs)
- [ ] Service times and location
- [ ] Contact information
- [ ] Navigation labels
- [ ] Button text (CTAs)
- [ ] Footer content

---

## 14. AI AGENT PROMPT TEMPLATE

Use this prompt when instructing an AI to recreate the design:

```
Create a church website based on the Brooklake design system with these specifications:

LAYOUT:
- Hero section: Full viewport height with image carousel
- Mission section: Two-column layout (image left, text right)
- Community showcase: Horizontal scrolling image carousel
- Connection section: Split layout with textured background

COLOR PALETTE:
- Background: #FFFFFF
- Primary text: #2D2D2D
- Secondary text: #666666
- Accent: #D84545

TYPOGRAPHY:
- Font: Modern sans-serif (Inter or similar)
- Hero headline: 56px, weight 700, line-height 1.2
- Section heads: 40px, weight 600
- Body text: 18px, weight 400, line-height 1.7

COMPONENTS NEEDED:
1. Fixed navigation bar with logo left, links right, CTA button
2. Hero carousel (6 images, 6-second auto-advance, crossfade)
3. Image carousel with horizontal scroll
4. Responsive grid system (12 columns)
5. Button styles (primary, secondary)
6. Mobile hamburger menu

SPECIFIC CONTENT:
- Hero text: [Your 3-line message]
- Mission headline: [Your mission]
- [Additional content blocks]

Make it responsive, accessible (WCAG AA), and optimized for performance.
```

---

## 15. FINAL RECOMMENDATIONS

### Strengths of Brooklake Design to Preserve

1. **Photography-first approach**: Human connection front and center
2. **Generous whitespace**: Never cramped or overwhelming
3. **Clear hierarchy**: Easy to scan and understand
4. **Minimal decoration**: Design serves content, not vice versa
5. **Authentic tone**: Writing matches visual openness

### Potential Improvements to Consider

1. **Stronger color brand**: Brooklake is quite neutral; consider if your church needs more distinctive color
2. **Calls-to-action**: Ensure every section has clear next step
3. **Service times**: Make prominent if not already
4. **Accessibility**: Add explicit skip links and ensure full keyboard nav
5. **Loading speed**: Optimize images aggressively for sub-3-second load

### Testing Checklist Before Launch

- [ ] Test on iPhone, Android (mobile)
- [ ] Test on iPad (tablet)
- [ ] Test on Chrome, Safari, Firefox (desktop)
- [ ] Run Lighthouse audit (Performance, Accessibility, SEO)
- [ ] Test all forms and buttons
- [ ] Verify carousel auto-advance works
- [ ] Check all images have alt text
- [ ] Verify contrast ratios meet WCAG AA
- [ ] Test with screen reader
- [ ] Test keyboard-only navigation
- [ ] Verify links open correctly (internal vs. external)
- [ ] Check analytics tracking works
- [ ] Review all copy for typos
- [ ] Test contact forms deliver emails
- [ ] Verify mobile menu toggles correctly

---

## APPENDIX A: CONTENT INVENTORY TEMPLATE

Use this to plan your pages and sections:

**Homepage**:
- Hero carousel (6-8 images needed)
- Welcome message (3 lines)
- Mission statement (title + 1 paragraph)
- Community showcase (6-12 images)
- What to expect (heading + 2-3 paragraphs)
- Worship philosophy (heading + 1-2 paragraphs)
- Next steps CTA (heading + description + button)

**About Page** (if separate):
- History (when founded, by whom)
- Mission & vision
- Values or beliefs
- Staff/leadership team
- Facility information

**Visit Page**:
- Service times (all services)
- Location (address, map, directions)
- What to expect (first-time visitor info)
- FAQ
- Contact form

**Ministries Page**:
- Children
- Youth
- Young adults
- Small groups
- Men/Women
- Seniors
- Outreach

**Connect Page**:
- Connect card form
- Small group finder
- Volunteer opportunities
- Email signup
- Social media links

---

## APPENDIX B: PHOTOSHOOT SHOT LIST

For your photographer, request these scenarios:

**Welcome/Greeting** (Hero carousel):
- Greeters welcoming visitors at entrance
- People hugging/handshakes
- Families entering building
- Diverse age groups interacting
- Person holding "Welcome" sign
- Coffee/fellowship conversations

**Worship Service**:
- Congregation during worship (from back)
- Silhouette of raised hands
- Stage lighting (moody, dramatic)
- People with eyes closed/worshiping
- Band/worship team
- Teacher/pastor speaking

**Community Life**:
- Small group in living room
- Families with young children
- Teens laughing together
- Seniors in conversation
- Volunteers serving
- People praying together

**Facility**:
- Exterior of building (daytime)
- Exterior signage
- Main worship space (empty)
- Children's area
- Coffee bar/fellowship area

Technical specs for photographer:
- Shoot in RAW
- Horizontal orientation preferred
- Keep subjects in center 60% of frame
- Mix of tight and wide shots
- Natural light when possible
- Capture genuine smiles and connection

---

**END OF SPECIFICATION DOCUMENT**

This comprehensive guide should provide everything needed to recreate Brooklake's design aesthetic for your church website. Adjust specific values, content, and features based on your unique needs and resources.
