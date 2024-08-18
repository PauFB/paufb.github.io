export const cAbilitiesData = {
  "Braver": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng: Single Enemy] ([Crit rate: 10%]).\nAlso, when matching sigils are destroyed, x1.5 damage.",
    valuesByOverboost: [
      { damage: "400%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "750%" }
    ]
  },
  "Blast Wave": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng: All Enemies] ([Crit rate: 10%]).\nAlso, PATK is decreased. [Pot.: {{pAtkDecreasePot}}] [Rng: All Enemies] [Dur.: {{pAtkDecreaseDur}}]. [Ext.: {{pAtkDecreaseExt}}] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "220%", pAtkDecreasePot: "Low", pAtkDecreaseDur: "20s", pAtkDecreaseExt: "+6s" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "310%", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22s", pAtkDecreaseExt: "+7s" },
      { damage: "310%", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22s", pAtkDecreaseExt: "+7s" },
      { damage: "310%", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22s", pAtkDecreaseExt: "+7s" },
      { damage: "310%", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22s", pAtkDecreaseExt: "+7s" },
      { damage: "350%", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "25s", pAtkDecreaseExt: "+8s" }
    ]
  },
  "Armor Break": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PDEF is decreased. [Pot.: {{pAtkDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{pAtkDecreaseDur}}]. [Ext.: {{pAtkDecreaseExt}}] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "320%", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "20s", pAtkDecreaseExt: "+6s" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "450%", pAtkDecreasePot: "High", pAtkDecreaseDur: "22s", pAtkDecreaseExt: "+7s" },
      { damage: "450%", pAtkDecreasePot: "High", pAtkDecreaseDur: "22s", pAtkDecreaseExt: "+7s" },
      { damage: "450%", pAtkDecreasePot: "High", pAtkDecreaseDur: "22s", pAtkDecreaseExt: "+7s" },
      { damage: "450%", pAtkDecreasePot: "High", pAtkDecreaseDur: "22s", pAtkDecreaseExt: "+7s" },
      { damage: "510%", pAtkDecreasePot: "High", pAtkDecreaseDur: "25s", pAtkDecreaseExt: "+8s" }
    ]
  },
  "Blade Burst": {
    description: "Deal {{damage}} Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%])",
    valuesByOverboost: [
      { damage: "500%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "940%" }
    ]
  },
  "Stalwart Barrier": {
    description: "PDEF is increased. [Pot.: {{pDefIncreasePot}}] [Rng.: Single Ally] [Dur.: {{pDefIncreaseDur}}]. [Ext.: {{pDefIncreaseExt}}] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{heal}} of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "30s", pDefIncreaseExt: "+10s", heal: "9%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "11%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "11%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "11%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "11%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "11%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "12%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "12%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "12%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", heal: "12%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "38s", pDefIncreaseExt: "+12s", heal: "13%" }
    ]
  },
  "Thunderstrike": {
    description: "Deal {{damage}} Phys. Lightning damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "400%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "750%" }
    ]
  },
  "Shock Slice": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, Ailment: Stun is applied [Rng.: Single Enemy] [Rate: {{stunRate}}]. [Dur.: 5s] [Ext.: +2s]",
    valuesByOverboost: [
      { damage: "400%", stunRate: "20%" },
      { damage: "", stunRate: "" },
      { damage: "", stunRate: "" },
      { damage: "", stunRate: "" },
      { damage: "", stunRate: "" },
      { damage: "", stunRate: "" },
      { damage: "620%", stunRate: "30%" },
      { damage: "620%", stunRate: "30%" },
      { damage: "620%", stunRate: "30%" },
      { damage: "620%", stunRate: "30%" },
      { damage: "750%", stunRate: "30%" }
    ]
  },
  "Healing Wave": {
    description: "Mag. heal is cast. [Pot.: {{heal}} of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { heal: "50%" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "65%" },
      { heal: "65%" },
      { heal: "65%" },
      { heal: "65%" },
      { heal: "71%" }
    ]
  },
  "Blizzaga A": {
    description: "Deal {{damage}} Mag. Ice damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "280%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "440%" },
      { damage: "440%" },
      { damage: "440%" },
      { damage: "440%" },
      { damage: "520%" }
    ]
  },
  "Disorder": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nNo boosts to limit and summon gauges when using this ability.",
    valuesByOverboost: [
      { damage: "850%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "1,320%" },
      { damage: "1,320%" },
      { damage: "1,320%" },
      { damage: "1,320%" },
      { damage: "1,600%" }
    ]
  },
  "Bloody End": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "500%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "940%" }
    ]
  },
  "Seasplitter": {
    description: "Deal {{damage}} Phys. Water damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "400%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "750%" }
    ]
  },
  "Blizzara Surge": {
    description: "Deal {{damage}} Mag. Ice damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "320%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "430%" },
      { damage: "430%" },
      { damage: "430%" },
      { damage: "430%" },
      { damage: "450%" }
    ]
  },
  "Sanctuary": {
    description: "MDEF is increased. [Pot.: {{mDefIncreasePot}}] [Rng.: All Allies] [Dur.: {{mDefIncreaseDur}}]. [Ext.: {{mDefIncreaseExt}}] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{heal}} of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "10s", mDefIncreaseExt: "+3s", heal: "4%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "5%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "5%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "5%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "5%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "5%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "6%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "6%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "6%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", heal: "6%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "14s", mDefIncreaseExt: "+4s", heal: "6%" }
    ]
  },
  "Blazing Strike": {
    description: "Deal {{damage}} Phys. Fire damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "480%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "710%" },
      { damage: "710%" },
      { damage: "710%" },
      { damage: "710%" },
      { damage: "850%" }
    ]
  },
  "Free Energy": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "650%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "1,140%" },
      { damage: "1,140%" },
      { damage: "1,140%" },
      { damage: "1,140%" },
      { damage: "1,300%" }
    ]
  },
  "Quakera Surge A": {
    description: "Deal {{damage}} Mag. Earth damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "290%" }
    ]
  },
  "Freezing Stream": {
    description: "Deal {{damage}} Phys. Ice damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "500%" },
      { damage: "600%" },
      { damage: "600%" },
      { damage: "600%" },
      { damage: "600%" },
      { damage: "600%" },
      { damage: "740%" },
      { damage: "740%" },
      { damage: "740%" },
      { damage: "740%" },
      { damage: "900%" }
    ]
  },
  "Fira Surge A": {
    description: "Deal {{damage}} Mag. Fire damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210%" },
      { damage: "240%" },
      { damage: "240%" },
      { damage: "240%" },
      { damage: "240%" },
      { damage: "240%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "290%" }
    ]
  },
  "Fierce Charged Slash": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PDEF is decreased. [Pot.: Mid] [Rng.: Single Enemy] [Dur.: {{pDefDecreaseDur}}]. [Ext.: {{pDefDecreaseExt}}] [Max. pot.: Mid]\nWhen [Rng.: Self]'s HP is 50% or more, PATK is increased. [Pot.: {{pAtkIncreasePot}}] [Rng.: Self] [Dur.: {{pAtkIncreaseDur}}]. [Ext.: {{pAtkIncreaseExt}}] [Max. pot.: {{pAtkIncreaseMaxPot}}]",
    valuesByOverboost: [
      { damage: "530%", pDefDecreaseDur: "20s", pDefDecreaseExt: "+6s", pAtkIncreasePot: "Mid", pAtkIncreaseDur: "25s", pAtkIncreaseExt: "+5s", pAtkIncreaseMaxPot: "Mid" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "740%", pDefDecreaseDur: "26s", pDefDecreaseExt: "+8s", pAtkIncreasePot: "High", pAtkIncreaseDur: "30s", pAtkIncreaseExt: "+6s", pAtkIncreaseMaxPot: "High" },
      { damage: "740%", pDefDecreaseDur: "26s", pDefDecreaseExt: "+8s", pAtkIncreasePot: "High", pAtkIncreaseDur: "30s", pAtkIncreaseExt: "+6s", pAtkIncreaseMaxPot: "High" },
      { damage: "740%", pDefDecreaseDur: "26s", pDefDecreaseExt: "+8s", pAtkIncreasePot: "High", pAtkIncreaseDur: "30s", pAtkIncreaseExt: "+6s", pAtkIncreaseMaxPot: "High" },
      { damage: "740%", pDefDecreaseDur: "26s", pDefDecreaseExt: "+8s", pAtkIncreasePot: "High", pAtkIncreaseDur: "30s", pAtkIncreaseExt: "+6s", pAtkIncreaseMaxPot: "High" },
      { damage: "850%", pDefDecreaseDur: "30s", pDefDecreaseExt: "+10s", pAtkIncreasePot: "High", pAtkIncreaseDur: "35s", pAtkIncreaseExt: "+7s", pAtkIncreaseMaxPot: "High" }
    ]
  },
  "Blizzara Surge A": {
    description: "Deal {{damage}} Mag. Ice damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "290%" }
    ]
  },
  "Fira Impact": {
    description: "Deal {{damage}} Phys. Fire damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "320%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "430%" },
      { damage: "430%" },
      { damage: "430%" },
      { damage: "430%" },
      { damage: "450%" }
    ]
  },
  "Blitz Beat": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "400%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "750%" }
    ]
  },
  "Agitation": {
    description: "PDEF is increased. [Pot.: {{pDefIncreasePot}}] [Rng.: All Allies] [Dur.: {{pDefIncreaseDur}}]. [Ext.: {{pDefIncreaseExt}}] [Max. pot.: High]\nAlso, Phys. heal is cast. [Pot.: {{heal}} of Healing pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "10s", pDefIncreaseExt: "+3s", heal: "4%" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "12s", pDefIncreaseExt: "+4s", heal: "6%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "12s", pDefIncreaseExt: "+4s", heal: "6%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "12s", pDefIncreaseExt: "+4s", heal: "6%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "12s", pDefIncreaseExt: "+4s", heal: "6%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "14s", pDefIncreaseExt: "+4s", heal: "6%" }
    ]
  },
  "Stalwart Manaward": {
    description: "MDEF is increased. [Pot.: {{mDefIncreasePot}}] [Rng.: Single Ally] [Dur.: {{mDefIncreaseDur}}]. [Ext.: {{mDefIncreaseExt}}] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{heal}} of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "30s", mDefIncreaseExt: "+10s", heal: "9%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "11%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "11%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "11%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "11%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "11%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "12%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "12%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "12%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34s", mDefIncreaseExt: "+11s", heal: "12%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "38s", mDefIncreaseExt: "+12s", heal: "13%" }
    ]
  },
  "Stalwart Faith": {
    description: "MATK is increased. [Pot.: {{mAtkIncreasePot}}] [Rng.: Single Ally] [Dur.: {{mAtkIncreaseDur}}]. [Ext.: {{mAtkIncreaseExt}}] [Max. pot.: High]\nAlso, Regen is applied [Rng.: Single Ally]. [Dur.: {{regenDur}}] [Ext.: +3s]\nMag. heal is cast. [Pot.: {{heal}} of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "30s", mAtkIncreaseExt: "+10s", regenDur: "9s", heal: "9%" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "11%" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "11%" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "11%" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "11%" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "11%" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "12%" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "12%" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "12%" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34s", mAtkIncreaseExt: "+11s", regenDur: "12s", heal: "12%" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "38s", mAtkIncreaseExt: "+12s", regenDur: "15s", heal: "13%" }
    ]
  },
  "Quick Burst": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] (Crit rate: 10%).\nAlso, PDEF is decreased. [Pot.: {{pDefDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{pDefDecreaseDur}}]. [Ext.: {{pDefDecreaseExt}}] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "320%", pDefDecreasePot: "Mid", pDefDecreaseDur: "20s", pDefDecreaseExt: "+6s" },
      { damage: "370%", pDefDecreasePot: "Mid", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "370%", pDefDecreasePot: "Mid", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "370%", pDefDecreasePot: "Mid", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "370%", pDefDecreasePot: "Mid", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "370%", pDefDecreasePot: "Mid", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "450%", pDefDecreasePot: "High", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "450%", pDefDecreasePot: "High", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "450%", pDefDecreasePot: "High", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "450%", pDefDecreasePot: "High", pDefDecreaseDur: "22s", pDefDecreaseExt: "+7s" },
      { damage: "510%", pDefDecreasePot: "High", pDefDecreaseDur: "25s", pDefDecreaseExt: "+8s" }
    ]
  },
  "Doom Impact": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, MATK is decreased. [Pot.: {{mAtkDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{mAtkDecreaseDur}}]. [Ext.: {{mAtkDecreaseExt}}] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "320%", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "20s", mAtkDecreaseExt: "+6s" },
      { damage: "370%", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "370%", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "370%", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "370%", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "370%", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "450%", mAtkDecreasePot: "High", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "450%", mAtkDecreasePot: "High", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "450%", mAtkDecreasePot: "High", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "450%", mAtkDecreasePot: "High", mAtkDecreaseDur: "22s", mAtkDecreaseExt: "+7s" },
      { damage: "510%", mAtkDecreasePot: "High", mAtkDecreaseDur: "25s", mAtkDecreaseExt: "+8s" }
    ]
  },
  "Chain Bomber": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: All Enemies] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "350%" },
      { damage: "420%" },
      { damage: "420%" },
      { damage: "420%" },
      { damage: "420%" },
      { damage: "420%" },
      { damage: "550%" },
      { damage: "550%" },
      { damage: "550%" },
      { damage: "550%" },
      { damage: "650%" }
    ]
  },
  "Energy Laser": {
    description: "Deal {{damage}} Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "400%" },
      { damage: "480%" },
      { damage: "480%" },
      { damage: "480%" },
      { damage: "480%" },
      { damage: "480%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "620%" },
      { damage: "750%" }
    ]
  },
  "Firaga A": {
    description: "Deal {{damage}} Mag. Fire damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "280%" },
      { damage: "340%" },
      { damage: "340%" },
      { damage: "340%" },
      { damage: "340%" },
      { damage: "340%" },
      { damage: "440%" },
      { damage: "440%" },
      { damage: "440%" },
      { damage: "440%" },
      { damage: "520%" }
    ]
  },
  "Pyroball": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "500%" },
      { damage: "600%" },
      { damage: "600%" },
      { damage: "600%" },
      { damage: "600%" },
      { damage: "600%" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "780%" },
      { damage: "940%" }
    ]
  },
  "Solid Barrier": {
    description: "PDEF is increased. [Pot.: Mid] [Rng.: Single Ally] [Dur.: {{pDefIncreaseDur}}]. [Ext.: {{pDefIncreaseExt}}] [Max. pot.: {{pDefIncreaseMaxPot}}]\nAlso, Mag. heal is cast. [Pot.: {{heal}} of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { pDefIncreaseDur: "30s", pDefIncreaseExt: "+10s", pDefIncreaseMaxPot: "Mid", heal: "9%" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", pDefIncreaseMaxPot: "High", heal: "12%" },
      { pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", pDefIncreaseMaxPot: "High", heal: "12%" },
      { pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", pDefIncreaseMaxPot: "High", heal: "12%" },
      { pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", pDefIncreaseMaxPot: "High", heal: "12%" },
      { pDefIncreaseDur: "38s", pDefIncreaseExt: "+12s", pDefIncreaseMaxPot: "High", heal: "13%" }
    ]
  },
  "Jet Fists": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]). The lower your HP, the higher the ability pot. (max: x3).",
    valuesByOverboost: [
      { damage: "270%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "420%" },
      { damage: "420%" },
      { damage: "420%" },
      { damage: "420%" },
      { damage: "500%" }
    ]
  },
  "Manara Breach Surge": {
    description: "Deal {{damage}} Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, MDEF is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: {{mDefDecreaseDur}}]. [Ext.: {{mDefDecreaseExt}}] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "260%", mDefDecreaseDur: "20s", mDefDecreaseExt: "+6s" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "350%", mDefDecreaseDur: "25s", mDefDecreaseExt: "+7s" },
      { damage: "350%", mDefDecreaseDur: "25s", mDefDecreaseExt: "+7s" },
      { damage: "350%", mDefDecreaseDur: "25s", mDefDecreaseExt: "+7s" },
      { damage: "350%", mDefDecreaseDur: "25s", mDefDecreaseExt: "+7s" },
      { damage: "360%", mDefDecreaseDur: "28s", mDefDecreaseExt: "+9s" }
    ]
  },
  "Watera Surge A": {
    description: "Deal {{damage}} Mag. Water damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210%" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "280%" },
      { damage: "290%" }
    ]
  },
  "Energization": {
    description: "Deal {{damage}} Mag. Lightning damage [Rng.: All Enemies].\nAlso, PATK is decreased. [Pot.: Mid] [Rng.: All Enemies] [Dur.: {{pAtkDecreaseDur}}]. [Ext.: {{pAtkDecreaseExt}}] [Max. pot.: {{pAtkDecreaseMaxPot}}]\nWhen [Rng.: Self]'s HP is 50% or more, MATK is decreased. [Pot.: Mid] [Rng.: All Enemies] [Dur.: {{mAtkDecreaseDur}}]. [Ext.: {{mAtkDecreaseExt}}] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "340%", pAtkDecreaseDur: "20s", pAtkDecreaseExt: "+6s", pAtkDecreaseMaxPot: "Mid", mAtkDecreaseDur: "20s", mAtkDecreaseExt: "+6s" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "480%", pAtkDecreaseDur: "26s", pAtkDecreaseExt: "+8s", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "26s", mAtkDecreaseExt: "+8s" },
      { damage: "480%", pAtkDecreaseDur: "26s", pAtkDecreaseExt: "+8s", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "26s", mAtkDecreaseExt: "+8s" },
      { damage: "480%", pAtkDecreaseDur: "26s", pAtkDecreaseExt: "+8s", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "26s", mAtkDecreaseExt: "+8s" },
      { damage: "480%", pAtkDecreaseDur: "26s", pAtkDecreaseExt: "+8s", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "26s", mAtkDecreaseExt: "+8s" },
      { damage: "540%", pAtkDecreaseDur: "30s", pAtkDecreaseExt: "+10s", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "30s", mAtkDecreaseExt: "+10s" }
    ]
  },
  "Dorsal Fin Shot": {
    description: "Deal {{damage}} Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, Fire Resist. is decreased. [Pot.: {{fireResistDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{fireResistDecreaseDur}}]. [Ext.: {{fireResistDecreaseExt}}] [Max. pot.: High]\nWhen [Rng.: Self]'s HP is 50% or more, Water Resist. is decreased. [Pot.: {{waterResistDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{waterResistDecreaseDur}}]. [Ext.: {{waterResistDecreaseExt}}] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "260%", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "16s", fireResistDecreaseExt: "+5s", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "16s", waterResistDecreaseExt: "+5s" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "360%", fireResistDecreasePot: "High", fireResistDecreaseDur: "20s", fireResistDecreaseExt: "+6s", waterResistDecreasePot: "High", waterResistDecreaseDur: "20s", waterResistDecreaseExt: "+6s" },
      { damage: "360%", fireResistDecreasePot: "High", fireResistDecreaseDur: "20s", fireResistDecreaseExt: "+6s", waterResistDecreasePot: "High", waterResistDecreaseDur: "20s", waterResistDecreaseExt: "+6s" },
      { damage: "360%", fireResistDecreasePot: "High", fireResistDecreaseDur: "20s", fireResistDecreaseExt: "+6s", waterResistDecreasePot: "High", waterResistDecreaseDur: "20s", waterResistDecreaseExt: "+6s" },
      { damage: "360%", fireResistDecreasePot: "High", fireResistDecreaseDur: "20s", fireResistDecreaseExt: "+6s", waterResistDecreasePot: "High", waterResistDecreaseDur: "20s", waterResistDecreaseExt: "+6s" },
      { damage: "420%", fireResistDecreasePot: "High", fireResistDecreaseDur: "24s", fireResistDecreaseExt: "+8s", waterResistDecreasePot: "High", waterResistDecreaseDur: "24s", waterResistDecreaseExt: "+8s" }
    ]
  }
};
