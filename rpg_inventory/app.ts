import { BoosterpackType } from "./boosterpacks/boosterpacktypes";
import { getBoosterpacks,  } from "./boosterpacks/boosterpack";
import Inventory from "./player/inventory";
import { Rarity } from "./properties/rarity";

let playerInventory = new Inventory();

let boosterpacks = getBoosterpacks(24, BoosterpackType.FAIR);

try {
    for (let boosterpack of boosterpacks)
        for (let item of boosterpack.openBoosterpack(Rarity.UNCOMMON))
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