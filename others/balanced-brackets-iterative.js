function isBalanced(s) {
  const closing = ["]", ")", "}"];
  const pairs = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  const stack = [];

  for (let el of s) {
    if (closing.includes(el)) {
      if (stack.pop() !== pairs[el]) {
        return "NO";
      }
    } else {
      stack.push(el);
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}
