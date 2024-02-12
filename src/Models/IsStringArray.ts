"use strict";

import { Integer } from "../types";

/**
 * Checks if every element of "value" is a string array.
 * Utility function for the isStringArray method.
 *
 * @param {any | string []} value - the current validator value
 * property, which has to be a string array.
 * @returns {boolean} if every element of the value is a
 * string element, then returns true, otherwise return
 * false.
 */
export const IsStringArray = (value: any | string[]): boolean => {
  const n: Integer = value.length;
  let i: Integer, j: Integer;
  for (i = 0; i < n >> 2; i++) {
    j = i << 2;
    if (
      typeof value[j] !== "string" ||
      typeof value[j + 1] !== "string" ||
      typeof value[j + 2] !== "string" ||
      typeof value[j + 3] !== "string"
    ) {
      return false;
    }
  }

  for (j = i << 2; j < n; j++) {
    if (typeof value[j] !== "string") {
      return false;
    }
  }

  return true;
};
