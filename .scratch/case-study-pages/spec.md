# Case Study Pages

**Status:** ready-for-agent

**Labels:** ready-for-agent

## Problem Statement

The Works section on the homepage displays project cards with a "View Case Study →" link, but these links are non-functional dead text. There are no project detail pages to which visitors can navigate. The site lacks the social proof and credibility-building content that prospective clients need to evaluate the agency's capabilities before reaching out.

## Solution

Create a case study page format powered by Astro content collections. Each project will have a dedicated MDX file under `src/content/projects/` with narrative content, metadata, and optional assets. A single dynamic route at `/projects/[slug]` serves all case studies. The existing Works cards on the homepage become live links into these pages.

## User Stories

1. As a prospective client browsing the homepage, I want to click "View Case Study →" on a project card, so that I can read a detailed breakdown of that project.
2. As a prospective client, I want to see the project name, category, client, year, and tech stack on the case study page, so that I can quickly understand the context and scope.
3. As a prospective client, I want to read a 2-3 paragraph narrative about the project's challenges and results, so that I can evaluate the agency's problem-solving ability.
4. As a prospective client, I want to see performance stats (lighthouse score, load time, bundle size) repeated on the case study page, so that I can verify the claims made on the homepage card.
5. As a prospective client, I want to click a link to the live product from the case study page, so that I can see the project in action.
6. As a prospective client, I want to click a link to the repository from the case study page, so that I can evaluate code quality and architecture decisions.
7. As a prospective client, I want to see a hero image of the project (when available) on the case study page, so that I can visualize the final product.
8. As a prospective client, I want the hero image to be optimized by Astro's image pipeline, so that the page loads fast despite the image.
9. As a prospective client, I want a "Back to Works" link on every case study page, so that I can easily return to the homepage's project listing.
10. As a prospective client, I want unknown project slugs to return a 404, so that I know the page doesn't exist rather than seeing a broken layout.
11. As a site visitor using a mobile device, I want case study pages to render responsively, so that I can read them on any screen size.
12. As a site visitor, I want the case study page to maintain the site's brutalist aesthetic in its UI chrome (section headers, navigation, styling), so that the experience feels consistent with the rest of the site.
13. As a prospective client reading the case study narrative, I want the tone to be professional and direct without marketing fluff, so that I can assess technical capability without distraction.
14. As a visitor arriving from a social media share link, I want the case study page to load with its content (no JavaScript required), so that I can read it on any platform.
15. As a site owner adding a new project, I want to create a case study by writing a single MDX file with frontmatter, so that I can publish new work without touching component code.
16. As a site owner, I want one source of truth for project data (the content collection), so that the homepage card and the case study page always stay in sync.
17. As a site owner, I want the tech stack displayed as a single readable string on the case study page, so that I can express it naturally without complex data structures.
18. As a site owner, I want the live product link and repository link to be individually optional, so that I can publish case studies even when one or both are unavailable.
19. As a site owner, I want to optionally omit a hero image for a project, so that not every case study requires a screenshot.
20. As a visitor, I want the case study page URL to follow a clean pattern like `/projects/slug`, so that it's memorable and shareable.

## Implementation Decisions

- **Content storage:** Projects live in `src/content/projects/*.mdx` using Astro content collections with a Zod schema in `src/content/config.ts`.
- **Dynamic route:** Single file at `src/pages/projects/[slug].astro` catches all project slugs. Unknown slugs 404 automatically.
- **Page layout:** Hero image (conditional) → section header with project number and slug → metadata row (client, year, stack) → narrative (MDX content) → stats row → links (conditional) → back-to-works link.
- **Back button:** Links to `index.astro#work` (anchor to the Works section on the homepage).
- **Hero image:** Stored in `src/assets/projects/`, named to match the project slug. Astro image optimization pipeline handles sizing and format. Target dimensions: 1200×675 (16:9). Hidden entirely when absent.
- **Tone:** MDX narrative content is professional and direct. UI chrome (section headers, navigation, labels) retains the existing brutalist aesthetic.
- **Tech stack:** Single string field in frontmatter, e.g. "Astro + Tailwind + Supabase".
- **Links:** `liveUrl` and `repoUrl` are both optional URL fields. Only present links are rendered.
- **One source of truth:** The content collection is the single source. Both the homepage Works cards and the case study pages read from it. The `projects` array in `src/components/data.ts` is removed.
- **Works cards:** The `url` field is added to the card's data type. "View Case Study →" renders as an `<a>` tag.
- **Project type:** The standalone `Project` interface in `types.ts` is removed; the content collection's inferred type replaces it.
- **No OG/social images:** Each case study page does not generate dynamic social preview images.
- **No prev/next navigation:** Only the back-to-works link is provided. No sequential project navigation.
- **Homepage navigation:** Unchanged. The Works section anchor links remain as-is.
- **Existing ADRs:** No ADRs exist in this repo that conflict with this design.
- **No glossary:** No `GLOSSARY.md` exists. Standard web terminology is used.

## Testing Decisions

- **No automated tests:** This project is a static Astro site with no test runner (no Vitest, Jest, Playwright, or similar). The build pipeline includes `astro check` (TypeScript type checking) and `astro build` (production build).
- **Verification approach:** Manual verification by running `astro dev`, clicking through case study links from the homepage, testing unknown slugs for 404, and confirming `astro build` succeeds without errors.
- **Type safety:** Astro's content collections provide compile-time type safety via Zod schemas. `astro check` catches schema mismatches and type errors.
- **Build as gate:** The `npm run check && npm run build` pipeline serves as the primary correctness gate. If it passes, the feature is considered functionally correct from a type and build perspective.

## Out of Scope

- Dynamic social preview (OG) images per project.
- Prev/next navigation between projects.
- A dedicated `/works` listing page (the homepage Works section remains the entry point).
- Search or filtering of projects.
- Project tags or categories as navigable taxonomies.
- Comments or social sharing on case study pages.
- Analytics integration for tracking case study views.
- Multi-language support for case study content.
- Admin interface or CMS for creating/editing case studies.
- Image gallery or carousel on case study pages (single hero image only).

## Further Notes

- The three current placeholder projects (NEXUS/DASHBOARD, FORGE/E-COMMERCE, PULSE/HEALTH-API) should each be given a corresponding MDX file with realistic placeholder content to demonstrate the format.
- Hero images are optional per project but images should be provided for the three placeholder projects to demonstrate the hero image path.
- The brutalist design system (colors, fonts, spacing, section header format like `// 01 — PROJECT NAME`) should be consistent with existing components.
- The content collection schema should enforce all required fields (`number`, `name`, `category`, `year`, `stack`, `stats`, `description`) while keeping `client`, `heroImage`, `liveUrl`, and `repoUrl` optional.
- Stats on the case study page should use the same visual format as on the Works card (label in small monospace uppercase, value in large display font).
