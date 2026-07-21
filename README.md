# The Nocturne

A late-night restaurant landing page, built to match the reference
screenshots (a moody, high-contrast luxury dining site with a countdown
widget, numbered ritual cards, and a guest testimonial carousel).

## Running it

No build step, no dependencies — plain HTML/CSS/JS with ES modules.
Serve with any static file server:

```bash
cd nocturne
python3 -m http.server 8080
# then open http://localhost:8080
```

Must be served over `http://`/`https://`, not opened as a `file://` URL
directly — ES modules are blocked under `file://` by browser CORS policy.

**Upload note:** if you're deploying via GitHub's web upload on a device
that can't upload folders (iPad Safari, for example), use
`nocturne-single-file.html` instead — same site, same behavior, with
every CSS/JS/font/photo embedded directly in that one file. Rename it to
`index.html` when you upload.

**The hero video needs a second, separate upload.** Video doesn't
compress well as embedded base64 (it adds ~33% size for zero benefit
since video is already compressed), so unlike the photos, `hero-loop.mp4`
stays a real external file rather than getting baked into the HTML. Two
uploads instead of one:
1. Upload `nocturne-single-file.html` → rename to `index.html`
2. Upload `hero-loop.mp4` to the path `public/videos/hero-loop.mp4` in
   the same repo (GitHub's upload screen usually lets you edit the full
   target path, not just the filename, before committing)

If you skip the video upload, the site works exactly the same with the
static hero photo instead — this was built to degrade gracefully either
way.

## What's here

- `index.html` — full page markup
- `css/tokens.css` — design tokens: palette sampled from the reference
  screenshots (near-black backgrounds, warm amber/candlelight accents),
  type scale, spacing, motion curves
- `css/fonts.css`, `css/base.css`, `css/layout.css`, `css/components.css`,
  `css/animations.css` — layered stylesheets
- `js/scrollFx.js` — scroll-driven chrome: reveal-on-scroll, header
  show/hide (suppressed during nav-link jumps so the header doesn't
  vanish right as you land on a section), parallax, mobile nav
- `js/countdown.js` — the hero countdown widget: ticks down to the night
  menu's daily unlock time, drives a small animated analog clock face off
  the real current time
- `js/heroCycle.js` — crossfades the hero headline between its two
  reference phrases
- `js/testimonials.js` — prev/next carousel through two guest quotes
- `js/processCards.js` — touch-device tap-to-reveal fallback for the
  numbered ritual cards (desktop gets the reveal on hover via CSS alone)
- `image-prompts.md` — a generation prompt for every image the site
  references (9 photos + 1 hero video), with the exact file path each one
  needs to be saved to

## Images and video

**7 of 9 photos are real, generated images** — `image-01`, `02`, `03`,
`04`, `07`, `08`, and `09` are actual photography generated from the
prompts in `image-prompts.md`. `image-05.jpg` (The Ember Room background)
and `image-06.jpg` (process section background) are still dark
placeholder graphics — run those two remaining prompts through an image
generator and drop the result at the exact path listed to complete the
set; the site picks it up automatically, no code changes needed.

**The hero video is included** — `hero-loop.mp4` is a real 10-second
clip. If you regenerate it, keep it as an actual `.mp4` file rather than
embedding it in the HTML: video doesn't benefit from base64 embedding the
way images and fonts do (it adds ~33% size for no gain, since video is
already compressed), so it's kept as a separate file on purpose. The site
degrades gracefully to the static `image-01.jpg` photo if this file is
ever missing or fails to load.

## Implementation notes

**Fonts are self-hosted**, no Google Fonts CDN — the build environment
had no network access. The reference uses a tall, high-contrast elegant
serif (reads like Cormorant Garamond); that exact family wasn't available
to self-host offline here, so Lora is used instead, styled lighter and
wider-tracked to lean more editorial. If you have real Cormorant Garamond
files, swap the `@font-face` sources in `css/fonts.css` (folder version)
— the single-file build would need a full rebuild of the embedded fonts
to pick up the change.

**Testimonial 2 doesn't appear in any reference screenshot** — the
provided screen recording showed the carousel's nav arrows and enough
frame-to-frame motion to indicate more than one testimonial exists, but a
second quote/photo/author was never directly visible in what was shared.
Its content in `js/testimonials.js` (James R., Restaurateur, London) is
invented to fill that gap — replace it with the real second testimonial
if you have one.

## Known constraints

- The "Book A Table" form is UI-only — it confirms locally, it doesn't
  send a reservation anywhere. Wire up a real booking backend for
  production use.
- No backend of any kind — this is a static front end.
