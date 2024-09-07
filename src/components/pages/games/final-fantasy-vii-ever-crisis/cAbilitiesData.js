export const cAbilitiesData = {
  "Braver": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, when matching sigils are destroyed, x1.5 damage.`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"]
    }
  },
  "Blast Wave": {
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", null, "All Enemies", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "250", "250", "250", "250", "250", "310", "310", "310", "310", "350"],
      pAtkDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Armor Break": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Blade Burst": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Stalwart Barrier": {
    description: `${increase("PDEF", null, "Single Ally", null, null, null, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Thunderstrike": {
    description: `${damage("Phys. Lightning", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Shock Slice": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Stun", "Single Enemy", null, 5, 2)}`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"],
      stunRate: ["20", "", "", "", "", "", "30", "30", "30", "30", "30"]
    }
  },
  "Healing Wave": {
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["50", "60", "60", "60", "60", "60", "65", "65", "65", "65", "71"]
    }
  },
  "Blizzaga A (1)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Disorder": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nNo boosts to limit and summon gauges when using this ability.`,
    valuesByOverboost: {
      damage: ["850", "", "", "", "", "", "1,320", "1,320", "1,320", "1,320", "1,600"]
    }
  },
  "Bloody End": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Seasplitter": {
    description: `${damage("Phys. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Blizzara Surge (1)": {
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Sanctuary": {
    description: `${increase("MDEF", null, "All Allies", null, null, null, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["4", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6"]
    }
  },
  "Blazing Strike": {
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"]
    }
  },
  "Free Energy": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["650", "", "", "", "", "", "1,140", "1,140", "1,140", "1,140", "1,300"]
    }
  },
  "Quakera Surge A (1)": {
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Freezing Stream": {
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "740", "740", "740", "740", "900"]
    }
  },
  "Fira Surge A (1)": {
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "280", "280", "280", "280", "290"]
    }
  },
  "Fierce Charged Slash": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, null, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("PATK", null, "Self", null, null, null, null)}`,
    valuesByOverboost: {
      damage: ["530", "", "", "", "", "", "740", "740", "740", "740", "850"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"],
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      pAtkIncreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "7"],
      pAtkIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"]
    }
  },
  "Blizzara Surge A (1)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Fira Impact (1)": {
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Blitz Beat": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "", "", "", "", "", "620", "620", "620", "620", "750"]
    }
  },
  "Agitation": {
    description: `${increase("PDEF", null, "All Allies", null, null, null, "High")}\nAlso, ${heal("Phys.", "All Allies")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["10", "", "", "", "", "", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "", "", "", "", "", "4", "4", "4", "4", "4"],
      heal: ["4", "", "", "", "", "", "6", "6", "6", "6", "6"]
    }
  },
  "Stalwart Manaward (1)": {
    description: `${increase("MDEF", null, "Single Ally", null, null, null, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Stalwart Faith (1)": {
    description: `${increase("MATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Quick Burst": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      pDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Doom Impact": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Chain Bomber": {
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}`,
    valuesByOverboost: {
      damage: ["350", "420", "420", "420", "420", "420", "550", "550", "550", "550", "650"]
    }
  },
  "Energy Laser": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Firaga A (1)": {
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Pyroball": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Solid Barrier (1)": {
    description: `${increase("PDEF", "Mid", "Single Ally", null, null, null, null)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      pDefIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Jet Fists": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)} The lower your HP, the higher the ability pot. (max: x3).`,
    valuesByOverboost: {
      damage: ["270", "", "", "", "", "", "420", "420", "420", "420", "500"]
    }
  },
  "Blizzara Surge (2)": {
    description: `${damage("Mag. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Manara Breach Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Low", "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      mDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      mDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Watera Surge A (1)": {
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Energization": {
    description: `${damage("Mag. Lightning", "All Enemies", null)}\nAlso, ${decrease("PATK", "Mid", "All Enemies", null, null, null)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("MATK", "Mid", "All Enemies", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "480", "480", "480", "480", "540"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"],
      pAtkDecreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      mAtkDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"]
    }
  },
  "Watera Surge (1)": {
    description: `${damage("Mag. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "430", "430", "430", "430", "450"]
    }
  },
  "Dorsal Fin Shot": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "High")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "360", "360", "360", "360", "420"],
      fireResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      fireResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"],
      waterResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      waterResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"]
    }
  },
  "Omnistrike": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Vigor": {
    description: `${heal("Phys.", "Self")}\nAlso, ${remove("Ailment: Poison, Ailment: Silence", "Self")}`,
    valuesByOverboost: {
      heal: ["93", "112", "112", "112", "112", "112", "121", "121", "121", "121", "130"]
    }
  },
  "Divekick": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["530", "640", "640", "640", "640", "640", "830", "830", "830", "830", "990"]
    }
  },
  "Uppershot": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Thundaga A (1)": {
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "320", "320", "320", "320", "320", "420", "420", "420", "420", "500"]
    }
  },
  "Sonic Spiral": {
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["420", "500", "500", "500", "500", "500", "660", "660", "660", "660", "790"]
    }
  },
  "Chi Trap": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["300", "350", "350", "350", "350", "350", "420", "420", "420", "420", "480"],
      mDefDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Wall of Will": {
    description: `${increase("PDEF", null, "Self", null, null, null, "High")}\nAlso, ${increase("PATK", null, "Self", null, null, null, "High")}\n${heal("Mag.", "Self")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      pDefIncreaseExt: ["8", "", "", "", "", "", "10", "10", "10", "10", "11"],
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      pAtkIncreaseExt: ["8", "", "", "", "", "", "10", "10", "10", "10", "11"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Savage Blast": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "750", "750", "750", "750", "900"]
    }
  },
  "Healing Waves": {
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["38", "46", "46", "46", "46", "46", "49", "49", "49", "49", "54"]
    }
  },
  "Featherstrike": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, null, "Mid")}\nWhen [Rng: Self]'s HP is 50% or more, ${increase("Water Damage", null, "Self", null, null, null, null)}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "360", "360", "360", "360", "420"],
      mDefDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      mDefDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"],
      waterDamageIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      waterDamageIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      waterDamageIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      waterDamageIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Ruinra Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "430", "430", "430", "430", "450"]
    }
  },
  "Freezing Blow": {
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "No Mercy": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${increase("PATK", null, "Self", null, null, null, null)}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("MATK", "Mid", "Single Enemy", null, null, null)}`,
    valuesByOverboost: {
      damage: ["360", "", "", "", "", "", "630", "630", "630", "630", "720"],
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["25", "", "", "", "", "", "36", "36", "36", "36", "40"],
      pAtkIncreaseExt: ["5", "", "", "", "", "", "7", "7", "7", "7", "8"],
      pAtkIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      mAtkDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"],
      mAtkDecreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"]
    }
  },
  "Aqua Splash": {
    description: `${damage("Mag. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("MATK", "Low", "Self", null, null, null, null)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"],
      mAtkIncreaseDur: ["25", "28", "28", "28", "28", "28", "30", "30", "30", "30", "35"],
      mAtkIncreaseExt: ["5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "7"],
      mAtkIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Solid Bravery (1)": {
    description: `${increase("PATK", "Low", "Single Ally", null, null, null, "Mid")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreaseDur: ["34", "", "", "", "", "", "40", "40", "40", "40", "44"],
      pAtkIncreaseExt: ["11", "", "", "", "", "", "13", "13", "13", "13", "14"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Armora Breach Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Zangan Fist": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["650", "780", "780", "780", "780", "780", "1,140", "1,140", "1,140", "1,140", "1,300"]
    }
  },
  "Spiral Levin Strike": {
    description: `${damage("Mag. Lightning", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("MATK", null, "Self", null, null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "780", "780", "780", "780", "940"],
      mAtkIncreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mAtkIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      mAtkIncreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "7"]
    }
  },
  "Spinning Fervor": {
    description: `${damage("Mag. Fire", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["520", "", "", "", "", "", "810", "810", "810", "810", "940"]
    }
  },
  "Debravera Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Stalwart Manaward (2)": {
    description: `${increase("MDEF", null, "Single Ally", null, null, null, "High")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      heal: ["10", "13", "13", "13", "13", "13", "13", "13", "13", "13", "15"]
    }
  },
  "Blizzaga A (2)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Tempest Force": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "750", "750", "750", "750", "900"]
    }
  },
  "Saving Grace": {
    description: `${increase("PDEF", null, "All Allies", null, null, null, "Mid")}\nAlso, ${increase("MDEF", null, "All Allies", null, null, null, "Mid")}\n${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      pDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      mDefIncreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["7", "8", "8", "8", "8", "8", "9", "9", "9", "9", "9"]
    }
  },
  "Heavenly Spike": {
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", null, "All Enemies", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "290", "290", "290", "290", "340"],
      pAtkDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Raging Sphere": {
    description: `${damage("Mag. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Curaga A": {
    description: `${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      heal: ["53", "63", "63", "63", "63", "63", "69", "69", "69", "69", "74"]
    }
  },
  "Thundaga A (2)": {
    description: `${damage("Mag. Lightning", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Quaga A (1)": {
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["290", "350", "350", "350", "350", "350", "450", "450", "450", "450", "540"]
    }
  },
  "Nightbloom": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", null, "Single Enemy", null, null, "Mid")}\n${decrease("MDEF", null, "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      pDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      pDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"],
      mDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Floral Flare": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Mid", "Single Enemy", null, null, "Mid")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Wind Resist.", null, "Single Enemy", null, null, null)}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "360", "360", "360", "360", "420"],
      pDefDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      pDefDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"],
      windResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "High", "High", "High", "High", "High"],
      windResistDecreaseDur: ["16", "18", "18", "18", "18", "18", "20", "20", "20", "20", "24"],
      windResistDecreaseExt: ["5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "8"],
      windResistDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Cleansing Rain": {
    description: `${remove("Phys. Attack Down, Mag. Attack Down", "Single Ally")}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["77", "", "", "", "", "", "100", "100", "100", "100", "108"]
    }
  },
  "Solid Manaward (1)": {
    description: `${increase("MDEF", "Mid", "Single Ally", null, null, null, null)}\nAlso, ${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      mDefIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Snowspell": {
    description: `${damage("Mag. Ice", "Single Enemy", null)}\nAlso, ${decrease("MDEF", "Mid", "Single Enemy", null, null, null)}`,
    valuesByOverboost: {
      damage: ["340", "390", "390", "390", "390", "390", "480", "480", "480", "480", "540"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Thundara Surge (1)": {
    description: `${damage("Mag. Lightning", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "460", "460", "460", "460", "480"]
    }
  },
  "Healing Pulse": {
    description: `${increase("MATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Helical Flame": {
    description: `${damage("Mag. Fire", "All Enemies", null)}\nAlso, against a single target, x1.3 damage.`,
    valuesByOverboost: {
      damage: ["340", "", "", "", "", "", "530", "530", "530", "530", "630"]
    }
  },
  "Armora Breach Surge (2)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Spiritual Harmony": {
    description: `${increase("PATK", null, "All Allies", null, null, null, "High")}\nAlso, when [Rng.: Self]'s HP is 70% or more, ${increase("MDEF", null, "All Allies", null, null, null, "High")}\n${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      pAtkIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"],
      mDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      mDefIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"],
      heal: ["5", "", "", "", "", "", "7", "7", "7", "7", "7"]
    }
  },
  "Watera Surge A (2)": {
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Blizzara Surge A (2)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Fruitful Energy": {
    description: `${increase("Ice Damage", null, "Single Ally", null, null, null, null)}\nAlso, ${heal("Mag.", "Single Ally")}\nWhen [Rng.: Self]'s HP is 50% or more, ${increase("MATK", "Mid", "Single Ally", null, null, null, null)}`,
    valuesByOverboost: {
      iceDamageIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      iceDamageIncreaseDur: ["24", "", "", "", "", "", "26", "26", "26", "26", "30"],
      iceDamageIncreaseExt: ["8", "", "", "", "", "", "8", "8", "8", "8", "10"],
      iceDamageIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      heal: ["7", "", "", "", "", "", "9", "9", "9", "9", "9"],
      mAtkIncreaseDur: ["24", "", "", "", "", "", "26", "26", "26", "26", "30"],
      mAtkIncreaseExt: ["8", "", "", "", "", "", "8", "8", "8", "8", "10"],
      mAtkIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"]
    }
  },
  "Manaward A": {
    description: `${increase("MDEF", null, "All Allies", null, null, null, "High")}\nAlso, ${heal("Mag.", "All Allies")}`,
    valuesByOverboost: {
      mDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mDefIncreaseDur: ["10", "12", "12", "12", "12", "12", "12", "12", "12", "12", "14"],
      mDefIncreaseExt: ["3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
      heal: ["4", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6"]
    }
  },
  "Eternal Storm": {
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("MDEF", null, "All Enemies", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "250", "250", "250", "250", "250", "310", "310", "310", "310", "350"],
      mDefDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Therapeutic Touch": {
    description: `${heal("Mag.", "All Allies")}\nAlso, ${regen("All Allies", null, null)}`,
    valuesByOverboost: {
      heal: ["8", "9", "9", "9", "9", "9", "10", "10", "10", "10", "11"],
      regenDur: ["9", "12", "12", "12", "12", "12", "15", "15", "15", "15", "18"],
      regenExt: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "6"]
    }
  },
  "Waterga A (1)": {
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Blaze Rush": {
    description: `${damage("Phys. Fire", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["400", "480", "480", "480", "480", "480", "620", "620", "620", "620", "750"]
    }
  },
  "Sonic Fangs": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}`,
    valuesByOverboost: {
      damage: ["500", "600", "600", "600", "600", "600", "780", "780", "780", "780", "940"]
    }
  },
  "Mystic Flow": {
    description: `${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      heal: ["81", "97", "97", "97", "97", "97", "105", "105", "105", "105", "113"]
    }
  },
  "Frenzied Fang": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MATK", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"]
    }
  },
  "Canyon Gale": {
    description: `${damage("Mag. Wind", "All Enemies", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("MDEF", "Mid", "All Enemies", null, null, null)}`,
    valuesByOverboost: {
      damage: ["270", "320", "320", "320", "320", "320", "420", "420", "420", "420", "500"],
      mDefDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      mDefDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"],
      mDefDecreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Spiral Swing": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Wild Howling": {
    description: `${damage("Mag. Non-elem.", "All Enemies", 10)}\nAlso, ${remove("Mag. Defense Up", "All Enemies")}`,
    valuesByOverboost: {
      damage: ["290", "", "", "", "", "", "450", "450", "450", "450", "540"]
    }
  },
  "Power Fang": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Thunder Resist.", null, "Single Enemy", null, null, "High")}\n${regen("Self", 3, 3)}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      lightningResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      lightningResistDecreaseDur: ["15", "", "", "", "", "", "18", "18", "18", "18", "21"],
      lightningResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "7"]
    }
  },
  "Manara Breach Surge (2)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("MDEF", "Low", "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "350", "350", "350", "350", "360"],
      mDefDecreaseDur: ["20", "", "", "", "", "", "25", "25", "25", "25", "28"],
      mDefDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "9"]
    }
  },
  "Defira Surge (1)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      fireResistDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Fira Surge A (2)": {
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "240", "240", "240", "240", "240", "280", "280", "280", "280", "290"]
    }
  },
  "Growing Ivy": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "High")}\n${decrease("Ice Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["260", "", "", "", "", "", "360", "360", "360", "360", "420"],
      fireResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      fireResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"],
      iceResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      iceResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"]
    }
  },
  "Blizzara Surge A (3)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Rolling Claw": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Wind Resist.", null, "Single Enemy", null, null, "High")}\nWhen [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["200", "", "", "", "", "", "280", "280", "280", "280", "320"],
      windResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      windResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      windResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"],
      waterResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["16", "", "", "", "", "", "20", "20", "20", "20", "24"],
      waterResistDecreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "8"]
    }
  },
  "Debravera Surge (2)": {
    description: `${damage("Mag. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("PATK", "Low", "Single Enemy", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["260", "300", "300", "300", "300", "300", "350", "350", "350", "350", "360"],
      pAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "25", "25", "25", "25", "28"],
      pAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "9"]
    }
  },
  "Shuriken Throw": {
    description: `${damage("Phys. Non-elem.", "All Enemies", 10)}\nAlso, ${decrease("PATK", null, "All Enemies", null, null, "Mid")}`,
    valuesByOverboost: {
      damage: ["220", "", "", "", "", "", "310", "310", "310", "310", "350"],
      pAtkDecreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      pAtkDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Flurry of Steel": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      fireResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      fireResistDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Sweeping Spin": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Ice Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      iceResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      iceResistDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      iceResistDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Quaga A (2)": {
    description: `${damage("Mag. Earth", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Earth Ninjutsu": {
    description: `${damage("Phys. Earth", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 70% or more, x1.2 damage.`,
    valuesByOverboost: {
      damage: ["480", "580", "580", "580", "580", "580", "710", "710", "710", "710", "850"]
    }
  },
  "Stalwart Faith (2)": {
    description: `${increase("MATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Nimble Wind Slash": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${decrease("Thunder Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      lightningResistDecreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      lightningResistDecreaseDur: ["20", "", "", "", "", "", "22", "22", "22", "22", "25"],
      lightningResistDecreaseExt: ["6", "", "", "", "", "", "7", "7", "7", "7", "8"]
    }
  },
  "Venomstrike": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)}\nAlso, ${apply("Ailment: Poison", "Single Enemy", null, null, null)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      poisonRate: ["50", "50", "50", "50", "50", "50", "70", "70", "70", "70", "70"],
      poisonDur: ["24", "26", "26", "26", "26", "26", "26", "26", "26", "26", "30"],
      poisonExt: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "7"]
    }
  },
  "Ice Ninjutsu": {
    description: `${damage("Phys. Ice", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["440", "530", "530", "530", "530", "530", "660", "660", "660", "660", "800"]
    }
  },
  "Wind Ninjutsu": {
    description: `${damage("Phys. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "", "", "", "", "", "440", "440", "440", "440", "520"]
    }
  },
  "Twister": {
    description: `${damage("Phys. Wind", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["480", "", "", "", "", "", "710", "710", "710", "710", "850"]
    }
  },
  "Feisty Spirit": {
    description: `${increase("PATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${heal("Mag.", "Single Ally")}\n${increase("PATK", "Mid", "Self", null, null, null, null)}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["24", "26", "26", "26", "26", "26", "26", "26", "26", "26", "30"],
      pAtkIncreaseExt: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "10"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"],
      pAtkIncreaseMaxPot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"]
    }
  },
  "Baddies Begone (1)": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 10)} The higher your HP, the higher the ability pot. (max: x2).`,
    valuesByOverboost: {
      damage: ["270", "", "", "", "", "", "420", "420", "420", "420", "500"]
    }
  },
  "Watera Surge A (3)": {
    description: `${damage("Mag. Water", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Watera Surge (2)": {
    description: `${damage("Mag. Water", "Single Enemy", null)}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "430", "430", "430", "430", "450"]
    }
  },
  "Explosion": {
    description: `${damage("Phys. Fire", "All Enemies", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${increase("Fire Damage", "Low", "Self", null, null, null, null)}`,
    valuesByOverboost: {
      damage: ["390", "", "", "", "", "", "620", "620", "620", "620", "700"],
      fireDamageIncreaseDur: ["25", "", "", "", "", "", "30", "30", "30", "30", "35"],
      fireDamageIncreaseExt: ["5", "", "", "", "", "", "6", "6", "6", "6", "7"],
      fireDamageIncreaseMaxPot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"]
    }
  },
  "Blizzara Surge A (4)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Sonic Meow": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 30)}\nAlso, when hitting critical, x3 damage.`,
    valuesByOverboost: {
      damage: ["380", "460", "460", "460", "460", "460", "590", "590", "590", "590", "700"]
    }
  },
  "Bloomin' Spray": {
    description: `${damage("Mag. Water", "Single Enemy", null)}\nAlso, when [Rng.: Self]'s HP is 50% or more, ${decrease("Water Resist.", null, "Single Enemy", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["390", "450", "450", "450", "450", "450", "550", "550", "550", "550", "620"],
      waterResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      waterResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "26", "26", "26", "26", "30"],
      waterResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "8", "8", "8", "8", "10"]
    }
  },
  "Blizzaga A (3)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "", "", "", "", "", "440", "440", "440", "440", "520"]
    }
  },
  "Firaga A (2)": {
    description: `${damage("Mag. Fire", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["280", "340", "340", "340", "340", "340", "440", "440", "440", "440", "520"]
    }
  },
  "Instant Barrier": {
    description: `${increase("PDEF", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pDefIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pDefIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["8", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Spinning Punch": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 20)}\nAlso, ${decrease("PDEF", "Low", "Single Enemy", null, null, "Low")}\nWhen hitting critical, ${decrease("PDEF", "High", "Affected Targets", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "", "", "", "", "", "450", "450", "450", "450", "510"],
      pDefDecreaseDur: ["20", "", "", "", "", "", "26", "26", "26", "26", "30"],
      pDefDecreaseExt: ["6", "", "", "", "", "", "8", "8", "8", "8", "10"]
    }
  },
  "Fat Cat Attack": {
    description: `${damage("Phys. Non-elem.", "Single Enemy", 20)}\nAlso, ${decrease("Fire Resist.", null, "Single Enemy", null, null, "High")}\nWhen hitting critical, ${decrease("MATK", null, "Affected Targets", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["320", "370", "370", "370", "370", "370", "450", "450", "450", "450", "510"],
      fireResistDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      fireResistDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      fireResistDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"],
      mAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      mAtkDecreaseDur: ["40", "44", "44", "44", "44", "44", "52", "52", "52", "52", "60"],
      mAtkDecreaseExt: ["13", "14", "14", "14", "14", "14", "17", "17", "17", "17", "20"]
    }
  },
  "Battle Drum": {
    description: `${damage("Phys. Non-elem.", "All Enemies", 20)}\nAlso, ${decrease("MATK", null, "All Enemies", null, null, "Mid")}\nWhen hitting critical, ${decrease("PATK", null, "Affected Targets", null, null, "High")}`,
    valuesByOverboost: {
      damage: ["220", "250", "250", "250", "250", "250", "310", "310", "310", "310", "350"],
      mAtkDecreasePot: ["Low", "Low", "Low", "Low", "Low", "Low", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mAtkDecreaseDur: ["20", "22", "22", "22", "22", "22", "22", "22", "22", "22", "25"],
      mAtkDecreaseExt: ["6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8"],
      pAtkDecreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkDecreaseDur: ["40", "44", "44", "44", "44", "44", "52", "52", "52", "52", "60"],
      pAtkDecreaseExt: ["13", "14", "14", "14", "14", "14", "17", "17", "17", "17", "20"]
    }
  },
  "Shellmanship": {
    description: `${increase("PATK", null, "All Allies", null, null, null, "Mid")}\nAlso, ${heal("Mag.", "All Allies")}\n${increase("MATK", null, "All Allies", 20, null, null, "Mid")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      pAtkIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      pAtkIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"],
      heal: ["5", "", "", "", "", "", "7", "7", "7", "7", "7"],
      mAtkIncreasePot: ["Low", "", "", "", "", "", "Mid", "Mid", "Mid", "Mid", "Mid"],
      mAtkIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      mAtkIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"]
    }
  },
  "Stalwart Bravery (1)": {
    description: `${increase("PATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "Mid", "Mid", "Mid", "Mid", "Mid", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["30", "34", "34", "34", "34", "34", "34", "34", "34", "34", "38"],
      pAtkIncreaseExt: ["10", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12"],
      regenDur: ["9", "12", "12", "12", "12", "12", "12", "12", "12", "12", "15"],
      heal: ["9", "11", "11", "11", "11", "11", "12", "12", "12", "12", "13"]
    }
  },
  "Hang in There": {
    description: `${increase("MATK", null, "Single Ally", null, null, null, "High")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}\n${apply("Haste", "Single Ally", 20, null, 5)}`,
    valuesByOverboost: {
      mAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      mAtkIncreaseDur: ["30", "", "", "", "", "", "34", "34", "34", "34", "38"],
      mAtkIncreaseExt: ["10", "", "", "", "", "", "11", "11", "11", "11", "12"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"],
      hasteDur: ["10", "", "", "", "", "", "15", "15", "15", "15", "20"]
    }
  },
  "Aerora Surge A (1)": {
    description: `${damage("Mag. Wind", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Solid Bravery (2)": {
    description: `${increase("PATK", "Low", "Single Ally", null, null, null, "Mid")}\nAlso, ${regen("Single Ally", null, 3)}\n${heal("Mag.", "Single Ally")}`,
    valuesByOverboost: {
      pAtkIncreaseDur: ["34", "", "", "", "", "", "40", "40", "40", "40", "44"],
      pAtkIncreaseExt: ["11", "", "", "", "", "", "13", "13", "13", "13", "14"],
      regenDur: ["9", "", "", "", "", "", "12", "12", "12", "12", "15"],
      heal: ["9", "", "", "", "", "", "12", "12", "12", "12", "13"]
    }
  },
  "Blizzara Surge A (5)": {
    description: `${damage("Mag. Ice", "All Enemies", null)}`,
    valuesByOverboost: {
      damage: ["210", "", "", "", "", "", "280", "280", "280", "280", "290"]
    }
  },
  "Comforting Cuisine": {
    description: `${increase("PATK", null, "All Allies", null, null, null, "High")}\nAlso, ${heal("Mag.", "All Allies")}\nWhen [Rng.: Self]'s HP is 70% or more, ${increase("PDEF", null, "All Allies", null, null, null, "High")}`,
    valuesByOverboost: {
      pAtkIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pAtkIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      pAtkIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"],
      heal: ["5", "", "", "", "", "", "7", "7", "7", "7", "7"],
      pDefIncreasePot: ["Mid", "", "", "", "", "", "High", "High", "High", "High", "High"],
      pDefIncreaseDur: ["12", "", "", "", "", "", "16", "16", "16", "16", "20"],
      pDefIncreaseExt: ["4", "", "", "", "", "", "5", "5", "5", "5", "6"]
    }
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
