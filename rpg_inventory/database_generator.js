"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDatabase = void 0;
const type_1 = require("./properties/type");
var titles = ["wooden", "stone", "iron", "golden", "diamond", "emerald", "obsidian", "bedrock"];
class ItemDatabase {
    constructor() {
        let fs = require('fs');
        if (!fs.existsSync("item_database.json"))
            this.generateDatabase();
        else {
            ItemDatabase.itemDatabase = JSON.parse(fs.readFileSync("item_database.json", 'utf-8'));
            if (ItemDatabase.itemDatabase === undefined) {
                this.generateDatabase();
                ItemDatabase.itemDatabase = JSON.parse(fs.readFileSync("item_database.json", 'utf-8'));
            }
        }
    }
    generateDatabase() {
        var items = [];
        for (let i = 0; i < titles.length; ++i)
            for (let j = 0; j < Math.floor(Object.keys(type_1.Type).length / 2); ++j) {
                items.push({
                    title: titles[i] + " " + type_1.Type[j].toLowerCase(),
                    type: j,
                    rarity: Math.floor(i / 2)
                });
            }
        require('fs').writeFileSync("item_database.json", JSON.stringify(items));
    }
    static getItemDatabase() {
        if (!ItemDatabase.instance)
            ItemDatabase.instance = new ItemDatabase();
        return ItemDatabase.itemDatabase;
    }
}
exports.ItemDatabase = ItemDatabase;
//# sourceMappingURL=database_generator.js.map