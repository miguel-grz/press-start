# Assets

Every shipped raster is logged here so it can be reproduced. 3D models and physical media are built in code under `src/scenes/` and `src/features/`, so they have no entry here.

## Console photography

| Console         | Source file (Wikimedia Commons)                | Author    | License       |
| --------------- | ---------------------------------------------- | --------- | ------------- |
| Atari 2600      | `Atari-2600-Wood-4Sw-Set.jpg`                  | Evan-Amos | Public domain |
| NES             | `NES-Console-Set.jpg`                          | Evan-Amos | Public domain |
| Sega Genesis    | `Sega-Genesis-Mod1-Set.jpg`                    | Evan-Amos | Public domain |
| SNES            | `SNES-Mod1-Console-Set.jpg`                    | Evan-Amos | Public domain |
| PlayStation     | `PSX-Console-wController.jpg`                  | Evan-Amos | Public domain |
| Nintendo 64     | `N64-Console-Set.jpg`                          | Evan-Amos | Public domain |
| PlayStation 2   | `PS2-Fat-Console-Set.jpg`                      | Evan-Amos | Public domain |
| Nintendo Switch | `Nintendo-Switch-Console-Docked-wJoyConRB.jpg` | Evan-Amos | Public domain |

**Pipeline** (`node scripts/fetch-photos.ts`):

1. Download through the Commons API.
2. Trim the white studio margin.
3. Cut out onto transparency with `scripts/matte.ts`: a border flood-fill through near-white neutral pixels, plus colour-to-alpha for soft shadows and edges.
4. Export 800w and 1600w AVIF (q58) and WebP (q80) to `public/assets/<slug>/console-*`.
5. Record the intrinsic sizes in `src/data/photoMeta.json`.
6. Embed each file's origin in the raster itself (`impeccable embed-prompt <file> --prompt "Sourced, not generated: …"`), so provenance travels with the image. Re-run this after regenerating.

The source files are the manufacturers' products. Their printed branding appears only as part of the hardware, in editorial use.

## Generated assets (Higgsfield)

_None yet. Each batch will be quoted before it runs and logged here with its prompt, model and settings._
