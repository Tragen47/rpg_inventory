import { Rarity } from "./properties/rarity";
import { Type } from "./properties/type";

export default class Item {
    title!: string;
    rarity!: Rarity;
    type!: Type;
}