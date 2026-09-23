# Brandtworks Enterprises website

Public marketing website for Brandtworks-Enterprises LLC. The production site is plain HTML, CSS, and JavaScript; there is no framework or build step.

## Pages

- `index.html` — home, services overview, Studio37 feature, Bulwark development note, and process
- `services.html` — Presence, commerce, restaurant, and enterprise services
- `work.html` — selected projects and Studio37 case study
- `pricing.html` — Presence tiers, Basic support, and custom-scoped services
- `get-started.html` — project inquiry form
- `thank-you.html` — Netlify Forms success destination
- `privacy-policy.html` and `eula.html` — legal information
- `404.html` — not-found page

Legacy paths redirect to their replacements: `capabilities.html` to services, `our-work.html` to work, and `about.html` to the home page process section.

## Design system

The production implementation follows `BWE Design System/readme.md` and its CSS tokens: fog/slate surfaces, mist-blue brand accents, Bricolage Grotesque display type, Instrument Sans body copy, Instrument Serif emphasis, and JetBrains Mono labels. Production assets are copied into `assets/`; the source package remains separate. Shared styles and responsive behavior live in `css/site.css` and `js/site.js`.

The React/Babel website kit is a visual/content reference, not a production dependency. Do not link the generated bundle or prototype runtime from live pages.

## Pricing and offers

Presence tiers follow the design spec: Essential $250, Professional $500, Complete $750. Basic support is listed at $20/month. Standard/Premium support prices in the design kit are placeholders and are intentionally not published; other support and growth work is discussed and scoped with the customer. Commerce, restaurant, and enterprise builds are custom-scoped.

## Forms and deployment

The inquiry form uses Netlify Forms (`project-inquiry`) and posts to `/thank-you.html`. Netlify discovers the form after deployment. Confirm the form appears in the Netlify dashboard and set up submission notifications before announcing the new site. This replaces the legacy `build-inquiry`, `capabilities-inquiry`, and `custom-platform-inquiry` forms; historical submissions remain in Netlify, but form-specific notifications/settings may need to be transferred.

Netlify publishes the repository root. The configuration retains the 404 handler and permanently redirects legacy routes. Test the form after deployment; local file previews cannot submit to Netlify.

## Local preview

Serve the repository root with any static HTTP server and open `index.html`. No package installation or compilation is required. Google Fonts are loaded remotely; system fallbacks are defined in CSS.

## Legacy snapshot

`archive/legacy-placeholder/` contains a local copy of the previous site and is ignored by Git so it is not published or added as a new tracked archive. It was preserved before the rebuild. The `BWE_SITE_BRIEF.md` is an earlier brief and should not be treated as the current design or offer source.
