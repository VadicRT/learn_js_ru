"use strict";
/**
 * Calculator - function-constructor example
 */
function Calculator () {
     this.read = function() {
        this.a = +prompt('a?','');
        this.b = +prompt('b?','');
    };
    this.mul = function() {
        return this.a * this.b;
    };
    this.sum = function() {
      return this.a + this.b;
    }
}
