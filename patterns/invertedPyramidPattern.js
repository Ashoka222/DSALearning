function drawInvertedPyramid(n) {
  let str = "";

  for (let i = n; i > 0; i--) {
    // Add spaces
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    // Add stars
    for (let k = 0; k < 2 * i - 1; k++) {
      str += "*";
    }
    str += "\n";
  }

  console.log(str);
}

// Test the function
drawInvertedPyramid(5);
