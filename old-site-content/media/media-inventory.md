# Media Inventory (Video & Audio)

**Old Site**: https://www.hopewellumcsimpsonville.com
**Documentation Date**: November 14, 2025

This document catalogs all video and audio media from the old church website.

---

## Video Hosting

**Primary Platform**: Vimeo
**Organization**: Hopewell UMC account (assumed)

---

## Video Content Inventory

### 1. Giving Pathway Series

**Total Videos**: 4
**Platform**: Vimeo
**Location on Site**: Resources page

| # | Title | URL | Notes |
|---|-------|-----|-------|
| 1 | Giving Pathway #1 | https://vimeo.com/915598317 | Part 1 of stewardship series |
| 2 | Giving Pathway #2 | https://vimeo.com/918028496 | Part 2 of stewardship series |
| 3 | Giving Pathway #3 | https://vimeo.com/920547155 | Part 3 of stewardship series |
| 4 | Giving Pathway #4 | https://vimeo.com/923775122 | Part 4 of stewardship series |

**Associated Resource**: Generosity Pathway Booklet (PDF)

**Series Info**:
- **Purpose**: Teaching on biblical giving and stewardship
- **Format**: Video teaching series
- **Companion Materials**: PDF booklet available

---

### 2. Sermon Series

**Total Videos**: 1+ identified
**Platform**: Vimeo
**Location on Site**: Resources page, Homepage

| # | Title | URL | Notes |
|---|-------|-----|-------|
| 1 | Sermon Series #1 | https://vimeo.com/1012582462 | Associated with "Enter In" campaign |

**Associated Resource**: Enter In Journal v5 (PDF)

---

### 3. Additional Video Content (Expected)

**Not Yet Cataloged**:
- Weekly sermon videos
- Special event recordings
- Mission trip videos
- Testimonials
- Announcement/promotional videos
- Worship music performances
- Children's ministry content
- Youth group activities

**Action Needed**:
- Access Vimeo account to see full library
- Catalog all available videos
- Determine which to migrate

---

## Video Details Template

For each video, collect:
- **Title**: Descriptive name
- **URL**: Vimeo link
- **Duration**: Length in minutes
- **Upload Date**: When posted
- **Description**: Video content summary
- **Thumbnail**: Custom thumbnail if available
- **Tags/Categories**: Topic, series, ministry area
- **Privacy Settings**: Public, unlisted, password-protected
- **Downloads**: Whether downloadable
- **Captions**: Whether closed captions available

---

## Audio Content

**Status**: No audio content explicitly identified on old site

**Expected Content**:
- Sermon audio recordings (if separate from video)
- Music recordings
- Podcast episodes (if exists)

**Action Needed**:
- Check if church has audio archive
- Determine if audio-only versions of sermons exist

---

## Sermon Archive

**Current Status**: Not evident on old site

**Recommendation for New Site**:
- Create dedicated sermon archive page
- Organize by:
  - Date (most recent first)
  - Series
  - Topic
  - Speaker
  - Scripture

**Metadata to Track**:
- Date preached
- Title
- Scripture passage(s)
- Speaker
- Series (if applicable)
- Video URL
- Audio URL (if separate)
- PDF notes/outline
- Discussion questions

---

## Video Migration Plan

### Phase 1: Assessment
- [ ] Access Vimeo account
- [ ] Catalog all videos
- [ ] Check storage limits/costs
- [ ] Verify ownership rights
- [ ] Assess video quality

### Phase 2: Platform Decision

**Options**:

**A. Continue with Vimeo**
- ✅ Already set up
- ✅ Professional quality
- ✅ Good embed options
- ✅ Privacy controls
- ❌ Subscription cost
- ❌ Dependency on external service

**B. Move to YouTube**
- ✅ Free hosting
- ✅ Better discoverability
- ✅ Automatic captions
- ✅ Built-in analytics
- ❌ Ads (unless paid)
- ❌ Less control over branding

**C. Self-Host**
- ✅ Full control
- ✅ No third-party dependency
- ❌ Bandwidth costs
- ❌ Storage requirements
- ❌ Video player development

**D. Firebase Storage + Video Player**
- ✅ Already using Firebase
- ✅ Good integration with Next.js
- ✅ Reasonable costs
- ❌ Need custom player
- ❌ No automatic transcoding

**Recommendation**: Start with YouTube or Vimeo, migrate to self-hosted later if needed

### Phase 3: Organization

**Vimeo Showcase Organization** (if staying on Vimeo):
- Sermons
  - 2024
  - 2025
  - By Series
- Teaching Series
  - Giving Pathway
  - Enter In
- Events
- Missions
- Testimonials

**YouTube Playlist Organization** (if moving to YouTube):
- Same structure as above
- Public vs. Unlisted playlists

### Phase 4: Integration

**New Site Features Needed**:
- Video embed component
- Playlist/series view
- Search/filter functionality
- Related videos
- Watch later / favorites (for members)
- Download option (optional)
- Sharing tools

---

## Video Player Requirements

### Essential Features
- Responsive design
- Mobile-friendly controls
- Playback speed control
- Quality selection
- Fullscreen mode
- Keyboard shortcuts

### Nice-to-Have Features
- Picture-in-picture
- Captions/subtitles
- Chapter markers
- Playlist autoplay
- Watch history
- Continue watching
- Comments/discussion

---

## Accessibility Requirements

- [ ] All videos have closed captions
- [ ] Transcripts available
- [ ] Audio descriptions (for visually impaired)
- [ ] Keyboard navigation
- [ ] Screen reader compatible player

**Caption Creation**:
- YouTube auto-generates (needs review)
- Vimeo requires upload
- Rev.com for professional transcription
- Otter.ai for automated transcription

---

## Video Specifications

### Recommended Upload Settings

**Resolution**:
- Minimum: 1080p (1920x1080)
- Preferred: 4K if available (3840x2160)

**Frame Rate**:
- 24fps or 30fps (standard)
- 60fps for high-motion content

**Aspect Ratio**:
- 16:9 (standard widescreen)

**File Format**:
- MP4 (H.264 codec) for compatibility
- High bitrate for archival

**Audio**:
- AAC codec
- 128kbps minimum
- Stereo

**File Size**:
- Varies by length
- Aim for highest quality within platform limits

---

## Thumbnail Strategy

**Custom Thumbnails** for each video should include:
- Church branding
- Sermon title
- Date
- Speaker photo
- Scripture reference
- Consistent template

**Dimensions**: 1280x720px (16:9)

---

## Video Content Calendar

**Recommendation for New Site**:
- Upload sermons weekly
- Post teaching series as completed
- Event videos within 1 week of event
- Maintain consistent schedule

---

## Storage & Bandwidth Estimates

**Average Sermon Video**:
- Length: 30-45 minutes
- File Size: 1-3 GB (original)
- Streaming: ~500MB-1GB bandwidth per view

**Monthly Estimates** (example):
- 4-5 new sermon videos/month
- Storage: 5-15 GB/month added
- Bandwidth: Depends on viewership

**Cost Comparison**:
- Vimeo Plus: $7/month (250GB storage, 5GB weekly upload)
- Vimeo Pro: $20/month (1TB storage, 20GB weekly upload)
- YouTube: Free (unlimited)
- Firebase Storage: ~$0.026/GB/month + $0.12/GB bandwidth

---

## Analytics to Track

- Video views
- Watch time / engagement
- Completion rate
- Popular videos
- Traffic sources
- Geographic data
- Device types
- Peak viewing times

---

## Content Rights & Licensing

**Considerations**:
- Church owns rights to recorded content
- Music licensing (CCLI for worship music)
- Speaker permissions
- Individual consent (for identifiable people)
- Copyright for any third-party content

**Recommended**:
- CCLI Streaming License for worship music
- Permission forms for speakers
- Privacy policy disclosure

---

## Embedding Best Practices

**For New Site**:
```jsx
// Use Next.js dynamic import for video players
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('@/components/video-player'), {
  ssr: false,
  loading: () => <div>Loading video...</div>
})

// Lazy load embeds
<iframe loading="lazy" ... />
```

**Performance**:
- Lazy load video embeds
- Use preview image/thumbnail
- Load player on click
- Limit autoplay

---

## Migration Checklist

### Immediate Actions
- [ ] Access Vimeo account
- [ ] Document all existing videos
- [ ] Check Vimeo plan/limits
- [ ] Decide on platform strategy

### Short-Term (1-2 months)
- [ ] Set up chosen platform (if switching)
- [ ] Create organizational structure
- [ ] Migrate existing videos
- [ ] Add captions to all videos
- [ ] Create custom thumbnails
- [ ] Integrate with new website

### Ongoing
- [ ] Upload new sermons weekly
- [ ] Maintain video archive
- [ ] Monitor analytics
- [ ] Update metadata
- [ ] Respond to comments
- [ ] Create highlight reels

---

## Sermon Video Workflow

**Recommended Process**:

1. **Recording** (Sunday)
   - Capture during service
   - Backup recording

2. **Processing** (Monday-Tuesday)
   - Edit if needed
   - Add intro/outro graphics
   - Normalize audio
   - Export in proper format

3. **Upload** (Tuesday-Wednesday)
   - Upload to platform
   - Add title, description, tags
   - Create custom thumbnail
   - Add to appropriate series/playlist
   - Generate/upload captions

4. **Publish** (Wednesday-Thursday)
   - Embed on website
   - Share on social media
   - Email to newsletter subscribers
   - Add to sermon archive

---

## Future Enhancements

- **Live Streaming**: Consider adding live stream capability
- **Podcast**: Convert sermons to audio-only podcast
- **Clips**: Create social media clips from sermons
- **Series Pages**: Dedicated pages for each sermon series
- **Study Guides**: PDF downloads alongside videos
- **Small Group Discussions**: Discussion guides for each sermon

---

## Technical Integration (New Site)

**Video Component** needed for:
- Homepage (featured sermon)
- Resources page (teaching series)
- Sermon archive page
- Individual sermon pages
- Ministry pages (as needed)

**Data Structure** (Firestore):
```javascript
{
  id: "sermon-2025-11-14",
  title: "Sermon Title",
  date: "2025-11-14",
  speaker: "Rev. Don Brown",
  scripture: ["John 3:16-17"],
  series: "Series Name",
  videoUrl: "https://vimeo.com/...",
  duration: "38:45",
  thumbnail: "/images/sermons/...",
  description: "...",
  tags: ["faith", "grace"],
  views: 0,
  captions: true
}
```

---

## Notes

1. Verify Vimeo account ownership and credentials
2. Check if church has YouTube channel already
3. Ensure CCLI streaming license is active
4. Consider creating video production team
5. Invest in good audio equipment (most important)
6. Maintain consistent branding across all videos
7. Archive original high-quality files separately
