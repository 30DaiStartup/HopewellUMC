# URL Redirects Configuration

**File Location**: `C:\Users\zach1\Development\HopewellUMC\src\middleware.ts`

**Last Updated**: November 14, 2025

---

## Overview

This document describes the URL redirect configuration implemented to maintain SEO and prevent broken links when migrating from the old Hopewell UMC website structure to the new Next.js site.

### Implementation Method

- **Technology**: Next.js Middleware
- **Redirect Type**: 301 (Permanent)
- **File**: `src/middleware.ts`

All redirects are permanent (301) to signal to search engines that the content has moved permanently, which helps maintain SEO rankings.

---

## Redirect Summary

**Total Redirects Configured**: 37

### Breakdown by Category:
- **Give Pages**: 1 redirect
- **About Pages**: 6 redirects
- **Connect/Staff Pages**: 12 redirects (1 staff directory + 11 individual staff)
- **Ministry Pages**: 15 redirects
- **Utility Pages**: 3 redirects

---

## Detailed Redirect Mappings

### 1. Give Pages (1 redirect)

| Old URL | New URL | Reason |
|---------|---------|--------|
| `/enter_in_a2d303` | `/give` | Enter In campaign merged into main Give page |

---

### 2. About Pages (6 redirects)

| Old URL | New URL | Reason |
|---------|---------|--------|
| `/about_us` | `/about` | Simplified URL structure |
| `/about_us_65037` | `/about` | Duplicate page consolidated |
| `/info_center` | `/about` | Info Center content merged into About |
| `/what_to_expect` | `/about/visit` | Better organization under About section |
| `/our_beliefs` | `/about/beliefs` | Cleaner URL structure |
| `/faq` | `/about/faq` | Better organization under About section |

---

### 3. Connect & Staff Pages (12 redirects)

#### Main Staff Directory
| Old URL | New URL | Reason |
|---------|---------|--------|
| `/staff` | `/connect/staff` | Staff moved under Connect section |

#### Individual Staff Pages
| Old URL | New URL | Staff Member |
|---------|---------|--------------|
| `/stacy_black` | `/connect/staff/stacy-black` | Stacy Black |
| `/joellen_borton` | `/connect/staff/joellen-borton` | Joellen Borton |
| `/rev_don_brown` | `/connect/staff/don-brown` | Rev. Don Brown |
| `/jessica_collins` | `/connect/staff/jessica-collins` | Jessica Collins |
| `/sarah_erskine` | `/connect/staff/sarah-erskine` | Sarah Erskine |
| `/lera_jackson` | `/connect/staff/lera-jackson` | Lera Jackson |
| `/beth_lowe` | `/connect/staff/beth-lowe` | Beth Lowe |
| `/ann_mcdonald` | `/connect/staff/ann-mcdonald` | Ann McDonald |
| `/pat_mcnabb` | `/connect/staff/pat-mcnabb` | Pat McNabb |
| `/brenda_rau` | `/connect/staff/brenda-rau` | Brenda Rau |
| `/tammy_wilcox` | `/connect/staff/tammy-wilcox` | Tammy Wilcox |

**Note**: All staff pages moved to use hyphens instead of underscores and nested under `/connect/staff/`

---

### 4. Ministry Pages (15 redirects)

#### General Ministries
| Old URL | New URL | Ministry |
|---------|---------|----------|
| `/adult_ministries` | `/ministries/adult` | Adult Ministries |
| `/childrens_ministries` | `/ministries/children` | Children's Ministries |
| `/youth_ministries` | `/ministries/youth` | Youth Ministries |
| `/young_adults_ministry` | `/ministries/young-adults` | Young Adults Ministry |
| `/mens_ministry` | `/ministries/men` | Men's Ministry |
| `/womens_ministries` | `/ministries/women` | Women's Ministries |

#### Specialized Ministries
| Old URL | New URL | Ministry |
|---------|---------|----------|
| `/christian_education` | `/ministries/christian-education` | Christian Education |
| `/worship_ministry` | `/ministries/worship` | Worship Ministry |
| `/parish_nursing` | `/ministries/parish-nursing` | Parish Nursing |
| `/scouting_ministries` | `/ministries/scouting` | Scouting Ministries |

#### Outreach & Missions
| Old URL | New URL | Ministry |
|---------|---------|----------|
| `/missions` | `/ministries/missions` | Missions |
| `/hands_of_healing_mission` | `/ministries/hands-of-healing` | Hands of Healing Mission |
| `/foster_care` | `/ministries/foster-care` | Foster Care |
| `/golf_tournament_for_missions` | `/ministries/golf-tournament` | Golf Tournament for Missions |
| `/community_events` | `/ministries/community-events` | Community Events |

#### Facilities & Operations
| Old URL | New URL | Reason |
|---------|---------|--------|
| `/learning_center` | `/ministries/learning-center` | Grouped with ministries |
| `/trustees` | `/about/trustees` | Administrative info under About |

---

### 5. Utility Pages (3 redirects)

| Old URL | New URL | Reason |
|---------|---------|--------|
| `/resources` | `/about/resources` | Better organization |
| `/commitment_card` | `/give/commitment` | Related to giving |
| `/full_calendar` | `/calendar` | Simplified URL |
| `/site_map` | `/sitemap` | Standard naming |
| `/privacy` | `/privacy-policy` | Standard naming |

---

## Technical Implementation

### How It Works

1. **Middleware Function**: Runs on every request before the page is rendered
2. **Path Matching**: Checks if the requested path exists in the redirects map
3. **URL Rewriting**: If found, redirects to the new URL with 301 status
4. **SEO Preservation**: 301 redirects tell search engines the move is permanent
5. **Query Parameters**: Automatically preserved during redirect

### Middleware Configuration

The middleware is configured to run on all routes EXCEPT:
- API routes (`/api/*`)
- Static files (`/_next/static/*`)
- Image optimization (`/_next/image`)
- Favicon and other static assets

This ensures optimal performance by only running redirects on actual page requests.

### Example Usage

```
User requests: https://hopewellumcsimpsonville.com/about_us
Middleware intercepts: /about_us
Redirects to: https://hopewellumcsimpsonville.com/about
Status Code: 301 (Permanent)
```

---

## Testing Redirects

### Manual Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test a redirect URL:
   ```
   http://localhost:3000/about_us
   ```

3. Verify it redirects to:
   ```
   http://localhost:3000/about
   ```

### Testing Checklist

- [ ] Give pages redirect correctly
- [ ] About pages redirect correctly
- [ ] Staff directory redirects
- [ ] Individual staff pages redirect
- [ ] All ministry pages redirect
- [ ] Utility pages redirect
- [ ] Query parameters are preserved
- [ ] 301 status code is returned

---

## Benefits

1. **SEO Preservation**: 301 redirects maintain search engine rankings
2. **No Broken Links**: External links to old URLs continue to work
3. **User Experience**: Visitors are automatically directed to the correct page
4. **Analytics**: Can track redirects to see which old URLs are still being accessed
5. **Gradual Migration**: Allows content migration without losing traffic

---

## Maintenance

### Adding New Redirects

To add a new redirect, edit `src/middleware.ts`:

```typescript
const redirects: Record<string, string> = {
  // ... existing redirects
  '/old-url': '/new-url',  // Add your new redirect here
};
```

### Removing Redirects

After sufficient time (typically 6-12 months), redirects can be removed if:
- Search engines have fully re-indexed the new URLs
- Analytics show minimal traffic to old URLs
- External sites have updated their links

---

## Notes

- All redirects preserve query parameters automatically
- Redirects work in both development and production environments
- Next.js middleware runs on Edge runtime for optimal performance
- No additional configuration needed in `next.config.js`

---

## References

- Old site map: `old-site-content/site-map.md`
- Navigation decisions: `old-site-content/DECISIONS.md`
- Next.js Middleware docs: https://nextjs.org/docs/app/building-your-application/routing/middleware
