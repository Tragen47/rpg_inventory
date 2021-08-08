import { Type } from "../properties/type";
import { randomInt } from "crypto";
import { ITEMS_COUNT } from "./boosterpacktypes";

export function getRandomTypes(): Type[] {
    return Array.from({ length: ITEMS_COUNT }, () => randomInt(Math.floor(Object.keys(Type).length / 2)));
}

let findNonuniqueValues = (arr: any[]) => arr.filter((item, index) => arr.indexOf(item) != index);

export function getRandomDistinctTypes(): Type[] { // Get not more than 2 items of the same type
    let randomTypes: Type[] = [];
    while (randomTypes.length < ITEMS_COUNT) {
        let randomType = randomInt(Math.floor(Object.keys(Type).length / 2));
        if (findNonuniqueValues(randomTypes).indexOf(randomType) === -1)
            randomTypes.push(randomType);
    }
    return Array.from(randomTypes);
}