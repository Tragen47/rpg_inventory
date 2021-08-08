import Boosterpack from '../boosterpacks/boosterpack';
import { suite, test } from '@testdeck/mocha';
import { Rarity } from '../properties/rarity';
import { Type } from '../properties/type';
import { BoosterpackType } from '../boosterpacks/boosterpacktypes';
import * as _chai from 'chai';

_chai.should();
_chai.expect;

let findNonuniqueValues = (arr: any[]) => arr.filter((item, index) => arr.indexOf(item) != index);

@suite class ConsistentBoosterpackTest {
    private boosterpack: Boosterpack;

    before() {
        this.boosterpack = new Boosterpack(BoosterpackType.CONSISTENT);
    }

    @test 'Consistent boosterpack returns 5 items'() {
        for (let i = 1; i < Math.floor(Object.keys(Rarity).length / 2); ++i)
            this.boosterpack.openBoosterpack(i).should.have.length(5);
    }

    @test "Consistent boosterpack doesn't have more than 2 items of the same type"() {
        for (let i = 1; i < Math.floor(Object.keys(Rarity).length / 2); ++i)
            for (let j = 0; j < Math.floor(Object.keys(Type).length / 2); ++j)
                findNonuniqueValues(this.boosterpack.openBoosterpack(i)).filter(item => item.type === j).length.should.not.be.greaterThan(2);
    }
}