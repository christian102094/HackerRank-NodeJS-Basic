function isBalanced(s) {
  const pairs = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  console.log("---", s);
  let bk = "DUMMY";
  let r = s;

  while (r != bk) {
    bk = r;
    r = r.replace(/\[\]/g, "");
    r = r.replace(/\(\)/g, "");
    r = r.replace(/\{\}/g, "");
  }
  s = r;
  console.log("afterReplacements", s);

  // Write your code here
  if (s == "") {
    return "YES";
  } else if (s.length % 2 !== 0) {
    console.log("impar");
    return "NO";
  } else if (s.length == 2) {
    console.log("2");
    return pairs[s[0]] === s[1] ? "YES" : "NO";
  } else if (s.length > 2) {
    return "NO";
  }
}
