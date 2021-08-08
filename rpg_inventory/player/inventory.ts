import Item from "../item";

export default class Inventory {
    private items: Item[] = [];

    private sortItems() { // Sort items in the following order: rarity, type, title
        this.items.sort((a, b) => {
            if (a.rarity === b.rarity)
                return (a.type === b.type) ? b.title.localeCompare(a.title) : a.type - b.type;
            else
                return a.rarity - b.rarity;
        });
    }

    addItem(item: Item) {
        this.items.push(item);
        this.sortItems();
    }

    removeItem(item: Item) {
        this.items.splice(this.items.findIndex(el => el === item), 1);
        this.sortItems();
    }

    getItems() {
        return this.items;
    }
}