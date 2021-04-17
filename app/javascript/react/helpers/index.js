/* eslint-disable no-extend-native, func-names, space-before-function-paren */
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
