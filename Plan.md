# Elite Finance Blog — Planning Document for Claude Code

## Project summary

Build a personal finance blog that feels discreet, refined, and editorial.

The site should look and read like a private investment letter rather than a startup site or a mass-market media brand. The design language should be inspired by quiet luxury and elite editorial taste: restrained, elegant, minimal, architectural, and highly intentional.

The blog must be extremely easy to update by a non-technical user. Publishing should be possible by adding a new post file, reviewing locally, and pushing to GitHub so Vercel deploys automatically.

---

## Primary objective

Create a blog that combines:

1. **Quiet luxury design**
2. **Editorial authority**
3. **Simple publishing workflow**
4. **Clean navigation for regular readers and archive discovery**
5. **Reliable deployment through GitHub and Vercel**

---

## Core principles

### What the site should feel like

* A private investment letter
* A discreet, high-end editorial publication
* Sophisticated, calm, selective, and authoritative
* Elegant rather than flashy
* Minimal rather than decorative

### What the site should not feel like

* A crypto site
* A startup landing page
* A loud “luxury wealth” cliché
* A dark, aggressive trading dashboard
* A content farm or newsletter template dump

---

## Audience and positioning

The audience is financially literate, image-conscious, and interested in thoughtful, high-signal writing.

The tone should feel:

* intelligent
* measured
* polished
* selective
* elite without being performative

The blog should communicate taste as much as information.

---

## Technical recommendation

Use:

* **Next.js (App Router)**
* **TypeScript**
* **Tailwind CSS** used sparingly
* **Local MDX files** for posts
* **GitHub** for version control
* **Vercel** for deployment

### Why this setup

* It is straightforward to deploy on Vercel.
* It supports a clean static site structure.
* It allows posts to be added as files instead of through a complex CMS.
* It keeps long-term ownership of content.
* It makes the writing workflow easy to repeat.

---

## Content workflow goal

Publishing should work like this:

1. Create a new `.mdx` file in `content/posts`
2. Add frontmatter
3. Write the post
4. Preview locally
5. Commit changes
6. Push to GitHub
7. Let Vercel deploy automatically

This workflow should be simple enough that it still feels manageable after weeks or months away from the project.

---

## Information architecture

The site structure should be minimal and disciplined.

### Main navigation

* Home
* Journal
* Topics
* Archive
* About

### Recommended routes

* `/`
* `/journal`
* `/journal/[slug]`
* `/topics/[tag]`
* `/archive`
* `/about`

### Page roles

#### Home

Purpose:

* Introduce the publication
* Establish tone and positioning
* Surface the latest writing
* Highlight one featured essay or note

Suggested sections:

* short intro or manifesto
* featured post
* latest posts
* selected topics

#### Journal

Purpose:

* Serve as the main post index
* Show posts in reverse chronological order
* Make browsing easy and elegant

Each entry should include:

* title
* date
* excerpt
* topic/tag

#### Post page

Purpose:

* Deliver the article with excellent readability
* Emphasize typography and whitespace
* Preserve a sense of editorial calm

Include:

* title
* date
* tags
* article body
* optional related reading

#### Topics

Purpose:

* Organize writing into a few meaningful subject areas
* Keep exploration intuitive without clutter

Important:

* Do not create too many tags
* Prefer a curated set of topics
* Keep the taxonomy selective

#### Archive

Purpose:

* Make older posts easy to find
* Reinforce the sense of a growing body of work

Suggested structure:

* grouped by year
* within each year, posts listed chronologically or reverse chronologically

#### About

Purpose:

* Explain who the blog is for
* Explain what the publication covers
* Establish voice and credibility without over-explaining

Tone:

* concise
* self-assured
* polished

---

## Design direction

### Overall design language

The visual language should express **quiet luxury** and **editorial authority**.

Key traits:

* restraint
* precision
* strong spacing discipline
* elegant typography
* minimal decoration
* muted colors
* extremely clean layout

### Visual references

Use the following references conceptually:

* Loro Piana
* Brunello Cucinelli
* a private investment memorandum
* a refined print editorial

This should influence mood and discipline, not produce a literal fashion-brand imitation.

### Design rules

#### 1. Understatement

* Very few visual effects
* No loud gradients
* No flashy buttons
* No excessive imagery
* No ornamental clutter

#### 2. Typography-first design

* Let typography do most of the aesthetic work
* Prioritize line length, spacing, hierarchy, and contrast
* Headlines should feel elevated and literary
* Body text should feel calm and readable

#### 3. Controlled color palette

Use a muted, warm, understated palette.

Recommended direction:

* warm ivory or off-white background
* stone / taupe / mushroom neutrals
* charcoal primary text
* restrained deep navy or deep olive accent

Avoid:

* pure black and bright gold combinations
* bright accent colors
* harsh white-on-black unless used very selectively

#### 4. Grid discipline

* Strong alignment
* Consistent margins
* Elegant spacing rhythm
* Clean page proportions
* Order and structure over visual busyness

#### 5. Minimal motion

* Only very subtle hover states or transitions
* No heavy animation
* No distracting interactions

---

## Typography recommendation

Use a serif + sans-serif combination.

### Headlines

Recommended direction:

* Cormorant Garamond
* EB Garamond
* or another refined editorial serif

### Body and interface

Recommended direction:

* Inter
* Manrope
* or another clean, modern sans-serif

### Typography goals

* Headlines should feel elegant and elevated
* Body text should feel serious and effortless
* Metadata and navigation should feel precise and discreet

---

## Layout guidelines

### Global layout

* generous whitespace
* narrow to medium reading width
* thin dividing lines
* restrained sections
* consistent vertical rhythm

### Homepage layout

Suggested hierarchy:

1. publication introduction
2. featured writing
3. latest entries
4. topics or archive access

### Journal layout

* list or restrained card system
* no bulky cards
* lots of breathing room
* emphasis on titles and excerpts

### Post layout

* narrow reading column
* elegant title treatment
* quiet metadata styling
* excellent paragraph spacing
* optional footnotes or references styled minimally

---

## Content model

Posts should be stored as local MDX files.

### Example frontmatter

```md
---
title: "Why Quality Still Wins in Private Markets"
date: "2026-03-14"
excerpt: "A short note on selectivity, durability, and pricing power."
tags: ["private markets", "quality", "investing"]
featured: true
---
```

### Content types to support

The site should gracefully support several recurring post formats:

* essays
* market notes
* thesis pieces
* selected reads
* short reflections
* quarterly or monthly letters

### Content strategy guidance

The site should favor:

* high-signal pieces
* selective publishing
* consistency of tone
* strong archive value

The site should avoid feeling like:

* a newswire
* a cluttered feed
* a high-frequency posting machine

---

## SEO and metadata requirements

Set up strong basics without overcomplicating the build.

Include:

* site title
* site description
* per-page metadata
* per-post title and description
* canonical URLs
* favicon
* Open Graph support

Goal:
When a post link is shared, it should feel polished and publication-grade.

---

## GitHub and Vercel workflow

### GitHub role

* store the codebase
* maintain version history
* act as the source for Vercel deployments

### Vercel role

* build and deploy automatically from GitHub
* create preview deployments for non-production changes
* deploy production from the main branch
* manage the custom domain

### Target workflow

1. Make changes locally
2. Commit and push to GitHub
3. Review deployment preview if needed
4. Merge or push to `main`
5. Let Vercel publish production automatically

---

## Suggested project structure

```text
app/
  page.tsx
  about/page.tsx
  journal/page.tsx
  journal/[slug]/page.tsx
  topics/[tag]/page.tsx
  archive/page.tsx
  layout.tsx

content/
  posts/
    2026-03-14-welcome.mdx

lib/
  posts.ts

public/
  images/
```

---

## Build priorities

### Version 1 must include

* homepage
* journal index
* post pages
* topics pages
* archive page
* about page
* local MDX content loading
* responsive layout
* metadata setup
* GitHub-ready repository
* Vercel-ready deployment

### Version 1 should not include unless very easy

* comments
* newsletter platform integration
* heavy CMS setup
* complicated search
* analytics dashboards
* unnecessary animations
* social feed integrations

The first release should prioritize elegance, simplicity, and easy upkeep.

---

## Acceptance criteria

The project is successful if:

### Design

* the site feels expensive without looking flashy
* the typography carries the design
* the interface is minimal and calm
* the spacing feels deliberate and premium

### Content workflow

* a new post can be created by adding a single MDX file
* tags and archive pages update automatically
* the writing workflow is understandable for a non-coder

### Technical

* the project runs locally without friction
* the GitHub repository is clean and organized
* the site deploys successfully to Vercel
* the site works well on mobile and desktop

### Navigation

* a new reader can understand the site immediately
* older posts remain easy to browse
* the information architecture remains uncluttered as content grows

---

## Risks to avoid

* over-designing the homepage
* using dark luxury clichés
* adding too many categories
* relying on flashy visual effects to create “premium” feeling
* making publishing dependent on a complicated CMS
* adding too many features before the writing habit is established

---

## Phased implementation plan

### Phase 1 — Foundation

* scaffold project
* set up app routes
* configure typography and color system
* create global layout and navigation

### Phase 2 — Content engine

* implement MDX loading
* parse frontmatter
* generate post pages
* generate topic pages
* generate archive page

### Phase 3 — Visual refinement

* refine homepage composition
* improve spacing and typography
* polish mobile layout
* tighten hover states and section rhythm

### Phase 4 — Deployment

* initialize Git
* prepare GitHub repository
* push code
* connect Vercel
* verify production deployment
* add custom domain later if desired

### Phase 5 — Editorial tooling

* create post template
* document publishing instructions
* optionally add a simple script or helper for creating new posts

---

## What Claude Code should optimize for

When making implementation decisions, Claude Code should prioritize:

1. simplicity of maintenance
2. elegance of typography and spacing
3. restrained luxury aesthetic
4. clarity of content structure
5. easy GitHub + Vercel deployment

If there is a choice between more features and better editorial calm, choose editorial calm.

If there is a choice between visual novelty and timelessness, choose timelessness.

If there is a choice between a CMS and local content files, choose local content files unless there is a compelling reason not to.

---

## Master build prompt for Claude Code

Use the prompt below as the main instruction set.

```text
Build a personal finance blog using Next.js App Router, TypeScript, Tailwind, and local MDX files.

The visual direction is quiet luxury and editorial authority: restrained, elegant, architectural, and discreet. Think Loro Piana, Brunello Cucinelli, a private investment letter, and a refined print editorial. Avoid startup aesthetics, flashy gradients, crypto styling, gold-on-black clichés, oversized buttons, visual clutter, and aggressive dark themes.

Requirements:
- Very easy to update by adding a new MDX file to content/posts
- Pages: Home, Journal, Topics, Archive, About
- Journal index page with reverse-chronological posts
- Individual post pages at /journal/[slug]
- Topic pages generated from tags
- Archive page grouped by year
- Elegant typography with serif headlines and clean sans-serif body text
- Warm neutral palette, thin borders, generous whitespace
- Excellent mobile and desktop layout
- Metadata for SEO and social sharing
- Ready to deploy to Vercel via GitHub

Implementation priorities:
- Simplicity and maintainability over feature bloat
- Premium editorial feel over trendiness
- Clean navigation and archive discoverability
- Quiet, expensive-looking restraint in every design decision
```

---

## Secondary prompt for design refinement

```text
Refine the blog’s visual design so it feels more discreet, elevated, and editorial. Increase the sense of quiet luxury through typography, whitespace, alignment, muted colors, and subtle hierarchy. Remove anything that feels flashy, startup-like, or mass-market. Make it feel closer to a private investment letter than a marketing website.
```

---

## Secondary prompt for content workflow

```text
Improve the publishing workflow for a non-technical writer. Make it extremely easy to add a new post, preview it locally, and publish it through GitHub and Vercel. Reduce friction, reduce file complexity, and keep the content structure intuitive.
```

---

## Optional future enhancements

Only consider these after the first version is stable.

* RSS feed
* simple site search
* reading time estimates
* curated “selected essays” page
* custom social share images
* minimal analytics
* a script to generate new post files automatically

---

## Final standard

The finished sit
