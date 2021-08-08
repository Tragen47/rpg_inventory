import Boosterpack from '../boosterpacks/boosterpack';
import { suite, test } from '@testdeck/mocha';
import { Rarity } from '../properties/rarity';
import { BoosterpackType } from '../boosterpacks/boosterpacktypes';
import * as _chai from 'chai';

_chai.should();
_chai.expect;

@suite class DefaultBoosterpackTest {
    private boosterpack: Boosterpack;

    before() {
        this.boosterpack = new Boosterpack(BoosterpackType.DEFAULT);
    }

    @test 'Default boosterpack returns 5 items'() {
        for (let i = 1; i < Math.floor(Object.keys(Rarity).length / 2); ++i)
            this.boosterpack.openBoosterpack(i).should.have.length(5);
    }
}