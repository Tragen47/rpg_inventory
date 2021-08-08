import Boosterpack from '../boosterpacks/boosterpack';
import { suite, test } from '@testdeck/mocha';
import Item from '../item';
import { Rarity } from '../properties/rarity';
import { BoosterpackType } from '../boosterpacks/boosterpacktypes';
import * as _chai from 'chai';
import { ItemDatabase } from '../database_generator';

_chai.should();
_chai.expect;

@suite class FairBoosterpackTest {
    private boosterpack: Boosterpack;
    private boosterpacks: Boosterpack[];

    before() {
        this.boosterpack = new Boosterpack(BoosterpackType.FAIR);
        this.boosterpacks = new Array<Boosterpack>(24).fill(new Boosterpack(BoosterpackType.FAIR));
    }

    @test 'Fair boosterpack returns 5 items'() {
        for (let i = 1; i < Math.floor(Object.keys(Rarity).length / 2); ++i)
            this.boosterpack.openBoosterpack(i).should.have.length(5);
    }

    @test 'Fair boosterpacks return all items of the same rarity not more than in 24 times'() {
        for (let i = 1; i < Math.floor(Object.keys(Rarity).length / 2); ++i) {
            let itemsOfRarity = ItemDatabase.getItemDatabase().filter(item => item.rarity === i);

            let returnedItems: Item[] = [];
            for (let j = 0; j < 24; ++j)
                returnedItems.push(...this.boosterpacks[j].openBoosterpack(i));

            returnedItems.some(item => itemsOfRarity.indexOf(item) >= 0).should.be.true;
        }
    }
}