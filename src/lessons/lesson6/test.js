"use strict";
exports.__esModule = true;
var TestElement = /** @class */ (function () {
    function TestElement(id) {
        this.id = id;
    }
    TestElement.prototype.sayName = function () {
        console.log(this.id);
    };
    return TestElement;
}());
console.log(TestElement);
