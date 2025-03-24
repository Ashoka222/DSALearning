function drawHollowSquare(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Print stars only for first row, last row, first column, or last column
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        str += "* ";
      } else {
        str += "  "; // Two spaces to maintain alignment
      }
    }
    str += "\n";
  }

  console.log(str);
}

// Test the function
drawHollowSquare(5);
