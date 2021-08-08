"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rarity_1 = require("../properties/rarity");
const itemselector_1 = require("./itemselector");
const typeselector_1 = require("./typeselector");
const boosterpacktypes_1 = require("./boosterpacktypes");
class FairpackSelector {
    constructor() {
        this.openCounter = 0;
    }
    static fairSelect(rarity) {
        if (!FairpackSelector.selectors[rarity])
            FairpackSelector.selectors[rarity] = new FairpackSelector();
        if (FairpackSelector.selectors[rarity].openCounter === 0)
            FairpackSelector.selectors[rarity].subitems = itemselector_1.selectItemsByRarity(rarity);
        ++FairpackSelector.selectors[rarity].openCounter;
        let items = itemselector_1.selectRandomItems(typeselector_1.getRandomTypes(), rarity);
        FairpackSelector.selectors[rarity].subitems =
            FairpackSelector.selectors[rarity].subitems.filter(item => !items.includes(item));
        if (FairpackSelector.selectors[rarity].openCounter % 3 === 0 && FairpackSelector.selectors[rarity].subitems.length > 8 - FairpackSelector.selectors[rarity].openCounter / 3)
            items[boosterpacktypes_1.ITEMS_COUNT - 1] = FairpackSelector.selectors[rarity].subitems.pop();
        if (FairpackSelector.selectors[rarity].openCounter >= 24)
            FairpackSelector.selectors[rarity].openCounter = 0;
        return items;
    }
}
exports.default = FairpackSelector;
FairpackSelector.selectors = new Array(Math.floor(Object.keys(rarity_1.Rarity).length / 2));
//# sourceMappingURL=fairpackselector.js.map