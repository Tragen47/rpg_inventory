"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoosterpacks = void 0;
const rarity_1 = require("../properties/rarity");
const boosterpacktypes_1 = require("./boosterpacktypes");
const fairpackselector_1 = require("./fairpackselector");
const itemselector_1 = require("./itemselector");
const typeselector_1 = require("./typeselector");
class Boosterpack {
    constructor(type) {
        this.type = type;
    }
    openBoosterpack(rarity) {
        if (rarity === rarity_1.Rarity.COMMON)
            return null;
        switch (this.type) {
            case boosterpacktypes_1.BoosterpackType.DEFAULT:
                return itemselector_1.selectRandomItems(typeselector_1.getRandomTypes(), rarity);
            case boosterpacktypes_1.BoosterpackType.CONSISTENT:
                return itemselector_1.selectRandomItems(typeselector_1.getRandomDistinctTypes(), rarity);
            case boosterpacktypes_1.BoosterpackType.FAIR:
                return fairpackselector_1.default.fairSelect(rarity);
        }
    }
}
exports.default = Boosterpack;
function getBoosterpacks(count, type) {
    return new Array(count).fill(new Boosterpack(type));
}
exports.getBoosterpacks = getBoosterpacks;
//# sourceMappingURL=boosterpack.js.map