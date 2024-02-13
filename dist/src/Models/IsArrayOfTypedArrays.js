"use strict";
import { IsTypedArray } from "./IsTypedArray.js";
/**
 * Checks if the "value" property is an array of
 * typed arrays.
 * Utility function for the isArrayOfTypedArrays
 * method.
 *
 * @param {any | TypedArray[] | number[][]} value - The "value" property of
 * the current validator instance, which has to be
 * an array.
 * @returns {boolean} True if the value is array
 * of typed arrays and false otherwise
 */
export const IsArrayOfTypedArrays = (value) => {
    const n = value.length;
    let i, j;
    for (i = 0; i < n >> 2; i++) {
        j = i << 2;
        if (!IsTypedArray(value[j]) ||
            !IsTypedArray(value[j + 1]) ||
            !IsTypedArray(value[j + 2]) ||
            !IsTypedArray(value[j + 3]))
            return false;
    }
    for (j = i << 2; j < n; j++) {
        if (!IsTypedArray(value[j]))
            return false;
    }
    return true;
};
