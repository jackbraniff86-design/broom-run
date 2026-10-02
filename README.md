# Broom Run

A one-finger broom flying game set in Larkspire, an original wizarding school. Hold to rise, let go to fall.

- Play: https://jackbraniff86-design.github.io/broom-run/
- Daily Flight: the same course for everyone, three goes, best counts, new course at 7am UK time.
- Challenge links carry the course and the distance to beat in the URL hash.
- No backend yet: progress lives in each player's browser.

Files: `index.html` (game), `theme.js` (every name, string and colour), `LORE.md` (world bible), `sw.js` + `manifest.webmanifest` (installable, offline), `tools/` (icon and preview-image generator).

To update the live game, push to `main`. Bump `VERSION` in `sw.js` when you change the game so installed copies refresh.
