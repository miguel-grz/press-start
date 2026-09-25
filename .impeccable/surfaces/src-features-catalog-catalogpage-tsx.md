---
version: 1
slug: "src-features-catalog-catalogpage-tsx"
primary_target: "src/features/catalog/CatalogPage.tsx"
related_targets: ["src/features/console/ConsolePage.tsx"]
---

# Catalog (home) — surface brief

Scope: the catalog route `/` plus the global chrome it establishes (header, aisle markers, shelf-edge timeline, footer disclaimer). Console pages inherit the chrome and swap colorway; each console's scene is its own sub-world.
Visitor mode: Experience. Primary audience: retro fans exploring; secondary: recruiters skimming craft.
Job: browse 8 consoles (later 13), filter by maker and generation, search by name, switch to the timeline, and open a console page.
Proof: real, sourced launch facts on every shelf tag. Nothing unsourced, and no official logos or box art.
Memorable moment: tearing the pull-ticket, after which the console leaves its glass case and travels into the console hero.

## Direction contract

THESIS: The catalog is the video game aisle of a 1985–2005 electronics store. Every console sits in a lit glass display bay with a shelf tag carrying its real launch facts and a pad of pull-tickets. It refuses the category default of neon-on-black, a pixel font, and a grid of glowing cards.

OWN-WORLD: Fixture blue (#1d3fbf family) is drenched across the slatwall and end-cap signs, carrying 40–60% of every screen. Pull-ticket stock is off-white with black ink, perforated edges, and a stub. Day-glo orange and yellow price-gun stickers mark state only: pulled/visited, filtered, new. Glass bays are dark inside with the console lit by one overhead fluorescent source, glare on the glass, and grooved slatwall behind. Type is condensed signage caps for signs and tags, a plain grotesk for reading, and tabular numerals on every price and year. The bay never changes shape per console; only its colorway swaps through custom properties. Every row, rule and measure locks to one shelf pitch.

STORY: A fan walks the aisle and recognizes the machines. They read each tag (maker, year, generation, launch price), narrow the aisle with the hanging aisle markers or the search, flip to the timeline shelf, and pull a ticket to go deeper. Returning, they see a PULLED sticker on the bays they have already opened.

FIRST VIEWPORT: The end-cap sign spans the top: PRESS START in heavy condensed caps on fixture blue, with the hanging aisle markers (makers and generations) and search as a price-gun label field. Below, a slatwall of display bays in a 4-column shelf (2 on tablet, 1 on phone, as a single-file aisle). Each bay shows the console render behind glass, the shelf tag on the shelf lip, and the ticket pad hanging at the bay's right edge. The shelf-edge strip shows years. The primary action is the ticket: hovering lifts it and lights the case, and clicking tears it and runs the view transition into the console page.

FORM: The Game Aisle (store video game aisle: end-cap signs, glass cases, shelf tags, pull-tickets), candidate 6 of 7 on my ordered list; seed key 517dcffe. Raises kept: page-scale color commitment (torn flyer wall), fixed bay with a colorway swap (kit wall), shelf-course rhythm (coil tower), announce before act on one motion clock (algorave), one light source (accretion disk).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions
- Faces: condensed signage grotesk plus reading grotesk, self-hosted. Picked at build and recorded by the documenter.
- Card media: static console renders. They are procedural renders or Higgsfield 2D, decided in Phase 2 after the credit top-up.
