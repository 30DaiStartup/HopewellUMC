import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js Middleware for handling URL redirects from old site structure to new site structure
 * All redirects are 301 (permanent) to maintain SEO and prevent broken links
 */

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define redirect mappings: old URL -> new URL
  const redirects: Record<string, string> = {
    // GIVE PAGES
    // Enter In campaign merged into Give page
    '/enter_in_a2d303': '/give',

    // ABOUT PAGES
    // Consolidating multiple About pages into single /about structure
    '/about_us': '/about',
    '/about_us_65037': '/about', // Duplicate about page
    '/info_center': '/about', // Info Center merged into About
    '/what_to_expect': '/about/visit',
    '/our_beliefs': '/about/beliefs',
    '/faq': '/about/faq',

    // CONNECT PAGES
    // Staff moved under Connect section
    '/staff': '/connect/staff',

    // STAFF INDIVIDUAL PAGES
    // Individual staff pages moved to new structure under /connect/staff/
    '/stacy_black': '/connect/staff/stacy-black',
    '/joellen_borton': '/connect/staff/joellen-borton',
    '/rev_don_brown': '/connect/staff/don-brown',
    '/jessica_collins': '/connect/staff/jessica-collins',
    '/sarah_erskine': '/connect/staff/sarah-erskine',
    '/lera_jackson': '/connect/staff/lera-jackson',
    '/beth_lowe': '/connect/staff/beth-lowe',
    '/ann_mcdonald': '/connect/staff/ann-mcdonald',
    '/pat_mcnabb': '/connect/staff/pat-mcnabb',
    '/brenda_rau': '/connect/staff/brenda-rau',
    '/tammy_wilcox': '/connect/staff/tammy-wilcox',

    // MINISTRY PAGES
    // General ministries - updating URL structure to use hyphens
    '/adult_ministries': '/ministries/adult',
    '/childrens_ministries': '/ministries/children',
    '/youth_ministries': '/ministries/youth',
    '/young_adults_ministry': '/ministries/young-adults',
    '/mens_ministry': '/ministries/men',
    '/womens_ministries': '/ministries/women',

    // Specialized ministries
    '/christian_education': '/ministries/christian-education',
    '/worship_ministry': '/ministries/worship',
    '/parish_nursing': '/ministries/parish-nursing',
    '/scouting_ministries': '/ministries/scouting',

    // Outreach & Missions
    '/missions': '/ministries/missions',
    '/hands_of_healing_mission': '/ministries/hands-of-healing',
    '/foster_care': '/ministries/foster-care',
    '/golf_tournament_for_missions': '/ministries/golf-tournament',
    '/community_events': '/ministries/community-events',

    // Facilities & Operations
    '/learning_center': '/ministries/learning-center',
    '/trustees': '/about/trustees',

    // RESOURCES & UTILITY PAGES
    '/resources': '/about/resources',
    '/commitment_card': '/give/commitment',
    '/full_calendar': '/calendar',
    '/site_map': '/sitemap',
    '/privacy': '/privacy-policy',
  };

  // Check if the current path needs to be redirected
  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];

    // Return 301 permanent redirect to maintain SEO
    return NextResponse.redirect(url, 301);
  }

  // No redirect needed, continue to the requested page
  return NextResponse.next();
}

/**
 * Middleware configuration
 * Only run middleware on specific paths to avoid performance overhead
 * Excludes:
 * - API routes (/api/*)
 * - Static files (/_next/*)
 * - Image optimization (/_next/image)
 * - Favicon and other static assets
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)',
  ],
};
