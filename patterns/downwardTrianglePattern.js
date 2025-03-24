function drawDownwardTriangle(n) {
  let str = "";

  for (let i = n; i > 0; i--) {
    // Add spaces
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    // Add stars
    for (let k = 0; k < i; k++) {
      str += "* ";
    }
    str += "\n";
  }

  console.log(str);
}

// Test the function
drawDownwardTriangle(5);
