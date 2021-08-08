"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    constructor() {
        this.items = [];
    }
    sortItems() {
        this.items.sort((a, b) => {
            if (a.rarity === b.rarity)
                return (a.type === b.type) ? b.title.localeCompare(a.title) : a.type - b.type;
            else
                return a.rarity - b.rarity;
        });
    }
    addItem(item) {
        this.items.push(item);
        this.sortItems();
    }
    removeItem(item) {
        this.items.splice(this.items.findIndex(el => el === item), 1);
        this.sortItems();
    }
    getItems() {
        return this.items;
    }
}
exports.default = Inventory;
//# sourceMappingURL=inventory.js.map