export const cAbilitiesData = {
  "Braver": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng: Single Enemy] ([Crit rate: 10%]).\nAlso, when matching sigils are destroyed, x1.5 damage.",
    valuesByOverboost: [
      { damage: "400" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "750" }
    ]
  },
  "Blast Wave": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng: All Enemies] ([Crit rate: 10%]).\nAlso, PATK is decreased. [Pot.: {{pAtkDecreasePot}}] [Rng: All Enemies] [Dur.: {{pAtkDecreaseDur}}s]. [Ext.: +{{pAtkDecreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "220", pAtkDecreasePot: "Low", pAtkDecreaseDur: "20", pAtkDecreaseExt: "6" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "310", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "310", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "310", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "310", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "25", pAtkDecreaseExt: "8" }
    ]
  },
  "Armor Break": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PDEF is decreased. [Pot.: {{pAtkDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{pAtkDecreaseDur}}s]. [Ext.: +{{pAtkDecreaseExt}}s] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "320", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "20", pAtkDecreaseExt: "6" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreasePot: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "450", pAtkDecreasePot: "High", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "450", pAtkDecreasePot: "High", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "450", pAtkDecreasePot: "High", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "450", pAtkDecreasePot: "High", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "510", pAtkDecreasePot: "High", pAtkDecreaseDur: "25", pAtkDecreaseExt: "8" }
    ]
  },
  "Blade Burst": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "500" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "940" }
    ]
  },
  "Stalwart Barrier": {
    description: "PDEF is increased. [Pot.: {{pDefIncreasePot}}] [Rng.: Single Ally] [Dur.: {{pDefIncreaseDur}}s]. [Ext.: +{{pDefIncreaseExt}}s] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "30", pDefIncreaseExt: "10", heal: "9" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "11" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "11" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "11" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "11" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "11" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34", pDefIncreaseExt: "11", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "38", pDefIncreaseExt: "12", heal: "13" }
    ]
  },
  "Thunderstrike": {
    description: "Deal {{damage}}% Phys. Lightning damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "400" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "750" }
    ]
  },
  "Shock Slice": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, Ailment: Stun is applied [Rng.: Single Enemy] [Rate: {{stunRate}}%]. [Dur.: 5s] [Ext.: +2s]",
    valuesByOverboost: [
      { damage: "400", stunRate: "20" },
      { damage: "", stunRate: "" },
      { damage: "", stunRate: "" },
      { damage: "", stunRate: "" },
      { damage: "", stunRate: "" },
      { damage: "", stunRate: "" },
      { damage: "620", stunRate: "30" },
      { damage: "620", stunRate: "30" },
      { damage: "620", stunRate: "30" },
      { damage: "620", stunRate: "30" },
      { damage: "750", stunRate: "30" }
    ]
  },
  "Healing Wave": {
    description: "Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { heal: "50" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "65" },
      { heal: "65" },
      { heal: "65" },
      { heal: "65" },
      { heal: "71" }
    ]
  },
  "Blizzaga A (1)": {
    description: "Deal {{damage}}% Mag. Ice damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "280" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "440" },
      { damage: "440" },
      { damage: "440" },
      { damage: "440" },
      { damage: "520" }
    ]
  },
  "Disorder": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nNo boosts to limit and summon gauges when using this ability.",
    valuesByOverboost: [
      { damage: "850" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "1,320" },
      { damage: "1,320" },
      { damage: "1,320" },
      { damage: "1,320" },
      { damage: "1,600" }
    ]
  },
  "Bloody End": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "500" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "940" }
    ]
  },
  "Seasplitter": {
    description: "Deal {{damage}}% Phys. Water damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "400" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "750" }
    ]
  },
  "Blizzara Surge (1)": {
    description: "Deal {{damage}}% Mag. Ice damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "320" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "450" }
    ]
  },
  "Sanctuary": {
    description: "MDEF is increased. [Pot.: {{mDefIncreasePot}}] [Rng.: All Allies] [Dur.: {{mDefIncreaseDur}}s]. [Ext.: +{{mDefIncreaseExt}}s] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "10", mDefIncreaseExt: "3", heal: "4" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "5" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "5" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "5" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "5" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "5" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "6" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "6" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "6" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "6" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "14", mDefIncreaseExt: "4", heal: "6" }
    ]
  },
  "Blazing Strike": {
    description: "Deal {{damage}}% Phys. Fire damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "480" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "710" },
      { damage: "710" },
      { damage: "710" },
      { damage: "710" },
      { damage: "850" }
    ]
  },
  "Free Energy": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "650" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "1,140" },
      { damage: "1,140" },
      { damage: "1,140" },
      { damage: "1,140" },
      { damage: "1,300" }
    ]
  },
  "Quakera Surge A": {
    description: "Deal {{damage}}% Mag. Earth damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "290" }
    ]
  },
  "Freezing Stream": {
    description: "Deal {{damage}}% Phys. Ice damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "500" },
      { damage: "600" },
      { damage: "600" },
      { damage: "600" },
      { damage: "600" },
      { damage: "600" },
      { damage: "740" },
      { damage: "740" },
      { damage: "740" },
      { damage: "740" },
      { damage: "900" }
    ]
  },
  "Fira Surge A": {
    description: "Deal {{damage}}% Mag. Fire damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210" },
      { damage: "240" },
      { damage: "240" },
      { damage: "240" },
      { damage: "240" },
      { damage: "240" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "290" }
    ]
  },
  "Fierce Charged Slash": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PDEF is decreased. [Pot.: Mid] [Rng.: Single Enemy] [Dur.: {{pDefDecreaseDur}}s]. [Ext.: +{{pDefDecreaseExt}}s] [Max. pot.: Mid]\nWhen [Rng.: Self]'s HP is 50% or more, PATK is increased. [Pot.: {{pAtkIncreasePot}}] [Rng.: Self] [Dur.: {{pAtkIncreaseDur}}s]. [Ext.: +{{pAtkIncreaseExt}}s] [Max. pot.: {{pAtkIncreaseMaxPot}}]",
    valuesByOverboost: [
      { damage: "530", pDefDecreaseDur: "20", pDefDecreaseExt: "6", pAtkIncreasePot: "Mid", pAtkIncreaseDur: "25", pAtkIncreaseExt: "5", pAtkIncreaseMaxPot: "Mid" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "" },
      { damage: "740", pDefDecreaseDur: "26", pDefDecreaseExt: "8", pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "6", pAtkIncreaseMaxPot: "High" },
      { damage: "740", pDefDecreaseDur: "26", pDefDecreaseExt: "8", pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "6", pAtkIncreaseMaxPot: "High" },
      { damage: "740", pDefDecreaseDur: "26", pDefDecreaseExt: "8", pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "6", pAtkIncreaseMaxPot: "High" },
      { damage: "740", pDefDecreaseDur: "26", pDefDecreaseExt: "8", pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "6", pAtkIncreaseMaxPot: "High" },
      { damage: "850", pDefDecreaseDur: "30", pDefDecreaseExt: "10", pAtkIncreasePot: "High", pAtkIncreaseDur: "35", pAtkIncreaseExt: "7", pAtkIncreaseMaxPot: "High" }
    ]
  },
  "Blizzara Surge A (1)": {
    description: "Deal {{damage}}% Mag. Ice damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "290" }
    ]
  },
  "Fira Impact": {
    description: "Deal {{damage}}% Phys. Fire damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "320" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "450" }
    ]
  },
  "Blitz Beat": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "400" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "750" }
    ]
  },
  "Agitation": {
    description: "PDEF is increased. [Pot.: {{pDefIncreasePot}}] [Rng.: All Allies] [Dur.: {{pDefIncreaseDur}}s]. [Ext.: +{{pDefIncreaseExt}}s] [Max. pot.: High]\nAlso, Phys. heal is cast. [Pot.: {{heal}}% of Healing pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "10", pDefIncreaseExt: "3", heal: "4" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "12", pDefIncreaseExt: "4", heal: "6" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "12", pDefIncreaseExt: "4", heal: "6" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "12", pDefIncreaseExt: "4", heal: "6" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "12", pDefIncreaseExt: "4", heal: "6" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "14", pDefIncreaseExt: "4", heal: "6" }
    ]
  },
  "Stalwart Manaward (1)": {
    description: "MDEF is increased. [Pot.: {{mDefIncreasePot}}] [Rng.: Single Ally] [Dur.: {{mDefIncreaseDur}}s]. [Ext.: +{{mDefIncreaseExt}}s] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "30", mDefIncreaseExt: "10", heal: "9" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "11" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "11" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "11" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "11" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "11" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "12" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "12" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "12" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "12" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "38", mDefIncreaseExt: "12", heal: "13" }
    ]
  },
  "Stalwart Faith": {
    description: "MATK is increased. [Pot.: {{mAtkIncreasePot}}] [Rng.: Single Ally] [Dur.: {{mAtkIncreaseDur}}s]. [Ext.: +{{mAtkIncreaseExt}}s] [Max. pot.: High]\nAlso, Regen is applied [Rng.: Single Ally]. [Dur.: {{regenDur}}s] [Ext.: +3s]\nMag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "30", mAtkIncreaseExt: "10", regenDur: "9", heal: "9" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "38", mAtkIncreaseExt: "12", regenDur: "15", heal: "13" }
    ]
  },
  "Quick Burst": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] (Crit rate: 10%).\nAlso, PDEF is decreased. [Pot.: {{pDefDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{pDefDecreaseDur}}s]. [Ext.: +{{pDefDecreaseExt}}s] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "320", pDefDecreasePot: "Mid", pDefDecreaseDur: "20", pDefDecreaseExt: "6" },
      { damage: "370", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "370", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "370", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "370", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "370", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "450", pDefDecreasePot: "High", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "450", pDefDecreasePot: "High", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "450", pDefDecreasePot: "High", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "450", pDefDecreasePot: "High", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "510", pDefDecreasePot: "High", pDefDecreaseDur: "25", pDefDecreaseExt: "8" }
    ]
  },
  "Doom Impact": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, MATK is decreased. [Pot.: {{mAtkDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{mAtkDecreaseDur}}s]. [Ext.: +{{mAtkDecreaseExt}}s] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "320", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "20", mAtkDecreaseExt: "6" },
      { damage: "370", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "370", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "370", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "370", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "370", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "450", mAtkDecreasePot: "High", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "450", mAtkDecreasePot: "High", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "450", mAtkDecreasePot: "High", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "450", mAtkDecreasePot: "High", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "510", mAtkDecreasePot: "High", mAtkDecreaseDur: "25", mAtkDecreaseExt: "8" }
    ]
  },
  "Chain Bomber": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: All Enemies] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "350" },
      { damage: "420" },
      { damage: "420" },
      { damage: "420" },
      { damage: "420" },
      { damage: "420" },
      { damage: "550" },
      { damage: "550" },
      { damage: "550" },
      { damage: "550" },
      { damage: "650" }
    ]
  },
  "Energy Laser": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "400" },
      { damage: "480" },
      { damage: "480" },
      { damage: "480" },
      { damage: "480" },
      { damage: "480" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "620" },
      { damage: "750" }
    ]
  },
  "Firaga A": {
    description: "Deal {{damage}}% Mag. Fire damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "280" },
      { damage: "340" },
      { damage: "340" },
      { damage: "340" },
      { damage: "340" },
      { damage: "340" },
      { damage: "440" },
      { damage: "440" },
      { damage: "440" },
      { damage: "440" },
      { damage: "520" }
    ]
  },
  "Pyroball": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "500" },
      { damage: "600" },
      { damage: "600" },
      { damage: "600" },
      { damage: "600" },
      { damage: "600" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "940" }
    ]
  },
  "Solid Barrier": {
    description: "PDEF is increased. [Pot.: Mid] [Rng.: Single Ally] [Dur.: {{pDefIncreaseDur}}s]. [Ext.: +{{pDefIncreaseExt}}s] [Max. pot.: {{pDefIncreaseMaxPot}}]\nAlso, Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { pDefIncreaseDur: "30", pDefIncreaseExt: "10", pDefIncreaseMaxPot: "Mid", heal: "9" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "", pDefIncreaseExt: "", pDefIncreaseMaxPot: "", heal: "" },
      { pDefIncreaseDur: "34", pDefIncreaseExt: "11", pDefIncreaseMaxPot: "High", heal: "12" },
      { pDefIncreaseDur: "34", pDefIncreaseExt: "11", pDefIncreaseMaxPot: "High", heal: "12" },
      { pDefIncreaseDur: "34", pDefIncreaseExt: "11", pDefIncreaseMaxPot: "High", heal: "12" },
      { pDefIncreaseDur: "34", pDefIncreaseExt: "11", pDefIncreaseMaxPot: "High", heal: "12" },
      { pDefIncreaseDur: "38", pDefIncreaseExt: "12", pDefIncreaseMaxPot: "High", heal: "13" }
    ]
  },
  "Jet Fists": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]). The lower your HP, the higher the ability pot. (max: x3).",
    valuesByOverboost: [
      { damage: "270" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "420" },
      { damage: "420" },
      { damage: "420" },
      { damage: "420" },
      { damage: "500" }
    ]
  },
  "Blizzara Surge (2)": {
    description: "Deal {{damage}}% Mag. Ice damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "320" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "450" }
    ]
  },
  "Manara Breach Surge": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, MDEF is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: {{mDefDecreaseDur}}s]. [Ext.: +{{mDefDecreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "260", mDefDecreaseDur: "20", mDefDecreaseExt: "6" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "", mDefDecreaseDur: "", mDefDecreaseExt: "" },
      { damage: "350", mDefDecreaseDur: "25", mDefDecreaseExt: "7" },
      { damage: "350", mDefDecreaseDur: "25", mDefDecreaseExt: "7" },
      { damage: "350", mDefDecreaseDur: "25", mDefDecreaseExt: "7" },
      { damage: "350", mDefDecreaseDur: "25", mDefDecreaseExt: "7" },
      { damage: "360", mDefDecreaseDur: "28", mDefDecreaseExt: "9" }
    ]
  },
  "Watera Surge A (1)": {
    description: "Deal {{damage}}% Mag. Water damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "290" }
    ]
  },
  "Energization": {
    description: "Deal {{damage}}% Mag. Lightning damage [Rng.: All Enemies].\nAlso, PATK is decreased. [Pot.: Mid] [Rng.: All Enemies] [Dur.: {{pAtkDecreaseDur}}s]. [Ext.: +{{pAtkDecreaseExt}}s] [Max. pot.: {{pAtkDecreaseMaxPot}}]\nWhen [Rng.: Self]'s HP is 50% or more, MATK is decreased. [Pot.: Mid] [Rng.: All Enemies] [Dur.: {{mAtkDecreaseDur}}s]. [Ext.: +{{mAtkDecreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "340", pAtkDecreaseDur: "20", pAtkDecreaseExt: "6", pAtkDecreaseMaxPot: "Mid", mAtkDecreaseDur: "20", mAtkDecreaseExt: "6" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "", pAtkDecreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "" },
      { damage: "480", pAtkDecreaseDur: "26", pAtkDecreaseExt: "8", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "26", mAtkDecreaseExt: "8" },
      { damage: "480", pAtkDecreaseDur: "26", pAtkDecreaseExt: "8", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "26", mAtkDecreaseExt: "8" },
      { damage: "480", pAtkDecreaseDur: "26", pAtkDecreaseExt: "8", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "26", mAtkDecreaseExt: "8" },
      { damage: "480", pAtkDecreaseDur: "26", pAtkDecreaseExt: "8", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "26", mAtkDecreaseExt: "8" },
      { damage: "540", pAtkDecreaseDur: "30", pAtkDecreaseExt: "10", pAtkDecreaseMaxPot: "High", mAtkDecreaseDur: "30", mAtkDecreaseExt: "10" }
    ]
  },
  "Watera Surge A (2)": {
    description: "Deal {{damage}}% Mag. Water damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "320" },
      { damage: "370" },
      { damage: "370" },
      { damage: "370" },
      { damage: "370" },
      { damage: "370" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "450" }
    ]
  },
  "Dorsal Fin Shot": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, Fire Resist. is decreased. [Pot.: {{fireResistDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{fireResistDecreaseDur}}s]. [Ext.: +{{fireResistDecreaseExt}}s] [Max. pot.: High]\nWhen [Rng.: Self]'s HP is 50% or more, Water Resist. is decreased. [Pot.: {{waterResistDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{waterResistDecreaseDur}}s]. [Ext.: +{{waterResistDecreaseExt}}s] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "260", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "16", fireResistDecreaseExt: "5", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "16", waterResistDecreaseExt: "5" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "360", fireResistDecreasePot: "High", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", waterResistDecreasePot: "High", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "360", fireResistDecreasePot: "High", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", waterResistDecreasePot: "High", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "360", fireResistDecreasePot: "High", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", waterResistDecreasePot: "High", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "360", fireResistDecreasePot: "High", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", waterResistDecreasePot: "High", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "420", fireResistDecreasePot: "High", fireResistDecreaseDur: "24", fireResistDecreaseExt: "8", waterResistDecreasePot: "High", waterResistDecreaseDur: "24", waterResistDecreaseExt: "8" }
    ]
  },
  "Omnistrike": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PATK is decreased. [Pot.: {{pAtkDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{pAtkDecreaseDur}}s]. [Ext.: +{{pAtkDecreaseExt}}s] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "340", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "20", pAtkDecreaseExt: "6" },
      { damage: "390", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "390", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "390", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "390", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "390", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "480", pAtkDecreasePot: "High", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "480", pAtkDecreasePot: "High", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "480", pAtkDecreasePot: "High", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "480", pAtkDecreasePot: "High", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "540", pAtkDecreasePot: "High", pAtkDecreaseDur: "25", pAtkDecreaseExt: "8" }
    ]
  },
  "Vigor": {
    description: "Phys. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Self]\nAlso, Removes Ailment: Poison, Ailment: Silence [Rng.: Self].",
    valuesByOverboost: [
      { heal: "93" },
      { heal: "112" },
      { heal: "112" },
      { heal: "112" },
      { heal: "112" },
      { heal: "112" },
      { heal: "121" },
      { heal: "121" },
      { heal: "121" },
      { heal: "121" },
      { heal: "130" }
    ]
  },
  "Divekick": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "530" },
      { damage: "640" },
      { damage: "640" },
      { damage: "640" },
      { damage: "640" },
      { damage: "640" },
      { damage: "830" },
      { damage: "830" },
      { damage: "830" },
      { damage: "830" },
      { damage: "990" }
    ]
  },
  "Uppershot": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, MATK is decreased. [Pot.: {{mAtkDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{mAtkDecreaseDur}}s]. [Ext.: +{{mAtkDecreaseExt}}s] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "340", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "20", mAtkDecreaseExt: "6" },
      { damage: "390", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "390", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "390", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "390", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "390", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "480", mAtkDecreasePot: "High", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "480", mAtkDecreasePot: "High", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "480", mAtkDecreasePot: "High", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "480", mAtkDecreasePot: "High", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7" },
      { damage: "540", mAtkDecreasePot: "High", mAtkDecreaseDur: "25", mAtkDecreaseExt: "8" }
    ]
  },
  "Thundaga A (1)": {
    description: "Deal {{damage}}% Mag. Lightning damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "280" },
      { damage: "320" },
      { damage: "320" },
      { damage: "320" },
      { damage: "320" },
      { damage: "320" },
      { damage: "420" },
      { damage: "420" },
      { damage: "420" },
      { damage: "420" },
      { damage: "500" }
    ]
  },
  "Sonic Spiral": {
    description: "Deal {{damage}}% Phys. Wind damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "420" },
      { damage: "500" },
      { damage: "500" },
      { damage: "500" },
      { damage: "500" },
      { damage: "500" },
      { damage: "660" },
      { damage: "660" },
      { damage: "660" },
      { damage: "660" },
      { damage: "790" }
    ]
  },
  "Chi Trap": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, MDEF is decreased. [Pot.: {{mDefDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{mDefDecreaseDur}}s]. [Ext.: +{{mDefDecreaseExt}}s] [Max. pot.: High]",
    valuesByOverboost: [
      { damage: "300", mDefDecreasePot: "Mid", mDefDecreaseDur: "20", mDefDecreaseExt: "6" },
      { damage: "350", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "350", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "350", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "350", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "350", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "420", mDefDecreasePot: "High", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "420", mDefDecreasePot: "High", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "420", mDefDecreasePot: "High", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "420", mDefDecreasePot: "High", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "480", mDefDecreasePot: "High", mDefDecreaseDur: "25", mDefDecreaseExt: "8" }
    ]
  },
  "Wall of Will": {
    description: "PDEF is increased. [Pot.: {{pDefIncreasePot}}] [Rng.: Self] [Dur.: {{pDefIncreaseDur}}s]. [Ext.: +{{pDefIncreaseExt}}s] [Max. pot.: High]\nAlso, PATK is increased. [Pot.: {{pAtkIncreasePot}}] [Rng.: Self] [Dur.: {{pAtkIncreaseDur}}s]. [Ext.: +{{pAtkIncreaseExt}}s] [Max. pot.: High]\nMag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Self]",
    valuesByOverboost: [
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "25", pDefIncreaseExt: "8", pAtkIncreasePot: "Mid", pAtkIncreaseDur: "25", pAtkIncreaseExt: "8", heal: "9" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "30", pDefIncreaseExt: "10", pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "10", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "30", pDefIncreaseExt: "10", pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "10", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "30", pDefIncreaseExt: "10", pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "10", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "30", pDefIncreaseExt: "10", pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "10", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "35", pDefIncreaseExt: "11", pAtkIncreasePot: "High", pAtkIncreaseDur: "35", pAtkIncreaseExt: "11", heal: "13" }
    ]
  },
  "Savage Blast": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "480" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "750" },
      { damage: "750" },
      { damage: "750" },
      { damage: "750" },
      { damage: "900" }
    ]
  },
  "Healing Waves": {
    description: "Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { heal: "38" },
      { heal: "46" },
      { heal: "46" },
      { heal: "46" },
      { heal: "46" },
      { heal: "46" },
      { heal: "49" },
      { heal: "49" },
      { heal: "49" },
      { heal: "49" },
      { heal: "54" }
    ]
  },
  "Featherstrike": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, MDEF is decreased. [Pot.: Mid] [Rng.: Single Enemy] [Dur.: {{mDefDecreaseDur}}s]. [Ext.: +{{mDefDecreaseExt}}s] [Max. pot.: Mid]\nWhen [Rng: Self]'s HP is 50% or more, Water Damage is increased. [Pot.: {{waterDamageIncreasePot}}] [Rng.: Self] [Dur.: {{waterDamageIncreaseDur}}s]. [Ext.: +{{waterDamageIncreaseExt}}s] [Max. pot.: {{waterDamageIncreaseMaxPot}}]",
    valuesByOverboost: [
      { damage: "260", mDefDecreaseDur: "16", mDefDecreaseExt: "5", waterDamageIncreasePot: "Mid", waterDamageIncreaseDur: "25", waterDamageIncreaseExt: "5", waterDamageIncreaseMaxPot: "Mid" },
      { damage: "300", mDefDecreaseDur: "18", mDefDecreaseExt: "6", waterDamageIncreasePot: "Mid", waterDamageIncreaseDur: "28", waterDamageIncreaseExt: "5", waterDamageIncreaseMaxPot: "Mid" },
      { damage: "300", mDefDecreaseDur: "18", mDefDecreaseExt: "6", waterDamageIncreasePot: "Mid", waterDamageIncreaseDur: "28", waterDamageIncreaseExt: "5", waterDamageIncreaseMaxPot: "Mid" },
      { damage: "300", mDefDecreaseDur: "18", mDefDecreaseExt: "6", waterDamageIncreasePot: "Mid", waterDamageIncreaseDur: "28", waterDamageIncreaseExt: "5", waterDamageIncreaseMaxPot: "Mid" },
      { damage: "300", mDefDecreaseDur: "18", mDefDecreaseExt: "6", waterDamageIncreasePot: "Mid", waterDamageIncreaseDur: "28", waterDamageIncreaseExt: "5", waterDamageIncreaseMaxPot: "Mid" },
      { damage: "300", mDefDecreaseDur: "18", mDefDecreaseExt: "6", waterDamageIncreasePot: "Mid", waterDamageIncreaseDur: "28", waterDamageIncreaseExt: "5", waterDamageIncreaseMaxPot: "Mid" },
      { damage: "360", mDefDecreaseDur: "20", mDefDecreaseExt: "6", waterDamageIncreasePot: "High", waterDamageIncreaseDur: "30", waterDamageIncreaseExt: "6", waterDamageIncreaseMaxPot: "High" },
      { damage: "360", mDefDecreaseDur: "20", mDefDecreaseExt: "6", waterDamageIncreasePot: "High", waterDamageIncreaseDur: "30", waterDamageIncreaseExt: "6", waterDamageIncreaseMaxPot: "High" },
      { damage: "360", mDefDecreaseDur: "20", mDefDecreaseExt: "6", waterDamageIncreasePot: "High", waterDamageIncreaseDur: "30", waterDamageIncreaseExt: "6", waterDamageIncreaseMaxPot: "High" },
      { damage: "360", mDefDecreaseDur: "20", mDefDecreaseExt: "6", waterDamageIncreasePot: "High", waterDamageIncreaseDur: "30", waterDamageIncreaseExt: "6", waterDamageIncreaseMaxPot: "High" },
      { damage: "420", mDefDecreaseDur: "24", mDefDecreaseExt: "8", waterDamageIncreasePot: "High", waterDamageIncreaseDur: "35", waterDamageIncreaseExt: "7", waterDamageIncreaseMaxPot: "High" }
    ]
  },
  "Ruinra Surge": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "320" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "430" },
      { damage: "450" }
    ]
  },
  "Freezing Blow": {
    description: "Deal {{damage}}% Phys. Ice damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "440" },
      { damage: "530" },
      { damage: "530" },
      { damage: "530" },
      { damage: "530" },
      { damage: "530" },
      { damage: "660" },
      { damage: "660" },
      { damage: "660" },
      { damage: "660" },
      { damage: "800" }
    ]
  },
  "No Mercy": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PATK is increased. [Pot.: {{pAtkIncreasePot}}] [Rng.: Self] [Dur.: {{pAtkIncreaseDur}}s]. [Ext.: +{{pAtkIncreaseExt}}s] [Max. pot.: {{pAtkIncreaseMaxPot}}]\nWhen [Rng.: Self]'s HP is 50% or more, MATK is decreased. [Pot.: Mid] [Rng.: Single Enemy] [Dur.: {{mAtkDecreaseDur}}s]. [Ext.: +{{mAtkDecreaseExt}}s] [Max. pot.: {{mAtkDecreaseMaxPot}}]",
    valuesByOverboost: [
      { damage: "360", pAtkIncreasePot: "Mid", pAtkIncreaseDur: "25", pAtkIncreaseExt: "5", pAtkIncreaseMaxPot: "Mid", mAtkDecreaseDur: "20", mAtkDecreaseExt: "6", mAtkDecreaseMaxPot: "Mid" },
      { damage: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "", mAtkDecreaseMaxPot: "" },
      { damage: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "", mAtkDecreaseMaxPot: "" },
      { damage: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "", mAtkDecreaseMaxPot: "" },
      { damage: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "", mAtkDecreaseMaxPot: "" },
      { damage: "", pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", pAtkIncreaseMaxPot: "", mAtkDecreaseDur: "", mAtkDecreaseExt: "", mAtkDecreaseMaxPot: "" },
      { damage: "630", pAtkIncreasePot: "High", pAtkIncreaseDur: "36", pAtkIncreaseExt: "7", pAtkIncreaseMaxPot: "High", mAtkDecreaseDur: "26", mAtkDecreaseExt: "8", mAtkDecreaseMaxPot: "High" },
      { damage: "630", pAtkIncreasePot: "High", pAtkIncreaseDur: "36", pAtkIncreaseExt: "7", pAtkIncreaseMaxPot: "High", mAtkDecreaseDur: "26", mAtkDecreaseExt: "8", mAtkDecreaseMaxPot: "High" },
      { damage: "630", pAtkIncreasePot: "High", pAtkIncreaseDur: "36", pAtkIncreaseExt: "7", pAtkIncreaseMaxPot: "High", mAtkDecreaseDur: "26", mAtkDecreaseExt: "8", mAtkDecreaseMaxPot: "High" },
      { damage: "630", pAtkIncreasePot: "High", pAtkIncreaseDur: "36", pAtkIncreaseExt: "7", pAtkIncreaseMaxPot: "High", mAtkDecreaseDur: "26", mAtkDecreaseExt: "8", mAtkDecreaseMaxPot: "High" },
      { damage: "720", pAtkIncreasePot: "High", pAtkIncreaseDur: "40", pAtkIncreaseExt: "8", pAtkIncreaseMaxPot: "High", mAtkDecreaseDur: "30", mAtkDecreaseExt: "10", mAtkDecreaseMaxPot: "High" }
    ]
  },
  "Aqua Splash": {
    description: "Deal {{damage}}% Mag. Water damage [Rng.: Single Enemy].\nAlso, when [Rng.: Self]'s HP is 50% or more, MATK is increased. [Pot.: Low] [Rng.: Self] [Dur.: {{mAtkIncreaseDur}}s]. [Ext.: +{{mAtkIncreaseExt}}s] [Max. pot.: {{mAtkIncreaseMaxPot}}]",
    valuesByOverboost: [
      { damage: "480", mAtkIncreaseDur: "25", mAtkIncreaseExt: "5", mAtkIncreaseMaxPot: "Mid" },
      { damage: "580", mAtkIncreaseDur: "28", mAtkIncreaseExt: "5", mAtkIncreaseMaxPot: "Mid" },
      { damage: "580", mAtkIncreaseDur: "28", mAtkIncreaseExt: "5", mAtkIncreaseMaxPot: "Mid" },
      { damage: "580", mAtkIncreaseDur: "28", mAtkIncreaseExt: "5", mAtkIncreaseMaxPot: "Mid" },
      { damage: "580", mAtkIncreaseDur: "28", mAtkIncreaseExt: "5", mAtkIncreaseMaxPot: "Mid" },
      { damage: "580", mAtkIncreaseDur: "28", mAtkIncreaseExt: "5", mAtkIncreaseMaxPot: "Mid" },
      { damage: "710", mAtkIncreaseDur: "30", mAtkIncreaseExt: "6", mAtkIncreaseMaxPot: "High" },
      { damage: "710", mAtkIncreaseDur: "30", mAtkIncreaseExt: "6", mAtkIncreaseMaxPot: "High" },
      { damage: "710", mAtkIncreaseDur: "30", mAtkIncreaseExt: "6", mAtkIncreaseMaxPot: "High" },
      { damage: "710", mAtkIncreaseDur: "30", mAtkIncreaseExt: "6", mAtkIncreaseMaxPot: "High" },
      { damage: "850", mAtkIncreaseDur: "35", mAtkIncreaseExt: "7", mAtkIncreaseMaxPot: "High" }
    ]
  },
  "Solid Bravery": {
    description: "PATK is increased. [Pot.: Low] [Rng.: Single Ally] [Dur.: {{pAtkIncreaseDur}}s]. [Ext.: +{{pAtkIncreaseExt}}s] [Max. pot.: Mid]\nAlso, Regen is applied [Rng.: Single Ally]. [Dur.: {{regenDur}}s] [Ext.: +3s]\nMag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "9", heal: "9" },
      { pAtkIncreaseDur: "", pAtkIncreaseExt: "", regenDur: "", heal: "" },
      { pAtkIncreaseDur: "", pAtkIncreaseExt: "", regenDur: "", heal: "" },
      { pAtkIncreaseDur: "", pAtkIncreaseExt: "", regenDur: "", heal: "" },
      { pAtkIncreaseDur: "", pAtkIncreaseExt: "", regenDur: "", heal: "" },
      { pAtkIncreaseDur: "", pAtkIncreaseExt: "", regenDur: "", heal: "" },
      { pAtkIncreaseDur: "40", pAtkIncreaseExt: "13", regenDur: "12", heal: "12" },
      { pAtkIncreaseDur: "40", pAtkIncreaseExt: "13", regenDur: "12", heal: "12" },
      { pAtkIncreaseDur: "40", pAtkIncreaseExt: "13", regenDur: "12", heal: "12" },
      { pAtkIncreaseDur: "40", pAtkIncreaseExt: "13", regenDur: "12", heal: "12" },
      { pAtkIncreaseDur: "44", pAtkIncreaseExt: "14", regenDur: "15", heal: "13" }
    ]
  },
  "Armora Breach Surge (1)": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PDEF is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: {{pDefDecreaseDur}}s]. [Ext.: +{{pDefDecreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "260", pDefDecreaseDur: "20", pDefDecreaseExt: "6" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "350", pDefDecreaseDur: "25", pDefDecreaseExt: "7" },
      { damage: "350", pDefDecreaseDur: "25", pDefDecreaseExt: "7" },
      { damage: "350", pDefDecreaseDur: "25", pDefDecreaseExt: "7" },
      { damage: "350", pDefDecreaseDur: "25", pDefDecreaseExt: "7" },
      { damage: "360", pDefDecreaseDur: "28", pDefDecreaseExt: "9" }
    ]
  },
  "Zangan Fist": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "650" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "780" },
      { damage: "1,140" },
      { damage: "1,140" },
      { damage: "1,140" },
      { damage: "1,140" },
      { damage: "1,300" }
    ]
  },
  "Spiral Levin Strike": {
    description: "Deal {{damage}}% Mag. Lightning damage [Rng.: Single Enemy].\nAlso, when [Rng.: Self]'s HP is 50% or more, MATK is increased. [Pot.: {{mAtkIncreasePot}}] [Rng.: Self] [Dur.: {{mAtkIncreaseDur}}s]. [Ext.: +{{mAtkIncreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "520", mAtkIncreasePot: "Low", mAtkIncreaseDur: "25", mAtkIncreaseExt: "5" },
      { damage: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { damage: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { damage: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { damage: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { damage: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { damage: "780", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "30", mAtkIncreaseExt: "6" },
      { damage: "780", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "30", mAtkIncreaseExt: "6" },
      { damage: "780", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "30", mAtkIncreaseExt: "6" },
      { damage: "780", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "30", mAtkIncreaseExt: "6" },
      { damage: "940", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "35", mAtkIncreaseExt: "7" }
    ]
  },
  "Spinning Fervor": {
    description: "Deal {{damage}}% Mag. Fire damage [Rng.: Single Enemy].\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.",
    valuesByOverboost: [
      { damage: "520" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "810" },
      { damage: "810" },
      { damage: "810" },
      { damage: "810" },
      { damage: "940" }
    ]
  },
  "Debravera Surge": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PATK is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: {{pAtkDecreaseDur}}s]. [Ext.: +{{pAtkDecreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "260", pAtkDecreaseDur: "20", pAtkDecreaseExt: "6" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "", pAtkDecreaseDur: "", pAtkDecreaseExt: "" },
      { damage: "350", pAtkDecreaseDur: "25", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreaseDur: "25", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreaseDur: "25", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreaseDur: "25", pAtkDecreaseExt: "7" },
      { damage: "360", pAtkDecreaseDur: "28", pAtkDecreaseExt: "9" }
    ]
  },
  "Stalwart Manaward (2)": {
    description: "MDEF is increased. [Pot.: {{mDefIncreasePot}}] [Rng.: Single Ally] [Dur.: {{mDefIncreaseDur}}s]. [Ext.: +{{mDefIncreaseExt}}s] [Max. pot.: High]\nAlso, Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "30", mDefIncreaseExt: "10", heal: "10" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "Mid", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "34", mDefIncreaseExt: "11", heal: "13" },
      { mDefIncreasePot: "High", mDefIncreaseDur: "38", mDefIncreaseExt: "12", heal: "15" }
    ]
  },
  "Blizzaga A (2)": {
    description: "Deal {{damage}}% Mag. Ice damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "290" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "450" },
      { damage: "450" },
      { damage: "450" },
      { damage: "450" },
      { damage: "540" }
    ]
  },
  "Tempest Force": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).",
    valuesByOverboost: [
      { damage: "480" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "750" },
      { damage: "750" },
      { damage: "750" },
      { damage: "750" },
      { damage: "900" }
    ]
  },
  "Saving Grace": {
    description: "PDEF is increased. [Pot.: {{pDefIncreasePot}}] [Rng.: All Allies] [Dur.: {{pDefIncreaseDur}}s]. [Ext.: +{{pDefIncreaseExt}}s] [Max. pot.: Mid]\nAlso, MDEF is increased. [Pot.: {{mDefIncreasePot}}] [Rng.: All Allies] [Dur.: {{mDefIncreaseDur}}s]. [Ext.: +{{mDefIncreaseExt}}s] [Max. pot.: Mid]\nMag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { pDefIncreasePot: "Low", pDefIncreaseDur: "10", pDefIncreaseExt: "3", mDefIncreasePot: "Low", mDefIncreaseDur: "10", mDefIncreaseExt: "3", heal: "7" },
      { pDefIncreasePot: "Low", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Low", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "8" },
      { pDefIncreasePot: "Low", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Low", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "8" },
      { pDefIncreasePot: "Low", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Low", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "8" },
      { pDefIncreasePot: "Low", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Low", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "8" },
      { pDefIncreasePot: "Low", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Low", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "8" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "9" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "9" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "9" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "12", pDefIncreaseExt: "4", mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "9" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "14", pDefIncreaseExt: "4", mDefIncreasePot: "Mid", mDefIncreaseDur: "14", mDefIncreaseExt: "4", heal: "9" }
    ]
  },
  "Heavenly Spike": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: All Enemies] ([Crit rate: 10%]).\nAlso, PATK is decreased. [Pot.: {{pAtkDecreasePot}}] [Rng.: All Enemies] [Dur.: {{pAtkDecreaseDur}}s]. [Ext.: +{{pAtkDecreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "210", pAtkDecreasePot: "Low", pAtkDecreaseDur: "20", pAtkDecreaseExt: "6" },
      { damage: "240", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "240", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "240", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "240", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "240", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "290", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "290", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "290", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "290", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "340", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "25", pAtkDecreaseExt: "8" }
    ]
  },
  "Raging Sphere": {
    description: "Deal {{damage}}% Mag. Wind damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "440" },
      { damage: "530" },
      { damage: "530" },
      { damage: "530" },
      { damage: "530" },
      { damage: "530" },
      { damage: "660" },
      { damage: "660" },
      { damage: "660" },
      { damage: "660" },
      { damage: "800" }
    ]
  },
  "Curaga A": {
    description: "Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { heal: "53" },
      { heal: "63" },
      { heal: "63" },
      { heal: "63" },
      { heal: "63" },
      { heal: "63" },
      { heal: "69" },
      { heal: "69" },
      { heal: "69" },
      { heal: "69" },
      { heal: "74" }
    ]
  },
  "Thundaga A (2)": {
    description: "Deal {{damage}}% Mag. Lightning damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "290" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "450" },
      { damage: "450" },
      { damage: "450" },
      { damage: "450" },
      { damage: "540" }
    ]
  },
  "Quaga A": {
    description: "Deal {{damage}}% Mag. Earth damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "290" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "350" },
      { damage: "450" },
      { damage: "450" },
      { damage: "450" },
      { damage: "450" },
      { damage: "540" }
    ]
  },
  "Nightbloom": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PDEF is decreased. [Pot.: {{pDefDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{pDefDecreaseDur}}s]. [Ext.: +{{pDefDecreaseExt}}s] [Max. pot.: Mid]\nMDEF is decreased. [Pot.: {{mDefDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{mDefDecreaseDur}}s]. [Ext.: +{{mDefDecreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "340", pDefDecreasePot: "Low", pDefDecreaseDur: "20", pDefDecreaseExt: "6", mDefDecreasePot: "Low", mDefDecreaseDur: "20", mDefDecreaseExt: "6" },
      { damage: "390", pDefDecreasePot: "Low", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "390", pDefDecreasePot: "Low", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "390", pDefDecreasePot: "Low", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "390", pDefDecreasePot: "Low", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "390", pDefDecreasePot: "Low", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "480", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "480", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "480", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "480", pDefDecreasePot: "Mid", pDefDecreaseDur: "22", pDefDecreaseExt: "7", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "540", pDefDecreasePot: "Mid", pDefDecreaseDur: "25", pDefDecreaseExt: "8", mDefDecreasePot: "Mid", mDefDecreaseDur: "25", mDefDecreaseExt: "8" }
    ]
  },
  "Floral Flare": {
    description: "Deal {{damage}}% Phys. Non-elem. damage [Rng.: Single Enemy] ([Crit. rate: 10%]).\nAlso, PDEF is decreased. [Pot.: Mid] [Rng.: Single Enemy] [Dur.: {{pDefDecreaseDur}}s]. [Ext.: +{{pDefDecreaseExt}}s] [Max. pot.: Mid]\nWhen [Rng.: Self]'s HP is 50% or more, Wind Resist. is decreased. [Pot.: {{windResistDecreasePot}}] [Rng.: Single Enemy] [Dur.: {{windResistDecreaseDur}}s]. [Ext.: +{{windResistDecreaseExt}}s] [Max. pot.: {{windResistDecreaseMaxPot}}]",
    valuesByOverboost: [
      { damage: "260", pDefDecreaseDur: "16", pDefDecreaseExt: "5", windResistDecreasePot: "Low", windResistDecreaseDur: "16", windResistDecreaseExt: "5", windResistDecreaseMaxPot: "Mid" },
      { damage: "300", pDefDecreaseDur: "18", pDefDecreaseExt: "6", windResistDecreasePot: "Low", windResistDecreaseDur: "18", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "Mid" },
      { damage: "300", pDefDecreaseDur: "18", pDefDecreaseExt: "6", windResistDecreasePot: "Low", windResistDecreaseDur: "18", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "Mid" },
      { damage: "300", pDefDecreaseDur: "18", pDefDecreaseExt: "6", windResistDecreasePot: "Low", windResistDecreaseDur: "18", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "Mid" },
      { damage: "300", pDefDecreaseDur: "18", pDefDecreaseExt: "6", windResistDecreasePot: "Low", windResistDecreaseDur: "18", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "Mid" },
      { damage: "300", pDefDecreaseDur: "18", pDefDecreaseExt: "6", windResistDecreasePot: "Low", windResistDecreaseDur: "18", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "Mid" },
      { damage: "360", pDefDecreaseDur: "20", pDefDecreaseExt: "6", windResistDecreasePot: "High", windResistDecreaseDur: "20", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "High" },
      { damage: "360", pDefDecreaseDur: "20", pDefDecreaseExt: "6", windResistDecreasePot: "High", windResistDecreaseDur: "20", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "High" },
      { damage: "360", pDefDecreaseDur: "20", pDefDecreaseExt: "6", windResistDecreasePot: "High", windResistDecreaseDur: "20", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "High" },
      { damage: "360", pDefDecreaseDur: "20", pDefDecreaseExt: "6", windResistDecreasePot: "High", windResistDecreaseDur: "20", windResistDecreaseExt: "6", windResistDecreaseMaxPot: "High" },
      { damage: "420", pDefDecreaseDur: "24", pDefDecreaseExt: "8", windResistDecreasePot: "High", windResistDecreaseDur: "24", windResistDecreaseExt: "8", windResistDecreaseMaxPot: "High" }
    ]
  },
  "Cleansing Rain": {
    description: "Removes Phys. Attack Down, Mag. Attack Down [Rng.: Single Ally].\nAlso, Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { heal: "77" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "" },
      { heal: "100" },
      { heal: "100" },
      { heal: "100" },
      { heal: "100" },
      { heal: "108" }
    ]
  },
  "Solid Manaward": {
    description: "MDEF is increased. [Por.: Mid] [Rng.: Single Ally] [Dur.: {{mDefIncreaseDur}}s]. [Ext.: +{{mDefIncreaseExt}}s] [Max. pot.: {{mDefIncreaseMaxPot}}]\nAlso, Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { mDefIncreaseDur: "30", mDefIncreaseExt: "10", mDefIncreaseMaxPot: "Mid", heal: "9" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "Mid", heal: "11" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "Mid", heal: "11" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "Mid", heal: "11" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "Mid", heal: "11" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "Mid", heal: "11" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "High", heal: "12" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "High", heal: "12" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "High", heal: "12" },
      { mDefIncreaseDur: "34", mDefIncreaseExt: "11", mDefIncreaseMaxPot: "High", heal: "12" },
      { mDefIncreaseDur: "38", mDefIncreaseExt: "12", mDefIncreaseMaxPot: "High", heal: "13" }
    ]
  },
  "Snowspell": {
    description: "Deal {{damage}}% Mag. Ice damage [Rng.: Single Enemy].\nAlso, MDEF is decreased. [Pot.: Mid] [Rng.: Single Enemy] [Dur.: {{mDefDecreaseDur}}s]. [Ext.: +{{mDefDecreaseExt}}s] [Max. pot.: {{mDefDecreaseMaxPot}}]",
    valuesByOverboost: [
      { damage: "340", mDefDecreaseDur: "20", mDefDecreaseExt: "6", mDefDecreaseMaxPot: "Mid" },
      { damage: "390", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "390", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "390", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "390", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "390", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "480", mDefDecreaseDur: "26", mDefDecreaseExt: "8", mDefDecreaseMaxPot: "High" },
      { damage: "480", mDefDecreaseDur: "26", mDefDecreaseExt: "8", mDefDecreaseMaxPot: "High" },
      { damage: "480", mDefDecreaseDur: "26", mDefDecreaseExt: "8", mDefDecreaseMaxPot: "High" },
      { damage: "480", mDefDecreaseDur: "26", mDefDecreaseExt: "8", mDefDecreaseMaxPot: "High" },
      { damage: "540", mDefDecreaseDur: "30", mDefDecreaseExt: "10", mDefDecreaseMaxPot: "High" }
    ]
  },
  "Thundara Surge": {
    description: "Deal {{damage}}% Mag. Lightning damage [Rng.: Single Enemy].",
    valuesByOverboost: [
      { damage: "340" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "460" },
      { damage: "460" },
      { damage: "460" },
      { damage: "460" },
      { damage: "480" }
    ]
  },
  "Healing Pulse": {
    description: "MATK is increased. [Pot.: {{mAtkIncreasePot}}] [Rng.: Single Ally] [Dur.: {{mAtkIncreaseDur}}s]. [Ext.: +{{mAtkIncreaseExt}}s] [Max. pot.: High]\nAlso, Regen is applied [Rng.: Single Ally]. [Dur.: {{regenDur}}s] [Ext.: +3s]\nMag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]",
    valuesByOverboost: [
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "30", mAtkIncreaseExt: "10", regenDur: "9", heal: "9" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "38", mAtkIncreaseExt: "12", regenDur: "15", heal: "13" }
    ]
  },
  "Helical Flame": {
    description: "Deal {{damage}}% Mag. Fire damage [Rng.: All Enemies].\nAlso, against a single target, x1.3 damage.",
    valuesByOverboost: [
      { damage: "340" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "530" },
      { damage: "530" },
      { damage: "530" },
      { damage: "530" },
      { damage: "630" }
    ]
  },
  "Armora Breach Surge (2)": {
    description: "Deal {{damage}}% Mag. Non-elem. damage [Rng.: Single Enemy] ([Crit rate: 10%]).\nAlso, PDEF is decreased. [Pot.: Low] [Rng.: Single Enemy] [Dur.: {{pDefDecreaseDur}}s]. [Ext.: +{{pDefDecreaseExt}}s] [Max. pot.: Mid]",
    valuesByOverboost: [
      { damage: "260", pDefDecreaseDur: "20", pDefDecreaseExt: "6" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "350", pDefDecreaseDur: "25", pDefDecreaseExt: "7" },
      { damage: "350", pDefDecreaseDur: "25", pDefDecreaseExt: "7" },
      { damage: "350", pDefDecreaseDur: "25", pDefDecreaseExt: "7" },
      { damage: "350", pDefDecreaseDur: "25", pDefDecreaseExt: "7" },
      { damage: "360", pDefDecreaseDur: "28", pDefDecreaseExt: "9" }
    ]
  },
  "Spiritual Harmony": {
    description: "PATK is increased. [Pot.: {{pAtkIncreasePot}}] [Rng.: All Allies] [Dur.: {{pAtkIncreaseDur}}s]. [Ext.: +{{pAtkIncreaseExt}}s] [Max. pot.: High]\nAlso, when [Rng.: Self]'s HP is 70% or more, MDEF is increased. [Pot.: {{mDefIncreasePot}}] [Rng.: All Allies] [Dur.: {{mDefIncreaseDur}}s]. [Ext.: +{{mDefIncreaseExt}}s] [Max. pot.: High]\nMag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: All Allies]",
    valuesByOverboost: [
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "12", pAtkIncreaseExt: "4", mDefIncreasePot: "Mid", mDefIncreaseDur: "12", mDefIncreaseExt: "4", heal: "5" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", mDefIncreasePot: "", mDefIncreaseDur: "", mDefIncreaseExt: "", heal: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", mDefIncreasePot: "", mDefIncreaseDur: "", mDefIncreaseExt: "", heal: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", mDefIncreasePot: "", mDefIncreaseDur: "", mDefIncreaseExt: "", heal: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", mDefIncreasePot: "", mDefIncreaseDur: "", mDefIncreaseExt: "", heal: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", mDefIncreasePot: "", mDefIncreaseDur: "", mDefIncreaseExt: "", heal: "" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", mDefIncreasePot: "High", mDefIncreaseDur: "16", mDefIncreaseExt: "5", heal: "7" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", mDefIncreasePot: "High", mDefIncreaseDur: "16", mDefIncreaseExt: "5", heal: "7" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", mDefIncreasePot: "High", mDefIncreaseDur: "16", mDefIncreaseExt: "5", heal: "7" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", mDefIncreasePot: "High", mDefIncreaseDur: "16", mDefIncreaseExt: "5", heal: "7" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "20", pAtkIncreaseExt: "6", mDefIncreasePot: "High", mDefIncreaseDur: "20", mDefIncreaseExt: "6", heal: "7" }
    ]
  },
  "Watera Surge A (3)": {
    description: "Deal {{damage}}% Mag. Water damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "290" }
    ]
  },
  "Blizzara Surge A (2)": {
    description: "Deal {{damage}}% Mag. Ice damage [Rng.: All Enemies].",
    valuesByOverboost: [
      { damage: "210" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "280" },
      { damage: "290" }
    ]
  },
  "Fruitful Energy": {
    description: "Ice Damage is increased. [Pot.: {{iceDamageIncreasePot}}] [Rng.: Single Ally] [Dur.: {{iceDamageIncreaseDur}}s]. [Ext.: +{{iceDamageIncreaseExt}}s] [Max. pot.: {{iceDamageIncreaseMaxPot}}]\nAlso, Mag. heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: Single Ally]\nWhen [Rng.: Self]'s HP is 50% or more, MATK is increased. [Pot.: Mid] [Rng.: Single Ally] [Dur.: {{mAtkIncreaseDur}}s]. [Ext.: +{{mAtkIncreaseExt}}s] [Max. pot.: {{mAtkIncreaseMaxPot}}]",
    valuesByOverboost: [
      { iceDamageIncreasePot: "Mid", iceDamageIncreaseDur: "24", iceDamageIncreaseExt: "8", iceDamageIncreaseMaxPot: "Mid", heal: "7", mAtkIncreaseDur: "24", mAtkIncreaseExt: "8", mAtkIncreaseMaxPot: "Mid" },
      { iceDamageIncreasePot: "", iceDamageIncreaseDur: "", iceDamageIncreaseExt: "", iceDamageIncreaseMaxPot: "", heal: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", mAtkIncreaseMaxPot: "" },
      { iceDamageIncreasePot: "", iceDamageIncreaseDur: "", iceDamageIncreaseExt: "", iceDamageIncreaseMaxPot: "", heal: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", mAtkIncreaseMaxPot: "" },
      { iceDamageIncreasePot: "", iceDamageIncreaseDur: "", iceDamageIncreaseExt: "", iceDamageIncreaseMaxPot: "", heal: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", mAtkIncreaseMaxPot: "" },
      { iceDamageIncreasePot: "", iceDamageIncreaseDur: "", iceDamageIncreaseExt: "", iceDamageIncreaseMaxPot: "", heal: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", mAtkIncreaseMaxPot: "" },
      { iceDamageIncreasePot: "", iceDamageIncreaseDur: "", iceDamageIncreaseExt: "", iceDamageIncreaseMaxPot: "", heal: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", mAtkIncreaseMaxPot: "" },
      { iceDamageIncreasePot: "High", iceDamageIncreaseDur: "26", iceDamageIncreaseExt: "8", iceDamageIncreaseMaxPot: "High", heal: "9", mAtkIncreaseDur: "26", mAtkIncreaseExt: "8", mAtkIncreaseMaxPot: "High" },
      { iceDamageIncreasePot: "High", iceDamageIncreaseDur: "26", iceDamageIncreaseExt: "8", iceDamageIncreaseMaxPot: "High", heal: "9", mAtkIncreaseDur: "26", mAtkIncreaseExt: "8", mAtkIncreaseMaxPot: "High" },
      { iceDamageIncreasePot: "High", iceDamageIncreaseDur: "26", iceDamageIncreaseExt: "8", iceDamageIncreaseMaxPot: "High", heal: "9", mAtkIncreaseDur: "26", mAtkIncreaseExt: "8", mAtkIncreaseMaxPot: "High" },
      { iceDamageIncreasePot: "High", iceDamageIncreaseDur: "26", iceDamageIncreaseExt: "8", iceDamageIncreaseMaxPot: "High", heal: "9", mAtkIncreaseDur: "26", mAtkIncreaseExt: "8", mAtkIncreaseMaxPot: "High" },
      { iceDamageIncreasePot: "High", iceDamageIncreaseDur: "30", iceDamageIncreaseExt: "10", iceDamageIncreaseMaxPot: "High", heal: "9", mAtkIncreaseDur: "30", mAtkIncreaseExt: "10", mAtkIncreaseMaxPot: "High" }
    ]
  }
};
