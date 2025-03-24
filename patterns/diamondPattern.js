function drawDiamond(n) {
  let str = "";

  // Upper half of the diamond
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      str += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  // Lower half of the diamond
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      str += "*";
    }
    str += "\n";
  }

  console.log(str);
}

// Test the function
drawDiamond(5);
