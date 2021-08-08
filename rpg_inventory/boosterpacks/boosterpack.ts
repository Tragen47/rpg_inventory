import Item from "../item";
import { Rarity } from "../properties/rarity";
import { BoosterpackType, ITEMS_COUNT } from "./boosterpacktypes";
import FairpackSelector from "./fairpackselector";
import { selectRandomItems, selectItemsByRarity } from "./itemselector";
import { getRandomDistinctTypes, getRandomTypes } from "./typeselector";

export default class Boosterpack {
    private type: BoosterpackType;

    constructor(type: BoosterpackType) {
        this.type = type;
    }

    openBoosterpack(rarity: Rarity): Item[] {
        if (rarity === Rarity.COMMON)
            return null;

        switch (this.type) {
            case BoosterpackType.DEFAULT:
                return selectRandomItems(getRandomTypes(), rarity);

            case BoosterpackType.CONSISTENT:
                return selectRandomItems(getRandomDistinctTypes(), rarity);

            case BoosterpackType.FAIR:
                return FairpackSelector.fairSelect(rarity);
        }
    }
}

export function getBoosterpacks(count: number, type: BoosterpackType): Boosterpack[] {
    return new Array<Boosterpack>(count).fill(new Boosterpack(type));
}