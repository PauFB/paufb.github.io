export const cAbilitiesData = {
  "Braver": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, when matching sigils are destroyed, x1.5 damage.`,
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
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", null, "All Enemies", null, null, "Mid")}`,
    valuesByOverboost: [
      { damage: "220", pAtkDecreasePot: "Low", pAtkDecreaseDur: "20", pAtkDecreaseExt: "6" },
      { damage: "250", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "250", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "250", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "250", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "250", pAtkDecreasePot: "Low", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "310", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "310", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "310", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "310", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "25", pAtkDecreaseExt: "8" }
    ]
  },
  "Armor Break": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "320", pDefDecreasePot: "Mid", pDefDecreaseDur: "20", pDefDecreaseExt: "6" },
      { damage: "", pDefDecreasePot: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreasePot: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreasePot: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreasePot: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreasePot: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "450", pDefDecreasePot: "High", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "450", pDefDecreasePot: "High", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "450", pDefDecreasePot: "High", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "450", pDefDecreasePot: "High", pDefDecreaseDur: "22", pDefDecreaseExt: "7" },
      { damage: "510", pDefDecreasePot: "High", pDefDecreaseDur: "25", pDefDecreaseExt: "8" }
    ]
  },
  "Blade Burst": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
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
  "Stalwart Barrier": {
    description: `${increase("PDEF", null, "Single Ally", null, null, null, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
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
    description: `${damage("Phys. Lightning", "Single Enemy", null)}`,
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
  "Shock Slice": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Stun", "Single Enemy", null, 5, 2)}`,
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
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: [
      { heal: "50" },
      { heal: "60" },
      { heal: "60" },
      { heal: "60" },
      { heal: "60" },
      { heal: "60" },
      { heal: "65" },
      { heal: "65" },
      { heal: "65" },
      { heal: "65" },
      { heal: "71" }
    ]
  },
  "Blizzaga A (1)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
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
  "Disorder": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nNo boosts to limit and summon gauges when using this ability.`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
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
  "Seasplitter": {
    description: `${damage("Phys. Water", "Single Enemy", null)}`,
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
  "Blizzara Surge (1)": {
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
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
    description: `${increase("MDEF", null, "All Allies", null, null, null, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
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
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: [
      { damage: "480" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "710" },
      { damage: "710" },
      { damage: "710" },
      { damage: "710" },
      { damage: "850" }
    ]
  },
  "Free Energy": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
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
  "Quakera Surge A (1)": {
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
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
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
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
  "Fira Surge A (1)": {
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, null, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("PATK", null, "Self", null, null, null, null)}`,
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
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
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
  "Fira Impact (1)": {
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
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
    description: `${increase("PDEF", null, "All Allies", null, null, null, "High")}\nAlso, ${heal("Phys.", "All Allies")}`,
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
    description: `${increase("MDEF", null, "Single Ally", null, null, null, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
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
  "Stalwart Faith (1)": {
    description: `${increase("MATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", null, "Single Enemy", null, null, "High")}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", null, "Single Enemy", null, null, "High")}`,
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
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
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
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
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
  "Firaga A (1)": {
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
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
  "Solid Barrier (1)": {
    description: `${increase("PDEF", "Mid", "Single Ally", null, null, null, null)}\nAlso, ${heal("Mag.", "Single Ally")}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)} The lower your HP, the higher the ability pot. (max: x3).`,
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
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
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
  "Manara Breach Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Low", "Single Enemy", null, null, "Mid")}`,
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
    description: `${damage("Mag. Water", "All Enemies", null)}`,
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
    description: `${damage("Mag. Lightning", "All Enemies", null)}\nAlso, ${decrease("PATK", "Mid", "All Enemies", null, null, null)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("MATK", "Mid", "All Enemies", null, null, "Mid")}`,
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
  "Watera Surge (1)": {
    description: `${damage("Mag. Water", "Single Enemy", null)}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "High")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", null, "Single Enemy", null, null, "High")}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", null, "Single Enemy", null, null, "High")}`,
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
    description: `${heal("Phys.", "Self")}\nAlso, ${remove("Ailment: Poison, Ailment: Silence", "Self")}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", null, "Single Enemy", null, null, "High")}`,
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
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
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
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
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
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", null, "Single Enemy", null, null, "High")}`,
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
    description: `${increase("PDEF", null, "Self", null, null, null, "High")}\nAlso, ${increase("PATK", null, "Self", null, null, null, "High")}\n${heal("Mag.", "Self")}`,
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
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
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
    description: `${heal("Mag.", "All Allies")}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, null, "Mid")}\nWhen [Rng: Self]'s HP is 50% or more, ${increase("Water Damage", null, "Self", null, null, null, null)}`,
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
  "Ruinra Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
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
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${increase("PATK", null, "Self", null, null, null, null)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("MATK", "Mid", "Single Enemy", null, null, null)}`,
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
    description: `${damage("Mag. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("MATK", "Low", "Self", null, null, null, null)}`,
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
  "Solid Bravery (1)": {
    description: `${increase("PATK", "Low", "Single Ally", null, null, null, "Mid")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
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
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, null, "Mid")}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
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
    description: `${damage("Mag. Lightning", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("MATK", null, "Self", null, null, null, "Mid")}`,
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
    description: `${damage("Mag. Fire", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
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
  "Debravera Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, null, "Mid")}`,
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
    description: `${increase("MDEF", null, "Single Ally", null, null, null, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
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
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
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
    description: `${increase("PDEF", null, "All Allies", null, null, null, "Mid")}\nAlso, ${increase("MDEF", null, "All Allies", null, null, null, "Mid")}\n${heal("Mag.", "All Allies")}`,
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
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", null, "All Enemies", null, null, "Mid")}`,
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
    description: `${damage("Mag. Wind", "Single Enemy", null)}`,
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
    description: `${heal("Mag.", "All Allies")}`,
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
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
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
  "Quaga A (1)": {
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
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
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", null, "Single Enemy", null, null, "Mid")}\n${decrease("MDEF", null, "Single Enemy", null, null, "Mid")}`,
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
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, null, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Wind Resist.", null, "Single Enemy", null, null, null)}`,
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
    description: `${remove("Phys. Attack Down, Mag. Attack Down", "Single Ally")}\nAlso, ${heal("Mag.", "Single Ally")}`,
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
  "Solid Manaward (1)": {
    description: `${increase("MDEF", "Mid", "Single Ally", null, null, null, null)}\nAlso, ${heal("Mag.", "Single Ally")}`,
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
    description: `${damage("Mag. Ice", "Single Enemy", null)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, null, null)}`,
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
  "Thundara Surge (1)": {
    description: `${damage("Mag. Lightning", "Single Enemy", null)}`,
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
    description: `${increase("MATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
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
    description: `${damage("Mag. Fire", "All Enemies", null)}\nAlso, against a single target, x1.3 damage.`,
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
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, null, "Mid")}`,
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
    description: `${increase("PATK", null, "All Allies", null, null, null, "High")}\nAlso, when [Rng.: Self]'s HP is 70% or more, ${increase("MDEF", null, "All Allies", null, null, null, "High")}\n${heal("Mag.", "All Allies")}`,
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
  "Watera Surge A (2)": {
    description: `${damage("Mag. Water", "All Enemies", null)}`,
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
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
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
    description: `${increase("Ice Damage", null, "Single Ally", null, null, null, null)}\nAlso, ${heal("Mag.", "Single Ally")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("MATK", "Mid", "Single Ally", null, null, null, null)}`,
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
  },
  "Manaward A": {
    description: `${increase("MDEF", null, "All Allies", null, null, null, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
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
  "Eternal Storm": {
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("MDEF", null, "All Enemies", null, null, "Mid")}`,
    valuesByOverboost: [
      { damage: "220", mDefDecreasePot: "Low", mDefDecreaseDur: "20", mDefDecreaseExt: "6" },
      { damage: "250", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "250", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "250", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "250", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "250", mDefDecreasePot: "Low", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "310", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "310", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "310", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "310", mDefDecreasePot: "Mid", mDefDecreaseDur: "22", mDefDecreaseExt: "7" },
      { damage: "350", mDefDecreasePot: "Mid", mDefDecreaseDur: "25", mDefDecreaseExt: "8" }
    ]
  },
  "Therapeutic Touch": {
    description: `${heal("Mag.", "All Allies")}\nAlso, ${regen("All Allies", null, null)}`,
    valuesByOverboost: [
      { heal: "8", regenDur: "9", regenExt: "3" },
      { heal: "9", regenDur: "12", regenExt: "3" },
      { heal: "9", regenDur: "12", regenExt: "3" },
      { heal: "9", regenDur: "12", regenExt: "3" },
      { heal: "9", regenDur: "12", regenExt: "3" },
      { heal: "9", regenDur: "12", regenExt: "3" },
      { heal: "10", regenDur: "15", regenExt: "3" },
      { heal: "10", regenDur: "15", regenExt: "3" },
      { heal: "10", regenDur: "15", regenExt: "3" },
      { heal: "10", regenDur: "15", regenExt: "3" },
      { heal: "11", regenDur: "18", regenExt: "6" }
    ]
  },
  "Waterga A (1)": {
    description: `${damage("Mag. Water", "All Enemies", null)}`,
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
  "Blaze Rush": {
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
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
  "Sonic Fangs": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
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
  "Mystic Flow": {
    description: `${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: [
      { heal: "81" },
      { heal: "97" },
      { heal: "97" },
      { heal: "97" },
      { heal: "97" },
      { heal: "97" },
      { heal: "105" },
      { heal: "105" },
      { heal: "105" },
      { heal: "105" },
      { heal: "113" }
    ]
  },
  "Frenzied Fang": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", null, "Single Enemy", null, null, "High")}`,
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
  "Canyon Gale": {
    description: `${damage("Mag. Wind", "All Enemies", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("MDEF", "Mid", "All Enemies", null, null, null)}`,
    valuesByOverboost: [
      { damage: "270", mDefDecreaseDur: "20", mDefDecreaseExt: "6", mDefDecreaseMaxPot: "Mid" },
      { damage: "320", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "320", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "320", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "320", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "320", mDefDecreaseDur: "22", mDefDecreaseExt: "7", mDefDecreaseMaxPot: "Mid" },
      { damage: "420", mDefDecreaseDur: "26", mDefDecreaseExt: "8", mDefDecreaseMaxPot: "High" },
      { damage: "420", mDefDecreaseDur: "26", mDefDecreaseExt: "8", mDefDecreaseMaxPot: "High" },
      { damage: "420", mDefDecreaseDur: "26", mDefDecreaseExt: "8", mDefDecreaseMaxPot: "High" },
      { damage: "420", mDefDecreaseDur: "26", mDefDecreaseExt: "8", mDefDecreaseMaxPot: "High" },
      { damage: "500", mDefDecreaseDur: "30", mDefDecreaseExt: "10", mDefDecreaseMaxPot: "High" }
    ]
  },
  "Spiral Swing": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, null, "Mid")}`,
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
  "Wild Howling": {
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${remove("Mag. Defense Up", "All Enemies")}`,
    valuesByOverboost: [
      { damage: "290" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "" },
      { damage: "450" },
      { damage: "450" },
      { damage: "450" },
      { damage: "450" },
      { damage: "540" }
    ]
  },
  "Power Fang": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Thunder Resist.", null, "Single Enemy", null, null, "High")}\n${regen("Self", 3, 3)}`,
    valuesByOverboost: [
      { damage: "320", lightningResistDecreasePot: "Mid", lightningResistDecreaseDur: "15", lightningResistDecreaseExt: "5" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "450", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "18", lightningResistDecreaseExt: "6" },
      { damage: "450", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "18", lightningResistDecreaseExt: "6" },
      { damage: "450", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "18", lightningResistDecreaseExt: "6" },
      { damage: "450", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "18", lightningResistDecreaseExt: "6" },
      { damage: "510", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "21", lightningResistDecreaseExt: "7" }
    ]
  },
  "Manara Breach Surge (2)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Low", "Single Enemy", null, null, "Mid")}`,
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
  "Defira Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: [
      { damage: "260", fireResistDecreasePot: "Low", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6" },
      { damage: "300", fireResistDecreasePot: "Low", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "300", fireResistDecreasePot: "Low", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "300", fireResistDecreasePot: "Low", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "300", fireResistDecreasePot: "Low", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "300", fireResistDecreasePot: "Low", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "350", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "25", fireResistDecreaseExt: "7" },
      { damage: "350", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "25", fireResistDecreaseExt: "7" },
      { damage: "350", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "25", fireResistDecreaseExt: "7" },
      { damage: "350", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "25", fireResistDecreaseExt: "7" },
      { damage: "360", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "28", fireResistDecreaseExt: "9" }
    ]
  },
  "Fira Surge A (2)": {
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
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
  "Growing Ivy": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "High")}\n${decrease("Ice Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "260", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "16", fireResistDecreaseExt: "5", iceResistDecreasePot: "Mid", iceResistDecreaseDur: "16", iceResistDecreaseExt: "5" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "360", fireResistDecreasePot: "High", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", iceResistDecreasePot: "High", iceResistDecreaseDur: "20", iceResistDecreaseExt: "6" },
      { damage: "360", fireResistDecreasePot: "High", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", iceResistDecreasePot: "High", iceResistDecreaseDur: "20", iceResistDecreaseExt: "6" },
      { damage: "360", fireResistDecreasePot: "High", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", iceResistDecreasePot: "High", iceResistDecreaseDur: "20", iceResistDecreaseExt: "6" },
      { damage: "360", fireResistDecreasePot: "High", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", iceResistDecreasePot: "High", iceResistDecreaseDur: "20", iceResistDecreaseExt: "6" },
      { damage: "420", fireResistDecreasePot: "High", fireResistDecreaseDur: "24", fireResistDecreaseExt: "8", iceResistDecreasePot: "High", iceResistDecreaseDur: "24", iceResistDecreaseExt: "8" }
    ]
  },
  "Blizzara Surge A (3)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
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
  "Rolling Claw": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Wind Resist.", null, "Single Enemy", null, null, "High")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "200", windResistDecreasePot: "Mid", windResistDecreaseDur: "16", windResistDecreaseExt: "5", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "16", waterResistDecreaseExt: "5" },
      { damage: "", windResistDecreasePot: "", windResistDecreaseDur: "", windResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", windResistDecreasePot: "", windResistDecreaseDur: "", windResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", windResistDecreasePot: "", windResistDecreaseDur: "", windResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", windResistDecreasePot: "", windResistDecreaseDur: "", windResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "", windResistDecreasePot: "", windResistDecreaseDur: "", windResistDecreaseExt: "", waterResistDecreasePot: "", waterResistDecreaseDur: "", waterResistDecreaseExt: "" },
      { damage: "280", windResistDecreasePot: "High", windResistDecreaseDur: "20", windResistDecreaseExt: "6", waterResistDecreasePot: "High", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "280", windResistDecreasePot: "High", windResistDecreaseDur: "20", windResistDecreaseExt: "6", waterResistDecreasePot: "High", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "280", windResistDecreasePot: "High", windResistDecreaseDur: "20", windResistDecreaseExt: "6", waterResistDecreasePot: "High", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "280", windResistDecreasePot: "High", windResistDecreaseDur: "20", windResistDecreaseExt: "6", waterResistDecreasePot: "High", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "320", windResistDecreasePot: "High", windResistDecreaseDur: "24", windResistDecreaseExt: "8", waterResistDecreasePot: "High", waterResistDecreaseDur: "24", waterResistDecreaseExt: "8" }
    ]
  },
  "Debravera Surge (2)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: [
      { damage: "260", pAtkDecreaseDur: "20", pAtkDecreaseExt: "6" },
      { damage: "300", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "300", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "300", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "300", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "300", pAtkDecreaseDur: "22", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreaseDur: "25", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreaseDur: "25", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreaseDur: "25", pAtkDecreaseExt: "7" },
      { damage: "350", pAtkDecreaseDur: "25", pAtkDecreaseExt: "7" },
      { damage: "360", pAtkDecreaseDur: "28", pAtkDecreaseExt: "9" }
    ]
  },
  "Shuriken Throw": {
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", null, "All Enemies", null, null, "Mid")}`,
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
  "Flurry of Steel": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "320", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "" },
      { damage: "", fireResistDecreasePot: "", fireResistDecreaseDur: "", fireResistDecreaseExt: "" },
      { damage: "450", fireResistDecreasePot: "High", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "450", fireResistDecreasePot: "High", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "450", fireResistDecreasePot: "High", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "450", fireResistDecreasePot: "High", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7" },
      { damage: "510", fireResistDecreasePot: "High", fireResistDecreaseDur: "25", fireResistDecreaseExt: "8" }
    ]
  },
  "Sweeping Spin": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Ice Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "320", iceResistDecreasePot: "Mid", iceResistDecreaseDur: "20", iceResistDecreaseExt: "6" },
      { damage: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "", iceResistDecreasePot: "", iceResistDecreaseDur: "", iceResistDecreaseExt: "" },
      { damage: "450", iceResistDecreasePot: "High", iceResistDecreaseDur: "22", iceResistDecreaseExt: "7" },
      { damage: "450", iceResistDecreasePot: "High", iceResistDecreaseDur: "22", iceResistDecreaseExt: "7" },
      { damage: "450", iceResistDecreasePot: "High", iceResistDecreaseDur: "22", iceResistDecreaseExt: "7" },
      { damage: "450", iceResistDecreasePot: "High", iceResistDecreaseDur: "22", iceResistDecreaseExt: "7" },
      { damage: "510", iceResistDecreasePot: "High", iceResistDecreaseDur: "25", iceResistDecreaseExt: "8" }
    ]
  },
  "Quaga A (2)": {
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
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
  "Earth Ninjutsu": {
    description: `${damage("Phys. Earth", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: [
      { damage: "480" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "580" },
      { damage: "710" },
      { damage: "710" },
      { damage: "710" },
      { damage: "710" },
      { damage: "850" }
    ]
  },
  "Stalwart Faith (2)": {
    description: `${increase("MATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
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
  "Nimble Wind Slash": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Thunder Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "320", lightningResistDecreasePot: "Mid", lightningResistDecreaseDur: "20", lightningResistDecreaseExt: "6" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "", lightningResistDecreasePot: "", lightningResistDecreaseDur: "", lightningResistDecreaseExt: "" },
      { damage: "450", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "22", lightningResistDecreaseExt: "7" },
      { damage: "450", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "22", lightningResistDecreaseExt: "7" },
      { damage: "450", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "22", lightningResistDecreaseExt: "7" },
      { damage: "450", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "22", lightningResistDecreaseExt: "7" },
      { damage: "510", lightningResistDecreasePot: "High", lightningResistDecreaseDur: "25", lightningResistDecreaseExt: "8" }
    ]
  },
  "Venomstrike": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Poison", "Single Enemy", null, null, null)}`,
    valuesByOverboost: [
      { damage: "320", poisonRate: "50", poisonDur: "24", poisonExt: "6" },
      { damage: "370", poisonRate: "50", poisonDur: "26", poisonExt: "6" },
      { damage: "370", poisonRate: "50", poisonDur: "26", poisonExt: "6" },
      { damage: "370", poisonRate: "50", poisonDur: "26", poisonExt: "6" },
      { damage: "370", poisonRate: "50", poisonDur: "26", poisonExt: "6" },
      { damage: "370", poisonRate: "50", poisonDur: "26", poisonExt: "6" },
      { damage: "450", poisonRate: "70", poisonDur: "26", poisonExt: "6" },
      { damage: "450", poisonRate: "70", poisonDur: "26", poisonExt: "6" },
      { damage: "450", poisonRate: "70", poisonDur: "26", poisonExt: "6" },
      { damage: "450", poisonRate: "70", poisonDur: "26", poisonExt: "6" },
      { damage: "510", poisonRate: "70", poisonDur: "30", poisonExt: "7" }
    ]
  },
  "Ice Ninjutsu": {
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
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
  "Wind Ninjutsu": {
    description: `${damage("Phys. Wind", "All Enemies", null)}`,
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
  "Twister": {
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
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
  "Feisty Spirit": {
    description: `${increase("PATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${heal("Mag.", "Single Ally")}\n${increase("PATK", "Mid", "Self", null, null, null, null)}`,
    valuesByOverboost: [
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "24", pAtkIncreaseExt: "8", heal: "9", pAtkIncreaseMaxPot: "Mid" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "11", pAtkIncreaseMaxPot: "Mid" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "11", pAtkIncreaseMaxPot: "Mid" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "11", pAtkIncreaseMaxPot: "Mid" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "11", pAtkIncreaseMaxPot: "Mid" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "11", pAtkIncreaseMaxPot: "Mid" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "12", pAtkIncreaseMaxPot: "High" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "12", pAtkIncreaseMaxPot: "High" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "12", pAtkIncreaseMaxPot: "High" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "26", pAtkIncreaseExt: "8", heal: "12", pAtkIncreaseMaxPot: "High" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "30", pAtkIncreaseExt: "10", heal: "13", pAtkIncreaseMaxPot: "High" }
    ]
  },
  "Baddies Begone (1)": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)} The higher your HP, the higher the ability pot. (max: x2).`,
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
  "Watera Surge A (3)": {
    description: `${damage("Mag. Water", "All Enemies", null)}`,
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
  "Watera Surge (2)": {
    description: `${damage("Mag. Water", "Single Enemy", null)}`,
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
  "Explosion": {
    description: `${damage("Phys. Fire", "All Enemies", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("Fire Damage", "Low", "Self", null, null, null, null)}`,
    valuesByOverboost: [
      { damage: "390", fireDamageIncreaseDur: "25", fireDamageIncreaseExt: "5", fireDamageIncreaseMaxPot: "Mid" },
      { damage: "", fireDamageIncreaseDur: "", fireDamageIncreaseExt: "", fireDamageIncreaseMaxPot: "" },
      { damage: "", fireDamageIncreaseDur: "", fireDamageIncreaseExt: "", fireDamageIncreaseMaxPot: "" },
      { damage: "", fireDamageIncreaseDur: "", fireDamageIncreaseExt: "", fireDamageIncreaseMaxPot: "" },
      { damage: "", fireDamageIncreaseDur: "", fireDamageIncreaseExt: "", fireDamageIncreaseMaxPot: "" },
      { damage: "", fireDamageIncreaseDur: "", fireDamageIncreaseExt: "", fireDamageIncreaseMaxPot: "" },
      { damage: "620", fireDamageIncreaseDur: "30", fireDamageIncreaseExt: "6", fireDamageIncreaseMaxPot: "High" },
      { damage: "620", fireDamageIncreaseDur: "30", fireDamageIncreaseExt: "6", fireDamageIncreaseMaxPot: "High" },
      { damage: "620", fireDamageIncreaseDur: "30", fireDamageIncreaseExt: "6", fireDamageIncreaseMaxPot: "High" },
      { damage: "620", fireDamageIncreaseDur: "30", fireDamageIncreaseExt: "6", fireDamageIncreaseMaxPot: "High" },
      { damage: "700", fireDamageIncreaseDur: "35", fireDamageIncreaseExt: "7", fireDamageIncreaseMaxPot: "High" }
    ]
  },
  "Blizzara Surge A (4)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
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
  "Sonic Meow": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 30)}\nAlso, when hitting critical, x3 damage.`,
    valuesByOverboost: [
      { damage: "380" },
      { damage: "460" },
      { damage: "460" },
      { damage: "460" },
      { damage: "460" },
      { damage: "460" },
      { damage: "590" },
      { damage: "590" },
      { damage: "590" },
      { damage: "590" },
      { damage: "700" }
    ]
  },
  "Bloomin' Spray": {
    description: `${damage("Mag. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "390", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "20", waterResistDecreaseExt: "6" },
      { damage: "450", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "22", waterResistDecreaseExt: "7" },
      { damage: "450", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "22", waterResistDecreaseExt: "7" },
      { damage: "450", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "22", waterResistDecreaseExt: "7" },
      { damage: "450", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "22", waterResistDecreaseExt: "7" },
      { damage: "450", waterResistDecreasePot: "Mid", waterResistDecreaseDur: "22", waterResistDecreaseExt: "7" },
      { damage: "550", waterResistDecreasePot: "High", waterResistDecreaseDur: "26", waterResistDecreaseExt: "8" },
      { damage: "550", waterResistDecreasePot: "High", waterResistDecreaseDur: "26", waterResistDecreaseExt: "8" },
      { damage: "550", waterResistDecreasePot: "High", waterResistDecreaseDur: "26", waterResistDecreaseExt: "8" },
      { damage: "550", waterResistDecreasePot: "High", waterResistDecreaseDur: "26", waterResistDecreaseExt: "8" },
      { damage: "620", waterResistDecreasePot: "High", waterResistDecreaseDur: "30", waterResistDecreaseExt: "10" }
    ]
  },
  "Blizzaga A (3)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
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
  "Firaga A (2)": {
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
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
  "Instant Barrier": {
    description: `${increase("PDEF", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: [
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "30", pDefIncreaseExt: "10", regenDur: "8", heal: "9" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pDefIncreasePot: "Mid", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "34", pDefIncreaseExt: "11", regenDur: "12", heal: "12" },
      { pDefIncreasePot: "High", pDefIncreaseDur: "38", pDefIncreaseExt: "12", regenDur: "15", heal: "13" }
    ]
  },
  "Spinning Punch": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 20)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, null, "Low")}\nWhen hitting critical, ${decrease("PDEF", "High", "Affected Targets", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "320", pDefDecreaseDur: "20", pDefDecreaseExt: "6" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "", pDefDecreaseDur: "", pDefDecreaseExt: "" },
      { damage: "450", pDefDecreaseDur: "26", pDefDecreaseExt: "8" },
      { damage: "450", pDefDecreaseDur: "26", pDefDecreaseExt: "8" },
      { damage: "450", pDefDecreaseDur: "26", pDefDecreaseExt: "8" },
      { damage: "450", pDefDecreaseDur: "26", pDefDecreaseExt: "8" },
      { damage: "510", pDefDecreaseDur: "30", pDefDecreaseExt: "10" }
    ]
  },
  "Fat Cat Attack": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 20)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "High")}\nWhen hitting critical, ${decrease("MATK", null, "Affected Targets", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "320", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "20", fireResistDecreaseExt: "6", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "40", mAtkDecreaseExt: "13" },
      { damage: "370", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "44", mAtkDecreaseExt: "14" },
      { damage: "370", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "44", mAtkDecreaseExt: "14" },
      { damage: "370", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "44", mAtkDecreaseExt: "14" },
      { damage: "370", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "44", mAtkDecreaseExt: "14" },
      { damage: "370", fireResistDecreasePot: "Mid", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "44", mAtkDecreaseExt: "14" },
      { damage: "450", fireResistDecreasePot: "High", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "High", mAtkDecreaseDur: "52", mAtkDecreaseExt: "17" },
      { damage: "450", fireResistDecreasePot: "High", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "High", mAtkDecreaseDur: "52", mAtkDecreaseExt: "17" },
      { damage: "450", fireResistDecreasePot: "High", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "High", mAtkDecreaseDur: "52", mAtkDecreaseExt: "17" },
      { damage: "450", fireResistDecreasePot: "High", fireResistDecreaseDur: "22", fireResistDecreaseExt: "7", mAtkDecreasePot: "High", mAtkDecreaseDur: "52", mAtkDecreaseExt: "17" },
      { damage: "510", fireResistDecreasePot: "High", fireResistDecreaseDur: "25", fireResistDecreaseExt: "8", mAtkDecreasePot: "High", mAtkDecreaseDur: "60", mAtkDecreaseExt: "20" }
    ]
  },
  "Battle Drum": {
    description: `${damage("Phys. Non-elem.", "All Enemies", 20)}\nAlso, ${decrease("MATK", null, "All Enemies", null, null, "Mid")}\nWhen hitting critical, ${decrease("PATK", null, "Affected Targets", null, null, "High")}`,
    valuesByOverboost: [
      { damage: "220", mAtkDecreasePot: "Low", mAtkDecreaseDur: "20", mAtkDecreaseExt: "6", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "40", pAtkDecreaseExt: "13" },
      { damage: "250", mAtkDecreasePot: "Low", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "44", pAtkDecreaseExt: "14" },
      { damage: "250", mAtkDecreasePot: "Low", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "44", pAtkDecreaseExt: "14" },
      { damage: "250", mAtkDecreasePot: "Low", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "44", pAtkDecreaseExt: "14" },
      { damage: "250", mAtkDecreasePot: "Low", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "44", pAtkDecreaseExt: "14" },
      { damage: "250", mAtkDecreasePot: "Low", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "Mid", pAtkDecreaseDur: "44", pAtkDecreaseExt: "14" },
      { damage: "310", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "High", pAtkDecreaseDur: "52", pAtkDecreaseExt: "17" },
      { damage: "310", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "High", pAtkDecreaseDur: "52", pAtkDecreaseExt: "17" },
      { damage: "310", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "High", pAtkDecreaseDur: "52", pAtkDecreaseExt: "17" },
      { damage: "310", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "22", mAtkDecreaseExt: "7", pAtkDecreasePot: "High", pAtkDecreaseDur: "52", pAtkDecreaseExt: "17" },
      { damage: "350", mAtkDecreasePot: "Mid", mAtkDecreaseDur: "25", mAtkDecreaseExt: "8", pAtkDecreasePot: "High", pAtkDecreaseDur: "60", pAtkDecreaseExt: "20" }
    ]
  },
  "Shellmanship": {
    description: `${increase("PATK", null, "All Allies", null, null, null, "Mid")}\nAlso, ${heal("Mag.", "All Allies")}\n${increase("MATK", null, "All Allies", 20, null, null, "Mid")}`,
    valuesByOverboost: [
      { pAtkIncreasePot: "Low", pAtkIncreaseDur: "12", pAtkIncreaseExt: "4", heal: "5", mAtkIncreasePot: "Low", mAtkIncreaseDur: "12", mAtkIncreaseExt: "4" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", heal: "7", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "16", mAtkIncreaseExt: "5" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", heal: "7", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "16", mAtkIncreaseExt: "5" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", heal: "7", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "16", mAtkIncreaseExt: "5" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", heal: "7", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "16", mAtkIncreaseExt: "5" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "20", pAtkIncreaseExt: "6", heal: "7", mAtkIncreasePot: "Mid", mAtkIncreaseDur: "20", mAtkIncreaseExt: "6" }
    ]
  },
  "Stalwart Bravery (1)": {
    description: `${increase("PATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: [
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "30", pAtkIncreaseExt: "10", regenDur: "9", heal: "9" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "11" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "34", pAtkIncreaseExt: "11", regenDur: "12", heal: "12" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "38", pAtkIncreaseExt: "12", regenDur: "15", heal: "13" }
    ]
  },
  "Hang in There": {
    description: `${increase("MATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}\n${apply("Haste", "Single Ally", 20, null, 5)}`,
    valuesByOverboost: [
      { mAtkIncreasePot: "Mid", mAtkIncreaseDur: "30", mAtkIncreaseExt: "10", regenDur: "9", heal: "9", hasteDur: "10" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "", hasteDur: "" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "", hasteDur: "" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "", hasteDur: "" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "", hasteDur: "" },
      { mAtkIncreasePot: "", mAtkIncreaseDur: "", mAtkIncreaseExt: "", regenDur: "", heal: "", hasteDur: "" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12", hasteDur: "15" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12", hasteDur: "15" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12", hasteDur: "15" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "34", mAtkIncreaseExt: "11", regenDur: "12", heal: "12", hasteDur: "15" },
      { mAtkIncreasePot: "High", mAtkIncreaseDur: "38", mAtkIncreaseExt: "12", regenDur: "15", heal: "13", hasteDur: "20" }
    ]
  },
  "Aerora Surge A (1)": {
    description: `${damage("Mag. Wind", "All Enemies", null)}`,
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
  "Solid Bravery (2)": {
    description: `${increase("PATK", "Low", "Single Ally", null, null, null, "Mid")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
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
  "Blizzara Surge A (5)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
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
  "Comforting Cuisine": {
    description: `${increase("PATK", null, "All Allies", null, null, null, "High")}\nAlso, ${heal("Mag.", "All Allies")}\nWhen [Rng.: Self]'s HP is 70% or more, ${increase("PDEF", null, "All Allies", null, null, null, "High")}`,
    valuesByOverboost: [
      { pAtkIncreasePot: "Mid", pAtkIncreaseDur: "12", pAtkIncreaseExt: "4", heal: "5", pDefIncreasePot: "Mid", pDefIncreaseDur: "12", pDefIncreaseExt: "4" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "" },
      { pAtkIncreasePot: "", pAtkIncreaseDur: "", pAtkIncreaseExt: "", heal: "", pDefIncreasePot: "", pDefIncreaseDur: "", pDefIncreaseExt: "" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", heal: "7", pDefIncreasePot: "High", pDefIncreaseDur: "16", pDefIncreaseExt: "5" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", heal: "7", pDefIncreasePot: "High", pDefIncreaseDur: "16", pDefIncreaseExt: "5" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", heal: "7", pDefIncreasePot: "High", pDefIncreaseDur: "16", pDefIncreaseExt: "5" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "16", pAtkIncreaseExt: "5", heal: "7", pDefIncreasePot: "High", pDefIncreaseDur: "16", pDefIncreaseExt: "5" },
      { pAtkIncreasePot: "High", pAtkIncreaseDur: "20", pAtkIncreaseExt: "6", heal: "7", pDefIncreasePot: "High", pDefIncreaseDur: "20", pDefIncreaseExt: "6" }
    ]
  }
};

function getAttributeKey(attribute) {
  const attr = attribute === "PATK"            ? "pAtk"            :
               attribute === "MATK"            ? "mAtk"            :
               attribute === "PDEF"            ? "pDef"            :
               attribute === "MDEF"            ? "mDef"            :
               attribute === "Fire Resist."    ? "fireResist"      :
               attribute === "Ice Resist."     ? "iceResist"       :
               attribute === "Thunder Resist." ? "lightningResist" :
               attribute === "Earth Resist."   ? "earthResist"     :
               attribute === "Water Resist."   ? "waterResist"     :
               attribute === "Wind Resist."    ? "windResist"      :
               attribute === "Fire Damage"     ? "fireDamage"      :
               attribute === "Ice Damage"      ? "iceDamage"       :
               attribute === "Thunder Damage"  ? "lightningDamage" :
               attribute === "Earth Damage"    ? "earthDamage"     :
               attribute === "Water Damage"    ? "waterDamage"     :
               attribute === "Wind Damage"     ? "windDamage"      :
                                                 null              ;
  if (attr === null) throw new Error();
  return attr;
}

function getEffectKey(effect) {
  const eft = effect === "Ailment: Stun"    ? "stun"    :
              effect === "Ailment: Poison"  ? "poison"  :
              effect === "Ailment: Silence" ? "silence" :
              effect === "Haste"            ? "haste"   :
                                              null      ;
  if (eft === null) throw new Error();
  return eft;
}

function damage(type, range, critRate) {
  if (arguments.length !== damage.length) throw new Error();
  return `Deal {{damage}}% ${type} damage [Rng.: ${range}]${critRate ? ` ([Crit rate: ${critRate}%])` : ""}.`;
}

function decrease(attribute, potency, range, duration, extension, maxPotency) {
  if (arguments.length !== decrease.length) throw new Error();
  const attributeKey = getAttributeKey(attribute);
  const pot = potency ? potency : `{{${attributeKey}DecreasePot}}`;
  const dur = duration ? duration : `{{${attributeKey}DecreaseDur}}`;
  const ext = extension ? extension : `{{${attributeKey}DecreaseExt}}`;
  const maxPot = maxPotency ? maxPotency : `{{${attributeKey}DecreaseMaxPot}}`;
  return `${attribute} is decreased. [Pot.: ${pot}] [Rng.: ${range}] [Dur.: ${dur}s]. [Ext.: +${ext}s] [Max. pot.: ${maxPot}]`;
}

function increase(attribute, potency, range, rate, duration, extension, maxPotency) {
  if (arguments.length !== increase.length) throw new Error();
  const attributeKey = getAttributeKey(attribute);
  const pot = potency ? potency : `{{${attributeKey}IncreasePot}}`;
  const dur = duration ? duration : `{{${attributeKey}IncreaseDur}}`;
  const ext = extension ? extension : `{{${attributeKey}IncreaseExt}}`;
  const maxPot = maxPotency ? maxPotency : `{{${attributeKey}IncreaseMaxPot}}`;
  return `${attribute} is increased. [Pot.: ${pot}]${rate ? ` [Rate: ${rate}%]` : ""} [Rng.: ${range}] [Dur.: ${dur}s]. [Ext.: +${ext}s] [Max. pot.: ${maxPot}]`;
}

function heal(type, range) {
  if (arguments.length !== heal.length) throw new Error();
  return `${type} heal is cast. [Pot.: {{heal}}% of Healing Pot.] [Rng.: ${range}]`;
}

function regen(range, duration, extension) {
  if (arguments.length !== regen.length) throw new Error();
  const dur = duration ? duration : "{{regenDur}}";
  const ext = extension ? extension : "{{regenExt}}";
  return `Regen is applied [Rng.: ${range}]. [Dur.: ${dur}s] [Ext.: +${ext}s]`;
}

function apply(effect, range, rate, duration, extension) {
  if (arguments.length !== apply.length) throw new Error();
  const effectKey = getEffectKey(effect);
  const rte = rate ? rate : `{{${effectKey}Rate}}`;
  const dur = duration ? duration : `{{${effectKey}Dur}}`;
  const ext = extension ? extension : `{{${effectKey}Ext}}`;
  return `${effect} is applied [Rng.: ${range}] [Rate: ${rte}%]. [Dur.: ${dur}s] [Ext.: +${ext}s]`;
}

function remove(effect, range) {
  if (arguments.length !== remove.length) throw new Error();
  return `Removes ${effect} [Rng.: ${range}].`;
}
