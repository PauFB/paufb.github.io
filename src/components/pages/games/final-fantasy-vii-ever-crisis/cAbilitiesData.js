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
    description: "PDEF is increased. [Pot.: {{pDefIncreasePot}}] [Rng.: Single Ally] [Dur.: {{pDefIncreaseDur}}]. [Ext.: {{pDefIncreaseExt}}] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{healPot}} of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "30s", pDefIncreaseExt: "+10s", healPot: "9%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "11%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "11%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "11%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "11%" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "11%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "12%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "12%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "12%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34s", pDefIncreaseExt: "+11s", healPot: "12%" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "38s", pDefIncreaseExt: "+12s", healPot: "13%" }
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
    description: "MDEF is increased. [Pot.: {{mDefIncreasePot}}] [Rng.: All Allies] [Dur.: {{mDefIncreaseDur}}]. [Ext.: {{mDefIncreaseExt}}] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{healPot}} of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "10s", mDefIncreaseExt: "+3s", healPot: "4%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "5%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "5%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "5%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "5%" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "5%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "6%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "6%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "6%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12s", mDefIncreaseExt: "+4s", healPot: "6%" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "14s", mDefIncreaseExt: "+4s", healPot: "6%" }
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
  }
};
