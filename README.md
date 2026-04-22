# City Market BBQ — Demo Site

Live demo for pitching Option 2 (Full Rebuild) to the owners of City Market BBQ, Luling, TX.

## What's Built

**6 pages, mobile-responsive, no frameworks:**
- `index.html` — Homepage with hero, accolades, story, featured dishes, crew teaser, gallery teaser, visit info
- `menu.html` — Full menu organized by section
- `story.html` — Story, timeline (1958 → today), press quotes
- `staff.html` — "The Pit Crew" — staff grid with photo placeholders
- `gallery.html` — Filterable gallery with lightbox
- `contact.html` — Address, hours, map, catering inquiry form

## Tech

- Pure HTML / CSS / JS — no build step, deploys anywhere
- Google Fonts: Playfair Display + Bebas Neue + DM Sans
- Google Maps embed, Formspree-ready contact form
- Mobile-first responsive (single breakpoint at 768px, secondary at 1024px)
- Placeholder auto-swap: drop matching-filename image into `/images/`, refresh page, placeholder disappears

## How to Add Real Photos

Every photo placeholder has a `data-img="filename.jpg"` attribute. To replace:

1. Save photo from Facebook with the exact filename listed below
2. Drop it into the `/images/` folder
3. Refresh the page — placeholder auto-swaps with the real image

### Photos to Grab from Facebook (City Market BBQ page)

**Homepage:**
- `hero-pit.jpg` — Dramatic shot of smoke pit or brisket being sliced (horizontal)
- `storefront.jpg` — Exterior of the building / sign
- `brisket.jpg` — Sliced brisket showing smoke ring
- `sausage.jpg` — Hot sausage links
- `ribs.jpg` — Pork ribs
- `sauce.jpg` — BBQ sauce bottle or sauce being poured
- `staff-group.jpg` — Group staff photo (the Focused Vision shoot)
- `pitmaster-1.jpg` — Pitmaster at work

**Story page:**
- `story-1.jpg` — Vintage, exterior, or pit room photo

**Staff page:** (same `staff-group.jpg` as homepage plus)
- `pitmaster-2.jpg`
- `staff-1.jpg` through `staff-4.jpg`

**Gallery page:**
- `gallery-food-1.jpg` through `gallery-food-5.jpg`
- `gallery-pit-1.jpg`, `gallery-pit-2.jpg`
- `gallery-staff-1.jpg` through `gallery-staff-3.jpg`
- `gallery-place-1.jpg`, `gallery-place-2.jpg`

**Tip:** Start with just 5–6 photos for the pitch (hero, storefront, 2–3 food shots, 1 staff group photo). The rest can stay as placeholders during the meeting — it actually helps show the client where their photos will live.

## Deployment

Standard GitHub Pages deploy:

1. Create new repo: `citymarket-demo` (or similar)
2. Drag all files into repo via GitHub web or Codespace
3. Settings → Pages → Source: main branch / (root) → Save
4. Goes live at `https://kstuart520.github.io/citymarket-demo`

## Before the Pitch Meeting

- [ ] Drop in 5–6 real photos from their Facebook
- [ ] Deploy to GitHub Pages (so you can pull it up on your phone in person)
- [ ] Update Formspree form action with a real form ID (or swap with mailto: link for demo)
- [ ] Test the mobile view — open the live URL on your phone

## Customization Notes (post-signing)

- Color palette defined in `css/style.css` under `:root`
- All "[Name]" placeholders on staff page need real names from the owner
- Menu prices currently say "Market Price" — swap in actuals
- Social links in footer are placeholder `#` — add real URLs
- Google Maps embed coordinates are approximate — owner should verify
