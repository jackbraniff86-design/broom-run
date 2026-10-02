// Broom Run theme file.
// Every name, string and colour the player sees lives here. The game code never
// hard-codes a name, so swapping this file re-skins the game without touching logic.
// Default theme: an original wizarding school. No licensed names or imagery.
window.THEME = {
  name: 'Broom Run',
  school: 'Larkspire Academy of Magic',
  tagline: 'Hold to rise. Let go to fall. Fly the castle halls past floating candles, moving staircases and portraits that watch you go.',

  // The school. Full design notes live in LORE.md.
  lore: {
    founded: 'Founded 1388',
    intro: [
      'Larkspire stands on a sea cliff at the edge of the northern coast, a castle of grey stone that has never once kept the same shape two nights running. Every night its corridors shuffle, stretch and fold back on themselves. Students learned long ago that the quickest way to get anywhere is by broom.',
      'At seven every morning the castle settles one corridor for the whole school to fly. That is the Daily Flight. Whoever goes furthest earns light for their tower lamp, and the brightest lamp each Monday wins the week.',
      'Lost things end up in the Lost Loft, at the very top of the castle: six hundred years of forgotten brooms, cloaks and enchantments. The Loft’s owls hand them out as parcels to students who fly well. Nobody knows how the owls choose.'
    ],
    towersIntro: 'Larkspire has four towers, one at each corner of the castle. On their first night, new students climb the stair of the tower they choose, and that tower is theirs for good.',
    staff: [
      { name: 'Headmistress Odile Ferrow', role: 'Runs the school from a study that has to be found again every morning.' },
      { name: 'Captain Bram Whitlow', role: 'Flying master. Lost two fingers to the Long Gallery in 1994 and still flies it every dawn.' },
      { name: 'Old Hesketh', role: 'The Stairwarden. The only person the moving staircases listen to, and only on Tuesdays.' },
      { name: 'Mother Corrie', role: 'Keeper of the Lost Loft and its forty-one owls.' }
    ]
  },

  // The four towers (houses). Used on banners now, the school page, and the tower table in v1.1.
  // crest: stag | heron | fox | wren (drawn by the game). Colours avoid any licensed palette.
  houses: [
    { name: 'Hartwell', crest: 'stag',  animal: 'The Stag',  color: '#6e1f2b', color2: '#efe0c4', virtue: 'Nerve',
      motto: 'Hold the line.', blurb: 'Hartwell flyers pick a line and never flinch from it. They fly straight at the pillar and turn at the last moment, every time.' },
    { name: 'Mirewood', crest: 'heron', animal: 'The Heron', color: '#2e4a2c', color2: '#c98a4b', virtue: 'Patience',
      motto: 'Still wings, sure flight.', blurb: 'Mirewood flyers wait for the gap. They thread the Narrows without a wobble and are rarely the first down.' },
    { name: 'Ashcombe', crest: 'fox',   animal: 'The Fox',   color: '#1c2a4a', color2: '#c7ccd6', virtue: 'Cunning',
      motto: 'Fly close, never touch.', blurb: 'Ashcombe flyers read the corridor before it arrives. They live for the near miss and know every shortcut the castle forgets to hide.' },
    { name: 'Wrenfold', crest: 'wren',  animal: 'The Wren',  color: '#b7862a', color2: '#4a2443', virtue: 'Heart',
      motto: 'Small wings, far flight.', blurb: 'Wrenfold flyers just keep going. They hold the longest streaks in the school and turn up every single morning.' }
  ],
  currency: { one: 'coin', many: 'coins' },

  // Where share links point, plus cross-promotion. Leave newsletter empty to hide it.
  links: {
    site: 'https://jackbraniff86-design.github.io/broom-run/',
    daily5: 'https://thedaily5.co.uk',
    // The Daily 5 Beehiiv signup page. Set its after-signup redirect to <site>#thanks-email.
    newsletter: '',
    // Tally feedback form. Set its after-submit redirect to <site>#thanks-feedback.
    feedback: ''
  },

  modes: { daily: 'Daily Flight', free: 'Free Fly' },

  obstacles: {
    pillar: 'Pillars',
    arch: 'Low arches',
    chandelier: 'Swinging chandeliers',
    stairs: 'Moving staircases',
    books: 'Flying books and owls',
    passage: 'The Narrows'
  },

  kinds: { broom: 'Broom', cloak: 'Cloak', trail: 'Trail' },
  kindsPlural: { broom: 'Brooms', cloak: 'Cloaks', trail: 'Trails', pu: 'Power-ups' },

  // Single-use items carried into Free Fly (and ghost races with power-ups on). Never in the Daily Flight.
  powerups: {
    shield: { name: 'Shield', desc: 'Absorbs one crash.' },
    slow:   { name: 'Slow Charm', desc: 'Slows the castle to half speed for 4 seconds.' },
    magnet: { name: 'Coin Magnet', desc: 'Pulls nearby coins in for 10 seconds.' },
    second: { name: 'Second Wind', desc: 'After a crash, carry on from that spot once. Free Fly only.' }
  },
  stats: { lift: 'lift', handling: 'handling' },

  text: {
    ahead: '{name} ahead',
    close: 'Close!',
    newBest: 'New best',
    offBest: 'Only {m} m off your best',
    boxName: 'Mystery parcel',
    tapToOpen: 'Tap to open',
    shareText: "I flew {m} m on today's Daily Flight #{n} \u{1F9F9} Can you beat me?",
    shareTextFree: 'I flew {m} m in Broom Run \u{1F9F9} Can you beat me?',
    shed: 'Broom shed',
    shareCta: 'Can you beat me?',
    legendaryShare: 'Just found the {item} in Broom Run, a 2% drop. Can you find one?',
    challengeIntro: 'A friend flew {m} m on {course}. Can you beat it?',
    challengeBeat: 'You beat it by {d} m',
    challengeShort: '{d} m short of {m} m',
    challengeBeaten: 'Challenge beaten!',
    raceInvite: 'I flew {m} m in Broom Run. Race my ghost? \u{1F9F9}',
    raceWon: 'Beat you by {d} m \u{1F9F9} {tally}. Rematch?',
    raceLost: 'You beat me by {d} m \u{1F9F9} {tally}. Rematch?',
    raceDraw: 'Dead heat \u{1F9F9} {tally}. Rematch?',
    ghostAhead: '{name}: +{d} m',
    ghostBeaten: 'You\u2019ve beaten {name}\u2019s {m} m',
    saved: 'Saved!',
    daily5: 'Fancy five quick sport questions? Play today\u2019s Daily 5.',
    newsletter: 'Get tomorrow\u2019s flight and five at 7am.',
    crashLines: [
      'Your tower lamp just flickered.',
      'Off to the infirmary tower.',
      'Old Hesketh will want a word.',
      'Even the portraits winced.',
      'Back to first-year flying lessons.',
      'The staircase moved. You didn\u2019t.',
      'Your owl will hear about this.'
    ]
  },

  tiers: {
    common:    { label: 'Common',    color: '#c9c1ae' },
    uncommon:  { label: 'Uncommon',  color: '#6fca8f' },
    rare:      { label: 'Rare',      color: '#6aa8ff' },
    legendary: { label: 'Legendary', color: '#f4b942' }
  },

  // Castle palette used by the renderer.
  palette: {
    night: '#0b0e1c',
    sky: '#16204a',
    stoneFar: '#151a2e',
    stone: '#2a2f45',
    stoneLight: '#3d4360',
    mortar: '#1a1d2c',
    trim: '#8a6a3c',
    candle: '#ffb347',
    flame: '#ffd27a',
    moon: '#f3ead2',
    coin: '#f2c230',
    banners: ['#7a2e3b', '#2f5d46', '#2c4a7a', '#8a6a2a']
  },

  // 40 collectables. Stats are fractions and stay within ±0.10 so skill beats items.
  // broom: color = handle, color2 = bristles. cloak: color = robe, color2 = lining and scarf, stripe = scarf stripe.
  // trail: colors = particle colours. fx: 'shimmer' gives an animated trail.
  items: [
    // Common: starters and cheap shop items
    { id: 'broom-oak',   kind: 'broom', tier: 'common', name: 'Oak Twig',     color: '#7a4a22', color2: '#c9a05a', lift: 0, handling: 0, starter: true },
    { id: 'cloak-black', kind: 'cloak', tier: 'common', name: 'School Black', color: '#1c1a24', color2: '#8e1f2a', stripe: '#e3b341', starter: true },
    { id: 'trail-ember', kind: 'trail', tier: 'common', name: 'Ember',        colors: ['#ffb347', '#ffd27a'], starter: true },
    { id: 'trail-moon',  kind: 'trail', tier: 'common', name: 'Moonlight',    colors: ['#e8eefc', '#b9c8f0'] },
    { id: 'trail-fern',  kind: 'trail', tier: 'common', name: 'Fern',         colors: ['#8fd694', '#c9f2b0'] },
    { id: 'trail-frost', kind: 'trail', tier: 'common', name: 'Frost',        colors: ['#9fe3ff', '#ffffff'] },

    // Uncommon trails
    { id: 'trail-candle',   kind: 'trail', tier: 'uncommon', name: 'Candleflame',      colors: ['#ff8c2a', '#ffe08a', '#ffffff'] },
    { id: 'trail-ink',      kind: 'trail', tier: 'uncommon', name: 'Ink Blot',         colors: ['#3b4cc0', '#7c8cf5'] },
    { id: 'trail-rosehip',  kind: 'trail', tier: 'uncommon', name: 'Rosehip',          colors: ['#ff6f8e', '#ffc2d1'] },
    { id: 'trail-lichen',   kind: 'trail', tier: 'uncommon', name: 'Lichen',           colors: ['#b6d36b', '#e6f5a8'] },
    { id: 'trail-thistle',  kind: 'trail', tier: 'uncommon', name: 'Thistle',          colors: ['#b08cff', '#e1d2ff'] },
    { id: 'trail-marigold', kind: 'trail', tier: 'uncommon', name: 'Marigold',         colors: ['#ffa600', '#ffd36b'] },
    { id: 'trail-dusk',     kind: 'trail', tier: 'uncommon', name: 'Dusk Violet',      colors: ['#7b4fd6', '#ff8fd0'] },
    { id: 'trail-seafoam',  kind: 'trail', tier: 'uncommon', name: 'Seafoam',          colors: ['#4fe0c0', '#c8fff2'] },
    { id: 'trail-copper',   kind: 'trail', tier: 'uncommon', name: 'Copper Spark',     colors: ['#d9773a', '#ffbf87'] },
    { id: 'trail-silver',   kind: 'trail', tier: 'uncommon', name: 'Starlight Silver', colors: ['#d7dce8', '#ffffff', '#a8b3cc'] },

    // Uncommon cloaks
    { id: 'cloak-heather',  kind: 'cloak', tier: 'uncommon', name: 'Heather',       color: '#5b3f6e', color2: '#c7a2d9' },
    { id: 'cloak-pine',     kind: 'cloak', tier: 'uncommon', name: 'Pine',          color: '#1f4a36', color2: '#d8c27a' },
    { id: 'cloak-burgundy', kind: 'cloak', tier: 'uncommon', name: 'Burgundy',      color: '#5e1a26', color2: '#e0b04f' },
    { id: 'cloak-slate',    kind: 'cloak', tier: 'uncommon', name: 'Slate',         color: '#3a4250', color2: '#9fb6c9' },
    { id: 'cloak-mustard',  kind: 'cloak', tier: 'uncommon', name: 'Mustard',       color: '#8a6a1a', color2: '#2a2a2a' },
    { id: 'cloak-midnight', kind: 'cloak', tier: 'uncommon', name: 'Midnight Blue', color: '#1a2650', color2: '#c0c8e8' },

    // Rare brooms: a look plus a small stat
    { id: 'broom-larch',      kind: 'broom', tier: 'rare', name: 'Larch Swift',    color: '#9a6a3a', color2: '#e0c080', lift: 0.04, handling: 0 },
    { id: 'broom-hazel',      kind: 'broom', tier: 'rare', name: 'Hazel Glide',    color: '#6e4a2a', color2: '#d8b070', lift: 0, handling: 0.04 },
    { id: 'broom-birch',      kind: 'broom', tier: 'rare', name: 'Birch Comet',    color: '#d8d0c0', color2: '#a08050', lift: 0.06, handling: -0.02 },
    { id: 'broom-rowan',      kind: 'broom', tier: 'rare', name: 'Rowan Drift',    color: '#8a3a2a', color2: '#d0a060', lift: -0.02, handling: 0.06 },
    { id: 'broom-ash',        kind: 'broom', tier: 'rare', name: 'Ash Arrow',      color: '#b0a090', color2: '#e8d8a8', lift: 0.05, handling: 0 },
    { id: 'broom-elder',      kind: 'broom', tier: 'rare', name: 'Elder Whisper',  color: '#4a3a2a', color2: '#b8a070', lift: 0, handling: 0.05 },
    { id: 'broom-willow',     kind: 'broom', tier: 'rare', name: 'Willow Wisp',    color: '#8a8a5a', color2: '#d8d8a0', lift: 0.03, handling: 0.03 },
    { id: 'broom-yew',        kind: 'broom', tier: 'rare', name: 'Yew Thunder',    color: '#5a2a1a', color2: '#c08040', lift: 0.08, handling: -0.04 },
    { id: 'broom-cherry',     kind: 'broom', tier: 'rare', name: 'Cherry Feather', color: '#9a3a3a', color2: '#f0c0a0', lift: -0.03, handling: 0.08 },
    { id: 'broom-blackthorn', kind: 'broom', tier: 'rare', name: 'Blackthorn',     color: '#2a2020', color2: '#8a7050', lift: 0.07, handling: 0 },
    { id: 'broom-hawthorn',   kind: 'broom', tier: 'rare', name: 'Hawthorn Hover', color: '#7a5a3a', color2: '#e0d0a0', lift: 0, handling: 0.07 },
    { id: 'broom-silverbirch',kind: 'broom', tier: 'rare', name: 'Silver Birch',   color: '#e0e0e8', color2: '#b0b8c8', lift: 0.04, handling: 0.04 },

    // Legendary brooms and cloaks, each with an animated trail
    { id: 'broom-midnight', kind: 'broom', tier: 'legendary', name: 'Midnight Broom', color: '#141428', color2: '#6a7cff', lift: 0.08, handling: 0.06, fx: 'shimmer', lore: 'Only ever flown after dark. It hums when the moon is out.' },
    { id: 'broom-phoenix',  kind: 'broom', tier: 'legendary', name: 'Cinderwing',    color: '#3a1a10', color2: '#ff7a2a', lift: 0.10, handling: 0.04, fx: 'shimmer', lore: 'Cut from the ash tree that survived the West Tower fire of 1711.' },
    { id: 'broom-aurora',   kind: 'broom', tier: 'legendary', name: 'Aurora Glide',   color: '#2a4a5a', color2: '#7affd8', lift: 0.06, handling: 0.10, fx: 'shimmer', lore: 'Made by a Wrenfold student who flew north until the sky turned green.' },
    { id: 'cloak-starweave',kind: 'cloak', tier: 'legendary', name: 'Starweave Cloak',color: '#10183a', color2: '#ffe7a0', fx: 'shimmer', lore: 'Woven in the Lost Loft by somebody nobody remembers.' },
    { id: 'cloak-ember',    kind: 'cloak', tier: 'legendary', name: 'Ember Mantle',   color: '#4a1210', color2: '#ffae3a', fx: 'shimmer', lore: 'Always warm. Captain Whitlow wants it back.' },
    { id: 'cloak-moonmist', kind: 'cloak', tier: 'legendary', name: 'Moonmist Cloak', color: '#3a4a6a', color2: '#e8f0ff', fx: 'shimmer', lore: 'Smells faintly of sea fog off the Larkspire cliffs.' }
  ]
};
