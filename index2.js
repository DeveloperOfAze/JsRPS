function noBoringZeros(n) {
  n = String(n).split("");
  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] == "0") {
      n.splice(i, 1);
    } else if (n[i] !== "0") {
      break;
    }
  }
  n = n.join("");
  return Number(n);
}