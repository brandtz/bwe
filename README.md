# BWE — Brandtworks-Enterprises LLC

Public-facing marketing site for [Brandtworks-Enterprises LLC](https://brandtworks-enterprises.com) — a web and software company based in Springfield, Oregon.

## Stack

Static HTML/CSS. No framework, no build tool, no dependencies. Deployable directly to Netlify from this repository.

## Structure

```
/
├── index.html          # Homepage
├── pricing.html        # Pricing tiers
├── our-work.html       # Portfolio (placeholder, in progress)
├── about.html          # Company story
├── get-started.html    # Inquiry forms (3 paths)
├── thank-you.html      # Post-form redirect
├── 404.html            # Custom 404
├── favicon.svg         # SVG favicon
├── netlify.toml        # Netlify 404 redirect rule
└── css/
    └── styles.css      # Single shared stylesheet
```

## Deployment

This site is connected to Netlify via this repository. Every push to the main branch triggers an automatic redeploy.

- **Build command:** none
- **Publish directory:** `/` (root)
- **Forms:** Netlify Forms (`data-netlify="true"`) — three forms on `get-started.html`
- **Custom 404:** wired via `netlify.toml`

To deploy manually: connect this repo to a Netlify site and point DNS for `brandtworks-enterprises.com` to the Netlify-provided domain. SSL is provisioned automatically.

## Development

No build step. Edit HTML and CSS directly and push.

```bash
git clone git@github.com:brandtz/bwe.git
cd bwe
# open any .html file in a browser or use a local server
```
