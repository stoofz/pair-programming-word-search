const wordSearch = function(letters, word) {
  let matrix = letters;
  let wordChoice = word;

  // Checks empty array, 1st priority
  if (letters.length === 0) {
    return false;
  }

  // Horizontal search, 2nd priority
  const horizontalJoin = matrix.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(wordChoice)) return true;
  }

  // Vertical search, 3rd priority
  matrix = transpose(letters);
  const vertJoin = matrix.map((ls) => ls.join(""));
  for (const l of vertJoin) {
    if (l.includes(wordChoice)) return true;
  }

  // Horizontal backwards search, 4th priority
  wordChoice = word.split("").reverse().join("");
  const horizontalJoinRev = matrix.map((ls) => ls.join(""));
  for (const l of horizontalJoinRev) {
    if (l.includes(wordChoice)) return true;
  }

  // Vertical backwards search, 5th priority
  matrix = transpose(letters);
  const vertJoinRev = matrix.map((ls) => ls.join(""));
  for (const l of vertJoinRev) {
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
