# Old Site Downloads Summary

**Download Date**: November 14, 2025
**Total Size**: 144MB
**Total Files**: 167 files

---

## ✅ Successfully Downloaded

### 1. Staff Photos (10 files, 1.1MB)

All staff member profile photos downloaded from AWS S3:

| Filename | Staff Member | Position |
|----------|--------------|----------|
| stacy-black.jpg | Stacy Black | Director of Marketing |
| joellen-borton.jpg | JoEllen Borton | Music Ministries Coordinator |
| don-brown.jpg | Rev. Don Brown | Pastor |
| jessica-collins.jpg | Jessica Collins | Administrative Assistant / Bookkeeper |
| sarah-erskine.jpg | Sarah Erskine | Director of Christian Education |
| beth-lowe.jpg | Beth Lowe | Director of Children's Choir |
| ann-mcdonald.jpg | Ann McDonald | Pianist |
| pat-mcnabb.jpg | Pat McNabb | Praise Team Leader |
| brenda-rau.jpeg | Brenda Rau | Parish Nursing Coordinator |
| tammy-wilcox.jpg | Tammy Wilcox | Learning Center Director |

**Note**: Lera Jackson (Youth Director) photo was not available on the old site.

**Location**: `old-site-downloads/staff-photos/`

---

### 2. PDF Resources (3 files, 115MB)

All downloadable resources from the old site:

| Filename | Original Name | Size | Description |
|----------|---------------|------|-------------|
| vision-for-growth.pdf | hopewell_vision_for_the_future_presentation.pdf | 1.8MB | Building campaign presentation |
| generosity-pathway-booklet.pdf | generosity_pathway_booklet.pdf | 93MB | Stewardship resource booklet |
| enter-in-journal-v5.pdf | hopewell_enterinjournalv5.pdf | 21MB | Enter In sermon series journal |

**Location**: `old-site-downloads/pdfs/`

---

### 3. Carousel Images (154 files, 28MB)

Complete homepage banner carousel/slideshow images.

**Content**: Groundbreaking ceremony photos for new sanctuary (uploaded October 27, 2025)

**Images include**:
- Congregation gathering
- Groundbreaking ceremony moments
- Church leadership
- Community participation
- Construction site
- Celebration moments

**All carousel images are named** with timestamp pattern:
`10272025HHMMSS_[hash].jpg`

**Location**: `old-site-downloads/carousel-images/`

**Full URL list**: See `carousel-images/urls.txt` for complete list of S3 URLs

---

## Download Statistics

```
Staff Photos:       10 files    1.1 MB
PDFs:                3 files  115.0 MB
Carousel Images:   154 files   28.0 MB
──────────────────────────────────────
TOTAL:             167 files  144.1 MB
```

---

## Next Steps

### For Staff Photos:
1. ✅ Review all photos for quality
2. ⬜ Obtain photo for Lera Jackson
3. ⬜ Optimize images (resize to 800x800px, convert to WebP)
4. ⬜ Upload to new site's image storage

### For PDFs:
1. ✅ Verify all PDFs open correctly
2. ⬜ Consider compressing generosity-pathway-booklet.pdf (very large at 93MB)
3. ⬜ Upload to new site's document library
4. ⬜ Create resource page with download links

### For Carousel Images:
1. ✅ Verify all 154 images downloaded
2. ⬜ Select best 20-30 images for new site carousel
3. ⬜ Optimize selected images (resize, compress, convert to WebP)
4. ⬜ Add descriptive alt text for accessibility
5. ⬜ Organize by category if using beyond carousel

---

## Image Optimization Recommendations

### Staff Photos
- **Target size**: 800x800px (square)
- **Format**: WebP with JPG fallback
- **Compression**: 85% quality
- **Estimated final size**: ~50KB each

### Carousel Images
- **Target size**: 1920x1080px (16:9)
- **Format**: WebP with JPG fallback
- **Compression**: 80% quality
- **Estimated final size**: ~150KB each

### Command Examples:
```bash
# Using ImageMagick
mogrify -resize 800x800^ -gravity center -extent 800x800 -quality 85 staff-photos/*.jpg

# Using Sharp (Node.js)
sharp(input).resize(1920, 1080, { fit: 'cover' }).webp({ quality: 80 }).toFile(output)
```

---

## Files Not Downloaded (Require Additional Work)

### Ministry Photos
- Individual ministry page photos
- Event photos from ministry activities
- **Action**: Need to extract from individual ministry pages

### Logos & Branding
- Church logo
- UMC Cross & Flame (if used)
- **Action**: Check if available, may need to request from staff

### Additional Hero/Banner Images
- Page-specific hero images
- **Action**: Extract from About page and other interior pages

---

## Browser Automation Setup

✅ **Successfully configured** for future downloads:
- Chrome profile copied
- API key configured (.env file)
- Browser command working
- setup.json marked complete

**Location**: `C:\Users\zach1\.claude\plugins\marketplaces\browser-tools`

---

## Download Log

**Method**: curl + WebFetch
**Parallel Downloads**: Up to 20 simultaneous
**Errors**: None - all downloads successful
**Missing**: 1 staff photo (Lera Jackson)

---

## Folder Structure

```
old-site-downloads/
├── DOWNLOAD-SUMMARY.md (this file)
├── staff-photos/
│   ├── ann-mcdonald.jpg
│   ├── beth-lowe.jpg
│   ├── brenda-rau.jpeg
│   ├── don-brown.jpg
│   ├── jessica-collins.jpg
│   ├── joellen-borton.jpg
│   ├── pat-mcnabb.jpg
│   ├── sarah-erskine.jpg
│   ├── stacy-black.jpg
│   └── tammy-wilcox.jpg
├── pdfs/
│   ├── enter-in-journal-v5.pdf
│   ├── generosity-pathway-booklet.pdf
│   └── vision-for-growth.pdf
├── carousel-images/
│   ├── urls.txt (list of all S3 URLs)
│   └── 10272025*.jpg (154 image files)
└── ministry-images/ (empty - for future downloads)
```

---

## Related Documentation

See also:
- `old-site-content/images/image-inventory.md` - Complete image catalog
- `old-site-content/media/media-inventory.md` - Video resources
- `old-site-content/README.md` - Content extraction summary

---

*All downloads completed successfully on November 14, 2025*
