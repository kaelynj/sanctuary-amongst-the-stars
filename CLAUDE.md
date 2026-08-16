# Sanctuary Amongst the Stars

## What it is
A Docusaurus static site documenting both game mechanics and campaign content for a personal Eclipse Phase campaign called *Sanctuary Amongst the Stars*. Serves as a searchable reference for rules, lore, world info, and session updates. Hosted at kaelynj.github.io/sanctuary-amongst-the-stars/.

Eclipse Phase is by Posthuman Studios — all content here is under CC-BY-NC-SA 4.0.

## Stack
- **Framework:** Docusaurus 3.5 (React + MDX)
- **Language:** JavaScript / MDX / Markdown
- **Node:** 18+, managed via npm
- **Linting:** ESLint
- **Spellcheck:** cspell (`src/config/cspell.json`)
- **Deploy:** GitHub Pages (`npm run deploy`)

## How to run
```bash
npm install
npm run start       # dev preview
npm run build       # production build
npm run serve       # serve built site
npm run lint        # ESLint
npm run spelling    # cspell across docs + blog
```

## Content structure
```
docs/
  game-mechanics/     # Rules: dice, skills, pools, combat, psi, mesh, transhuman tech
  player-resources/   # Character creation, gear, reputation, rez points
  world-information/  # Factions, locations, lore index
blog/                 # Session updates / campaign posts (last entry: Nov 2023)
src/
  components/         # Custom React components
  pages/              # Docusaurus pages
  config/             # cspell config
```

## Current state
- Core game mechanics documented (dice, skills, pools, actions/initiative, combat, psi, the mesh, transhuman tech)
- Player resources started (char creation, gear, reputation, rez points)
- World info scaffolded (factions, locations index)
- Blog has session posts up to Nov 2023 (Fei88, maneu entries)
- Site deploys to GitHub Pages

## Key decisions made
- Docusaurus for searchability + easy Markdown authoring
- Blog section for session recaps alongside reference docs
- CC license to allow community contributions

## What's next / open questions
- [ ] World info — how complete are factions and locations?
- [ ] Any undocumented mechanics still needed?
- [ ] Session blog — resume posting recaps?
- [ ] Custom components in `src/components/` — what do they do?
- [ ] Any planned features: search tuning, custom theme, interactive elements?
