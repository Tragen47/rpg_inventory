import Item from "../item";
import { Type } from "../properties/type";
import { Rarity } from "../properties/rarity";
import { ItemDatabase } from "../database_generator";
import { randomInt } from "crypto";
import { ITEMS_COUNT, ITEMS_COUNT_WITH_DECREASED_RARITY } from "./boosterpacktypes";

// Increase rarity by 1 point with probability of 0.1, by 2 points with probability of 0.01, e.t.c.
function increaseRarityWithProbability(rarity: number): number {
    for (let i = 1; i < Math.floor(Object.keys(Rarity).length / 2) - rarity; ++i)
        if (!randomInt(Math.pow(10, i)))
            return (rarity += i);
    return rarity;
}

function selectRandomItem(type: Type, rarity: Rarity): Item {
    let items: Item[] = ItemDatabase.getItemDatabase().filter(item => item.type === type && item.rarity === rarity);
    if (items.length === 0)
        return null;
    return items[randomInt(items.length)];
}

export function selectRandomItems(types: Type[], rarity: Rarity): Item[] {
    let items = [];
    for (let i = 0; i < ITEMS_COUNT_WITH_DECREASED_RARITY; ++i)
        items.push(selectRandomItem(types[i], increaseRarityWithProbability(rarity - 1)));
    for (let i = ITEMS_COUNT_WITH_DECREASED_RARITY; i < ITEMS_COUNT; ++i)
        items.push(selectRandomItem(types[i], increaseRarityWithProbability(rarity)));

    return items;
}

export function selectItemsByRarity(rarity: Rarity): Item[] {
    return ItemDatabase.getItemDatabase().filter(item => item.rarity === rarity);
}