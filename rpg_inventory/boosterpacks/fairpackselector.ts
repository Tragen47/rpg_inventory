import Item from "../item";
import { Rarity } from "../properties/rarity";
import { selectItemsByRarity, selectRandomItems } from "./itemselector";
import { getRandomTypes } from "./typeselector";
import { ITEMS_COUNT } from "./boosterpacktypes";

export default class FairpackSelector {
    private subitems: Item[];
    private openCounter = 0;
    private static selectors = new Array<FairpackSelector>(Math.floor(Object.keys(Rarity).length / 2));

    private constructor() {}

    static fairSelect(rarity: Rarity) {
        if (!FairpackSelector.selectors[rarity]) // Singleton pattern
            FairpackSelector.selectors[rarity] = new FairpackSelector();

        // Initialize counter for opened boosterpacks with a particular rarity
        if (FairpackSelector.selectors[rarity].openCounter === 0)
            FairpackSelector.selectors[rarity].subitems = selectItemsByRarity(rarity);

        ++FairpackSelector.selectors[rarity].openCounter;
        let items = selectRandomItems(getRandomTypes(), rarity);

        // Find all items of the same rarity left
        FairpackSelector.selectors[rarity].subitems =
            FairpackSelector.selectors[rarity].subitems.filter(item => !items.includes(item));

        // It is needed to have at least one item of X rarity once every 3 times, and it must be unique
        if (FairpackSelector.selectors[rarity].openCounter % 3 === 0 && FairpackSelector.selectors[rarity].subitems.length > 8 - FairpackSelector.selectors[rarity].openCounter / 3)
            items[ITEMS_COUNT - 1] = FairpackSelector.selectors[rarity].subitems.pop();

        if (FairpackSelector.selectors[rarity].openCounter >= 24)
            FairpackSelector.selectors[rarity].openCounter = 0;
        return items;
    }
}