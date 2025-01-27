export type Items = {[k: string]: number};

export const ITEMS_MASKS_REGULAR = [
  'MM_MASK_CAPTAIN',
  'MM_MASK_GIANT',
  'MM_MASK_ALL_NIGHT',
  'MM_MASK_BUNNY',
  'MM_MASK_KEATON',
  'MM_MASK_GARO',
  'MM_MASK_ROMANI',
  'MM_MASK_TROUPE_LEADER',
  'MM_MASK_POSTMAN',
  'MM_MASK_COUPLE',
  'MM_MASK_GREAT_FAIRY',
  'MM_MASK_GIBDO',
  'MM_MASK_DON_GERO',
  'MM_MASK_KAMARO',
  'MM_MASK_TRUTH',
  'MM_MASK_STONE',
  'MM_MASK_BREMEN',
  'MM_MASK_BLAST',
  'MM_MASK_SCENTS',
  'MM_MASK_KAFEI',
  'SHARED_MASK_TRUTH',
  'SHARED_MASK_BUNNY',
  'SHARED_MASK_KEATON',
];

export const ITEMS_MASKS_TRANSFORM = [
  'MM_MASK_DEKU',
  'MM_MASK_GORON',
  'MM_MASK_ZORA',
  'MM_MASK_FIERCE_DEITY',
  'SHARED_MASK_GORON',
  'SHARED_MASK_ZORA',
];

export const ITEMS_MASKS_OOT = [
  'OOT_MASK_SKULL',
  'OOT_MASK_SPOOKY',
  'OOT_MASK_KEATON',
  'OOT_MASK_BUNNY',
  'OOT_MASK_TRUTH',
  'OOT_MASK_GERUDO',
  'OOT_MASK_GORON',
  'OOT_MASK_ZORA',
  'SHARED_MASK_KEATON',
  'SHARED_MASK_BUNNY',
  'SHARED_MASK_TRUTH',
  'SHARED_MASK_GORON',
  'SHARED_MASK_ZORA',
];

export const ITEMS_STONES = [
  'OOT_STONE_EMERALD',
  'OOT_STONE_RUBY',
  'OOT_STONE_SAPPHIRE',
];

export const ITEMS_MEDALLIONS = [
  'OOT_MEDALLION_LIGHT',
  'OOT_MEDALLION_FOREST',
  'OOT_MEDALLION_FIRE',
  'OOT_MEDALLION_WATER',
  'OOT_MEDALLION_SPIRIT',
  'OOT_MEDALLION_SHADOW',
];

export const ITEMS_REMAINS = [
  'MM_REMAINS_ODOLWA',
  'MM_REMAINS_GOHT',
  'MM_REMAINS_GYORG',
  'MM_REMAINS_TWINMOLD',
];

export const DUNGEON_REWARDS_ORDERED = [
  ...ITEMS_STONES,
  ...ITEMS_MEDALLIONS,
  ...ITEMS_REMAINS,
];
export const DUNGEON_REWARDS = new Set(DUNGEON_REWARDS_ORDERED);

export const ITEMS_REQUIRED = new Set<string>([
  'OOT_WEIRD_EGG',
  'OOT_POCKET_EGG',
  'OOT_SHIELD_DEKU',
  'OOT_SHIELD_HYLIAN',
  'OOT_GS_TOKEN',
  'OOT_ARROW_FIRE',
  'OOT_ARROW_LIGHT',
  'OOT_BOMB_BAG',
  'OOT_BOOMERANG',
  'OOT_BOOTS_HOVER',
  'OOT_BOOTS_IRON',
  'OOT_BOW',
  'OOT_CHICKEN',
  'OOT_BOTTLE_EMPTY',
  'OOT_GERUDO_CARD',
  'OOT_HAMMER',
  'OOT_HOOKSHOT',
  'OOT_LENS',
  'OOT_MAGIC_UPGRADE',
  'OOT_OCARINA',
  'OOT_RUTO_LETTER',
  'OOT_SCALE',
  'OOT_SHIELD',
  'OOT_SHIELD_MIRROR',
  'OOT_SLINGSHOT',
  'OOT_SONG_EPONA',
  'OOT_SONG_SARIA',
  'OOT_SONG_STORMS',
  'OOT_SONG_SUN',
  'OOT_SONG_TIME',
  'OOT_SONG_ZELDA',
  'OOT_SONG_TP_FOREST',
  'OOT_SONG_TP_FIRE',
  'OOT_SONG_TP_SHADOW',
  'OOT_SONG_TP_SPIRIT',
  'OOT_SPELL_FIRE',
  'OOT_STRENGTH',
  'OOT_SWORD',
  'OOT_SWORD_KOKIRI',
  'OOT_SWORD_MASTER',
  'OOT_TUNIC_GORON',
  'OOT_TUNIC_ZORA',
  'OOT_ZELDA_LETTER',
  'OOT_MAGIC_BEAN',
  'OOT_BOTTLE_MILK',
  'OOT_STONE_OF_AGONY',
  'OOT_WALLET',
  'OOT_POCKET_CUCCO',
  'OOT_COJIRO',
  'OOT_ODD_MUSHROOM',
  'OOT_ODD_POTION',
  'OOT_POACHER_SAW',
  'OOT_BROKEN_GORON_SWORD',
  'OOT_PRESCRIPTION',
  'OOT_EYEBALL_FROG',
  'OOT_EYE_DROPS',
  'OOT_CLAIM_CHECK',
  'OOT_MASK_TRUTH',
  'OOT_MASK_SKULL',
  'OOT_MASK_SPOOKY',
  'OOT_MASK_GERUDO',
  'OOT_MASK_ZORA',
  'OOT_MASK_GORON',
  'OOT_MASK_BUNNY',
  'OOT_MASK_KEATON',
  'OOT_BLUE_FIRE',
  'OOT_STICK',
  'OOT_STICKS_5',
  'OOT_STICKS_10',
  'MM_GS_TOKEN_SWAMP',
  'MM_GS_TOKEN_OCEAN',
  'MM_SHIELD_HERO',
  'MM_MASK_DEKU',
  'MM_MASK_GORON',
  'MM_MASK_ZORA',
  'MM_MASK_CAPTAIN',
  'MM_MASK_GIANT',
  'MM_MASK_ALL_NIGHT',
  'MM_MASK_BUNNY',
  'MM_MASK_KEATON',
  'MM_MASK_GARO',
  'MM_MASK_ROMANI',
  'MM_MASK_TROUPE_LEADER',
  'MM_MASK_POSTMAN',
  'MM_MASK_COUPLE',
  'MM_MASK_GREAT_FAIRY',
  'MM_MASK_GIBDO',
  'MM_MASK_DON_GERO',
  'MM_MASK_KAMARO',
  'MM_MASK_TRUTH',
  'MM_MASK_STONE',
  'MM_MASK_BREMEN',
  'MM_MASK_BLAST',
  'MM_MASK_SCENTS',
  'MM_MASK_KAFEI',
  'MM_MASK_FIERCE_DEITY',
  'MM_BOTTLE_POTION_RED',
  'MM_BOTTLED_GOLD_DUST',
  'MM_BOTTLE_EMPTY',
  'MM_BOTTLE_MILK',
  'MM_MAGIC_UPGRADE',
  'MM_SONG_TIME',
  'MM_SONG_AWAKENING',
  'MM_SONG_HEALING',
  'MM_SONG_EPONA',
  'MM_SONG_SOARING',
  'MM_SONG_GORON_HALF',
  'MM_SONG_GORON',
  'MM_SONG_ZORA',
  'MM_SONG_STORMS',
  'MM_SONG_EMPTINESS',
  'MM_SONG_ORDER',
  'MM_BOW',
  'MM_OCARINA',
  'MM_SWORD',
  'MM_SHIELD',
  'MM_SHIELD_MIRROR',
  'MM_BOMB_BAG',
  'MM_LENS',
  'MM_ARROW_FIRE',
  'MM_ARROW_ICE',
  'MM_ARROW_LIGHT',
  'MM_POWDER_KEG',
  'MM_HOOKSHOT',
  'MM_PICTOGRAPH_BOX',
  'MM_MAGIC_BEAN',
  'MM_MOON_TEAR',
  'MM_DEED_LAND',
  'MM_DEED_SWAMP',
  'MM_DEED_MOUNTAIN',
  'MM_DEED_OCEAN',
  'MM_ROOM_KEY',
  'MM_LETTER_TO_KAFEI',
  'MM_PENDANT_OF_MEMORIES',
  'MM_LETTER_TO_MAMA',
  'MM_WALLET',
  'MM_GREAT_FAIRY_SWORD',
  'MM_SPIN_UPGRADE',
  'MM_POTION_BLUE',
  'MM_POTION_RED',
  'MM_MILK',
  'SHARED_BOW',
  'SHARED_BOMB_BAG',
  'SHARED_MAGIC_UPGRADE',
  'SHARED_ARROW_FIRE',
  'SHARED_ARROW_ICE',
  'SHARED_ARROW_LIGHT',
  'SHARED_SONG_EPONA',
  'SHARED_SONG_TIME',
  'SHARED_SONG_STORMS',
  'SHARED_HOOKSHOT',
  'SHARED_LENS',
  'SHARED_OCARINA',
  'SHARED_MASK_GORON',
  'SHARED_MASK_ZORA',
  'SHARED_MASK_TRUTH',
  'SHARED_MASK_BUNNY',
  'SHARED_MASK_KEATON',
  'SHARED_WALLET',
  'SHARED_STICK',
  'SHARED_STICKS_5',
  'SHARED_STICKS_10',
]);

export const ITEMS_MAPS = new Set([
  'OOT_MAP_DT',
  'OOT_MAP_DC',
  'OOT_MAP_JJ',
  'OOT_MAP_FOREST',
  'OOT_MAP_FIRE',
  'OOT_MAP_WATER',
  'OOT_MAP_SPIRIT',
  'OOT_MAP_SHADOW',
  'OOT_MAP_BOTW',
  'OOT_MAP_IC',
  'MM_MAP_WF',
  'MM_MAP_SH',
  'MM_MAP_GB',
  'MM_MAP_ST',
]);

export const ITEMS_COMPASSES = new Set([
  'OOT_COMPASS_DT',
  'OOT_COMPASS_DC',
  'OOT_COMPASS_JJ',
  'OOT_COMPASS_FOREST',
  'OOT_COMPASS_FIRE',
  'OOT_COMPASS_WATER',
  'OOT_COMPASS_SPIRIT',
  'OOT_COMPASS_SHADOW',
  'OOT_COMPASS_BOTW',
  'OOT_COMPASS_IC',
  'MM_COMPASS_WF',
  'MM_COMPASS_SH',
  'MM_COMPASS_GB',
  'MM_COMPASS_ST',
]);

const ITEMS_JUNK = new Set<string>([
  /* 'OOT_RUPEE_GREEN', Not junk to prevent it from being removed */
  'OOT_RUPEE_BLUE',
  'OOT_RUPEE_RED',
  'OOT_RECOVERY_HEART',
  'OOT_ARROWS_5',
  'OOT_ARROWS_10',
  'OOT_ARROWS_30',
  'OOT_BOMB',
  'OOT_BOMBS_5',
  'OOT_BOMBS_10',
  'OOT_BOMBS_20',
  'OOT_BOMBS_30',
  'OOT_NUTS_5',
  'OOT_NUTS_5_ALT',
  'OOT_NUTS_10',
  'OOT_STICK',
  'OOT_STICKS_5',
  'OOT_STICKS_10',
  'MM_RUPEE_GREEN',
  'MM_RUPEE_BLUE',
  'MM_RUPEE_RED',
  'MM_RECOVERY_HEART',
  'MM_ARROWS_10',
  'MM_ARROWS_30',
  'MM_ARROWS_40',
  'MM_BOMB',
  'MM_BOMBS_5',
  'MM_BOMBS_10',
  'MM_BOMBS_20',
  'MM_BOMBS_30',
  'MM_NUT',
  'MM_NUTS_5',
  'MM_NUTS_10',
  'MM_STICK',
  'SHARED_ARROWS_5',
  'SHARED_ARROWS_10',
  'SHARED_ARROWS_30',
  'SHARED_ARROWS_40',
  'SHARED_BOMB',
  'SHARED_BOMBS_5',
  'SHARED_BOMBS_10',
  'SHARED_BOMBS_20',
  'SHARED_BOMBS_30',
  'SHARED_NUT',
  'SHARED_NUTS_5',
  'SHARED_NUTS_10',
  'SHARED_STICK',
  'SHARED_STICKS_5',
  'SHARED_STICKS_10',
  'SHARED_RUPEE_GREEN',
  'SHARED_RUPEE_BLUE',
  'SHARED_RUPEE_RED',
  'SHARED_RECOVERY_HEART',
]);

const CONSUMABLES = new Set<string>([
  'OOT_RECOVERY_HEART',
  'OOT_STICK',
  'OOT_STICKS_5',
  'OOT_STICKS_10',
  'OOT_NUTS_5',
  'OOT_NUTS_10',
  'OOT_BOMB',
  'OOT_BOMBS_5',
  'OOT_BOMBS_10',
  'OOT_BOMBS_20',
  'OOT_BOMBS_30',
  'OOT_ARROWS_5',
  'OOT_ARROWS_10',
  'OOT_ARROWS_30',
  'OOT_DEKU_SEEDS_5',
  'OOT_DEKU_SEEDS_30',
  'OOT_BOMBCHU_5',
  'OOT_BOMBCHU_10',
  'OOT_BOMBCHU_20',
  'OOT_SHIELD_DEKU',
  'OOT_SHIELD_HYLIAN',
  'OOT_MILK',
  'OOT_POTION_RED',
  'OOT_POTION_GREEN',
  'OOT_POTION_BLUE',
  'OOT_FAIRY',
  'OOT_FISH',
  'OOT_BUG',
  'OOT_BLUE_FIRE',
  'OOT_POE',
  'MM_RECOVERY_HEART',
  'MM_STICK',
  'MM_NUT',
  'MM_NUTS_5',
  'MM_NUTS_10',
  'MM_BOMB',
  'MM_BOMBS_5',
  'MM_BOMBS_10',
  'MM_BOMBS_20',
  'MM_BOMBS_30',
  'MM_BOMBCHU',
  'MM_BOMBCHU_5',
  'MM_BOMBCHU_10',
  'MM_BOMBCHU_20',
  'MM_ARROWS_10',
  'MM_ARROWS_30',
  'MM_ARROWS_40',
  'MM_SHIELD_HERO',
  'MM_MILK',
  'MM_CHATEAU',
  'MM_FISH',
  'MM_BUGS',
  'MM_FAIRY',
  'MM_POTION_RED',
  'MM_POTION_GREEN',
  'MM_POTION_BLUE',
  'SHARED_RECOVERY_HEART',
  'SHARED_STICK',
  'SHARED_STICKS_5',
  'SHARED_STICKS_10',
  'SHARED_NUT',
  'SHARED_NUTS_5',
  'SHARED_NUTS_10',
  'SHARED_BOMB',
  'SHARED_BOMBS_5',
  'SHARED_BOMBS_10',
  'SHARED_BOMBS_20',
  'SHARED_BOMBS_30',
  'SHARED_ARROWS_5',
  'SHARED_ARROWS_10',
  'SHARED_ARROWS_30',
  'SHARED_ARROWS_40',
  'SHARED_BOMBCHU',
  'SHARED_BOMBCHU_5',
  'SHARED_BOMBCHU_10',
  'SHARED_BOMBCHU_20',
]);

const CRITICAL_RENEWABLE_ITEMS = new Set<string>([
  'MM_SHIELD_HERO',
  'OOT_SHIELD_DEKU',
  'OOT_SHIELD_HYLIAN',
]);

export const isCompass = (item: string) => ITEMS_COMPASSES.has(item);
export const isMap = (item: string) => ITEMS_MAPS.has(item);
export const isMapCompass = (item: string) => isMap(item) || isCompass(item);
export const isSong = (item: string) => !!item.match(/^(OOT|MM|SHARED)_SONG_/);
export const isSmallKey = (item: string) => !!item.match(/^(OOT|MM)_SMALL_KEY_/);
export const isSmallKeyHideout = (item: string) => item === 'OOT_SMALL_KEY_GF';
export const isSmallKeyRegular = (item: string) => isSmallKey(item) && !isSmallKeyHideout(item);
export const isGanonBossKey = (item: string) => item === 'OOT_BOSS_KEY_GANON';
export const isBossKey = (item: string) => !!item.match(/^(OOT|MM)_BOSS_KEY_/);
export const isRegularBossKey = (item: string) => isBossKey(item) && !isGanonBossKey(item);
export const isStrayFairy = (item: string) => !!item.match(/^(OOT|MM)_STRAY_FAIRY_/);
export const isTownStrayFairy = (item: string) => item === 'MM_STRAY_FAIRY_TOWN';
export const isDungeonStrayFairy = (item: string) => isStrayFairy(item) && !isTownStrayFairy(item);
export const isKey = (item: string) => isSmallKey(item) || isBossKey(item);
export const isDungeonItem = (item: string) => isMapCompass(item) || isKey(item) || isStrayFairy(item);
export const isDungeonReward = (item: string) => DUNGEON_REWARDS.has(item);
export const isItemMajor = (item: string) => ITEMS_REQUIRED.has(item);
export const isGoldToken = (item: string) => !!item.match(/^OOT_GS_TOKEN/);
export const isHouseToken = (item: string) => !!item.match(/^MM_GS_TOKEN/);
export const isToken = (item: string) => isGoldToken(item) || isHouseToken(item);
export const isJunk = (item: string) => ITEMS_JUNK.has(item);
export const isMasterSword = (item: string) => item === 'OOT_SWORD_MASTER';
export const isGerudoCard = (item: string) => item === 'OOT_GERUDO_CARD';
export const isItemImportant = (item: string) => isItemMajor(item) || isDungeonReward(item) || isToken(item) || isStrayFairy(item) || isKey(item) || isItemConsumable(item);
export const isItemConsumable = (item: string) => CONSUMABLES.has(item);
export const isRupees = (item: string) => !!item.match(/^(OOT|MM|SHARED)_RUPEE_/);
export const isItemUnlimitedStarting = (item: string) => isRupees(item) || isItemConsumable(item);
export const isItemCriticalRenewable = (item: string) => CRITICAL_RENEWABLE_ITEMS.has(item);

export const itemsArray = (items: Items) => {
  const arr: string[] = [];
  for (const item in items) {
    for (let i = 0; i < items[item]; i++) {
      arr.push(item);
    }
  }
  return arr;
};

export const addItem = (items: Items, item: string) => {
  items[item] = (items[item] || 0) + 1;
};

export const removeItem = (items: Items, item: string) => {
  if (items[item] === undefined)
    return;
  items[item] -= 1;
  if (items[item] === 0) {
    delete items[item];
  }
};

export const combinedItems = (items: Items, other: Items) => {
  const combined: Items = {};
  for (const item in items) {
    combined[item] = items[item];
  }
  for (const item in other) {
    combined[item] = (combined[item] || 0) + other[item];
  }
  return combined;
};
