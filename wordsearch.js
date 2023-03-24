const wordSearch = function(letters, word) {

  // Checks empty array, 1st priority
  if (letters.length === 0) {
    return false;
  }

  // Horizontal search, 2nd priority
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Vertical search, 3rd priority
  const vertMatrix = transpose(letters);
  const vertJoin = vertMatrix.map((ls) => ls.join(""));
  for (const l of vertJoin) {
    if (l.includes(word)) return true;
  }

  // Diagonal search first half of array, 4th priority
  const diagJoinLeft = transposeLeft(letters).map((ls) => ls.join(""));
  for (const l of diagJoinLeft) {
    if (l.includes(word)) return true;
  }

  // Diagonal search second half of array, 5th priority
  const diagJoinRight = transposeRight(letters).map((ls) => ls.join(""));
  for (const l of diagJoinRight) {
    if (l.includes(word)) return true;
  }
    
  // Horizontal backwards search, 6th priority
  const wordReverse = word.split("").reverse().join("");
  const horizontalJoinRev = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoinRev) {
    if (l.includes(wordReverse)) return true;
  }

  // Vertical backwards search, 7th priority
  const vertJoinRev = vertMatrix.map((ls) => ls.join(""));
  for (const l of vertJoinRev) {
    if (l.includes(wordReverse)) return true;
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

// Tranponse top half (right side) of matrix
const transposeRight = function(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i].push(matrix[j][j - i]);
    }
  }
  return newMatrix;
};

// Tranpose bottom half (left side) of matrix
const transposeLeft = function(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i].push(matrix[j][j + i]);
    }
  }
  return newMatrix;
};

module.exports = { wordSearch };
