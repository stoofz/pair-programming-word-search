const chai = require("chai");
const assert = chai.assert;

const { wordSearch } = require("../wordsearch.js");

const origArray = [
  ["A", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "E", "I", "N", "F", "E", "L", "D"],
  ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  ["H", "M", "J", "T", "E", "V", "R", "G"],
  ["W", "H", "C", "S", "Y", "E", "R", "L"],
  ["B", "F", "R", "E", "N", "E", "Y", "B"],
  ["U", "B", "T", "W", "A", "P", "A", "I"],
  ["O", "D", "C", "A", "K", "U", "A", "S"],
  ["E", "Z", "K", "F", "Q", "U", "A", "L"],
];

const newArray = [
  ["S", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "X", "I", "N", "F", "E", "L", "D"],
  ["E", "F", "C", "F", "Q", "U", "A", "L"],
  ["I", "M", "J", "T", "E", "V", "R", "G"],
  ["N", "H", "C", "S", "Y", "E", "R", "L"],
  ["F", "F", "R", "E", "N", "E", "Y", "B"],
  ["E", "B", "T", "W", "A", "P", "A", "I"],
  ["L", "D", "C", "A", "K", "U", "A", "S"],
  ["D", "Z", "K", "F", "Q", "U", "A", "L"],
];
const revArray = [
  ["S", "D", "C", "F", "Q", "U", "A", "L"],
  ["D", "L", "E", "F", "N", "I", "E", "S"],
  ["E", "E", "C", "F", "Q", "U", "A", "L"],
  ["I", "F", "J", "T", "E", "V", "R", "G"],
  ["N", "N", "C", "S", "Y", "E", "R", "L"],
  ["F", "I", "R", "E", "N", "E", "Y", "B"],
  ["E", "E", "T", "W", "A", "P", "A", "I"],
  ["L", "S", "C", "A", "K", "U", "A", "S"],
  ["D", "Z", "K", "F", "Q", "U", "A", "L"],
];

const revArray2 =  [
  ["S", "D", "C", "F", "Q", "U", "A", "L"],
  ["D", "L", "E", "F", "N", "T", "E", "S"],
  ["E", "E", "C", "F", "Q", "U", "A", "L"],
  ["I", "F", "J", "T", "E", "V", "R", "G"],
  ["N", "N", "C", "S", "Y", "E", "R", "L"],
  ["F", "I", "R", "E", "N", "E", "Y", "B"],
  ["E", "E", "T", "W", "A", "P", "A", "I"],
  ["L", "S", "C", "A", "K", "U", "A", "S"],
  ["D", "Z", "K", "F", "Q", "U", "A", "L"],
];

const diagArray =  [
  ["S", "D", "C", "B", "Q", "U", "A", "L"],
  ["D", "E", "E", "F", "O", "T", "E", "D"],
  ["E", "E", "C", "F", "Q", "B", "L", "L"],
  ["T", "F", "J", "T", "E", "E", "B", "G"],
  ["T", "B", "C", "S", "F", "E", "R", "Y"],
  ["B", "V", "X", "N", "N", "E", "Y", "B"],
  ["E", "L", "I", "H", "A", "P", "A", "I"],
  ["L", "E", "A", "X", "K", "U", "A", "S"],
  ["S", "Z", "K", "M", "Q", "U", "A", "L"],
];

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(origArray, "FRANK");
    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch(origArray, "SEINFELD");
    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch(newArray, "SEINFELD");
    assert.isTrue(result);
  });

  it("should return false if the word is NOT present vertically", function() {
    const result = wordSearch(newArray, "POPEYE");
    assert.isFalse(result);
  });

  it("should return false if array is empty", function() {
    const results = wordSearch([], "POPEYE");
    assert.isFalse(results);
  });

  it("should return true if word is present in reverse horizontally", function() {
    const results = wordSearch(revArray, "SEINFELD");
    assert.isTrue(results);
  });

  it("should return true if word is present in reverse vertically", function() {
    const results = wordSearch(revArray2, "SEINFELD");
    assert.isTrue(results);
  });

  it("should return false if word is NOT present in reverse vertically", function() {
    const results = wordSearch(revArray, "TOBY");
    assert.isFalse(results);
  });

  it("should return true if word is present diagonally below center row", function() {
    const results = wordSearch(diagArray, "BLAM");
    assert.isTrue(results);
  });

  it("should return true if word is present diagonally above center row", function() {
    const results = wordSearch(diagArray, "BOBBY");
    assert.isTrue(results);
  });

});
