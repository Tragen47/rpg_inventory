"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const boosterpack_1 = require("../boosterpacks/boosterpack");
const mocha_1 = require("@testdeck/mocha");
const rarity_1 = require("../properties/rarity");
const boosterpacktypes_1 = require("../boosterpacks/boosterpacktypes");
const _chai = require("chai");
const database_generator_1 = require("../database_generator");
_chai.should();
_chai.expect;
let FairBoosterpackTest = class FairBoosterpackTest {
    before() {
        this.boosterpack = new boosterpack_1.default(boosterpacktypes_1.BoosterpackType.FAIR);
        this.boosterpacks = new Array(24).fill(new boosterpack_1.default(boosterpacktypes_1.BoosterpackType.FAIR));
    }
    'Fair boosterpack returns 5 items'() {
        for (let i = 1; i < Math.floor(Object.keys(rarity_1.Rarity).length / 2); ++i)
            this.boosterpack.openBoosterpack(i).should.have.length(5);
    }
    'Fair boosterpacks return all items of the same rarity not more than in 24 times'() {
        for (let i = 1; i < Math.floor(Object.keys(rarity_1.Rarity).length / 2); ++i) {
            let allItems = [];
            let itemsWithRarity = database_generator_1.ItemDatabase.getItemDatabase().filter(item => item.rarity === i);
            for (let j = 0; j < 24; ++j)
                allItems.push(...this.boosterpacks[j].openBoosterpack(i));
            allItems.some(item => itemsWithRarity.indexOf(item) >= 0).should.be.true;
        }
    }
};
__decorate([
    mocha_1.test
], FairBoosterpackTest.prototype, "Fair boosterpack returns 5 items", null);
__decorate([
    mocha_1.test
], FairBoosterpackTest.prototype, "Fair boosterpacks return all items of the same rarity not more than in 24 times", null);
FairBoosterpackTest = __decorate([
    mocha_1.suite
], FairBoosterpackTest);
//# sourceMappingURL=boosterpacks.fair.unit.test.js.map