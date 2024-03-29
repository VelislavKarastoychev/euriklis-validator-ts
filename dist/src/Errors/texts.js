"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncorrectParameterInDescribeTxt = exports.IncorrectIterationsParameterInBenchmarkTxt = exports.IncorrectFunctionArgumentInForAnyTxt = exports.IncorrectFunctionArgumentInForAllTxt = exports.IncorrectArgumentInIsInstanceofTxt = exports.IncorrectDescriptionPropertyTxt = exports.IncorrectArgumentsInIsInRangeTxt = exports.IncorrectArgumentsInIsInClosedRangeTxt = exports.IncorrectArgumentsInHasLengthInRangeTxt = exports.IncorrectArgumentsInHasLengthInClosedRangeTxt = exports.IncorrectArgumentInInterfaceTxt = exports.IncorrectArgumentInStringContainsExpressionTxt = exports.IncorrectArgumentInIsLesserThanTxt = exports.IncorrectArgumentInIsBiggerThanTxt = exports.IncorrectArgumentInHasLengthLesserThanTxt = exports.IncorrectArgumentInHasLengthEqualsOrLesserThanTxt = exports.IncorrectArgumentInHasLengthEqualsOrBiggerThanTxt = exports.IncorrectArgumentInHasLengthBiggerThanTxt = exports.IncorrectArgumentInHasLengthTxt = exports.IncorrectArgumentInIsNotEqual = exports.IncorrectArgumentInIsEqualOrLesserThanTxt = exports.IncorrectArgumentInIsEqualOrBiggerThanTxt = exports.IncorrectArgumentInIsEqual = exports.IncorrectArgumentInIsEmptyTxt = exports.IncorrectArgumentInBindMethodTxt = exports.IncorrectArgumentInIsArrayAndForAnyTxt = exports.InappropriateValueInIsSameTxt = exports.IllegalUsageOfArgumentInIsArrayAndForEveryTxt = exports.IllegalTypeInForAnyTxt = exports.IllegalParametersInIsArrayOfNumbersInRangeTxt = exports.IllegalParametersInIsArrayOfNumbersInClosedRangeTxt = exports.IllegalParametersInIsArrayOfIntegersInRangeTxt = exports.IllegalParametersInIsArrayOfIntegersInClosedRangeTxt = exports.ErrorMessage = void 0;
exports.ErrorMessage = "Euriklis validator error message:";
exports.IllegalParametersInIsArrayOfIntegersInClosedRangeTxt = "Illegal parameters in the isArrayOfIntegersInClosedRange method. Note that the parameters of this method have to be numbers with the first parameter to be less than the second.";
exports.IllegalParametersInIsArrayOfIntegersInRangeTxt = "Illegal parameters in the isArrayOfIntegersInRange method. The parameters have to be integers and the first to be smaller than the second.";
exports.IllegalParametersInIsArrayOfNumbersInClosedRangeTxt = "Illegal parameters in isArrayOfNumbersInClosedRange(a, b) method. Note that the parameters of the method have to be numbers and in addition the first has to be smaller than the second.";
exports.IllegalParametersInIsArrayOfNumbersInRangeTxt = "Illegal parameters in the isArrayOfNumbersInRange() method. Note that these parameters have to be numbers and in addition the first parameter has to be less than the second.";
const IllegalTypeInForAnyTxt = (value) => `Illegal type of the this.value in the "forAny" method of euriklis validator module. The value has to be array or object type. The value of the current validator is ${typeof value} type.`;
exports.IllegalTypeInForAnyTxt = IllegalTypeInForAnyTxt;
exports.IllegalUsageOfArgumentInIsArrayAndForEveryTxt = "Illegal usage of the argument function of the method. The function has to return validator type.";
exports.InappropriateValueInIsSameTxt = "Inappropriate value property of the validator instance in the isSame method. You may use this method only if the value is a primitive type, function (async, generator, arrow or conventional function), array, typed array, object or array buffer type.";
exports.IncorrectArgumentInIsArrayAndForAnyTxt = "Error in the isArrayAndForAny(). Illegal argument in the parameter of the method.";
exports.IncorrectArgumentInBindMethodTxt = "The argument has to be validator type.";
exports.IncorrectArgumentInIsEmptyTxt = "This method can be used only for string, array and object types.";
exports.IncorrectArgumentInIsEqual = "The argument of the method isEqual is not a valid real number";
exports.IncorrectArgumentInIsEqualOrBiggerThanTxt = "Incorrect argument in the isGreaterOrEqualsTo() method. Note that this argument has to be an arbitrary number.";
exports.IncorrectArgumentInIsEqualOrLesserThanTxt = "Incorrect argument in isLessOrEqualsTo() method. Note that the parameter has to be an arbitrary number.";
exports.IncorrectArgumentInIsNotEqual = "The argument of the method has to be a valid real number.";
exports.IncorrectArgumentInHasLengthTxt = "The argument of the has length method is not integer.";
exports.IncorrectArgumentInHasLengthBiggerThanTxt = "Incorrect argument parameter in the hasLengthGreaterThan() method. Note that the parameter has to be an Integer.";
exports.IncorrectArgumentInHasLengthEqualsOrBiggerThanTxt = "Incorrect argument in the hasLengthGreaterOrEqualsTo() method of the current validator instance. Note that this parameter has to be an integer.";
exports.IncorrectArgumentInHasLengthEqualsOrLesserThanTxt = "Incorrect argument in the hasLengthLessThanOrEqualsTo() method. Note that the parameter has to be an integer.";
exports.IncorrectArgumentInHasLengthLesserThanTxt = "Incorrect argument in the hasLengthLessThan() method. Note that the parameter has to be an integer number.";
exports.IncorrectArgumentInIsBiggerThanTxt = "Incorrect argument parameter of the isGreaterThan() method. Note that this parameter has to be an arbitrary number.";
exports.IncorrectArgumentInIsLesserThanTxt = "Incorrect argument parameter of the isLessThan() method. Note that this parameter has to be an arbitrary number.";
exports.IncorrectArgumentInStringContainsExpressionTxt = 'The argument of the "is_this_string_contains_expression_k_times" method has to be string or object type.';
exports.IncorrectArgumentInInterfaceTxt = "The argument function of the interface method has to return a validator instance.";
exports.IncorrectArgumentsInHasLengthInClosedRangeTxt = "Incorrect arguments in hasLengthInClosedRange() method. Note that the both parameters have to be integers and the first parameter has to be smaller than the second.";
exports.IncorrectArgumentsInHasLengthInRangeTxt = "Incorrect arguments in hasLengthInange() method. Note that the both parameters have to be integers with the first element to be smaller than the second.";
exports.IncorrectArgumentsInIsInClosedRangeTxt = "Incorrect arguments in isInClosedrange() method. Note that both of these arguments have to be numbers with the first argument to be smaller than the second.";
exports.IncorrectArgumentsInIsInRangeTxt = "Incorrect arguments in the isInRange() method of the validator instance. Note that these parameters have to be arbitrary numbers and in addition the first has to be smaller than the second.";
exports.IncorrectDescriptionPropertyTxt = "Incorrectly defined description property. The description has to be a string or a number.";
exports.IncorrectArgumentInIsInstanceofTxt = "Incorrect parameter instance. The instance has to be InstanceType.";
exports.IncorrectFunctionArgumentInForAllTxt = "The callback argument of the forEvery method of the euriklis validator module has to be function type.";
exports.IncorrectFunctionArgumentInForAnyTxt = "The callback argument of the forAny method of the euriklis validator module has to be a function with argument a validator instance.";
exports.IncorrectIterationsParameterInBenchmarkTxt = 'Incorrect parameter iterations in the benchmark function. The "iterations" has to be a positive integer.';
exports.IncorrectParameterInDescribeTxt = "Incorrect parameter in the describe method. The message has to be a string type.";
