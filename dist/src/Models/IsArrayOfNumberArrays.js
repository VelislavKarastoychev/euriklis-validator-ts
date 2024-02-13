"use strict";
import { IsNumberArray } from "./IsNumberArray.js";
/**
 * Checks if the "value" is an array of numeric arrays.
 *
 * @param {any | number [][]} value - the current validator instance.
 * @returns {boolean} if the "value" is an array of number arrays
 * returns true, otherwise return false.
 */
export const IsArrayOfNumberArrays = (value) => {
    const n = value.length;
    let i, j;
    for (i = 0; i < n >> 2; i++) {
        j = i << 2;
        if (!IsNumberArray(value[j]) ||
            !IsNumberArray(value[j + 1]) ||
            !IsNumberArray(value[j + 2]) ||
            !IsNumberArray(value[j + 3])) {
            return false;
        }
    }
    for (j = i << 2; j < n; j++) {
        if (!IsNumberArray(value[j]))
            return false;
    }
    return true;
};
