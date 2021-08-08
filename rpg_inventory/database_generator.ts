import Item from "./item";
import { Rarity } from "./properties/rarity";
import { Type } from "./properties/type";

var titles: string[] = ["wooden", "stone", "iron", "golden", "diamond", "emerald", "obsidian", "bedrock"];

export class ItemDatabase {
    private static instance: ItemDatabase;
    private static itemDatabase: Item[];

    private constructor() {
        let fs = require('fs');
        if (!fs.existsSync("item_database.json")) // If item database is not created, then generate it
            this.generateDatabase();
        else {
            ItemDatabase.itemDatabase = JSON.parse(fs.readFileSync("item_database.json", 'utf-8'));
            if (ItemDatabase.itemDatabase === undefined) { // If item database file exists, but is empty
                this.generateDatabase()
                ItemDatabase.itemDatabase = JSON.parse(fs.readFileSync("item_database.json", 'utf-8'));
            }
        }
    }

    private generateDatabase() {
        var items: Item[] = [];
        for (let i = 0; i < titles.length; ++i)
            for (let j = 0; j < Math.floor(Object.keys(Type).length / 2); ++j) {
                items.push({
                    title: titles[i] + " " + Type[j].toLowerCase(),
                    type: j as Type,
                    rarity: Math.floor(i / 2) as Rarity
                });
            }
        require('fs').writeFileSync("item_database.json", JSON.stringify(items));
    }

    static getItemDatabase(): Item[] { // Singleton pattern
        if (!ItemDatabase.instance)
            ItemDatabase.instance = new ItemDatabase();
        return ItemDatabase.itemDatabase;
    }
}