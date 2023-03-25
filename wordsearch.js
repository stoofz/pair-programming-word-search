const wordSearch = function(letters, word) {
  
  // Checks empty array, 1st priority
  if (letters.length === 0) {
    return false;
  }

  // Horizontal search, 2nd priority
  const horizontalJoin = letters.map((ls) => ls.join(""));
  if (findWord(horizontalJoin, word) === true) {
    return true;
  }

  // Vertical search, 3rd priority
  const vertJoin = transposeChoice(letters).map((ls) => ls.join(""));
  if (findWord(vertJoin, word) === true) {
    return true;
  }

  // Diagonal search first half of array, 4th priority
  const diagJoinLeft = transposeChoice(letters, "diaL").map((ls) => ls.join(""));
  if (findWord(diagJoinLeft, word) === true) {
    return true;
  }

  // Diagonal search second half of array, 5th priority
  const diagJoinRight = transposeChoice(letters, "diaR").map((ls) => ls.join(""));
  if (findWord(diagJoinRight, word) === true) {
    return true;
  }
  
  const wordReverse = word.split("").reverse().join("");

  // Horizontal backwards search, 6th priority
  const horizontalJoinRev = letters.map((ls) => ls.join(""));
  if (findWord(horizontalJoinRev, wordReverse) === true) {
    return true;
  }

  // Vertical backwards search, 7th priority
  const vertJoinRev = transposeChoice(letters).map((ls) => ls.join(""));
  if (findWord(vertJoinRev, wordReverse) === true) {
    return true;
  }
  
  //console.log("Nothing found");
  return false;
};


// Find word search loop
const findWord = function(arrayMatrix, word) {
  //console.log("searching for " + word);
  for (const l of arrayMatrix) {
    if (l.includes(word)) {
      //console.log("Found " + l);
      return true;
    }
  }
};


const transposeChoice = function(matrix, choice = "reg") {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      if (choice === "reg") {
        newMatrix[i].push(matrix[j][i]);
      } else if (choice === "diaR") {
        newMatrix[i].push(matrix[j][j - i]);
      } else if (choice === "diaL") {
        newMatrix[i].push(matrix[j][j + i]);
      }
    }
  }
  return newMatrix;
};

module.exports = { wordSearch };
