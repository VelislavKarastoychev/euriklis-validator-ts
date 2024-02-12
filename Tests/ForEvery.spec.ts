"use strict";
import validator from "../src/validator";

new validator(Array.from({ length: 100 }).map(Math.random))
  .forEvery((el) => el.isInRange(0, 1))
  .on(true, (v) => {
    const t1 = v.benchmark((m) =>
      new validator(m).forEvery((item) => item.isInRange(0, 1))
    );
    const t2 = v.benchmark((m) =>
      m.every((item: number) =>
        typeof item === "number" ? item > 0 && item < 1 : false
      )
    );
    console.table({validator: t1, conventionalJS: t2});
  })
  .describe("Tests if the forEvery method works correct.")
  .test();
