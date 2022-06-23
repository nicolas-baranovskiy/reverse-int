module.exports = function reverse (n) {
  let newNumber = 0;
  let x = Math.abs(n);
  while (x > 0) {
    newNumber = (newNumber*10) + (x % 10);
    x = Math.floor(x / 10);
  }
  return newNumber;
}
