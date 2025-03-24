function drawPyramid(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    // Add spaces
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    // Add stars
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }
    str += "\n";
  }

  console.log(str);
}

// Test the function
drawPyramid(5);
