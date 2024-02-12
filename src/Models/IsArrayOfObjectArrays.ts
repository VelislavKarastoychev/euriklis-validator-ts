"use strict";
import { Integer } from "../types";
import { IsObjectArray } from "./IsObjectArray";
/**
 * Checks if the "value" is an array of object arrays.
 * Utility function for the isArrayOfObjectArrays method.
 *
 * @param {any | object [][]} value - the current validator parameter,
 * which is expected to be an array of object arrays.
 * @returns {boolean} If all elements of the "value" are
 * object arrays, then returns true, otherwise returns false.
 */
export const IsArrayOfObjectArrays = (value: any | object[][]): boolean => {
  const n: Integer = value.length;
  let i: Integer, j: Integer;
  for (i = 0; i < n >> 2; i++) {
    j = i << 2;
    if (
      !Array.isArray(value[j]) || !IsObjectArray(value[j]) ||
      !Array.isArray(value[j + 1]) || !IsObjectArray(value[j + 1]) ||
      !Array.isArray(value[j + 2]) || !IsObjectArray(value[j + 2]) ||
      !Array.isArray(value[j + 3]) || !IsObjectArray(value[j + 3])
    ) return false;
  }

  for (j = i << 2; j < n; j++) {
    if (!Array.isArray(value[j]) || !IsObjectArray(value[j])) return false;
  }

  return true;
};
