"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncorrectParameterInDescribe = exports.IncorrectIterationsParameterInBenchmark = exports.IncorrectFunctionArgumentInForAny = exports.IncorrectFunctionArgumentInForAll = exports.IncorrectDescriptionProperty = exports.IncorrectArgumentInIsInstanceof = exports.IncorrectArgumentsInIsInRange = exports.IncorrectArgumentsInIsInClosedRange = exports.IncorrectArgumentsInHasLengthInRange = exports.IncorrectArgumentsInHasLengthInClosedRange = exports.IncorrectArgumentInStringContainsExpression = exports.IncorrectArgumentInIsNotEqual = exports.IncorrectArgumentInIsLesserThan = exports.IncorrectArgumentInIsEqualOrLesserThan = exports.IncorrectArgumentInIsEqual = exports.IncorrectArgumentInIsEqualOrBiggerThan = exports.IncorrectArgumentInIsEmpty = exports.IncorrectArgumentInIsBiggerThan = exports.IncorrectArgumentInIsArrayAndForAny = exports.IncorrectArgumentInInterface = exports.IncorrectArgumentInHasLengthLesserThan = exports.IncorrectArgumentInHasLengthEqualsOrLesserThan = exports.IncorrectArgumentInHasLengthEqualsOrBiggerThan = exports.IncorrectArgumentInBindMethod = exports.IncorrectArgumentInHasLength = exports.IncorrectArgumentInHasLengthBiggerThan = exports.InappropriateValueInIsSame = exports.IllegalUsageOfArgumentInIsArrayAndForEvery = exports.IllegalTypeInForAny = exports.IllegalParametersInIsArrayOfNumbersInRange = exports.IllegalParametersInIsArrayOfNumbersInClosedRange = exports.IllegalParametersInIsArrayOfIntegersInRange = exports.IllegalParametersInIsArrayOfIntegersInClosedRange = void 0;
const texts = __importStar(require("./texts.js"));
const executeError = (message) => {
    const error = new Error();
    error.name = texts.ErrorMessage;
    error.message = message;
    throw error;
};
const IllegalParametersInIsArrayOfIntegersInClosedRange = () => executeError(texts.IllegalParametersInIsArrayOfIntegersInClosedRangeTxt);
exports.IllegalParametersInIsArrayOfIntegersInClosedRange = IllegalParametersInIsArrayOfIntegersInClosedRange;
const IllegalParametersInIsArrayOfIntegersInRange = () => executeError(texts.IllegalParametersInIsArrayOfIntegersInRangeTxt);
exports.IllegalParametersInIsArrayOfIntegersInRange = IllegalParametersInIsArrayOfIntegersInRange;
const IllegalParametersInIsArrayOfNumbersInClosedRange = () => executeError(texts.IllegalParametersInIsArrayOfNumbersInClosedRangeTxt);
exports.IllegalParametersInIsArrayOfNumbersInClosedRange = IllegalParametersInIsArrayOfNumbersInClosedRange;
const IllegalParametersInIsArrayOfNumbersInRange = () => executeError(texts.IllegalParametersInIsArrayOfNumbersInRangeTxt);
exports.IllegalParametersInIsArrayOfNumbersInRange = IllegalParametersInIsArrayOfNumbersInRange;
const IllegalTypeInForAny = () => executeError(texts.IllegalTypeInForAnyTxt(""));
exports.IllegalTypeInForAny = IllegalTypeInForAny;
const IllegalUsageOfArgumentInIsArrayAndForEvery = () => executeError(texts.IllegalUsageOfArgumentInIsArrayAndForEveryTxt);
exports.IllegalUsageOfArgumentInIsArrayAndForEvery = IllegalUsageOfArgumentInIsArrayAndForEvery;
const InappropriateValueInIsSame = () => executeError(texts.InappropriateValueInIsSameTxt);
exports.InappropriateValueInIsSame = InappropriateValueInIsSame;
const IncorrectArgumentInHasLengthBiggerThan = () => executeError(texts.IncorrectArgumentInHasLengthBiggerThanTxt);
exports.IncorrectArgumentInHasLengthBiggerThan = IncorrectArgumentInHasLengthBiggerThan;
const IncorrectArgumentInHasLength = () => executeError(texts.IncorrectArgumentInHasLengthTxt);
exports.IncorrectArgumentInHasLength = IncorrectArgumentInHasLength;
const IncorrectArgumentInBindMethod = () => executeError(texts.IncorrectArgumentInBindMethodTxt);
exports.IncorrectArgumentInBindMethod = IncorrectArgumentInBindMethod;
const IncorrectArgumentInHasLengthEqualsOrBiggerThan = () => executeError(texts.IncorrectArgumentInHasLengthEqualsOrBiggerThanTxt);
exports.IncorrectArgumentInHasLengthEqualsOrBiggerThan = IncorrectArgumentInHasLengthEqualsOrBiggerThan;
const IncorrectArgumentInHasLengthEqualsOrLesserThan = () => executeError(texts.IncorrectArgumentInHasLengthEqualsOrLesserThanTxt);
exports.IncorrectArgumentInHasLengthEqualsOrLesserThan = IncorrectArgumentInHasLengthEqualsOrLesserThan;
const IncorrectArgumentInHasLengthLesserThan = () => executeError(texts.IncorrectArgumentInHasLengthLesserThanTxt);
exports.IncorrectArgumentInHasLengthLesserThan = IncorrectArgumentInHasLengthLesserThan;
const IncorrectArgumentInInterface = () => executeError(texts.IncorrectArgumentInInterfaceTxt);
exports.IncorrectArgumentInInterface = IncorrectArgumentInInterface;
const IncorrectArgumentInIsArrayAndForAny = () => executeError(texts.IncorrectArgumentInIsArrayAndForAnyTxt);
exports.IncorrectArgumentInIsArrayAndForAny = IncorrectArgumentInIsArrayAndForAny;
const IncorrectArgumentInIsBiggerThan = () => executeError(texts.IncorrectArgumentInIsBiggerThanTxt);
exports.IncorrectArgumentInIsBiggerThan = IncorrectArgumentInIsBiggerThan;
const IncorrectArgumentInIsEmpty = () => executeError(texts.IncorrectArgumentInIsEmptyTxt);
exports.IncorrectArgumentInIsEmpty = IncorrectArgumentInIsEmpty;
const IncorrectArgumentInIsEqualOrBiggerThan = () => executeError(texts.IncorrectArgumentInIsEqualOrBiggerThanTxt);
exports.IncorrectArgumentInIsEqualOrBiggerThan = IncorrectArgumentInIsEqualOrBiggerThan;
const IncorrectArgumentInIsEqual = () => executeError(texts.IncorrectArgumentInIsEqual);
exports.IncorrectArgumentInIsEqual = IncorrectArgumentInIsEqual;
const IncorrectArgumentInIsEqualOrLesserThan = () => executeError(texts.IncorrectArgumentInIsEqualOrLesserThanTxt);
exports.IncorrectArgumentInIsEqualOrLesserThan = IncorrectArgumentInIsEqualOrLesserThan;
const IncorrectArgumentInIsLesserThan = () => executeError(texts.IncorrectArgumentInIsLesserThanTxt);
exports.IncorrectArgumentInIsLesserThan = IncorrectArgumentInIsLesserThan;
const IncorrectArgumentInIsNotEqual = () => executeError(texts.IncorrectArgumentInIsNotEqual);
exports.IncorrectArgumentInIsNotEqual = IncorrectArgumentInIsNotEqual;
const IncorrectArgumentInStringContainsExpression = () => executeError(texts.IncorrectArgumentInStringContainsExpressionTxt);
exports.IncorrectArgumentInStringContainsExpression = IncorrectArgumentInStringContainsExpression;
const IncorrectArgumentsInHasLengthInClosedRange = () => executeError(texts.IncorrectArgumentsInHasLengthInClosedRangeTxt);
exports.IncorrectArgumentsInHasLengthInClosedRange = IncorrectArgumentsInHasLengthInClosedRange;
const IncorrectArgumentsInHasLengthInRange = () => executeError(texts.IncorrectArgumentsInHasLengthInRangeTxt);
exports.IncorrectArgumentsInHasLengthInRange = IncorrectArgumentsInHasLengthInRange;
const IncorrectArgumentsInIsInClosedRange = () => executeError(texts.IncorrectArgumentsInIsInClosedRangeTxt);
exports.IncorrectArgumentsInIsInClosedRange = IncorrectArgumentsInIsInClosedRange;
const IncorrectArgumentsInIsInRange = () => executeError(texts.IncorrectArgumentsInIsInRangeTxt);
exports.IncorrectArgumentsInIsInRange = IncorrectArgumentsInIsInRange;
const IncorrectArgumentInIsInstanceof = () => executeError(texts.IncorrectArgumentInIsInstanceofTxt);
exports.IncorrectArgumentInIsInstanceof = IncorrectArgumentInIsInstanceof;
const IncorrectDescriptionProperty = () => executeError(texts.IncorrectDescriptionPropertyTxt);
exports.IncorrectDescriptionProperty = IncorrectDescriptionProperty;
const IncorrectFunctionArgumentInForAll = () => executeError(texts.IncorrectFunctionArgumentInForAllTxt);
exports.IncorrectFunctionArgumentInForAll = IncorrectFunctionArgumentInForAll;
const IncorrectFunctionArgumentInForAny = () => executeError(texts.IncorrectFunctionArgumentInForAnyTxt);
exports.IncorrectFunctionArgumentInForAny = IncorrectFunctionArgumentInForAny;
const IncorrectIterationsParameterInBenchmark = () => executeError(texts.IncorrectIterationsParameterInBenchmarkTxt);
exports.IncorrectIterationsParameterInBenchmark = IncorrectIterationsParameterInBenchmark;
const IncorrectParameterInDescribe = () => executeError(texts.IncorrectParameterInDescribeTxt);
exports.IncorrectParameterInDescribe = IncorrectParameterInDescribe;
