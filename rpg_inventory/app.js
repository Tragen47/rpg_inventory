"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boosterpacktypes_1 = require("./boosterpacks/boosterpacktypes");
const boosterpack_1 = require("./boosterpacks/boosterpack");
const inventory_1 = require("./player/inventory");
const rarity_1 = require("./properties/rarity");
let playerInventory = new inventory_1.default();
let boosterpacks = boosterpack_1.getBoosterpacks(24, boosterpacktypes_1.BoosterpackType.FAIR);
try {
    for (let boosterpack of boosterpacks)
        for (let item of boosterpack.openBoosterpack(rarity_1.Rarity.UNCOMMON))
            playerInventory.addItem(item);
}
catch (e) {
    console.log(e);
}
console.log(playerInventory.getItems());
console.log('Press any key to exit');
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
//# sourceMappingURL=app.js.map