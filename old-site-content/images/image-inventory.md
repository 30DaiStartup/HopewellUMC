# Image & Media Inventory

**Old Site**: https://www.hopewellumcsimpsonville.com
**Documentation Date**: November 14, 2025

This document catalogs all images and media assets from the old church website.

---

## Image Hosting Details

**Primary Host**: AWS S3 (Amazon Web Services)
**Base URL**: `https://s3.amazonaws.com/mychurchwebsite/`

**Paths**:
- Template images: `/templates/classic/design/family_2/images/`
- Church-specific images: `/images/c5276/`
- Downloadable files: `https://files.mychurchwebsite.net/c5276/`

**Organization Code**: `c5276` (Church's unique identifier)

---

## 1. Banner / Hero Images

### Main Banner Image
- **URL**: https://s3.amazonaws.com/mychurchwebsite/templates/classic/design/family_2/images/banner.jpg
- **Location**: Homepage, About pages
- **Type**: Template image
- **Usage**: Header/hero banner

---

## 2. Homepage Carousel Images

**Estimated Count**: 150+ slideshow images

**Storage**: AWS S3 bucket
**Path Pattern**: `s3.amazonaws.com/mychurchwebsite/images/c5276/`

**Sample Images Identified**:
1. Countdown timer background: `cntdwn_dsx0iy_300x5000.jpg`
2. Custom module image: `cstmmod_o909w4.jpg`
3. Hands of Healing Service (HSS): `hss_20230410_xis3yv_crop.jpg` (dated April 10, 2023)

**Categories** (inferred from church activities):
- Church building exterior/interior
- Worship services
- Youth group activities
- Children's programs
- Mission trips
- Community events
- Seasonal celebrations
- Fellowship gatherings
- Ministry activities

**Action Needed**: Download all carousel images for migration

---

## 3. Staff Photos

**Count**: 10 staff members with photos (11 total staff, 1 missing photo)

**Format**: JPG/JPEG
**Storage**: AWS S3
**Path**: `s3.amazonaws.com/mychurchwebsite/images/c5276/`

### Staff Photo URLs

| Name | Filename | URL |
|------|----------|-----|
| Stacy Black | stf_z93njw.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_z93njw.jpg |
| JoEllen Borton | stf_hrjswn.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_hrjswn.jpg |
| Rev. Don Brown | stf_vt3faq.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_vt3faq.jpg |
| Jessica Collins | stf_cdfxq4.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_cdfxq4.jpg |
| Sarah Erskine | stf_uoemdj.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_uoemdj.jpg |
| Lera Jackson | (no photo) | — |
| Beth Lowe | stf_n21zht.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_n21zht.jpg |
| Ann McDonald | stf_jq1x0c.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_jq1x0c.jpg |
| Pat McNabb | stf_ijfvfx.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_ijfvfx.jpg |
| Brenda Rau | stf_ducx8d.jpeg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_ducx8d.jpeg |
| Tammy Wilcox | stf_l8trql.jpg | https://s3.amazonaws.com/mychurchwebsite/images/c5276/stf_l8trql.jpg |

**Action Needed**:
- Download all 10 staff photos
- Request photo for Lera Jackson
- Standardize format/sizing for new site

---

## 4. Ministry/Program Images

**Status**: Not fully cataloged in initial extraction

**Expected Content**:
- Youth ministry activities
- Children's ministry programs
- Mission trip photos
- Adult ministry gatherings
- Worship team
- Choir performances
- Special events

**Action Needed**:
- Conduct comprehensive image audit of all ministry pages
- Download and organize by ministry category

---

## 5. Event Photos

**Examples Noted**:
- Hands of Healing Service (April 10, 2023)
- Various community events
- Pumpkin Patch
- Golf Tournament
- VBS activities

**Action Needed**: Full event photo collection

---

## 6. Facility Photos

**Expected Images**:
- Sanctuary
- Classrooms
- Fellowship hall
- Exterior building shots
- Parking areas
- Playground
- Picnic shelter
- Brush Arbor (if still exists)
- Oak trees (historic feature)
- Stone wall (historic feature)

**Action Needed**:
- Inventory facility photos
- Take new professional photos if needed

---

## 7. Icons & Graphics

**Current Usage**:
- Lucide React icons (new site)
- Social media icons (Facebook, etc.)

**Old Site Icons**:
- May have custom graphics
- Need to review for brand consistency

---

## 8. Logos & Branding

**Church Logo**: Need to extract if present
**UMC Cross & Flame**: Denominational logo (if used)
**Partner Organization Logos**: Mission partners, etc.

**Action Needed**: Collect all logo files in vector format if possible

---

## Media Assets Summary

### Images by Category

| Category | Estimated Count | Priority | Status |
|----------|----------------|----------|--------|
| Staff Photos | 10 photos | HIGH | URLs collected ✓ |
| Carousel/Slideshow | 150+ | HIGH | Sample URLs only |
| Banner/Hero | 1+ | HIGH | URL collected ✓ |
| Ministry Activities | Unknown | MEDIUM | Not cataloged |
| Events | Unknown | MEDIUM | Not cataloged |
| Facilities | Unknown | HIGH | Not cataloged |
| Icons/Graphics | Unknown | LOW | Not cataloged |
| Logos | 1-3 | HIGH | Not cataloged |

---

## Video Resources

See separate [media-inventory.md](../media/media-inventory.md) for full video catalog.

**Quick Summary**:
- **Platform**: Vimeo
- **Count**: 5+ videos identified
- **Types**: Giving pathway series, sermon series

---

## PDF Documents

See [resources.md](../resources.md) for full document list.

**Quick Summary**:
- **Count**: 3 PDFs identified
- **Host**: files.mychurchwebsite.net
- **Types**: Presentations, booklets, journals

---

## Image Migration Checklist

### Phase 1: Critical Images
- [ ] Download all staff photos
- [ ] Download banner/hero images
- [ ] Extract church logo
- [ ] Collect primary facility photos

### Phase 2: Content Images
- [ ] Download all carousel/slideshow images
- [ ] Organize ministry photos
- [ ] Collect event photos
- [ ] Archive historical photos

### Phase 3: Optimization
- [ ] Resize images for web (optimize file sizes)
- [ ] Create responsive variants (mobile, tablet, desktop)
- [ ] Add alt text to all images
- [ ] Implement lazy loading
- [ ] Set up CDN or optimize hosting

### Phase 4: Organization
- [ ] Create naming convention
- [ ] Organize by category/folder structure
- [ ] Tag with metadata
- [ ] Create image library in CMS
- [ ] Backup all original files

---

## Recommended Folder Structure

```
/images
  /branding
    - logo.svg
    - logo.png
    - cross-flame.svg
  /staff
    - don-brown.jpg
    - sarah-erskine.jpg
    - [etc.]
  /facility
    - sanctuary.jpg
    - exterior.jpg
    - [etc.]
  /ministries
    /youth
    /children
    /missions
    /adult
    /worship
  /events
    /2024
    /2025
  /carousel
    - slide-01.jpg
    - slide-02.jpg
    - [etc.]
  /heroes
    - home-hero.jpg
    - about-hero.jpg
    - [etc.]
```

---

## Image Specifications for New Site

### Recommended Sizes

**Staff Photos**:
- Primary: 800x800px (1:1 ratio)
- Thumbnail: 400x400px
- Format: WebP with JPG fallback

**Hero/Banner Images**:
- Desktop: 1920x600px (16:5 ratio)
- Tablet: 1200x600px
- Mobile: 800x600px
- Format: WebP with JPG fallback

**Carousel Images**:
- Size: 1200x800px (3:2 ratio)
- Format: WebP with JPG fallback

**Ministry/Event Photos**:
- Large: 1200x800px (3:2 ratio)
- Medium: 800x533px
- Thumbnail: 400x267px
- Format: WebP with JPG fallback

**Icons/Logos**:
- Vector: SVG preferred
- Raster: PNG with transparency
- Multiple sizes for different uses

---

## Alt Text Guidelines

All images on new site must have descriptive alt text:

**Examples**:
- ❌ "image1.jpg"
- ❌ "IMG_2024.jpg"
- ✅ "Rev. Don Brown preaching during Sunday worship service"
- ✅ "Youth group volunteers packing food at James Monroe Mission House"
- ✅ "Children singing in Sunday school during Adventures in Faith program"

---

## Copyright & Licensing

**Considerations**:
- Ensure church owns rights to all photos
- Get photo releases for recognizable individuals (especially children)
- Credit photographers if required
- Verify licensing for stock photos (if any)

---

## Tools for Migration

**Download**:
- wget or curl for bulk downloads
- Custom script to download from S3

**Processing**:
- ImageMagick for batch resizing
- Sharp (Node.js) for optimization
- Squoosh for compression

**Management**:
- Firebase Storage (already in use on new site)
- Cloudinary (alternative CDN option)
- Next.js Image Optimization (built-in)

---

## Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] Decorative images use empty alt=""
- [ ] Complex images have long descriptions
- [ ] Text overlays have sufficient contrast
- [ ] Images aren't sole source of information
- [ ] Fallback content for broken images

---

## Performance Optimization

- [ ] Compress all images (target: <200KB each)
- [ ] Use modern formats (WebP, AVIF)
- [ ] Implement lazy loading
- [ ] Use responsive images (srcset)
- [ ] Set explicit width/height (prevent CLS)
- [ ] Leverage CDN
- [ ] Cache static assets
- [ ] Use Next.js Image component

---

## Notes

1. Many images on old site lack alt text - must add during migration
2. Staff photos may need updating if outdated
3. Consider professional photography for key facility shots
4. Some carousel images may be low quality - assess before migration
5. Verify image rights before using on new site
6. Create style guide for future image uploads
