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
const type_1 = require("../properties/type");
const boosterpacktypes_1 = require("../boosterpacks/boosterpacktypes");
const _chai = require("chai");
_chai.should();
_chai.expect;
let findNonuniqueValues = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
let ConsistentBoosterpackTest = class ConsistentBoosterpackTest {
    before() {
        this.boosterpack = new boosterpack_1.default(boosterpacktypes_1.BoosterpackType.CONSISTENT);
    }
    'Consistent boosterpack returns 5 items'() {
        for (let i = 1; i < Math.floor(Object.keys(rarity_1.Rarity).length / 2); ++i)
            this.boosterpack.openBoosterpack(i).should.have.length(5);
    }
    "Consistent boosterpack doesn't have more than 2 items of the same type"() {
        for (let i = 1; i < Math.floor(Object.keys(rarity_1.Rarity).length / 2); ++i)
            for (let j = 0; j < Math.floor(Object.keys(type_1.Type).length / 2); ++j)
                findNonuniqueValues(this.boosterpack.openBoosterpack(i)).filter(item => item.type === j).length.should.not.be.greaterThan(2);
    }
};
__decorate([
    mocha_1.test
], ConsistentBoosterpackTest.prototype, "Consistent boosterpack returns 5 items", null);
__decorate([
    mocha_1.test
], ConsistentBoosterpackTest.prototype, "Consistent boosterpack doesn't have more than 2 items of the same type", null);
ConsistentBoosterpackTest = __decorate([
    mocha_1.suite
], ConsistentBoosterpackTest);
//# sourceMappingURL=boosterpacks.consistent.unit.test.js.map