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
_chai.should();
_chai.expect;
let DefaultBoosterpackTest = class DefaultBoosterpackTest {
    before() {
        this.boosterpack = new boosterpack_1.default(boosterpacktypes_1.BoosterpackType.DEFAULT);
    }
    'Default boosterpack returns 5 items'() {
        for (let i = 1; i < Math.floor(Object.keys(rarity_1.Rarity).length / 2); ++i)
            this.boosterpack.openBoosterpack(i).should.have.length(5);
    }
};
__decorate([
    mocha_1.test
], DefaultBoosterpackTest.prototype, "Default boosterpack returns 5 items", null);
DefaultBoosterpackTest = __decorate([
    mocha_1.suite
], DefaultBoosterpackTest);
//# sourceMappingURL=boosterpacks.default.unit.test.js.map