"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectItemsByRarity = exports.selectRandomItems = void 0;
const rarity_1 = require("../properties/rarity");
const database_generator_1 = require("../database_generator");
const crypto_1 = require("crypto");
const boosterpacktypes_1 = require("./boosterpacktypes");
function increaseRarityWithProbability(rarity) {
    for (let i = 1; i < Math.floor(Object.keys(rarity_1.Rarity).length / 2) - rarity; ++i)
        if (!crypto_1.randomInt(Math.pow(10, i)))
            return (rarity += i);
    return rarity;
}
function selectRandomItem(type, rarity) {
    let items = database_generator_1.ItemDatabase.getItemDatabase().filter(item => item.type === type && item.rarity === rarity);
    if (items.length === 0)
        return null;
    return items[crypto_1.randomInt(items.length)];
}
function selectRandomItems(types, rarity) {
    let items = [];
    for (let i = 0; i < boosterpacktypes_1.ITEMS_COUNT_WITH_DECREASED_RARITY; ++i)
        items.push(selectRandomItem(types[i], increaseRarityWithProbability(rarity - 1)));
    for (let i = boosterpacktypes_1.ITEMS_COUNT_WITH_DECREASED_RARITY; i < boosterpacktypes_1.ITEMS_COUNT; ++i)
        items.push(selectRandomItem(types[i], increaseRarityWithProbability(rarity)));
    return items;
}
exports.selectRandomItems = selectRandomItems;
function selectItemsByRarity(rarity) {
    return database_generator_1.ItemDatabase.getItemDatabase().filter(item => item.rarity === rarity);
}
exports.selectItemsByRarity = selectItemsByRarity;
//# sourceMappingURL=itemselector.js.map