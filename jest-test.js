const { expect } = require("@jest/globals");
const Calculator = require("./tech.js");

test("An empty string returns zero ", () => {
  expect(new Calculator.Calculator("").value()).toBe(0);
});

test("A single number returns the value ", () => {
  expect(new Calculator.Calculator(3).value()).toBe(3);
});

test("Two numbers, comma delimited, returns the sum ", () => {
  expect(new Calculator.Calculator("5, 6").value()).toBe(11);
});

test("Two numbers, newline delimited, returns the sum", () => {
  expect(new Calculator.Calculator("2\n4").value()).toBe(6);
});

test("Three numbers, delimited either way, returns the sum COMMA", () => {
  expect(new Calculator.Calculator("2, 3, 4").value()).toBe(9);
});
test("Three numbers, delimited either way, returns the sum NEW LINE", () => {
  expect(new Calculator.Calculator("7, 8, 9").value()).toBe(24);
});

test("Negative numbers throw an exception", () => {
  expect(() => {new Calculator.Calculator("-2").value()}).toThrow(Error);
});

test("Numbers greater than 1000 are ignored", () => {
  expect(new Calculator.Calculator("1001").value()).toBe(null);
});


// -------------------------------------------------------------------


class Calculator {
  constructor(input) {
    this.input = input;
  }

  value = () => {
    if (!this.input) {
      return 0;
    } else if (this.input > 1000) {
      return null;
    } else if (this.input.toString().length == 1 && parseInt(this.input) >= 0) {
      return this.input;
    } else if (this.input.includes(",") && this.input.split(",").length == 2) {
      const numArray = this.input.split(",");
      return parseInt(numArray[0]) + parseInt(numArray[1]);
    } else if (
      this.input.includes("\n") &&
      this.input.split("\n").length == 2
    ) {
      const numArray = this.input.split("\n");
      return parseInt(numArray[0]) + parseInt(numArray[1]);
    } else if (
      (this.input.includes(",") && this.input.split(",").length == 3) ||
      (this.input.includes("\n") && this.input.split("\n").length == 3)
    ) {
      if (this.input.includes(",")) {
        const numArray = this.input.split(",");
        return (
          parseInt(numArray[0]) + parseInt(numArray[1]) + parseInt(numArray[2])
        );
      } else {
        const numArray = this.input.split("\n");
        return (
          parseInt(numArray[0]) + parseInt(numArray[1]) + parseInt(numArray[2])
        );
      }
    } else if (this.input < 0) {
      throw new Error();
    } else if () {
    
    } else {
      console.log("caught at end");
    }
  };
}

module.exports = {
  Calculator,
};
