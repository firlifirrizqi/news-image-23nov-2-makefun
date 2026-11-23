# The World Today — 23 November 2026 (second entry)

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/firlifirrizqi/news-image-23nov-2-makefun/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/firlifirrizqi/news-image-23nov-2-makefun/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A second, different front page for Monday 23 November 2026 — six stories, one day, drawn entirely in code and shipped as a single 1024×1024 PNG. Every story below was checked against news first reported on 23 November 2026; stories from earlier days, and the six stories of the first entry, were left out. The layout differs from the first entry too: one big lead story on top, three stories in a row, and two wider stories below. The artwork was drawn with PIL (masthead, lead story plus five smaller cards with hand-drawn icons) and read back visually before shipping, so every headline and label is legible in the final image.

## The six stories

- **UKRAINE — Ukraine says it sank a Russian warship off Libya.** Zelenskiy says naval drones sank the corvette Merkury near Benghazi and hit the cargo ship MV Angara.
- **MIDDLE EAST — Gaza a "toxic wasteland" after war.** A new report blames toxic pollution in 99% of Gaza.
- **AMERICAS — Deadly storm devastates a Brazil town.** A supercell storm hits Tupancireta; thousands displaced.
- **TECH — Meta: AI superintelligence "arriving".** Meta's AI chief warns the next year will decide much.
- **ASIA — Indonesia seizes a ship with rocket fuel.** The navy holds a China-to-Bangladesh ship carrying 405 tonnes of sodium perchlorate.
- **EUROPE — Belgium airports shut in strike.** Airports close as workers strike against austerity in a nationwide day of action.

## How it works

`main.ts` (Node 22, standard library only) reads `entry.png`, checks that it is a whole PNG within the 1 MiB and 1024×1024 limits, and writes those exact bytes to `/output/entry.png`. Running it twice produces identical output:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=v8vnayfm&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
