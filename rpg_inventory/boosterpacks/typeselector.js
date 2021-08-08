"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomDistinctTypes = exports.getRandomTypes = void 0;
const type_1 = require("../properties/type");
const crypto_1 = require("crypto");
const boosterpacktypes_1 = require("./boosterpacktypes");
function getRandomTypes() {
    return Array.from({ length: boosterpacktypes_1.ITEMS_COUNT }, () => crypto_1.randomInt(Math.floor(Object.keys(type_1.Type).length / 2)));
}
exports.getRandomTypes = getRandomTypes;
let findNonuniqueValues = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
function getRandomDistinctTypes() {
    let randomTypes = [];
    while (randomTypes.length < boosterpacktypes_1.ITEMS_COUNT) {
        let randomType = crypto_1.randomInt(Math.floor(Object.keys(type_1.Type).length / 2));
        if (findNonuniqueValues(randomTypes).indexOf(randomType) === -1)
            randomTypes.push(randomType);
    }
    return Array.from(randomTypes);
}
exports.getRandomDistinctTypes = getRandomDistinctTypes;
//# sourceMappingURL=typeselector.js.map