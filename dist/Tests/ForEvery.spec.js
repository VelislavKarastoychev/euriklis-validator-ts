"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("../src/validator"));
new validator_1.default(Array.from({ length: 100 }).map(Math.random))
    .forEvery((el) => el.isInRange(0, 1))
    .on(true, (v) => {
    const t1 = v.benchmark((m) => new validator_1.default(m).forEvery((item) => item.isInRange(0, 1)));
    const t2 = v.benchmark((m) => m.every((item) => typeof item === "number" ? item > 0 && item < 1 : false));
    console.table({ validator: t1, conventionalJS: t2 });
})
    .describe("Tests if the forEvery method works correct.")
    .test();
