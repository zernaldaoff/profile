# Experience section design

## Goal

Add a portfolio-oriented experience section to the profile site. It should show Zernalda Septian's career progression while giving the current Otten Coffee role the most visual and editorial weight.

## Content source and scope

Use the four roles listed in `CV_2026_new.pdf`, newest first:

1. Otten Coffee - Senior Frontend Engineer | Cross-Platform & AI-Assisted Product Delivery (Oct 2020 - Present)
2. Salt Digital Agency - Frontend Engineer (Mar 2020 - Jun 2020)
3. Pointstar PTE LTD - Application Engineer (Jan 2019 - Feb 2020)
4. PT. Conexus Solusi - Fullstack Engineer (Sep 2016 - Dec 2018)

The section is editorial and portfolio-oriented, not a transcription of the CV. Each role will have a concise summary and three short focus tags derived from the CV. The Otten Coffee entry will receive longer copy and the visual emphasis.

## Layout and responsive behavior

The section uses the existing `#experience` anchor, the existing navy and soft-surface tokens, and the 1200px site container.

On desktop, entries are arranged on a vertical timeline: the left column holds date ranges and the right column holds role content. A navy timeline rule and nodes establish chronology. Otten Coffee begins the sequence as a highlighted, larger feature entry; the remaining roles use a compact but readable layout separated by rules.

On mobile, the timeline is simplified to a left rule with nodes. Dates move above each role title, and content remains a single readable column. Tags wrap without horizontal overflow.

## Content treatment

Section introduction: a concise sentence that frames the work as product delivery across ecommerce, web applications, and internal tools.

Otten Coffee focuses on:

- Ecommerce and product-area ownership
- Frontend architecture and cross-platform quality
- Release validation and AI-assisted delivery

Earlier roles focus on:

- Salt Digital Agency: responsive React/Angular work, API integrations, and quality UI delivery
- Pointstar PTE LTD: Angular frontend, GraphQL/API work, and cloud-connected application development
- PT. Conexus Solusi: full-stack Laravel development, enterprise dashboards, and monitoring tools

## Component and data design

Create `components/sections/Experience.tsx`. Keep the employment records in a typed in-file data array with company, role, period, summary, highlights, and a `featured` flag. Map the array to semantic `<article>` elements inside the section.

Update `app/page.tsx` to render the Experience section immediately after the Hero. No client-side state, third-party packages, or external assets are required.

## Accessibility and quality

Use semantic section, heading, and article elements. Timeline decorations are visual only and should not add noisy screen-reader content. Typography and contrast must use the existing color tokens. Validate the desktop and mobile rendering, then run lint and production build.

## Out of scope

This iteration does not add logos, animations, filters, expandable role details, project cards, or changes to other page sections.
