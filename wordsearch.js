const wordSearch = function(letters, word, vertChoice = false, reverseChoice = false) {
  let matrix = letters;
  let wordChoice = word;

  if (reverseChoice) {
    wordChoice = word.split("").reverse().join("");
  }
    
  if (vertChoice) {
    matrix = transpose(letters);
  }
    
  const horizontalJoin = matrix.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(wordChoice)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  const newMatrix = [];
  //loop through the length of the first array
  for (let i = 0; i < matrix[0].length; i++) {
    //push to new array to set length(rows) based on input columns
    newMatrix.push([]);
    //loop through items of each nested array
    for (let j = 0; j < matrix.length; j++) {
      //push column values into nested arrays (rows)
      newMatrix[i].push(matrix[j][i]);
    }
  }
  return newMatrix;
};

module.exports = { wordSearch };
